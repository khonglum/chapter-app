import { useState, useEffect } from 'react';
import { doc, collection, setDoc, deleteDoc, getDocs, query, where, orderBy, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import formatLocation from '../utils/formatLocation';
import getAgeBracket from '../utils/getAgeBracket';

const parseDateValue = (dateStr) => {
  if (!dateStr) return 0;
  if (dateStr.toDate) return dateStr.toDate().getTime();
  if (typeof dateStr === 'number') return new Date(dateStr + '-01-01T00:00:00').getTime();
  const str = String(dateStr);
  if (str.includes('-')) return new Date(str + 'T00:00:00').getTime();
  return new Date(str + '-01-01T00:00:00').getTime();
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  if (dateStr.toDate) return dateStr.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  if (typeof dateStr === 'number') return String(dateStr);
  const str = String(dateStr);
  if (str.includes('-')) {
    return new Date(str + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  return str;
};

const displayAuthor = (author) => {
  if (!author) return 'Anonymous';
  if (author.includes('@')) return author.split('@')[0];
  return author;
};

function ChapterModal({ chapter: initialChapter, onClose, onReactionChange }) {
  const [chapter, setChapter] = useState(initialChapter);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeLoading, setLikeLoading] = useState(false);
  const [resonated, setResonated] = useState(false);
  const [resonateCount, setResonateCount] = useState(0);
  const [resonateLoading, setResonateLoading] = useState(false);
  const [authorChapters, setAuthorChapters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [authorBirthYear, setAuthorBirthYear] = useState(null);
  const [authorUsername, setAuthorUsername] = useState(null);
  const [sensitiveRevealed, setSensitiveRevealed] = useState(false);

  const user = auth.currentUser;
  const isAnonymous = chapter.privacy === 'anonymous';
  const isSensitive = chapter.sensitive && !sensitiveRevealed;

  // Fetch author birth year for age bracket
  useEffect(() => {
    if (isAnonymous || !chapter.authorId) {
      setAuthorBirthYear(null);
      setAuthorUsername(null);
      return;
    }
    const fetchAuthorProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, 'users', chapter.authorId));
        if (profileDoc.exists()) {
          const data = profileDoc.data();
          setAuthorBirthYear(data.birthYear || null);
          setAuthorUsername(data.username || null);
        } else {
          setAuthorBirthYear(null);
          setAuthorUsername(null);
        }
      } catch (err) {
        setAuthorBirthYear(null);
        setAuthorUsername(null);
      }
    };
    fetchAuthorProfile();
  }, [chapter.authorId, isAnonymous]);

  // Fetch author's public chapters for before/after navigation
  useEffect(() => {
    if (isAnonymous || !chapter.authorId) {
      setAuthorChapters([]);
      return;
    }
    const fetchAuthorChapters = async () => {
      try {
        const q = query(
          collection(db, 'chapters'),
          where('authorId', '==', chapter.authorId),
          orderBy('createdAt', 'desc')
        );
        const snap = await getDocs(q);
        const all = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(ch => ch.privacy === 'public' || ch.privacy === 'anonymous' || !ch.privacy);
        // Sort by date ascending for chronological nav
        all.sort((a, b) => parseDateValue(a.date) - parseDateValue(b.date));
        setAuthorChapters(all);
      } catch (err) {
        console.error('Error fetching author chapters:', err);
      }
    };
    fetchAuthorChapters();
  }, [chapter.authorId, isAnonymous]);

  // Update current index when chapter or authorChapters change
  useEffect(() => {
    if (authorChapters.length > 0) {
      const idx = authorChapters.findIndex(c => c.id === chapter.id);
      setCurrentIndex(idx);
    }
  }, [chapter.id, authorChapters]);

  // Check like + resonate status when chapter changes
  useEffect(() => {
    setLikeCount(chapter.likes || 0);
    setLiked(false);
    setResonateCount(0);
    setResonated(false);
    if (!user) return;
    const checkLike = async () => {
      try {
        const likesSnap = await getDocs(collection(db, 'chapters', chapter.id, 'likes'));
        setLiked(likesSnap.docs.some(d => d.id === user.uid));
        setLikeCount(likesSnap.size);
      } catch (err) {}
    };
    const checkResonate = async () => {
      try {
        const resonatesSnap = await getDocs(collection(db, 'chapters', chapter.id, 'resonates'));
        setResonated(resonatesSnap.docs.some(d => d.id === user.uid));
        setResonateCount(resonatesSnap.size);
      } catch (err) {}
    };
    checkLike();
    checkResonate();
  }, [chapter.id, user]);

  const handleLike = async () => {
    if (!user || likeLoading) return;
    setLikeLoading(true);
    const likeRef = doc(db, 'chapters', chapter.id, 'likes', user.uid);
    try {
      if (liked) {
        await deleteDoc(likeRef);
        setLiked(false);
        setLikeCount(prev => {
          const newCount = Math.max(0, prev - 1);
          if (onReactionChange) onReactionChange(chapter.id, 'likes', newCount);
          return newCount;
        });
      } else {
        await setDoc(likeRef, { likedAt: new Date() });
        setLiked(true);
        setLikeCount(prev => {
          const newCount = prev + 1;
          if (onReactionChange) onReactionChange(chapter.id, 'likes', newCount);
          return newCount;
        });
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
    setLikeLoading(false);
  };

  const handleResonate = async () => {
    if (!user || resonateLoading) return;
    setResonateLoading(true);
    const resonateRef = doc(db, 'chapters', chapter.id, 'resonates', user.uid);
    try {
      if (resonated) {
        await deleteDoc(resonateRef);
        setResonated(false);
        setResonateCount(prev => {
          const newCount = Math.max(0, prev - 1);
          if (onReactionChange) onReactionChange(chapter.id, 'resonates', newCount);
          return newCount;
        });
      } else {
        await setDoc(resonateRef, { resonatedAt: new Date() });
        setResonated(true);
        setResonateCount(prev => {
          const newCount = prev + 1;
          if (onReactionChange) onReactionChange(chapter.id, 'resonates', newCount);
          return newCount;
        });
      }
    } catch (err) {
      console.error('Error toggling resonate:', err);
    }
    setResonateLoading(false);
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setChapter(authorChapters[currentIndex - 1]);
      setSensitiveRevealed(false);
    }
  };

  const goToNext = () => {
    if (currentIndex < authorChapters.length - 1) {
      setChapter(authorChapters[currentIndex + 1]);
      setSensitiveRevealed(false);
    }
  };

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < authorChapters.length - 1;
  const showNav = !isAnonymous && authorChapters.length > 1;

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.6)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px',
              background: isAnonymous ? '#9e9e9e' : '#1a8917',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#fff', fontWeight: '600'
            }}>
              {isAnonymous ? '?' : ((authorUsername || displayAuthor(chapter.author)).charAt(0) || '').toUpperCase()}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '600', fontSize: '14px', lineHeight: '1.3', textAlign: 'left' }}>
                {isAnonymous ? 'Anonymous' : (authorUsername || displayAuthor(chapter.author))}
              </div>
              <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.3', textAlign: 'left' }}>
                {formatDate(chapter.date)} · {formatLocation(chapter.country, chapter.state, chapter.city)}
                {!isAnonymous && authorBirthYear && getAgeBracket(authorBirthYear, chapter.date) && (
                  <span style={{ color: '#999' }}> · {getAgeBracket(authorBirthYear, chapter.date)}</span>
                )}
              </div>
            </div>
          </div>
          <CloseIcon
            onClick={onClose}
            style={{ cursor: 'pointer', color: '#666', fontSize: '24px' }}
          />
        </div>

        {/* Modal Body */}
        <div style={{
          padding: '24px 20px',
          overflowY: 'auto',
          flex: 1,
          textAlign: 'left',
        }}>
          {isSensitive ? (
            /* Sensitive content warning gate */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '40px', marginBottom: '16px' }}>⚠️</span>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                Sensitive Content
              </h2>
              <p style={{ fontSize: '14px', color: '#888', marginBottom: '6px', maxWidth: '300px', lineHeight: '1.5' }}>
                The author has flagged this chapter as sensitive or raw.
              </p>
              <p style={{ fontSize: '13px', color: '#aaa', marginBottom: '24px' }}>
                It may contain personal or emotional content.
              </p>
              <button
                onClick={() => setSensitiveRevealed(true)}
                style={{
                  padding: '10px 28px',
                  background: '#333',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                I understand, show me
              </button>
            </div>
          ) : (
            /* Normal content */
            <>
              {chapter.sensitive && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '500',
                  background: '#fff3e0',
                  color: '#e65100',
                  marginBottom: '12px',
                }}>
                  ⚠️ Sensitive
                </div>
              )}
              <h1 style={{
                fontSize: '1.6em',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.3',
                textAlign: 'left',
              }}>
                {chapter.title}
              </h1>

              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.05em',
                lineHeight: '1.8',
                color: '#333',
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
              }}>
                {chapter.story}
              </div>

              {chapter.tags && chapter.tags.length > 0 && (
                <div style={{
                  marginTop: '24px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {chapter.tags.map((tag, i) => (
                    <span key={i} style={{
                      background: '#f0f0f0',
                      padding: '4px 12px',
                      borderRadius: '14px',
                      fontSize: '12px',
                      color: '#555'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '12px 20px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0
        }}>
          {/* Like + Resonates buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={handleLike}
              disabled={!user || likeLoading}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'none', border: 'none',
                cursor: user ? 'pointer' : 'default',
                padding: '8px 12px', borderRadius: '20px',
                color: liked ? '#e53935' : '#666',
                transition: 'color 0.15s',
              }}
            >
              {liked
                ? <FavoriteIcon style={{ fontSize: 20, color: '#e53935' }} />
                : <FavoriteBorderIcon style={{ fontSize: 20 }} />
              }
              <span style={{ fontSize: '13px', fontWeight: '500' }}>
                {likeCount > 0 ? likeCount : 'Like'}
              </span>
            </button>
            <button
              onClick={handleResonate}
              disabled={!user || resonateLoading}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: resonated ? '#f0f7f0' : 'none',
                border: resonated ? '1px solid #c8e6c9' : '1px solid transparent',
                cursor: user ? 'pointer' : 'default',
                padding: '7px 12px', borderRadius: '20px',
                color: resonated ? '#1a8917' : '#666',
                transition: 'all 0.15s',
                fontSize: '13px', fontWeight: '500',
              }}
            >
              <span style={{ fontSize: '16px', lineHeight: 1 }}>🫶</span>
              <span>{resonateCount > 0 ? `${resonateCount} Resonates` : 'Resonates'}</span>
            </button>
            {!user && (
              <span style={{ fontSize: '12px', color: '#999' }}>Sign in to react</span>
            )}
          </div>

          {/* Before / After navigation */}
          {showNav && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={goToPrev}
                disabled={!hasPrev}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '6px 14px', borderRadius: '20px',
                  border: '1px solid #e0e0e0',
                  background: hasPrev ? '#fff' : '#f5f5f5',
                  color: hasPrev ? '#333' : '#ccc',
                  fontSize: '12px', fontWeight: '600',
                  cursor: hasPrev ? 'pointer' : 'default',
                }}
              >
                <ArrowBackIcon style={{ fontSize: 14 }} />
                Before
              </button>
              <button
                onClick={goToNext}
                disabled={!hasNext}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '6px 14px', borderRadius: '20px',
                  border: '1px solid #e0e0e0',
                  background: hasNext ? '#fff' : '#f5f5f5',
                  color: hasNext ? '#333' : '#ccc',
                  fontSize: '12px', fontWeight: '600',
                  cursor: hasNext ? 'pointer' : 'default',
                }}
              >
                After
                <ArrowForwardIcon style={{ fontSize: 14 }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChapterModal;
