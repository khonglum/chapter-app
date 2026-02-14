import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import BottomNav from '../components/BottomNav';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GroupIcon from '@mui/icons-material/Group';

const privacyBadge = (privacy) => {
  const config = {
    private: { icon: <LockIcon style={{ fontSize: 12 }} />, label: 'Private', bg: '#f5f5f5', color: '#666' },
    public: { icon: <PublicIcon style={{ fontSize: 12 }} />, label: 'Public', bg: '#e8f5e9', color: '#2e7d32' },
    anonymous: { icon: <VisibilityOffIcon style={{ fontSize: 12 }} />, label: 'Anonymous', bg: '#fff3e0', color: '#e65100' },
    friends: { icon: <GroupIcon style={{ fontSize: 12 }} />, label: 'Friends', bg: '#e3f2fd', color: '#1565c0' },
  };
  // Legacy chapters without privacy field
  if (!privacy) return { icon: <PublicIcon style={{ fontSize: 12 }} />, label: 'Public', bg: '#e8f5e9', color: '#2e7d32' };
  return config[privacy] || config.public;
};

function MyTimeline() {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setLoading(false);
        return;
      }
      fetchChapters(currentUser.uid);
    });

    // If user is already available, fetch immediately
    if (auth.currentUser) {
      fetchChapters(auth.currentUser.uid);
    }

    return () => unsubscribe();
  }, []);

  const fetchChapters = async (uid) => {
    try {
      const q = query(
        collection(db, 'chapters'),
        where('authorId', '==', uid),
        orderBy('createdAt', 'desc')
      );
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
          {chapters.map((chapter) => {
            const badge = privacyBadge(chapter.privacy);
            return (
              <div key={chapter.id} style={{
                background: '#fafafa',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                borderLeft: '3px solid #191919'
              }}>
                {/* Privacy badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  background: badge.bg,
                  color: badge.color
                }}>
                  {badge.icon}
                  {badge.label}
                </div>

                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>{chapter.title}</div>
                <div style={{ fontSize: '13px', color: '#555', fontFamily: 'Georgia, serif', lineHeight: '1.5', marginBottom: '10px' }}>
                  {chapter.story.substring(0, 150)}...
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {chapter.date} • {chapter.country}
                </div>
              </div>
            );
          })}
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
