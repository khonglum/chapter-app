import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import CountrySelect from './CountrySelect';
import StateSelect from './StateSelect';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GroupIcon from '@mui/icons-material/Group';

const privacyOptions = [
  { value: 'private', label: 'Private', icon: <LockIcon style={{ fontSize: 14 }} />, desc: 'Only you can see this chapter' },
  { value: 'public', label: 'Public', icon: <PublicIcon style={{ fontSize: 14 }} />, desc: 'Anyone can read this chapter' },
  { value: 'anonymous', label: 'Anonymous', icon: <VisibilityOffIcon style={{ fontSize: 14 }} />, desc: 'Anyone can read, but your name is hidden' },
  { value: 'friends', label: 'Friends', icon: <GroupIcon style={{ fontSize: 14 }} />, desc: 'Only your followers can see this (coming soon)' },
];

const todayStr = new Date().toISOString().split('T')[0];

function EditChapterModal({ chapter, onClose, onSaved }) {
  const [title, setTitle] = useState(chapter.title || '');
  const [story, setStory] = useState(chapter.story || '');
  const [date, setDate] = useState(chapter.date || '');
  const [country, setCountry] = useState(chapter.country || '');
  const [state, setState] = useState(chapter.state || '');
  const [city, setCity] = useState(chapter.city || '');
  const [tags, setTags] = useState((chapter.tags || []).join(', '));
  const [privacy, setPrivacy] = useState(chapter.privacy || 'public');
  const [sensitive, setSensitive] = useState(chapter.sensitive || false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSave = async () => {
    if (!title || !story || !country) {
      alert('Please fill in title, story, and country!');
      return;
    }
    setSaving(true);
    try {
      const chapterRef = doc(db, 'chapters', chapter.id);
      const updated = {
        title,
        story,
        date: date || todayStr,
        country,
        state: state || '',
        city: city || '',
        tags: tags.split(',').map(t => t.trim()).filter(t => t),
        privacy,
        sensitive,
      };
      await updateDoc(chapterRef, updated);
      onSaved({ ...chapter, ...updated });
      onClose();
    } catch (error) {
      console.error('Error updating chapter:', error);
      alert('Failed to save. Try again!');
    }
    setSaving(false);
  };

  const selectedPrivacy = privacyOptions.find(o => o.value === privacy);

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
          background: '#fff',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
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
          <h2 style={{ margin: 0, fontSize: '1.1em' }}>Edit Chapter</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: '8px 20px',
                background: saving ? '#ccc' : '#1a8917',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '13px',
                cursor: saving ? 'not-allowed' : 'pointer',
              }}
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <CloseIcon onClick={onClose} style={{ cursor: 'pointer', color: '#666' }} />
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
          <input
            type="text"
            placeholder="Chapter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              width: '100%', padding: '12px',
              border: '1px solid #e0e0e0', borderRadius: '8px',
              marginBottom: '12px', fontSize: '14px', outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <textarea
            placeholder="Tell your story..."
            value={story}
            onChange={e => setStory(e.target.value)}
            style={{
              width: '100%', height: '180px', padding: '12px',
              border: '1px solid #e0e0e0', borderRadius: '8px',
              marginBottom: '12px', fontSize: '14px',
              fontFamily: 'Georgia, serif', resize: 'vertical',
              outline: 'none', boxSizing: 'border-box',
            }}
          />

          <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              max={todayStr}
              min="1900-01-01"
              style={{
                flex: 1, padding: '12px',
                border: '1px solid #e0e0e0', borderRadius: '8px',
                fontSize: '14px', outline: 'none',
                background: '#fff', boxSizing: 'border-box',
              }}
            />

            <div style={{ flex: 1 }}>
              <CountrySelect
                value={country}
                onChange={(val) => { setCountry(val); setState(''); setCity(''); }}
                placeholder="Select country..."
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            <div style={{ flex: 1 }}>
              <StateSelect
                country={country}
                value={state}
                onChange={setState}
                placeholder="State / Region (optional)"
              />
            </div>
            <input
              type="text"
              placeholder="City (optional)"
              value={city}
              onChange={e => setCity(e.target.value)}
              style={{
                flex: 1, padding: '12px',
                border: '1px solid #e0e0e0', borderRadius: '8px',
                fontSize: '14px', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <input
            type="text"
            placeholder="Tags: career, milestone, family..."
            value={tags}
            onChange={e => setTags(e.target.value)}
            style={{
              width: '100%', padding: '12px',
              border: '1px solid #e0e0e0', borderRadius: '8px',
              marginBottom: '12px', fontSize: '14px', outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {/* Privacy */}
          <div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Privacy</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {privacyOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPrivacy(option.value)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '7px 14px',
                    border: privacy === option.value ? '1.5px solid #1a8917' : '1px solid #e0e0e0',
                    borderRadius: '20px',
                    background: privacy === option.value ? '#1a8917' : '#fff',
                    color: privacy === option.value ? '#fff' : '#555',
                    fontSize: '12px', fontWeight: '500', cursor: 'pointer',
                  }}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#888', marginTop: '6px' }}>
              {selectedPrivacy?.desc}
            </div>
          </div>

          {/* Sensitive / Raw toggle */}
          <div style={{ marginTop: '12px' }}>
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
                <div style={{ fontSize: '12px', fontWeight: '600', color: sensitive ? '#e65100' : '#555' }}>
                  Sensitive / Raw Content
                </div>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                  Blurs this chapter in Explore. Readers tap to reveal.
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditChapterModal;
