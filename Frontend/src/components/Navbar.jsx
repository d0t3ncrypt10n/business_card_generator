import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="material-symbols-outlined logo-icon">contact_page</span>
          <h2 className="logo-text">DigiCard</h2>
        </Link>
        <div className="navbar-links">
          {user ? (
            <>
              <Link 
                to="/browse" 
                className={`nav-link ${isActive('/browse') ? 'nav-link-active' : ''}`}
              >
                <span className="material-symbols-outlined">explore</span>
                Browse Cards
              </Link>
              <span className="user-greeting">👋 {user.name}</span>
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'nav-link-active' : ''}`}
              >
                Dashboard
              </Link>
              <button onClick={logout} className="nav-button nav-button-logout">
                <span className="material-symbols-outlined">logout</span>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/browse" 
                className={`nav-link ${isActive('/browse') ? 'nav-link-active' : ''}`}
              >
                <span className="material-symbols-outlined">explore</span>
                Browse Cards
              </Link>
              <Link 
                to="/login" 
                className={`nav-link ${isActive('/login') ? 'nav-link-active' : ''}`}
              >
                Login
              </Link>
              <Link to="/register" className="nav-button nav-button-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
