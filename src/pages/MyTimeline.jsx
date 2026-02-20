import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import ChapterModal from '../components/ChapterModal';
import EditChapterModal from '../components/EditChapterModal';
import formatLocation from '../utils/formatLocation';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GroupIcon from '@mui/icons-material/Group';

// Parse date field — handles "2020", "2020-05-14", numbers, Timestamps
const parseDateValue = (dateStr) => {
  if (!dateStr) return 0;
  if (dateStr.toDate) return dateStr.toDate().getTime();
  if (typeof dateStr === 'number') return new Date(dateStr + '-01-01T00:00:00').getTime();
  const str = String(dateStr);
  if (str.includes('-')) return new Date(str + 'T00:00:00').getTime();
  return new Date(str + '-01-01T00:00:00').getTime();
};

// Format date for display
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

const privacyBadge = (privacy) => {
  const config = {
    private: { icon: <LockIcon style={{ fontSize: 12 }} />, label: 'Private', bg: '#f5f5f5', color: '#666' },
    public: { icon: <PublicIcon style={{ fontSize: 12 }} />, label: 'Public', bg: '#e8f5e9', color: '#2e7d32' },
    anonymous: { icon: <VisibilityOffIcon style={{ fontSize: 12 }} />, label: 'Anonymous', bg: '#fff3e0', color: '#e65100' },
    friends: { icon: <GroupIcon style={{ fontSize: 12 }} />, label: 'Friends', bg: '#e3f2fd', color: '#1565c0' },
  };
  if (!privacy) return { icon: <PublicIcon style={{ fontSize: 12 }} />, label: 'Public', bg: '#e8f5e9', color: '#2e7d32' };
  return config[privacy] || config.public;
};

function MyTimeline() {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [editingChapter, setEditingChapter] = useState(null);
  const [deletingChapter, setDeletingChapter] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setLoading(false);
        return;
      }
      fetchChapters(currentUser.uid);
    });

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
      // Sort by year descending (newest first)
      chaptersData.sort((a, b) => parseDateValue(b.date) - parseDateValue(a.date));
      setChapters(chaptersData);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
    setLoading(false);
  };

  const handleChapterSaved = (updatedChapter) => {
    setChapters(prev =>
      prev.map(ch => ch.id === updatedChapter.id ? updatedChapter : ch)
        .sort((a, b) => parseDateValue(b.date) - parseDateValue(a.date))
    );
  };

  const handleDelete = async () => {
    if (!deletingChapter) return;
    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'chapters', deletingChapter.id));
      setChapters(prev => prev.filter(ch => ch.id !== deletingChapter.id));
      setDeletingChapter(null);
    } catch (error) {
      console.error('Error deleting chapter:', error);
      alert('Failed to delete chapter. Please try again.');
    }
    setDeleting(false);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '20px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>My Timeline</h1>
        <button
          onClick={() => navigate('/create')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '8px 16px',
            background: '#1a8917',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <AddIcon style={{ fontSize: 18 }} />
          New
        </button>
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
              <div
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter)}
                style={{
                  background: '#fafafa',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '15px',
                  borderLeft: '3px solid #191919',
                  cursor: 'pointer'
                }}
              >
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', flex: 1 }}>{chapter.title}</div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0, marginLeft: '10px' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setEditingChapter(chapter); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '4px 10px', background: 'none',
                        border: '1px solid #e0e0e0', borderRadius: '14px',
                        fontSize: '11px', color: '#666', cursor: 'pointer',
                      }}
                    >
                      <EditIcon style={{ fontSize: 13 }} />
                      Edit
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setDeletingChapter(chapter); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '4px 10px', background: 'none',
                        border: '1px solid #e0e0e0', borderRadius: '14px',
                        fontSize: '11px', color: '#999', cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#d32f2f'; e.currentTarget.style.color = '#d32f2f'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.color = '#999'; }}
                    >
                      <DeleteOutlineIcon style={{ fontSize: 13 }} />
                      Delete
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: '#555', fontFamily: 'Georgia, serif', lineHeight: '1.5', marginBottom: '10px' }}>
                  {chapter.story.substring(0, 150)}...
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {formatDate(chapter.date)} · {formatLocation(chapter.country, chapter.state, chapter.city)}
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

      {/* Chapter Detail Modal */}
      {selectedChapter && (
        <ChapterModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
        />
      )}

      {/* Edit Chapter Modal */}
      {editingChapter && (
        <EditChapterModal
          chapter={editingChapter}
          onClose={() => setEditingChapter(null)}
          onSaved={handleChapterSaved}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deletingChapter && (
        <div
          onClick={() => !deleting && setDeletingChapter(null)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '28px',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#ffeaea', margin: '0 auto 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <DeleteOutlineIcon style={{ fontSize: 24, color: '#d32f2f' }} />
            </div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#111', marginBottom: '8px' }}>
              Delete this chapter?
            </div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '6px', lineHeight: '1.5' }}>
              "{deletingChapter.title}"
            </div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '24px' }}>
              This action cannot be undone.
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setDeletingChapter(null)}
                disabled={deleting}
                style={{
                  flex: 1, padding: '10px',
                  background: '#f5f5f5', border: 'none', borderRadius: '8px',
                  fontSize: '14px', fontWeight: '600', color: '#555',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                style={{
                  flex: 1, padding: '10px',
                  background: '#d32f2f', border: 'none', borderRadius: '8px',
                  fontSize: '14px', fontWeight: '600', color: '#fff',
                  cursor: deleting ? 'not-allowed' : 'pointer',
                  opacity: deleting ? 0.7 : 1,
                }}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default MyTimeline;
