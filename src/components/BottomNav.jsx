import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonIcon from '@mui/icons-material/Person';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <HomeIcon />, label: 'Home', path: '/' },
    { icon: <ExploreIcon />, label: 'Explore', path: '/explore' },
    { icon: <TimelineIcon />, label: 'Timeline', path: '/timeline' },
    { icon: <PersonIcon />, label: 'Profile', path: '/profile' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px',
      background: 'white',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 100
    }}>
      {navItems.map((item, i) => {
        const isActive = location.pathname === item.path;
        return (
          <div
            key={i}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '11px',
              color: isActive ? '#1a8917' : '#666',
              cursor: 'pointer'
            }}
          >
            <div style={{ color: 'inherit' }}>{item.icon}</div>
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BottomNav;