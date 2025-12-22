import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as cardAPI from '../api/cardAPI';
import { BASE_URL } from '../config/api';
import './BrowseCards.css';

const BrowseCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const data = await cardAPI.getAllPublicCards();
      setCards(data);
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="browse-loading">
        <div className="spinner"></div>
        <p>Loading cards...</p>
      </div>
    );
  }

  return (
    <div className="browse-wrapper">
      {/* Ambient Background */}
      <div className="browse-ambient">
        <div className="ambient-glow ambient-glow-1"></div>
        <div className="ambient-glow ambient-glow-2"></div>
      </div>

      <div className="browse-content">
        {/* Header Section */}
        <section className="browse-header">
          <h1 className="browse-title">
            🌐 Browse <span className="text-primary">Business Cards</span>
          </h1>
          <p className="browse-subtitle">
            Discover digital business cards from professionals around the world
          </p>
        </section>

        {/* Stats Bar */}
        <section className="browse-stats">
          <div className="stat-item">
            <span className="material-symbols-outlined">style</span>
            <span className="stat-text">{cards.length} Cards</span>
          </div>
          <div className="stat-item">
            <span className="material-symbols-outlined">people</span>
            <span className="stat-text">From Professionals Worldwide</span>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="browse-cards-section">
          {cards.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🪪</div>
              <h3 className="empty-title">No cards yet</h3>
              <p className="empty-text">
                Be the first to create a digital business card!
              </p>
              <Link to="/create-card" className="empty-btn">
                Create Your Card
              </Link>
            </div>
          ) : (
            <div className="browse-cards-grid">
              {cards.map((card, index) => (
                <Link 
                  to={`/card/${card._id}`} 
                  key={card._id} 
                  className="browse-card-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Cover */}
                  <div className="browse-card-cover"></div>

                  {/* Card Body */}
                  <div className="browse-card-body">
                    {/* Avatar */}
                    <div className="browse-card-avatar-wrapper">
                      {card.profileImage ? (
                        <img 
                          src={card.profileImage.startsWith('http') ? card.profileImage : `${BASE_URL}${card.profileImage}`} 
                          alt={card.name} 
                          className="browse-card-avatar" 
                        />
                      ) : (
                        <div className="browse-card-avatar-placeholder">
                          {card.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Stats Badge */}
                    <div className="browse-card-stats">
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
                    <div className="browse-card-info">
                      <h4 className="browse-card-name">{card.name}</h4>
                      <p className="browse-card-title">
                        {card.title || 'Professional'} 
                        {card.company && ` @ ${card.company}`}
                      </p>
                      
                      {card.bio && (
                        <p className="browse-card-bio">{card.bio}</p>
                      )}

                      <div className="browse-card-meta">
                        {card.location && (
                          <div className="meta-item">
                            <span className="material-symbols-outlined">location_on</span>
                            <span>{card.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="browse-card-action">
                      <span className="view-card-btn">
                        <span className="material-symbols-outlined">visibility</span>
                        View Card
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BrowseCards;
