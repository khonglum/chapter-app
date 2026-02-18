import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import './Layout.css';

function Layout({ children }) {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="layout-container">
      <Sidebar user={user} />
      <div className="layout-bottom-nav">
        <BottomNav />
      </div>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
