import { useState, useRef, useEffect } from 'react';

function EventPill({ label, desc, variant = 'world' }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tapped, setTapped] = useState(false);
  const pillRef = useRef(null);
  const timeoutRef = useRef(null);

  const isWorld = variant === 'world';

  const pillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 12px',
    borderRadius: '14px',
    fontSize: '12px',
    cursor: desc ? 'pointer' : 'default',
    position: 'relative',
    transition: 'background 0.15s',
    ...(isWorld
      ? { background: '#fff', border: '1px solid #e0e0e0', color: '#555' }
      : { background: '#f0f7f0', border: '1px solid #c8e6c9', color: '#2e7d32' }
    ),
  };

  const dotColor = isWorld ? '#1a8917' : '#2e7d32';

  // Desktop: show tooltip on hover with delay
  const handleMouseEnter = () => {
    if (!desc) return;
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowTooltip(false);
  };

  // Mobile: toggle on tap
  const handleClick = () => {
    if (!desc) return;
    setTapped(prev => !prev);
  };

  // Close tapped tooltip when clicking outside
  useEffect(() => {
    if (!tapped) return;
    const handleOutside = (e) => {
      if (pillRef.current && !pillRef.current.contains(e.target)) {
        setTapped(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [tapped]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const isVisible = showTooltip || tapped;

  return (
    <span
      ref={pillRef}
      style={pillStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span style={{
        width: '6px', height: '6px',
        borderRadius: '50%',
        background: dotColor,
        flexShrink: 0,
      }} />
      {label}

      {/* Tooltip */}
      {desc && isVisible && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a1a1a',
          color: '#fff',
          padding: '10px 14px',
          borderRadius: '8px',
          fontSize: '12px',
          lineHeight: '1.5',
          width: '260px',
          maxWidth: '80vw',
          zIndex: 100,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          pointerEvents: 'none',
          whiteSpace: 'normal',
        }}>
          <div style={{ fontWeight: '600', marginBottom: '4px', fontSize: '13px' }}>
            {label}
          </div>
          <div style={{ color: '#ccc' }}>
            {desc}
          </div>
          {/* Arrow */}
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #1a1a1a',
          }} />
        </div>
      )}
    </span>
  );
}

export default EventPill;
