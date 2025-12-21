import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import * as cardAPI from '../api/cardAPI';
import { BASE_URL } from '../config/api';
import './EditCard.css'; // Reuse the same CSS

const CreateCard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    title: '',
    company: '',
    location: '',
    email: '',
    website: '',
    phone: '',
    socialLinks: {
      linkedin: '',
      github: '',
      instagram: '',
      twitter: ''
    },
    profileImage: '',
    theme: {
      color: '#2bee79',
      font: 'Inter',
      templateId: 'template1'
    }
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const socialKey = name.replace('social_', '');
      setFormData(prev => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [socialKey]: value }
      }));
    } else if (name.startsWith('theme_')) {
      const themeKey = name.replace('theme_', '');
      setFormData(prev => ({
        ...prev,
        theme: { ...prev.theme, [themeKey]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const { imageUrl } = await cardAPI.uploadImage(file);
      setFormData(prev => ({ ...prev, profileImage: imageUrl }));
    } catch (err) {
      console.error('Upload error:', err);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cardAPI.createCard(formData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Create error:', err);
      alert('Failed to create card');
    }
  };

  const handleColorChange = (color) => {
    setFormData(prev => ({
      ...prev,
      theme: { ...prev.theme, color }
    }));
  };

  const handleTemplateChange = (templateId) => {
    setFormData(prev => ({
      ...prev,
      theme: { ...prev.theme, templateId }
    }));
  };

  return (
    <div className="edit-wrapper">
      {/* Navbar */}
      <nav className="edit-nav">
        <button onClick={() => navigate('/dashboard')} className="nav-cancel">
          <span className="material-symbols-outlined">close</span>
          Cancel
        </button>
        <h1 className="nav-title">
          ✨ Create Card
        </h1>
        <button onClick={handleSubmit} className="nav-save">
          Create
        </button>
      </nav>

      {/* Main Content */}
      <main className="edit-main">
        {/* Live Preview Section */}
        <section className="preview-section">
          <div className="preview-header">
            <p className="preview-label">Live Preview</p>
            <span className="material-symbols-outlined preview-icon">visibility</span>
          </div>
          <CardPreview cardData={formData} />
        </section>

        {/* Editing Form Section */}
        <section className="form-section">
          {/* Profile Image Upload */}
          <div className="image-upload-card">
            <div className="image-upload-content">
              <div className="avatar-wrapper">
                {formData.profileImage ? (
                  <img 
                    src={formData.profileImage.startsWith('http') ? formData.profileImage : `${BASE_URL}${formData.profileImage}`}
                    alt="Profile"
                    className="avatar-img"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {formData.name ? formData.name.charAt(0).toUpperCase() : '?'}
                  </div>
                )}
                <div className="avatar-edit-badge">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
              <div className="upload-text">
                <p className="upload-title">Profile Photo</p>
                <p className="upload-subtitle">Tap to upload or drag & drop</p>
              </div>
            </div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              disabled={uploading}
              className="file-input-hidden"
              id="profile-upload"
            />
            <label htmlFor="profile-upload" className="file-input-overlay"></label>
            {uploading && <p className="uploading-text">⏳ Uploading...</p>}
          </div>

          {/* Accordion Group */}
          <div className="accordion-group">
            {/* Personal Details */}
            <details className="accordion-item" open>
              <summary className="accordion-summary">
                <div className="summary-content">
                  <div className="summary-icon icon-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <span className="summary-title">Personal Details</span>
                </div>
                <span className="material-symbols-outlined expand-icon">expand_more</span>
              </summary>
              <div className="accordion-content">
                <label className="form-label">
                  <span className="label-text">Full Name</span>
                  <div className="input-wrapper">
                    <span className="material-symbols-outlined input-icon">badge</span>
                    <input 
                      name="name" 
                      placeholder="e.g. John Doe" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="form-input" 
                    />
                  </div>
                </label>
                <label className="form-label">
                  <span className="label-text">Tagline / Bio</span>
                  <div className="textarea-wrapper">
                    <textarea 
                      name="bio"
                      placeholder="Short bio describing what you do..." 
                      value={formData.bio || ''} 
                      onChange={handleChange} 
                      rows="3"
                      className="form-textarea" 
                    />
                  </div>
                </label>
              </div>
            </details>

            {/* Professional Info */}
            <details className="accordion-item">
              <summary className="accordion-summary">
                <div className="summary-content">
                  <div className="summary-icon icon-blue">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <span className="summary-title">Professional Info</span>
                </div>
                <span className="material-symbols-outlined expand-icon">expand_more</span>
              </summary>
              <div className="accordion-content">
                <div className="form-row">
                  <label className="form-label">
                    <span className="label-text">Job Title</span>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">id_card</span>
                      <input 
                        name="title" 
                        placeholder="Product Designer" 
                        value={formData.title || ''} 
                        onChange={handleChange} 
                        className="form-input" 
                      />
                    </div>
                  </label>
                  <label className="form-label">
                    <span className="label-text">Company</span>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">apartment</span>
                      <input 
                        name="company" 
                        placeholder="Company Name" 
                        value={formData.company || ''} 
                        onChange={handleChange} 
                        className="form-input" 
                      />
                    </div>
                  </label>
                </div>
                <div className="form-row">
                  <label className="form-label">
                    <span className="label-text">Location</span>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">location_on</span>
                      <input 
                        name="location" 
                        placeholder="Los Angeles, CA" 
                        value={formData.location || ''} 
                        onChange={handleChange} 
                        className="form-input" 
                      />
                    </div>
                  </label>
                  <label className="form-label">
                    <span className="label-text">Website</span>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">language</span>
                      <input 
                        name="website" 
                        type="url" 
                        placeholder="https://yourwebsite.com" 
                        value={formData.website || ''} 
                        onChange={handleChange} 
                        className="form-input" 
                      />
                    </div>
                  </label>
                </div>
              </div>
            </details>

            {/* Contact & Socials */}
            <details className="accordion-item">
              <summary className="accordion-summary">
                <div className="summary-content">
                  <div className="summary-icon icon-purple">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <span className="summary-title">Contact & Socials</span>
                </div>
                <span className="material-symbols-outlined expand-icon">expand_more</span>
              </summary>
              <div className="accordion-content">
                <label className="form-label">
                  <span className="label-text">Email Address</span>
                  <div className="input-wrapper input-verified">
                    <span className="material-symbols-outlined input-icon">mail</span>
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="form-input" 
                    />
                    <span className="material-symbols-outlined verify-icon">check_circle</span>
                  </div>
                </label>
                <label className="form-label">
                  <span className="label-text">Phone Number</span>
                  <div className="input-wrapper">
                    <span className="material-symbols-outlined input-icon">call</span>
                    <input 
                      name="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone || ''} 
                      onChange={handleChange} 
                      className="form-input" 
                    />
                  </div>
                </label>
                <div className="social-divider"></div>
                <div className="social-links">
                  <div className="social-link-item">
                    <div className="social-icon icon-linkedin">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <input 
                      name="social_linkedin" 
                      placeholder="LinkedIn URL" 
                      value={formData.socialLinks.linkedin || ''} 
                      onChange={handleChange} 
                      className="social-input" 
                    />
                    <button type="button" className="social-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="social-link-item">
                    <div className="social-icon icon-github">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                    </div>
                    <input 
                      name="social_github" 
                      placeholder="GitHub URL" 
                      value={formData.socialLinks.github || ''} 
                      onChange={handleChange} 
                      className="social-input" 
                    />
                    <button type="button" className="social-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <button type="button" className="add-social-btn">
                  <span className="material-symbols-outlined">add_circle</span>
                  Add Social Link
                </button>
              </div>
            </details>

            {/* Theme Customization */}
            <details className="accordion-item">
              <summary className="accordion-summary">
                <div className="summary-content">
                  <div className="summary-icon icon-orange">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <span className="summary-title">Theme & Style</span>
                </div>
                <span className="material-symbols-outlined expand-icon">expand_more</span>
              </summary>
              <div className="accordion-content">
                <div className="theme-section">
                  <p className="theme-label">Accent Color</p>
                  <div className="color-picker">
                    {['#2bee79', '#3b82f6', '#a855f7', '#ef4444', '#f59e0b', '#ec4899'].map(color => (
                      <button
                        key={color}
                        type="button"
                        className={`color-btn ${formData.theme.color === color ? 'color-btn-active' : ''}`}
                        style={{ background: color }}
                        onClick={() => handleColorChange(color)}
                      />
                    ))}
                    <div className="color-btn color-btn-add">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                  </div>
                </div>
                <div className="theme-section">
                  <p className="theme-label">Card Template</p>
                  <div className="template-grid">
                    <button 
                      type="button" 
                      className={`template-btn ${formData.theme.templateId === 'template1' ? 'template-btn-active' : ''}`}
                      onClick={() => handleTemplateChange('template1')}
                      title="Classic Professional"
                    >
                      <div className="template-preview">
                        <div className="template-line template-line-1"></div>
                        <div className="template-line template-line-2"></div>
                        <div className="template-dot"></div>
                      </div>
                    </button>
                    <button 
                      type="button" 
                      className={`template-btn ${formData.theme.templateId === 'template2' ? 'template-btn-active' : ''}`}
                      onClick={() => handleTemplateChange('template2')}
                      title="Minimalist Center"
                    >
                      <div className="template-preview template-preview-center">
                        <div className="template-circle"></div>
                        <div className="template-line template-line-3"></div>
                        <div className="template-line template-line-4"></div>
                      </div>
                    </button>
                    <button 
                      type="button" 
                      className={`template-btn ${formData.theme.templateId === 'template3' ? 'template-btn-active' : ''}`}
                      onClick={() => handleTemplateChange('template3')}
                      title="Modern Asymmetric"
                    >
                      <div className="template-preview template-preview-row">
                        <div className="template-square"></div>
                        <div className="template-lines">
                          <div className="template-line template-line-5"></div>
                          <div className="template-line template-line-6"></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateCard;
