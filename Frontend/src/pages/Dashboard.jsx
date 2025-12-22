import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import * as cardAPI from '../api/cardAPI';
import { BASE_URL } from '../config/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const data = await cardAPI.getCards();
      setCards(data);
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate total views and shares
  const totalViews = cards.reduce((sum, card) => sum + (card.views || 0), 0);
  const totalShares = cards.reduce((sum, card) => sum + (card.shares || 0), 0);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      try {
        await cardAPI.deleteCard(id);
        setCards(cards.filter(card => card._id !== id));
      } catch (error) {
        alert('Failed to delete card');
      }
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading your cards...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      {/* Ambient Background */}
      <div className="dashboard-ambient">
        <div className="ambient-glow ambient-glow-1"></div>
        <div className="ambient-glow ambient-glow-2"></div>
      </div>

      <div className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2 className="welcome-title">
            👋 Welcome back, <span className="text-primary">{user?.name || 'User'}!</span>
          </h2>
          <p className="welcome-subtitle">Here's what's happening with your cards today.</p>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Total Cards</span>
              <span className="material-symbols-outlined stat-icon icon-primary">style</span>
            </div>
            <p className="stat-value">{cards.length}</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Views</span>
              <span className="material-symbols-outlined stat-icon icon-blue">visibility</span>
            </div>
            <p className="stat-value">{totalViews.toLocaleString()}</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Shares</span>
              <span className="material-symbols-outlined stat-icon icon-purple">share</span>
            </div>
            <p className="stat-value">{totalShares.toLocaleString()}</p>
          </div>
        </section>

        {/* Primary Action */}
        <section className="action-section">
          <Link to="/create-card" className="create-card-btn">
            <span className="material-symbols-outlined">add</span>
            Create New Card
          </Link>
        </section>

        {/* Cards Grid */}
        <section className="cards-section">
          <div className="cards-header">
            <h3 className="cards-title">Your Cards</h3>
            <button className="view-all-btn">View All</button>
          </div>

          {cards.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🪪</div>
              <h3 className="empty-title">No cards yet</h3>
              <p className="empty-text">
                Create your first digital business card and start sharing it with the world!
              </p>
              <Link to="/create-card" className="empty-btn">
                Get Started
              </Link>
            </div>
          ) : (
            <div className="cards-grid">
              {cards.map(card => (
                <div key={card._id} className="card-item">
                  {/* Cover Area */}
                  <div className="card-cover"></div>

                  {/* Content Area */}
                  <div className="card-body">
                    {/* Avatar */}
                    <div className="card-avatar-wrapper">
                      {card.profileImage ? (
                        <img 
                          src={card.profileImage.startsWith('http') ? card.profileImage : `${BASE_URL}${card.profileImage}`} 
                          alt={card.name} 
                          className="card-avatar" 
                        />
                      ) : (
                        <div className="card-avatar-placeholder">
                          {card.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="card-status">
                      <span className="views-badge">
                        <span className="material-symbols-outlined">visibility</span>
                        {card.views || 0}
                      </span>
                      <span className="shares-badge">
                        <span className="material-symbols-outlined">share</span>
                        {card.shares || 0}
                      </span>
                    </div>

                    {/* Card Info */}
                    <div className="card-info">
                      <h4 className="card-name">{card.name}</h4>
                      <p className="card-title">{card.title || 'No title'} {card.company && `@ ${card.company}`}</p>
                      
                      <div className="card-meta">
                        {card.email && (
                          <div className="meta-item">
                            <span className="material-symbols-outlined">mail</span>
                            <span>{card.email}</span>
                          </div>
                        )}
                        {card.phone && (
                          <div className="meta-item">
                            <span className="material-symbols-outlined">call</span>
                            <span>{card.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="card-divider"></div>

                    {/* Actions */}
                    <div className="card-actions">
                      <Link to={`/card/${card._id}`} className="card-action-btn btn-view">
                        <span className="material-symbols-outlined">visibility</span>
                        View
                      </Link>
                      <Link to={`/edit-card/${card._id}`} className="card-action-btn btn-edit">
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                      <button onClick={() => handleDelete(card._id)} className="card-action-btn btn-delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
