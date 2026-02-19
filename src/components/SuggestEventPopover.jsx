import { useState, useEffect, useRef } from 'react';
import { collection, addDoc, getDocs, query, where, doc, setDoc, deleteDoc, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

function SuggestEventPopover({ decade, countryFilter, onClose }) {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(countryFilter ? 'local' : 'world');
  const [suggestions, setSuggestions] = useState([]);
  const [userVotes, setUserVotes] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const popoverRef = useRef(null);

  const user = auth.currentUser;
  const filterCountryName = countryFilter
    ? countryFilter.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim()
    : '';

  // Fetch suggestions for this decade
  const fetchSuggestions = async () => {
    try {
      const q = query(
        collection(db, 'suggestedEvents'),
        where('decade', '==', decade),
        where('status', '==', 'pending')
      );
      const snap = await getDocs(q);
      const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));

      // Sort by votes descending
      all.sort((a, b) => (b.votes || 0) - (a.votes || 0));
      setTotalCount(all.length);
      setSuggestions(all);

      // Fetch user's votes
      if (user) {
        const votesMap = {};
        for (const suggestion of all) {
          try {
            const voteRef = doc(db, 'suggestedEvents', suggestion.id, 'voters', user.uid);
            const voteSnap = await getDocs(query(collection(db, 'suggestedEvents', suggestion.id, 'voters')));
            voteSnap.docs.forEach(vd => {
              if (vd.id === user.uid) {
                votesMap[suggestion.id] = true;
              }
            });
          } catch (e) {
            // ignore
          }
        }
        setUserVotes(votesMap);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, [decade]);

  // Close when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose();
      }
    };
    // Delay adding listener to prevent instant close from the same click
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleOutside);
      document.addEventListener('touchstart', handleOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert('Please sign in to suggest events');
    if (!eventName.trim() || !description.trim()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'suggestedEvents'), {
        eventName: eventName.trim(),
        description: description.trim(),
        decade,
        type,
        country: type === 'local' ? filterCountryName : null,
        suggestedBy: user.uid,
        suggestedByName: user.displayName || user.email,
        votes: 1, // auto-upvote own suggestion
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      setEventName('');
      setDescription('');
      fetchSuggestions();
    } catch (error) {
      console.error('Error submitting suggestion:', error);
    }
    setSubmitting(false);
  };

  const handleVote = async (suggestionId, currentVotes, hasVoted) => {
    if (!user) return alert('Please sign in to vote');

    try {
      const voterRef = doc(db, 'suggestedEvents', suggestionId, 'voters', user.uid);
      const suggestionRef = doc(db, 'suggestedEvents', suggestionId);

      if (hasVoted) {
        // Remove vote
        await deleteDoc(voterRef);
        await setDoc(suggestionRef, { votes: Math.max(0, (currentVotes || 1) - 1) }, { merge: true });
        setUserVotes(prev => {
          const next = { ...prev };
          delete next[suggestionId];
          return next;
        });
      } else {
        // Add vote
        await setDoc(voterRef, { votedAt: serverTimestamp() });
        await setDoc(suggestionRef, { votes: (currentVotes || 0) + 1 }, { merge: true });
        setUserVotes(prev => ({ ...prev, [suggestionId]: true }));
      }

      // Update local state
      setSuggestions(prev =>
        prev.map(s => {
          if (s.id === suggestionId) {
            return { ...s, votes: hasVoted ? Math.max(0, (s.votes || 1) - 1) : (s.votes || 0) + 1 };
          }
          return s;
        }).sort((a, b) => (b.votes || 0) - (a.votes || 0))
      );
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const displaySuggestions = showAll ? suggestions : suggestions.slice(0, 3);
  const hiddenCount = totalCount - 3;

  return (
    <div
      ref={popoverRef}
      style={{
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: '0',
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: '16px',
        width: '340px',
        maxWidth: 'calc(100vw - 80px)',
        zIndex: 50,
      }}
    >
      {/* Submit form */}
      {user ? (
        <form onSubmit={handleSubmit} style={{ marginBottom: suggestions.length > 0 ? '14px' : '0' }}>
          <input
            type="text"
            value={eventName}
            onChange={e => setEventName(e.target.value)}
            placeholder="Event name"
            maxLength={40}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '13px',
              outline: 'none',
              marginBottom: '8px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Short description (why it matters)"
            maxLength={120}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '13px',
              outline: 'none',
              marginBottom: '8px',
              boxSizing: 'border-box',
            }}
          />

          {/* Type toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#555', cursor: 'pointer' }}>
              <input
                type="radio"
                name={`type-${decade}`}
                value="world"
                checked={type === 'world'}
                onChange={() => setType('world')}
                style={{ accentColor: '#1a8917' }}
              />
              World
            </label>
            {filterCountryName && (
              <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#2e7d32', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name={`type-${decade}`}
                  value="local"
                  checked={type === 'local'}
                  onChange={() => setType('local')}
                  style={{ accentColor: '#2e7d32' }}
                />
                {filterCountryName}
              </label>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting || !eventName.trim() || !description.trim()}
            style={{
              width: '100%',
              padding: '8px',
              background: (!eventName.trim() || !description.trim()) ? '#ccc' : '#1a8917',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: (!eventName.trim() || !description.trim()) ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s',
            }}
          >
            {submitting ? 'Submitting...' : 'Suggest Event'}
          </button>
        </form>
      ) : (
        <div style={{
          fontSize: '13px',
          color: '#888',
          textAlign: 'center',
          padding: '8px 0',
          marginBottom: suggestions.length > 0 ? '14px' : '0',
        }}>
          Sign in to suggest events
        </div>
      )}

      {/* Divider */}
      {suggestions.length > 0 && (
        <div style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px', textAlign: 'left' }}>
            Community suggestions
          </div>

          {displaySuggestions.map(s => {
            const hasVoted = !!userVotes[s.id];
            return (
              <div key={s.id} style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                marginBottom: '10px',
                paddingBottom: '10px',
                borderBottom: '1px solid #f5f5f5',
              }}>
                {/* Vote button */}
                <button
                  onClick={() => handleVote(s.id, s.votes, hasVoted)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1px',
                    background: 'none',
                    border: `1px solid ${hasVoted ? '#1a8917' : '#e0e0e0'}`,
                    borderRadius: '6px',
                    padding: '4px 8px',
                    cursor: user ? 'pointer' : 'not-allowed',
                    flexShrink: 0,
                    transition: 'all 0.15s',
                    color: hasVoted ? '#1a8917' : '#888',
                  }}
                >
                  <span style={{ fontSize: '12px', lineHeight: 1 }}>▲</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', lineHeight: 1 }}>{s.votes || 0}</span>
                </button>

                {/* Suggestion content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                      background: s.type === 'local' ? '#2e7d32' : '#1a8917',
                    }} />
                    <span style={{
                      fontSize: '13px', fontWeight: '600', color: '#333',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {s.eventName}
                    </span>
                    {s.type === 'local' && (
                      <span style={{
                        fontSize: '10px',
                        background: '#f0f7f0',
                        color: '#2e7d32',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        flexShrink: 0,
                      }}>
                        {s.country}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.4', textAlign: 'left' }}>
                    {s.description}
                  </div>
                </div>
              </div>
            );
          })}

          {/* View all link */}
          {!showAll && hiddenCount > 0 && (
            <button
              onClick={() => setShowAll(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1a8917',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '4px 0',
                width: '100%',
                textAlign: 'center',
              }}
            >
              View all suggestions ({totalCount})
            </button>
          )}

          {showAll && suggestions.length > 3 && (
            <button
              onClick={() => setShowAll(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#888',
                fontSize: '12px',
                cursor: 'pointer',
                padding: '4px 0',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Show less
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SuggestEventPopover;
