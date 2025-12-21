import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  socialLinks: {
    linkedin: { type: String, default: '' },
    instagram: { type: String, default: '' },
    github: { type: String, default: '' },
    twitter: { type: String, default: '' }
  },
  profileImage: {
    type: String,
    default: ''
  },
  theme: {
    color: { type: String, default: '#3b82f6' },
    font: { type: String, default: 'Inter' },
    templateId: { type: String, default: 'template1' }
  },
  views: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  collection: 'cards'
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
