import { useState, useEffect } from 'react';
import axios from 'axios';

// Configuration de l'API
const API = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

// Hook personnalisé pour les appels API
export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${API}${endpoint}`, options);
      setData(response.data);
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
};

// Hook pour les statistiques globales
export const useGlobalStats = () => {
  return useApi('/api/global-stats');
};

// Hook pour les utilisateurs
export const useUsers = () => {
  return useApi('/api/users');
};

// Service API pour les appels manuels
export const apiService = {
  async getGlobalStats() {
    try {
      const response = await axios.get(`${API}/api/global-stats`);
      return response.data;
    } catch (error) {
      console.error('Error fetching global stats:', error);
      throw error;
    }
  },

  async getUsers() {
    try {
      const response = await axios.get(`${API}/api/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async sendDiscordWebhook(webhookData) {
    try {
      const response = await axios.post(`${API}/api/webhook/discord`, webhookData);
      return response.data;
    } catch (error) {
      console.error('Error sending discord webhook:', error);
      throw error;
    }
  },

  // RGPD API calls
  async createDataRequest(requestData) {
    try {
      const response = await axios.post(`${API}/api/data-request`, requestData);
      return response.data;
    } catch (error) {
      console.error('Error creating data request:', error);
      throw error;
    }
  },

  async createDataDeletion(deletionData) {
    try {
      const response = await axios.post(`${API}/api/data-deletion`, deletionData);
      return response.data;
    } catch (error) {
      console.error('Error creating data deletion:', error);
      throw error;
    }
  }
};