import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CrawlerPage from './pages/CrawlerPage';
import ProtectedRoute from './components/ProtectedRoute';

/**
 * Componente principal da aplicação React Router
 * Gerencia o roteamento entre páginas públicas e privadas
 * 
 * Rotas públicas: /, /login
 * Rotas protegidas: /app/crawler (requer token no localStorage)
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rotas Protegidas */}
        <Route 
          path="/app/crawler" 
          element={
            <ProtectedRoute>
              <CrawlerPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
