import { useState, useRef, useEffect } from 'react';
import states from '../data/states';

function StateSelect({ country, value, onChange, placeholder = 'State / Region (optional)', style = {} }) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Get the country name without emoji
  const countryName = country
    ? country.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim()
    : '';

  // Get states for the selected country
  const stateList = states[countryName] || [];

  const displayValue = isOpen ? search : value || '';

  const filtered = stateList.filter(s =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  // Reset value when country changes
  useEffect(() => {
    if (value && stateList.length > 0 && !stateList.includes(value)) {
      onChange('');
    }
  }, [countryName]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (state) => {
    onChange(state);
    setSearch('');
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setSearch('');
    setIsOpen(false);
  };

  // If no states available for this country, show a free text input
  if (!countryName || stateList.length === 0) {
    return (
      <div style={{ position: 'relative', ...style }}>
        <input
          type="text"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            background: '#fff',
            boxSizing: 'border-box',
          }}
        />
      </div>
    );
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative', ...style }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder={placeholder}
          value={displayValue}
          onFocus={() => {
            setIsOpen(true);
            setSearch('');
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          style={{
            width: '100%',
            padding: '10px 32px 10px 12px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            background: '#fff',
            boxSizing: 'border-box',
          }}
        />
        {value && (
          <span
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#999',
              fontSize: '16px',
              lineHeight: '1',
            }}
          >
            ×
          </span>
        )}
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          maxHeight: '200px',
          overflowY: 'auto',
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          marginTop: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 50,
        }}>
          {filtered.length === 0 && (
            <div style={{ padding: '12px', color: '#999', fontSize: '13px', textAlign: 'center' }}>
              No matches found
            </div>
          )}
          {filtered.map(state => (
            <div
              key={state}
              onClick={() => handleSelect(state)}
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              {state}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StateSelect;
