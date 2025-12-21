import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">Start creating amazing digital business cards</p>
          </div>

          {error && (
            <div className="auth-error">
              <span className="material-symbols-outlined">warning</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-input-group">
              <label className="auth-label">
                <span className="material-symbols-outlined">person</span>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
                className="auth-input"
              />
            </div>

            <div className="auth-input-group">
              <label className="auth-label">
                <span className="material-symbols-outlined">mail</span>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="auth-input"
              />
            </div>

            <div className="auth-input-group">
              <label className="auth-label">
                <span className="material-symbols-outlined">key</span>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="auth-input"
                minLength="6"
              />
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Must be at least 6 characters</p>
            </div>

            <button 
              type="submit" 
              className="auth-button"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-footer-text">
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
