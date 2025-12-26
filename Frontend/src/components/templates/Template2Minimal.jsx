// Template 2: Minimalist Center - Centered Vertical
import { BASE_URL } from '../../config/api';
import { getBusinessType } from '../../utils/businessTypes';
import './CardTemplates.css';

const Template2Minimal = ({ cardData }) => {
  const { name, title, company, email, phone, website, socialLinks, profileImage, theme, bio, location, businessType } = cardData;
  const themeColor = theme?.color || '#2bee79';
  
  const businessTypeData = businessType ? getBusinessType(businessType) : null;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `${BASE_URL}${imagePath}`;
  };

  const imageUrl = getImageUrl(profileImage);

  return (
    <div className="template-card template-minimal">
      <div className="template-bg" style={{ 
        background: `radial-gradient(circle at center, rgba(${parseInt(themeColor.slice(1,3), 16)}, ${parseInt(themeColor.slice(3,5), 16)}, ${parseInt(themeColor.slice(5,7), 16)}, 0.1) 0%, rgba(16,34,23,1) 70%)`,
      }}>
        <div className="template-overlay"></div>
      </div>
      
      <div className="template-content minimal-content">
        {/* Profile Image */}
        {imageUrl ? (
          <div className="minimal-profile-img" style={{ borderColor: themeColor }}>
            <img src={imageUrl} alt={name} />
          </div>
        ) : (
          <div className="minimal-profile-placeholder" style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColor}dd)` }}>
            <span className="material-symbols-outlined">person</span>
          </div>
        )}

        {/* Info */}
        <div className="minimal-info">
          <h2 className="template-name">{name || 'Your Name'}</h2>
          <p className="template-title" style={{ color: themeColor }}>{title || 'Job Title'}</p>
          {company && <p className="template-company">{company}</p>}
          {businessTypeData && (
            <p className="template-business-type" style={{ color: themeColor }}>
              <span className="material-symbols-outlined">{businessTypeData.icon}</span>
              {businessTypeData.label}
            </p>
          )}
          {location && (
            <p className="template-location">
              <span className="material-symbols-outlined">location_on</span>
              {location}
            </p>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <div className="minimal-bio-box">
            <p className="template-bio">{bio}</p>
          </div>
        )}

        {/* Social Icons */}
        <div className="minimal-socials">
          {email && (
            <div className="template-social-icon icon-mail">
              <span className="material-symbols-outlined">mail</span>
            </div>
          )}
          {phone && (
            <div className="template-social-icon icon-phone">
              <span className="material-symbols-outlined">call</span>
            </div>
          )}
          {website && (
            <div className="template-social-icon icon-website">
              <span className="material-symbols-outlined">language</span>
            </div>
          )}
          {socialLinks?.linkedin && (
            <div className="template-social-icon icon-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </div>
          )}
          {socialLinks?.github && (
            <div className="template-social-icon icon-github">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template2Minimal;
