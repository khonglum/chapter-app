import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import SettingsIcon from '@mui/icons-material/Settings';

function Profile() {
  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fafafa' }}>
      {/* Header with Settings */}
      <div style={{
        padding: '20px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>Profile</h1>
        <SettingsIcon 
  onClick={() => {
    if (window.confirm('Log out?')) {
      signOut(auth);
      window.location.href = '/login';
    }
  }}
  style={{ cursor: 'pointer', color: '#666' }} 
/>
      </div>

      {/* Profile Header */}
      <div style={{
        background: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#ddd',
          borderRadius: '50%',
          margin: '0 auto 15px'
        }}></div>
        
        <h2 style={{ fontSize: '1.3em', marginBottom: '5px' }}>Your Name</h2>
        <p style={{ color: '#666', fontSize: '0.9em', marginBottom: '20px' }}>
          Storyteller from Your City
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          fontSize: '0.9em'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>0</div>
            <div style={{ color: '#666' }}>Chapters</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>0</div>
            <div style={{ color: '#666' }}>Followers</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '1.2em' }}>0</div>
            <div style={{ color: '#666' }}>Following</div>
          </div>
        </div>

        <button style={{
          marginTop: '20px',
          padding: '10px 30px',
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '6px',
          fontSize: '0.9em',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Edit Profile
        </button>
      </div>

      {/* Chapters Grid (Empty State) */}
      <div style={{ padding: '30px 20px' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '1.1em' }}>My Chapters</h3>
        
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#999'
        }}>
          <div style={{ fontSize: '3em', marginBottom: '10px' }}>📝</div>
          <p>No chapters yet</p>
          <p style={{ fontSize: '0.9em' }}>Start writing your story</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Profile;