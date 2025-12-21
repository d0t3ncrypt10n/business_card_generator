import axios from 'axios';
import { API_URL } from '../config/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Axios interceptor for handling token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const register = async (name, email, password) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/auth/me`, {
      headers: getAuthHeader()
    });
    return data;
  } catch (error) {
    throw error;
  }
};
