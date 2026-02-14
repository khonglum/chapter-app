import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import BottomNav from '../components/BottomNav';

function Explore() {
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
        // Only show public, anonymous, or legacy chapters (no privacy field)
        const visible = chaptersData.filter(ch =>
          !ch.privacy || ch.privacy === 'public' || ch.privacy === 'anonymous'
        );
        setChapters(visible);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
      setLoading(false);
    };

    fetchChapters();
  }, []);

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Search Bar */}
      <div style={{ padding: '20px', position: 'sticky', top: 0, background: 'white', zIndex: 10 }}>
        <input
          type="text"
          placeholder="Search chapters, users, tags, countries..."
          style={{
            width: '100%',
            padding: '12px 20px',
            border: '2px solid #e0e0e0',
            borderRadius: '24px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
      </div>

      {/* Decade Sidebar + Timeline */}
      <div style={{ display: 'flex', padding: '0 20px' }}>
        {/* Decade Sidebar */}
        <div style={{
          width: '80px',
          background: '#f9f9f9',
          borderRadius: '8px',
          padding: '15px 10px',
          marginRight: '20px',
          position: 'sticky',
          top: '80px',
          height: 'fit-content'
        }}>
          {['2020s', '2010s', '2000s', '1990s', '1980s', '1970s', '1960s', '1950s'].map(decade => (
            <div key={decade} style={{
              margin: '15px 0',
              fontSize: '12px',
              fontWeight: '600',
              color: decade === '2020s' ? '#1a8917' : '#666',
              cursor: 'pointer'
            }}>
              {decade}
            </div>
          ))}
        </div>

        {/* Main Timeline */}
        <div style={{ flex: 1 }}>
          {/* World Event */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: '#f2f2f2',
            color: '#242424',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            marginBottom: '15px'
          }}>
            <div style={{ width: '12px', height: '12px', background: '#191919', borderRadius: '50%' }}></div>
            COVID-19 Pandemic
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              Loading chapters...
            </div>
          )}

          {/* Real Chapter Cards from Firebase */}
          {!loading && chapters.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              No chapters yet. Be the first to share your story!
            </div>
          )}

          {!loading && chapters.map((chapter) => {
            const isAnonymous = chapter.privacy === 'anonymous';
            return (
              <div key={chapter.id} style={{
                background: '#fafafa',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                borderLeft: '3px solid #191919',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: isAnonymous ? '#bbb' : '#ddd',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: '#fff'
                  }}>
                    {isAnonymous ? '?' : ''}
                  </div>
                  <div style={{ flex: 1, fontSize: '12px', color: '#666' }}>
                    <div style={{ fontWeight: '600', color: '#000' }}>
                      {isAnonymous ? 'Anonymous' : chapter.author}
                    </div>
                    <div>{chapter.date} • {chapter.country}</div>
                  </div>
                </div>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>{chapter.title}</div>
                <div style={{ fontSize: '13px', color: '#555', fontFamily: 'Georgia, serif', lineHeight: '1.5' }}>
                  {chapter.story.substring(0, 100)}...
                </div>
                {chapter.tags && chapter.tags.length > 0 && (
                  <div style={{ marginTop: '10px', fontSize: '11px', color: '#999' }}>
                    Tags: {chapter.tags.join(', ')}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Explore;
