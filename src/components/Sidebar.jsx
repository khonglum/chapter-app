import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const navItems = [
  { icon: <HomeIcon />, label: 'Home', path: '/' },
  { icon: <ExploreIcon />, label: 'Explore', path: '/explore' },
  { icon: <TimelineIcon />, label: 'Timeline', path: '/timeline' },
  { icon: <PersonIcon />, label: 'Profile', path: '/profile' },
];

function Sidebar({ user }) {
  const navigate = useNavigate();
  const location = useLocation();

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';

  return (
    <div
      className="layout-sidebar"
      style={{
        position: 'fixed',
        left: 0, top: 0, bottom: 0,
        width: '240px',
        background: '#fff',
        borderRight: '1px solid #e8e8e8',
        flexDirection: 'column',
        padding: '24px 16px',
        zIndex: 100,
        boxSizing: 'border-box',
      }}
    >
      {/* Brand */}
      <div
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
          padding: '4px 12px',
          marginBottom: '32px',
        }}
      >
        <img src="/Chapter.svg" alt="Chapter" style={{ height: '42px' }} />
      </div>

      {/* Nav Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: isActive ? '600' : '400',
                color: isActive ? '#1a8917' : '#333',
                background: isActive ? '#f0f7f0' : 'transparent',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ display: 'flex', color: 'inherit' }}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </nav>

      {/* Write Button */}
      <button
        onClick={() => navigate('/create')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          padding: '12px',
          marginTop: '24px',
          background: '#1a8917',
          color: '#fff',
          border: 'none',
          borderRadius: '24px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#156d13'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1a8917'}
      >
        <AddIcon style={{ fontSize: 20 }} />
        Write
      </button>

      {/* User Section */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '24px',
        borderTop: '1px solid #f0f0f0',
      }}>
        {user ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            onClick={() => navigate('/profile')}
          >
            <div style={{
              width: '36px', height: '36px',
              background: '#1a8917',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#fff', fontWeight: '600', flexShrink: 0,
            }}>
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div style={{ minWidth: 0, textAlign: 'left' }}>
              <div style={{
                fontSize: '14px', fontWeight: '600', color: '#191919',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {displayName}
              </div>
              <div style={{
                fontSize: '12px', color: '#888',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {user.email}
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => navigate('/login')}
            style={{
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '500',
              color: '#1a8917',
              textAlign: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f0f7f0'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            Sign In
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
