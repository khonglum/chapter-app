import { useState, useEffect } from 'react';
import { doc, collection, setDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ChapterModal({ chapter, onClose }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(chapter.likes || 0);
  const [likeLoading, setLikeLoading] = useState(false);

  const user = auth.currentUser;
  const isAnonymous = chapter.privacy === 'anonymous';

  // Check if current user has liked this chapter
  useEffect(() => {
    if (!user) return;
    const checkLike = async () => {
      try {
        const likesSnap = await getDocs(collection(db, 'chapters', chapter.id, 'likes'));
        const userLiked = likesSnap.docs.some(d => d.id === user.uid);
        setLiked(userLiked);
        setLikeCount(likesSnap.size);
      } catch (err) {
        // Fallback to chapter.likes if subcollection doesn't exist yet
      }
    };
    checkLike();
  }, [chapter.id, user]);

  const handleLike = async () => {
    if (!user || likeLoading) return;
    setLikeLoading(true);

    const likeRef = doc(db, 'chapters', chapter.id, 'likes', user.uid);

    try {
      if (liked) {
        await deleteDoc(likeRef);
        setLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
      } else {
        await setDoc(likeRef, { likedAt: new Date() });
        setLiked(true);
        setLikeCount(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
    setLikeLoading(false);
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
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
              background: isAnonymous ? '#bbb' : '#ddd',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#fff'
            }}>
              {isAnonymous ? '?' : ''}
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>
                {isAnonymous ? 'Anonymous' : chapter.author}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {chapter.date} · {chapter.country}
              </div>
            </div>
          </div>
          <CloseIcon
            onClick={onClose}
            style={{ cursor: 'pointer', color: '#666', fontSize: '24px' }}
          />
        </div>

        {/* Modal Body - Scrollable */}
        <div style={{
          padding: '24px 20px',
          overflowY: 'auto',
          flex: 1
        }}>
          <h1 style={{
            fontSize: '1.6em',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            {chapter.title}
          </h1>

          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05em',
            lineHeight: '1.8',
            color: '#333',
            whiteSpace: 'pre-wrap'
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
        </div>

        {/* Modal Footer - Like button */}
        <div style={{
          padding: '12px 20px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0
        }}>
          <button
            onClick={handleLike}
            disabled={!user || likeLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: user ? 'pointer' : 'default',
              padding: '8px 12px',
              borderRadius: '20px',
              transition: 'background 0.15s',
              color: liked ? '#e53935' : '#666'
            }}
          >
            {liked
              ? <FavoriteIcon style={{ fontSize: 20, color: '#e53935' }} />
              : <FavoriteBorderIcon style={{ fontSize: 20 }} />
            }
            <span style={{ fontSize: '14px', fontWeight: '500' }}>
              {likeCount > 0 ? likeCount : 'Like'}
            </span>
          </button>
          {!user && (
            <span style={{ fontSize: '12px', color: '#999' }}>Log in to like</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChapterModal;
