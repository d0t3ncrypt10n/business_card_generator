import axios from 'axios';
import { API_URL, BASE_URL } from '../config/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createCard = async (cardData) => {
  try {
    const { data } = await axios.post(`${API_URL}/cards`, cardData, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/cards`, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCardById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/cards/${id}`, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCard = async (id, cardData) => {
  try {
    const { data } = await axios.put(`${API_URL}/cards/${id}`, cardData, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}/cards/${id}`, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPublicCard = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/cards/public/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const incrementCardView = async (id) => {
  try {
    const { data } = await axios.post(`${API_URL}/cards/public/${id}/view`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const incrementCardShare = async (id) => {
  try {
    const { data } = await axios.post(`${API_URL}/cards/public/${id}/share`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (file) => {
  try {
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size must be less than 5MB');
    }
    
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Only JPEG, PNG, and GIF images are allowed');
    }
    
    const formData = new FormData();
    formData.append('image', file);
    
    const { data } = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        ...getAuthHeader(),
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getQRCode = async (cardId) => {
  try {
    const { data } = await axios.get(`${API_URL}/qrcode/${cardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// Helper function to get full image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  return `${BASE_URL}${imagePath}`;
};
