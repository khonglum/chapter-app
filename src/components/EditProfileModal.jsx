import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import CountrySelect from './CountrySelect';
import StateSelect from './StateSelect';
import CloseIcon from '@mui/icons-material/Close';

const currentYear = new Date().getFullYear();
const years = [];
for (let y = currentYear; y >= 1930; y--) years.push(y);

const months = [
  { value: '', label: 'Month (optional)' },
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

function EditProfileModal({ onClose, onSaved, currentProfile }) {
  const user = auth.currentUser;

  // Pre-fill username: saved profile > Firebase displayName > email prefix
  const defaultUsername = currentProfile?.username
    || user?.displayName
    || user?.email?.split('@')[0]
    || '';

  const [username, setUsername] = useState(defaultUsername);
  const [birthYear, setBirthYear] = useState(currentProfile?.birthYear || '');
  const [birthMonth, setBirthMonth] = useState(currentProfile?.birthMonth || '');
  const [country, setCountry] = useState(currentProfile?.country || '');
  const [state, setState] = useState(currentProfile?.state || '');
  const [city, setCity] = useState(currentProfile?.city || '');
  const [saving, setSaving] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [checkingUsername, setCheckingUsername] = useState(false);

  // Debounced username uniqueness check
  useEffect(() => {
    const trimmed = username.trim();

    // No input or unchanged — clear errors
    if (!trimmed || trimmed === currentProfile?.username) {
      setUsernameError('');
      return;
    }

    // Only check uniqueness after debounce (validation happens on save)
    const timer = setTimeout(async () => {
      if (trimmed.length < 2) return; // too short to check
      setCheckingUsername(true);
      try {
        const q = query(
          collection(db, 'users'),
          where('usernameLower', '==', trimmed.toLowerCase())
        );
        const snap = await getDocs(q);
        const taken = snap.docs.some(d => d.id !== user.uid);
        setUsernameError(taken ? 'Username is already taken' : '');
      } catch (err) {
        console.error('Error checking username:', err);
      }
      setCheckingUsername(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [username, currentProfile?.username, user?.uid]);

  const validateUsername = () => {
    const trimmed = username.trim();
    if (!trimmed) return null; // empty is OK (optional)
    if (trimmed.length < 2) return 'Username must be at least 2 characters';
    if (trimmed.length > 30) return 'Username must be under 30 characters';
    return null;
  };

  const handleSave = async () => {
    if (!user) return;
    if (checkingUsername) return;

    // Validate username on save
    const validationError = validateUsername();
    if (validationError) {
      setUsernameError(validationError);
      return;
    }
    if (usernameError) return;

    setSaving(true);
    try {
      const profileData = {
        username: username.trim() || '',
        usernameLower: (username.trim() || '').toLowerCase(),
        birthYear: birthYear ? Number(birthYear) : null,
        birthMonth: birthMonth || null,
        country: country || '',
        state: state || '',
        city: city || '',
        updatedAt: new Date(),
      };

      await setDoc(doc(db, 'users', user.uid), profileData, { merge: true });

      if (onSaved) onSaved(profileData);
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
    setSaving(false);
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

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
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '12px',
          maxWidth: '480px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>Edit Profile</h2>
          <CloseIcon
            onClick={onClose}
            style={{ cursor: 'pointer', color: '#666', fontSize: '24px' }}
          />
        </div>

        {/* Body */}
        <div style={{
          padding: '20px',
          overflowY: 'auto',
          flex: 1,
        }}>
          {/* Username */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px', textAlign: 'left' }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Choose a username"
              maxLength={30}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: `1px solid ${usernameError ? '#d32f2f' : '#e0e0e0'}`,
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
            />
            {checkingUsername && (
              <div style={{ fontSize: '12px', color: '#888', marginTop: '4px', textAlign: 'left' }}>
                Checking availability...
              </div>
            )}
            {usernameError && (
              <div style={{ fontSize: '12px', color: '#d32f2f', marginTop: '4px', textAlign: 'left' }}>
                {usernameError}
              </div>
            )}
            {username.trim() && !usernameError && !checkingUsername && username.trim().length >= 2 && username.trim() !== currentProfile?.username && (
              <div style={{ fontSize: '12px', color: '#1a8917', marginTop: '4px', textAlign: 'left' }}>
                Username is available
              </div>
            )}
          </div>

          {/* Birth Date */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px', textAlign: 'left' }}>
              Birth Date
            </label>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px', textAlign: 'left' }}>
              Used to show your approximate age in chapters (e.g. "in their 20s")
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                value={birthYear}
                onChange={e => setBirthYear(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#fff',
                  color: birthYear ? '#000' : '#888',
                  cursor: 'pointer',
                }}
              >
                <option value="">Birth year</option>
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select
                value={birthMonth}
                onChange={e => setBirthMonth(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#fff',
                  color: birthMonth ? '#000' : '#888',
                  cursor: 'pointer',
                }}
              >
                {months.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Location */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px', textAlign: 'left' }}>
              Location
            </label>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px', textAlign: 'left' }}>
              Where are you based?
            </div>
            <div style={{ marginBottom: '10px' }}>
              <CountrySelect
                value={country}
                onChange={(val) => { setCountry(val); setState(''); setCity(''); }}
                placeholder="Country"
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <StateSelect
                country={country}
                value={state}
                onChange={setState}
                placeholder="State / Region (optional)"
              />
            </div>
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="City (optional)"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '10px',
          flexShrink: 0,
        }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '10px',
              background: '#f5f5f5',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#555',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !!usernameError || checkingUsername}
            style={{
              flex: 1,
              padding: '10px',
              background: (saving || usernameError || checkingUsername) ? '#ccc' : '#1a8917',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#fff',
              cursor: (saving || usernameError || checkingUsername) ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
