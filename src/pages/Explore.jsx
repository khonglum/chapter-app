import { useState, useEffect, useRef } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import ChapterModal from '../components/ChapterModal';
import CountrySelect from '../components/CountrySelect';

// Base decades: 1970 – 2030 always shown
const BASE_MIN_DECADE = 1970;
const BASE_MAX_DECADE = 2020; // "2020s" = 2020–2030

// Build decades array dynamically: base range + extend for earlier chapters
const buildDecades = (chapters) => {
  let minDecade = BASE_MIN_DECADE;
  chapters.forEach(ch => {
    const year = getYear(ch.date);
    const decadeStart = Math.floor(year / 10) * 10;
    if (decadeStart < minDecade) minDecade = decadeStart;
  });
  const result = [];
  for (let d = BASE_MAX_DECADE; d >= minDecade; d -= 10) {
    result.push(`${d}s`);
  }
  return result;
};

// Display label: "2010s" → "2010 – 2020"
const decadeLabel = (decade) => {
  const start = parseInt(decade);
  return `${start} – ${start + 10}`;
};

const worldEvents = {
  '2020s': ['COVID-19 Pandemic', 'Rise of AI', 'Climate Crisis'],
  '2010s': ['Social Media Revolution', 'Arab Spring', 'Bitcoin & Crypto'],
  '2000s': ['Rise of the Internet', '9/11 & War on Terror', 'iPhone Launch'],
  '1990s': ['Fall of the Berlin Wall', 'World Wide Web', 'Mandela Freed'],
  '1980s': ['End of the Cold War', 'MTV & Pop Culture', 'Chernobyl'],
  '1970s': ['Moon Landing Era', 'Oil Crisis', 'Watergate'],
  '1960s': ['Civil Rights Movement', 'Vietnam War', 'Woodstock'],
  '1950s': ['Post-War Boom', 'Korean War', 'Rock & Roll'],
  '1940s': ['World War II', 'Atomic Bomb', 'United Nations Founded'],
  '1930s': ['The Great Depression', 'Rise of Fascism', 'Golden Age of Cinema'],
  '1920s': ['The Roaring Twenties', 'Jazz Age', 'Women\'s Suffrage'],
  '1910s': ['World War I', 'Russian Revolution', 'Spanish Flu'],
  '1900s': ['Wright Brothers Flight', 'Einstein\'s Relativity', 'Ford Model T'],
};

// Parse date field to sortable value — handles "2020", "2020-05-14", numbers, Timestamps
const parseDateValue = (dateStr) => {
  if (!dateStr) return 0;
  if (dateStr.toDate) return dateStr.toDate().getTime();
  if (typeof dateStr === 'number') return new Date(dateStr + '-01-01T00:00:00').getTime();
  const str = String(dateStr);
  if (str.includes('-')) return new Date(str + 'T00:00:00').getTime();
  return new Date(str + '-01-01T00:00:00').getTime();
};

// Extract year from date field — handles "2020", "2020-05-14", numbers, Timestamps
const getYear = (dateStr) => {
  if (!dateStr) return new Date().getFullYear();
  // Firestore Timestamp object
  if (dateStr.toDate) return dateStr.toDate().getFullYear();
  // Numeric year (e.g. 1995)
  if (typeof dateStr === 'number') return dateStr;
  // String — "2020" or "2020-05-14"
  const str = String(dateStr);
  return parseInt(str.substring(0, 4)) || new Date().getFullYear();
};

// Format date for display — "2020" stays as is, "2020-05-14" becomes "May 14, 2020"
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

function Explore() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeDecade, setActiveDecade] = useState('2020s');
  const [countryFilter, setCountryFilter] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const q = query(collection(db, 'chapters'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const chaptersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
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

  // Build dynamic decades from chapters data
  const decades = buildDecades(chapters);

  // Track which decade is in view
  useEffect(() => {
    const observers = [];
    decades.forEach(decade => {
      const el = sectionRefs.current[decade];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveDecade(decade);
        },
        { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [loading, decades.length]);

  // Filter chapters by country if set
  // Flexible match: handles both "🇭🇰 Hong Kong" and legacy "Hong Kong"
  const filteredChapters = countryFilter
    ? chapters.filter(ch => {
        if (!ch.country) return false;
        if (ch.country === countryFilter) return true;
        // Strip emoji from both and compare names
        const filterName = countryFilter.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
        const chapterName = ch.country.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
        return filterName && chapterName && filterName.toLowerCase() === chapterName.toLowerCase();
      })
    : chapters;

  // Group chapters by decade
  const chaptersByDecade = {};
  decades.forEach(d => { chaptersByDecade[d] = []; });
  filteredChapters.forEach(ch => {
    const year = getYear(ch.date);
    const decadeStart = Math.floor(year / 10) * 10;
    const key = `${decadeStart}s`;
    if (chaptersByDecade[key]) {
      chaptersByDecade[key].push(ch);
    }
  });
  // Sort each decade's chapters by date desc
  Object.keys(chaptersByDecade).forEach(key => {
    chaptersByDecade[key].sort((a, b) => parseDateValue(b.date) - parseDateValue(a.date));
  });

  const scrollToDecade = (decade) => {
    const el = sectionRefs.current[decade];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Strip email — show username only
  const displayAuthor = (author) => {
    if (!author) return 'Anonymous';
    if (author.includes('@')) return author.split('@')[0];
    return author;
  };

  const ChapterCard = ({ chapter }) => {
    const isAnonymous = chapter.privacy === 'anonymous';
    const authorName = isAnonymous ? 'Anonymous' : displayAuthor(chapter.author);
    return (
      <div
        onClick={() => setSelectedChapter(chapter)}
        style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '18px',
          border: '1px solid #e8e8e8',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
      >
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0,
            width: '34px', height: '34px',
            background: isAnonymous ? '#9e9e9e' : '#1a8917',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', color: '#fff', fontWeight: '600',
          }}>
            {isAnonymous ? '?' : (authorName.charAt(0) || '').toUpperCase()}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '13px', color: '#111', lineHeight: '1.3' }}>
              {authorName}
            </div>
            <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.3' }}>
              {formatDate(chapter.date)} · {chapter.country}
            </div>
          </div>
        </div>
        <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '8px', color: '#111', lineHeight: '1.4', textAlign: 'center' }}>
          {chapter.title}
        </div>
        <div style={{
          fontSize: '14px', color: '#555',
          fontFamily: 'Georgia, serif', lineHeight: '1.6',
          overflow: 'hidden',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'
        }}>
          {chapter.story}
        </div>
        {chapter.tags && chapter.tags.length > 0 && (
          <div style={{ marginTop: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {chapter.tags.slice(0, 4).map((tag, i) => (
              <span key={i} style={{
                background: '#f5f5f5', padding: '3px 10px',
                borderRadius: '12px', fontSize: '11px', color: '#666'
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }}>
      {/* Sticky header */}
      <div style={{
        position: 'sticky', top: 0, background: '#fff',
        zIndex: 10, borderBottom: '1px solid #e8e8e8'
      }}>
        {/* Search + Country Filter */}
        <div style={{ padding: '16px 20px 12px', maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              placeholder="Search chapters, tags, countries..."
              style={{
                width: '100%', padding: '10px 18px',
                border: '1px solid #e0e0e0', borderRadius: '8px',
                fontSize: '14px', outline: 'none', background: '#f9f9f9',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ width: '200px', flexShrink: 0 }}>
            <CountrySelect
              value={countryFilter}
              onChange={setCountryFilter}
              placeholder="Filter by country..."
            />
          </div>
        </div>

        {/* Decade quick-nav (scroll-to anchors) */}
        <div style={{
          padding: '0 20px 12px',
          maxWidth: '900px', margin: '0 auto',
          overflowX: 'auto', whiteSpace: 'nowrap',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none', scrollbarWidth: 'none'
        }}>
          {decades.map(decade => (
            <button
              key={decade}
              onClick={() => scrollToDecade(decade)}
              style={{
                display: 'inline-block',
                padding: '6px 16px', marginRight: '8px',
                borderRadius: '20px', fontSize: '13px', fontWeight: '600',
                border: activeDecade === decade ? '1.5px solid #1a8917' : '1px solid #ddd',
                background: activeDecade === decade ? '#1a8917' : '#fff',
                color: activeDecade === decade ? '#fff' : '#555',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {decadeLabel(decade)}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '8px 20px 40px' }}>

        {loading && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            Loading chapters...
          </div>
        )}

        {!loading && (
          <div style={{ position: 'relative' }}>
            {/* Timeline vertical line */}
            <div style={{
              position: 'absolute',
              left: '11px',
              top: '24px',
              bottom: '24px',
              width: '2px',
              background: '#e0e0e0',
            }} />

            {decades.map((decade, decadeIndex) => {
              const decadeChapters = chaptersByDecade[decade] || [];
              const events = worldEvents[decade] || [];

              return (
                <div
                  key={decade}
                  id={`decade-${decade}`}
                  ref={el => sectionRefs.current[decade] = el}
                  style={{
                    position: 'relative',
                    paddingLeft: '40px',
                    paddingBottom: decadeIndex < decades.length - 1 ? '32px' : '0',
                    scrollMarginTop: '130px',
                  }}
                >
                  {/* Decade dot on timeline */}
                  <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: decadeChapters.length > 0 ? '#1a8917' : '#ccc',
                    border: '3px solid #fafafa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}>
                    <div style={{
                      width: '8px', height: '8px',
                      borderRadius: '50%', background: '#fff'
                    }} />
                  </div>

                  {/* Decade header */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{
                      fontSize: '22px', fontWeight: '800', color: '#111',
                      marginBottom: '8px', lineHeight: '24px'
                    }}>
                      {decadeLabel(decade)}
                    </div>

                    {/* World events */}
                    <div style={{
                      display: 'flex', gap: '8px', flexWrap: 'wrap',
                    }}>
                      {events.map((event, i) => (
                        <span key={i} style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          padding: '4px 12px',
                          borderRadius: '14px',
                          fontSize: '12px',
                          color: '#555',
                        }}>
                          <span style={{
                            width: '6px', height: '6px',
                            borderRadius: '50%',
                            background: '#1a8917',
                            flexShrink: 0,
                          }} />
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chapter count */}
                  {decadeChapters.length > 0 && (
                    <div style={{
                      fontSize: '12px', color: '#999', marginBottom: '12px',
                    }}>
                      {decadeChapters.length} {decadeChapters.length === 1 ? 'story' : 'stories'}
                    </div>
                  )}

                  {/* Chapter cards — 2 column grid */}
                  {decadeChapters.length > 0 && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                    }}>
                      {decadeChapters.map(chapter => (
                        <ChapterCard key={chapter.id} chapter={chapter} />
                      ))}
                    </div>
                  )}

                  {/* Empty decade state */}
                  {decadeChapters.length === 0 && (
                    <div style={{
                      padding: '20px',
                      background: '#fff',
                      border: '1px dashed #ddd',
                      borderRadius: '10px',
                      textAlign: 'center',
                      color: '#aaa',
                      fontSize: '13px',
                    }}>
                      No stories from this era yet — be the first to share
                    </div>
                  )}
                </div>
              );
            })}
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
    </div>
  );
}

export default Explore;
