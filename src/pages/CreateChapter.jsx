import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import CountrySelect from '../components/CountrySelect';
import StateSelect from '../components/StateSelect';
import formatLocation from '../utils/formatLocation';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GroupIcon from '@mui/icons-material/Group';

const privacyOptions = [
  { value: 'private', label: 'Private', icon: <LockIcon style={{ fontSize: 16 }} />, desc: 'Only you can see this chapter' },
  { value: 'public', label: 'Public', icon: <PublicIcon style={{ fontSize: 16 }} />, desc: 'Anyone can read this chapter' },
  { value: 'anonymous', label: 'Anonymous', icon: <VisibilityOffIcon style={{ fontSize: 16 }} />, desc: 'Anyone can read, but your name is hidden' },
  { value: 'friends', label: 'Friends', icon: <GroupIcon style={{ fontSize: 16 }} />, desc: 'Only your followers can see this (coming soon)' },
];

const currentYear = new Date().getFullYear();
const todayStr = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

function CreateChapter() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [tags, setTags] = useState('');
  const [privacy, setPrivacy] = useState('private');
  const [sensitive, setSensitive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileUsername, setProfileUsername] = useState('');

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/login');
      return;
    }
    // Fetch profile username
    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (profileDoc.exists() && profileDoc.data().username) {
          setProfileUsername(profileDoc.data().username);
        }
      } catch (e) { /* ignore */ }
    };
    fetchProfile();
  }, [navigate]);

  const displayName = profileUsername || auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'You';

  const handlePublish = async () => {
    if (!title || !story || !country) {
      alert('Please fill in title, story, and country!');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'chapters'), {
        title,
        story,
        date: date || todayStr,
        country,
        state: state || '',
        city: city || '',
        tags: tags.split(',').map(t => t.trim()).filter(t => t),
        author: displayName || auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'Anonymous',
        authorId: auth.currentUser?.uid,
        createdAt: new Date(),
        likes: 0,
        comments: [],
        privacy,
        sensitive
      });

      alert(privacy === 'private' ? 'Chapter saved!' : 'Chapter published!');
      navigate('/timeline');
    } catch (error) {
      console.error('Error publishing:', error);
      alert('Failed to save. Try again!');
    }
    setLoading(false);
  };

  const selectedPrivacy = privacyOptions.find(o => o.value === privacy);
  const buttonText = loading
    ? (privacy === 'private' ? 'Saving...' : 'Publishing...')
    : (privacy === 'private' ? 'Save' : 'Publish');

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* Header */}
      <div style={{
        padding: '15px 20px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <CloseIcon
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', color: '#666' }}
        />
        <h2 style={{ margin: 0, fontSize: '1.1em' }}>New Chapter</h2>
        <button
          onClick={handlePublish}
          disabled={loading}
          style={{
            padding: '8px 20px',
            background: loading ? '#ccc' : '#1a8917',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {buttonText}
        </button>
      </div>

      {/* Split View */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left: Write */}
        <div style={{
          flex: 1,
          padding: '30px',
          overflowY: 'auto',
          borderRight: '1px solid #e0e0e0'
        }}>
          <h3 style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>Write</h3>

          <input
            type="text"
            placeholder="Chapter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <textarea
            placeholder="Tell your story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            style={{
              width: '100%',
              height: '200px',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              fontFamily: 'Georgia, serif',
              resize: 'vertical',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {/* Date picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={todayStr}
            min="1900-01-01"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none',
              background: '#fff',
              boxSizing: 'border-box',
              color: date ? '#000' : '#888',
            }}
          />

          {/* Country typeahead */}
          <div style={{ marginBottom: '15px' }}>
            <CountrySelect
              value={country}
              onChange={(val) => { setCountry(val); setState(''); setCity(''); }}
              placeholder="Select country..."
            />
          </div>

          {/* State / Region typeahead */}
          <div style={{ marginBottom: '15px' }}>
            <StateSelect
              country={country}
              value={state}
              onChange={setState}
              placeholder="State / Region (optional)"
            />
          </div>

          {/* City */}
          <input
            type="text"
            placeholder="City (optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <input
            type="text"
            placeholder="Tags: career, milestone, family..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {/* Privacy Selector */}
          <div style={{ marginBottom: '15px' }}>
            <div style={{ fontSize: '0.85em', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Privacy</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {privacyOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPrivacy(option.value)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 14px',
                    border: privacy === option.value ? '1.5px solid #1a8917' : '1px solid #e0e0e0',
                    borderRadius: '20px',
                    background: privacy === option.value ? '#1a8917' : 'white',
                    color: privacy === option.value ? 'white' : '#555',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '12px', color: '#888', marginTop: '6px' }}>
              {selectedPrivacy?.desc}
            </div>
          </div>

          {/* Sensitive / Raw toggle */}
          <div style={{ marginBottom: '15px' }}>
            <button
              type="button"
              onClick={() => setSensitive(!sensitive)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                border: sensitive ? '1.5px solid #e65100' : '1px solid #e0e0e0',
                borderRadius: '8px',
                background: sensitive ? '#fff3e0' : 'white',
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{
                width: '18px', height: '18px', borderRadius: '4px',
                border: sensitive ? '2px solid #e65100' : '2px solid #ccc',
                background: sensitive ? '#e65100' : 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, transition: 'all 0.15s ease',
              }}>
                {sensitive && <span style={{ color: 'white', fontSize: '12px', fontWeight: '700', lineHeight: 1 }}>✓</span>}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: sensitive ? '#e65100' : '#555' }}>
                  Sensitive / Raw Content
                </div>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                  Blurs this chapter in Explore. Readers tap to reveal.
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Preview */}
        <div style={{
          flex: 1,
          padding: '30px',
          overflowY: 'auto',
          background: '#fafafa'
        }}>
          <h3 style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>Preview</h3>

          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            {/* Privacy badge */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '500',
                background: privacy === 'private' ? '#f5f5f5' : privacy === 'public' ? '#e8f5e9' : privacy === 'anonymous' ? '#fff3e0' : '#e3f2fd',
                color: privacy === 'private' ? '#666' : privacy === 'public' ? '#2e7d32' : privacy === 'anonymous' ? '#e65100' : '#1565c0'
              }}>
                {selectedPrivacy?.icon}
                {selectedPrivacy?.label}
              </div>
              {sensitive && (
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
                }}>
                  ⚠️ Sensitive
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: privacy === 'anonymous' ? '#9e9e9e' : '#1a8917',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', color: '#fff', fontWeight: '600',
              }}>
                {privacy === 'anonymous' ? '?' : displayName.charAt(0).toUpperCase()}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                <div style={{ fontWeight: '600', color: '#000' }}>
                  {privacy === 'anonymous' ? 'Anonymous' : displayName}
                </div>
                <div>{date ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : currentYear} · {formatLocation(country, state, city) || 'Country'}</div>
              </div>
            </div>

            <div style={{
              fontWeight: '600',
              fontSize: '1.2em',
              marginBottom: '12px',
              color: title ? '#000' : '#ccc'
            }}>
              {title || 'Your title appears here'}
            </div>

            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1em',
              lineHeight: '1.7',
              color: story ? '#333' : '#ccc'
            }}>
              {story || 'Your story preview...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateChapter;
