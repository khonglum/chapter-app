import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import BottomNav from '../components/BottomNav';
import ChapterModal from '../components/ChapterModal';

function Explore() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedDecade, setSelectedDecade] = useState(null);

  const decades = ['2020s', '2010s', '2000s', '1990s', '1980s', '1970s', '1960s', '1950s'];

  const worldEvents = {
    '2020s': 'COVID-19 Pandemic',
    '2010s': 'Social Media Revolution',
    '2000s': 'Rise of the Internet',
    '1990s': 'Fall of the Berlin Wall',
    '1980s': 'End of the Cold War',
    '1970s': 'Moon Landing Era',
    '1960s': 'Civil Rights Movement',
    '1950s': 'Post-War Boom',
  };

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

  // Filter chapters by selected decade
  const getDecadeStart = (label) => parseInt(label);
  const filteredChapters = selectedDecade
    ? chapters.filter(ch => {
        const year = parseInt(ch.date);
        const start = getDecadeStart(selectedDecade);
        return year >= start && year <= start + 9;
      })
    : chapters;

  const activeEvent = selectedDecade ? worldEvents[selectedDecade] : worldEvents['2020s'];

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
          <div
            onClick={() => setSelectedDecade(null)}
            style={{
              margin: '15px 0',
              fontSize: '12px',
              fontWeight: '600',
              color: selectedDecade === null ? '#1a8917' : '#666',
              cursor: 'pointer'
            }}
          >
            All
          </div>
          {decades.map(decade => (
            <div
              key={decade}
              onClick={() => setSelectedDecade(decade)}
              style={{
                margin: '15px 0',
                fontSize: '12px',
                fontWeight: '600',
                color: selectedDecade === decade ? '#1a8917' : '#666',
                cursor: 'pointer'
              }}
            >
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
            {activeEvent}
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              Loading chapters...
            </div>
          )}

          {/* Empty state */}
          {!loading && filteredChapters.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              {selectedDecade
                ? `No chapters from the ${selectedDecade} yet. Be the first!`
                : 'No chapters yet. Be the first to share your story!'}
            </div>
          )}

          {/* Chapter Cards */}
          {!loading && filteredChapters.map((chapter) => {
            const isAnonymous = chapter.privacy === 'anonymous';
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
                    <div>{chapter.date} · {chapter.country}</div>
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

      {/* Chapter Detail Modal */}
      {selectedChapter && (
        <ChapterModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
        />
      )}

      <BottomNav />
    </div>
  );
}

export default Explore;
