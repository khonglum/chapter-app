import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import BottomNav from '../components/BottomNav';
import AddIcon from '@mui/icons-material/Add';

function MyTimeline() {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const q = query(collection(db, 'chapters'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const chaptersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setChapters(chaptersData);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
      setLoading(false);
    };

    fetchChapters();
  }, []);

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '20px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>My Timeline</h1>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          Loading your chapters...
        </div>
      )}

      {/* Show chapters if they exist */}
      {!loading && chapters.length > 0 && (
        <div style={{ padding: '20px' }}>
          {chapters.map((chapter) => (
            <div key={chapter.id} style={{
              background: '#fafafa',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              borderLeft: '3px solid #191919'
            }}>
              <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>{chapter.title}</div>
              <div style={{ fontSize: '13px', color: '#555', fontFamily: 'Georgia, serif', lineHeight: '1.5', marginBottom: '10px' }}>
                {chapter.story.substring(0, 150)}...
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {chapter.date} • {chapter.country}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && chapters.length === 0 && (
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: '#f0f0f0',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3em'
          }}>
            📖
          </div>

          <h2 style={{ marginBottom: '15px' }}>Start Your Story</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
            What moment shaped who you are today? Every life has chapters worth sharing.
          </p>

          <button 
            onClick={() => navigate('/create')}
            style={{
              padding: '15px 30px',
              background: '#1a8917',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1em',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto'
            }}
          >
            <AddIcon />
            Write Your First Chapter
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default MyTimeline;