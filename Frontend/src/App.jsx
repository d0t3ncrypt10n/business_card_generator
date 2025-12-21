import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateCard from './pages/CreateCard';
import EditCard from './pages/EditCard';
import PublicCard from './pages/PublicCard';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid rgba(255, 255, 255, 0.3)',
          borderTop: '4px solid #fff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('/edit-card') || location.pathname.includes('/create-card');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/create-card" element={<ProtectedRoute><CreateCard /></ProtectedRoute>} />
        <Route path="/edit-card/:id" element={<ProtectedRoute><EditCard /></ProtectedRoute>} />
        <Route path="/card/:id" element={<PublicCard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
