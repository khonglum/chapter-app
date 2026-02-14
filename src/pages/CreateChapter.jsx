import { useEffect } from 'react';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function CreateChapter() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (!auth.currentUser) {
    navigate('/login');
  }
}, [navigate]);

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
        date: date || new Date().getFullYear().toString(),
        country,
        tags: tags.split(',').map(t => t.trim()).filter(t => t),
        author: auth.currentUser?.displayName || auth.currentUser?.email || 'Anonymous',
        authorId: auth.currentUser?.uid,
        createdAt: new Date(),
        likes: 0,
        comments: []
      });
      
      alert('Chapter published! 🎉');
      navigate('/timeline');
    } catch (error) {
      console.error('Error publishing:', error);
      alert('Failed to publish. Try again!');
    }
    setLoading(false);
  };

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
          {loading ? 'Publishing...' : 'Publish'}
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
              outline: 'none'
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
              outline: 'none'
            }}
          />

          <input
            type="text"
            placeholder="Date (e.g., 2020)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none'
            }}
          />

          <input
            type="text"
            placeholder="Country (e.g., 🇲🇾 Malaysia)"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '1em',
              outline: 'none'
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
              outline: 'none'
            }}
          />
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
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ width: '32px', height: '32px', background: '#ddd', borderRadius: '50%' }}></div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                <div style={{ fontWeight: '600', color: '#000' }}>Your Name</div>
                <div>{date || '2024'} • {country || '🌍 Country'}</div>
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