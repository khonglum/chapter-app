import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const googleProvider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created! Welcome to Chapter! 🎉');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafafa'
    }}>
      <div style={{
        padding: '40px',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src="/Chapter.svg" alt="Chapter" style={{ height: '48px' }} />
        </div>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          {isSignup ? 'Create your account' : 'Welcome back'}
        </p>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: '#fff',
            color: '#333',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            fontSize: '1em',
            fontWeight: '500',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
            boxSizing: 'border-box',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}>
          <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }} />
          <span style={{ fontSize: '13px', color: '#999' }}>or</span>
          <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }} />
        </div>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '15px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '1em'
              }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              fontSize: '1em'
            }}
          />

          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              fontSize: '1em'
            }}
          />

          {error && (
            <div style={{
              padding: '10px',
              background: '#fee',
              color: '#c00',
              borderRadius: '6px',
              marginBottom: '15px',
              fontSize: '0.9em'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#ccc' : '#1a8917',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1em',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Loading...' : (isSignup ? 'Sign Up' : 'Log In')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setIsSignup(!isSignup)}
            style={{
              background: 'none',
              border: 'none',
              color: '#1a8917',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;