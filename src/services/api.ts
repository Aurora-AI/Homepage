// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
});

// Interceptador de Requisição: Anexa o token a cada chamada
api.interceptors.request.use(config => {
  const token = localStorage.getItem('aurora_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Interceptador de Resposta: Lida com erros globais (ex: token expirado)
api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    // Token inválido ou expirado. Limpa o storage e redireciona para o login.
    localStorage.removeItem('aurora_token');
    // Redireciona para a página de login para uma nova autenticação.
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default api;