import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #191919 0%, #2c2c2c 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <img src="/Chapter.svg" alt="Chapter" style={{ height: '56px', filter: 'invert(1)', marginBottom: '15px' }} />
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>
          Your life story, in the context of world history
        </p>
      </div>

      {/* Interactive World Timeline Preview */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '1.5em' }}>Explore Stories Through Time</h2>
        
        {/* Mini Timeline */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px 20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#1a8917' }}>2020s</div>
            <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>Current Decade</div>
          </div>
          
          <div style={{
            background: '#f9f9f9',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            borderLeft: '3px solid #191919'
          }}>
            <div style={{ fontSize: '0.85em', color: '#666', marginBottom: '5px' }}>World Event</div>
            <div style={{ fontWeight: '600' }}>COVID-19 Pandemic</div>
          </div>

          <div style={{ fontSize: '0.9em', color: '#666', textAlign: 'center' }}>
            Join thousands sharing their stories across decades
          </div>
        </div>
      </div>

      {/* CTA Section */}
        <div style={{ padding: '20px' }}>
        <button 
            onClick={() => navigate('/create')}
            style={{
            width: '100%',
            padding: '15px',
            background: '#1a8917',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1em',
            fontWeight: '600',
            cursor: 'pointer'
            }}
        >
            Start Your Chapter
        </button>
        </div>

    </div>
  );
}

export default Home;