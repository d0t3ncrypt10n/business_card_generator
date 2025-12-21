import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as cardAPI from '../api/cardAPI';
import { BASE_URL } from '../config/api';
import CardPreview from '../components/CardPreview';
import './PublicCard.css';

const PublicCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const viewCounted = useRef(false);

  const loadCard = async () => {
    try {
      const data = await cardAPI.getPublicCard(id);
      setCard(data);
      
      // Increment view count only once
      if (!viewCounted.current) {
        viewCounted.current = true;
        await cardAPI.incrementCardView(id);
      }
    } catch (error) {
      console.error('Failed to load card:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateQRCode = async () => {
    try {
      const url = window.location.href;
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: {
          dark: '#102217',
          light: '#ffffff'
        }
      });
      setQrCodeUrl(qrDataUrl);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    }
  };

  useEffect(() => {
    loadCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (card) {
      generateQRCode();
    }
  }, [card]);

  const downloadPNG = async () => {
    const element = document.getElementById('business-card');
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#102217'
    });
    const link = document.createElement('a');
    link.download = `${card.name}-business-card.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadPDF = async () => {
    const element = document.getElementById('business-card');
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#102217'
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save(`${card.name}-business-card.pdf`);
  };

  const shareCard = async () => {
    const url = window.location.href;
    
    // Increment share count
    try {
      await cardAPI.incrementCardShare(id);
    } catch (error) {
      console.error('Failed to increment share count:', error);
    }
    
    if (navigator.share) {
      navigator.share({ 
        title: `${card.name}'s Business Card`, 
        text: `Check out ${card.name}'s digital business card!`,
        url 
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('✅ Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="public-loading">
        <div className="spinner"></div>
        <p>Loading card...</p>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="public-error">
        <span className="material-symbols-outlined error-icon">error</span>
        <h2>Card Not Found</h2>
        <p>The business card you're looking for doesn't exist.</p>
      </div>
    );
  }

  const themeColor = card.theme?.color || '#2bee79';

  return (
    <div className="public-wrapper">
      {/* Ambient Blobs */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <div className="ambient-blob blob-3"></div>

      <div className="public-container">
        {/* Business Card Preview - Larger Version */}
        <div className="card-preview-large">
          <div id="business-card">
            <CardPreview cardData={card} />
          </div>
        </div>

        {/* Contact Details Section */}
        {(card.email || card.phone || card.website) && (
          <div className="details-section glass-panel">
            <h3 className="section-title">
              <span className="material-symbols-outlined">contact_mail</span>
              Contact Information
            </h3>
            <div className="contact-grid">
              {card.email && (
                <a href={`mailto:${card.email}`} className="contact-item">
                  <span className="material-symbols-outlined contact-icon">mail</span>
                  <span className="contact-text">{card.email}</span>
                </a>
              )}
              {card.phone && (
                <a href={`tel:${card.phone}`} className="contact-item">
                  <span className="material-symbols-outlined contact-icon">call</span>
                  <span className="contact-text">{card.phone}</span>
                </a>
              )}
              {card.website && (
                <a href={card.website} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="material-symbols-outlined contact-icon">language</span>
                  <span className="contact-text">{card.website}</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Social Links Section */}
        {(card.socialLinks?.linkedin || card.socialLinks?.github || card.socialLinks?.instagram || card.socialLinks?.twitter) && (
          <div className="social-section glass-panel">
            <h3 className="section-title">
              <span className="material-symbols-outlined">share</span>
              Connect With Me
            </h3>
            <div className="social-grid">
              {card.socialLinks?.linkedin && (
                <a href={card.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link social-linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
              {card.socialLinks?.github && (
                <a href={card.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link social-github">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {card.socialLinks?.instagram && (
                <a href={card.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link social-instagram">
                  <span className="material-symbols-outlined">photo_camera</span>
                  Instagram
                </a>
              )}
              {card.socialLinks?.twitter && (
                <a href={card.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link social-twitter">
                  <span className="material-symbols-outlined">tag</span>
                  Twitter
                </a>
              )}
            </div>
          </div>
        )}

        {/* QR Code Section */}
        <div className="qr-section glass-panel">
          <h3 className="qr-title">
            <span className="material-symbols-outlined">qr_code_2</span>
            Scan to Share
          </h3>
          {qrCodeUrl && (
            <div className="qr-wrapper">
              <img src={qrCodeUrl} alt="QR Code" className="qr-image" />
            </div>
          )}
          <p className="qr-subtitle">Scan this code to view this card on your device</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={downloadPNG} className="action-btn">
            <span className="material-symbols-outlined">image</span>
            Download PNG
          </button>
          <button onClick={downloadPDF} className="action-btn">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Download PDF
          </button>
          <button onClick={shareCard} className="action-btn action-btn-primary" style={{ background: themeColor }}>
            <span className="material-symbols-outlined">share</span>
            Share Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicCard;
