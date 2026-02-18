import { useState, useRef, useEffect } from 'react';
import countries from '../data/countries';

function CountrySelect({ value, onChange, placeholder = 'Select country...', style = {} }) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Display value: show the selected country name, or the search text while typing
  const displayValue = isOpen ? search : value || '';

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.emoji.includes(search)
  );

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

  const handleSelect = (country) => {
    onChange(`${country.emoji} ${country.name}`);
    setSearch('');
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setSearch('');
    setIsOpen(false);
  };

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
              No countries found
            </div>
          )}
          {filtered.map(country => (
            <div
              key={country.code}
              onClick={() => handleSelect(country)}
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              <span>{country.emoji}</span>
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountrySelect;
