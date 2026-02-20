import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { collection, getDocs, query, where, orderBy, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import ChapterModal from '../components/ChapterModal';
import EditProfileModal from '../components/EditProfileModal';
import formatLocation from '../utils/formatLocation';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';

function Profile() {
  const [user, setUser] = useState(auth.currentUser);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchChapters(currentUser.uid);
        fetchProfile(currentUser.uid);
      } else {
        setLoading(false);
      }
    });

    if (auth.currentUser) {
      fetchChapters(auth.currentUser.uid);
      fetchProfile(auth.currentUser.uid);
    }

    return () => unsubscribe();
  }, []);

  const fetchProfile = async (uid) => {
    try {
      const profileDoc = await getDoc(doc(db, 'users', uid));
      if (profileDoc.exists()) {
        setProfile(profileDoc.data());
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

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

  const handleProfileSaved = (profileData) => {
    setProfile(prev => ({ ...prev, ...profileData }));
  };

  // Display name priority: profile username > displayName > email prefix
  const displayName = profile?.username || user?.displayName || user?.email?.split('@')[0] || 'User';
  const profileLocation = formatLocation(profile?.country, profile?.state, profile?.city);

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Header with Settings */}
      <div style={{
        padding: '20px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>Profile</h1>
        <SettingsIcon
          onClick={() => {
            if (window.confirm('Log out?')) {
              signOut(auth);
              window.location.href = '/login';
            }
          }}
          style={{ cursor: 'pointer', color: '#666' }}
        />
      </div>

      {/* Profile Header */}
      <div style={{
        background: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#1a8917',
          borderRadius: '50%',
          margin: '0 auto 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          color: 'white',
          fontWeight: '600'
        }}>
          {displayName.charAt(0).toUpperCase()}
        </div>

        <h2 style={{ fontSize: '1.3em', marginBottom: '4px' }}>{displayName}</h2>

        {/* Email (subtle) */}
        <p style={{ color: '#888', fontSize: '0.8em', marginBottom: '10px' }}>
          {user?.email || ''}
        </p>

        {/* Profile info: location + birth year */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
          {profileLocation && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#666' }}>
              <LocationOnIcon style={{ fontSize: 14, color: '#888' }} />
              {profileLocation}
            </div>
          )}
          {profile?.birthYear && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#666' }}>
              <CakeIcon style={{ fontSize: 14, color: '#888' }} />
              Born {profile.birthYear}
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          fontSize: '0.9em'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>{chapters.length}</div>
            <div style={{ color: '#666' }}>Chapters</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>0</div>
            <div style={{ color: '#666' }}>Followers</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>0</div>
            <div style={{ color: '#666' }}>Following</div>
          </div>
        </div>

        <button
          onClick={() => setShowEditProfile(true)}
          style={{
            marginTop: '20px',
            padding: '10px 30px',
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            fontSize: '0.9em',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <EditIcon style={{ fontSize: 16 }} />
          Edit Profile
        </button>
      </div>

      {/* Chapters Grid */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '1.1em' }}>My Chapters</h3>

        {loading && (
          <div style={{ textAlign: 'center', padding: '30px', color: '#666' }}>
            Loading...
          </div>
        )}

        {!loading && chapters.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px'
          }}>
            {chapters.map(chapter => (
              <div
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter)}
                style={{
                  aspectRatio: '1',
                  background: '#f0f0f0',
                  borderRadius: '4px',
                  padding: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '1.3',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {chapter.title}
                </div>
                <div style={{ fontSize: '10px', color: '#888' }}>
                  {chapter.date}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && chapters.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#999'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>📝</div>
            <p>No chapters yet</p>
            <p style={{ fontSize: '0.9em' }}>Start writing your story</p>
          </div>
        )}
      </div>

      {/* Chapter Detail Modal */}
      {selectedChapter && (
        <ChapterModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
        />
      )}

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <EditProfileModal
          currentProfile={profile}
          onClose={() => setShowEditProfile(false)}
          onSaved={handleProfileSaved}
        />
      )}

    </div>
  );
}

export default Profile;
