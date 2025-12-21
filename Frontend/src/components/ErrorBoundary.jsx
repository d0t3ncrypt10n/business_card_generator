import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.icon}>⚠️</div>
            <h1 style={styles.title}>Oops! Something went wrong</h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              style={styles.button}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    padding: '3rem',
    borderRadius: '24px',
    textAlign: 'center',
    maxWidth: '500px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  icon: {
    fontSize: '5rem',
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  message: {
    fontSize: '1.1rem',
    color: '#6b7280',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  button: {
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
  }
};

export default ErrorBoundary;
