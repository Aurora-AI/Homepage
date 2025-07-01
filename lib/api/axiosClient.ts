import axios from 'axios';
import { useGlobalStore } from '../../store/globalStore';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api', // Use a variável de ambiente ou um fallback
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de Requisição: Ativa o loading global
axiosClient.interceptors.request.use(
  (config) => {
    useGlobalStore.getState().setLoading(true);
    useGlobalStore.getState().setErrorMessage(null); // Limpa mensagens de erro anteriores
    console.log('Requisição enviada:', config.url);
    return config;
  },
  (error) => {
    useGlobalStore.getState().setLoading(false);
    return Promise.reject(error);
  }
);

// Interceptor de Resposta: Desativa o loading e trata erros
axiosClient.interceptors.response.use(
  (response) => {
    useGlobalStore.getState().setLoading(false);
    console.log('Resposta recebida:', response.config.url);
    return response;
  },
  (error) => {
    useGlobalStore.getState().setLoading(false);

    // Tratamento de erros centralizado
    if (error.response) {
      // O servidor respondeu com um status de erro (4xx, 5xx)
      console.error('Erro na resposta da API:', error.response.status, error.response.data);
      useGlobalStore.getState().setErrorMessage(error.response.data.message || `Erro: ${error.response.status}`);
    } else if (error.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error('Nenhuma resposta recebida:', error.request);
      useGlobalStore.getState().setErrorMessage('Nenhuma resposta do servidor.');
    } else {
      // Algo aconteceu na configuração da requisição que disparou um erro
      console.error('Erro na requisição:', error.message);
      useGlobalStore.getState().setErrorMessage('Erro na requisição: ' + error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
