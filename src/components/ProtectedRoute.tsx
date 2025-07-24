import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Componente de Rota Protegida Aurora
 * 
 * Verifica se existe token de autenticação no localStorage.
 * Se não existir, redireciona para /login.
 * Se existir, renderiza o componente filho.
 * 
 * Token esperado: 'aurora_token' no localStorage
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('aurora_token');
    
    if (!token) {
      // Token não encontrado, redireciona para login
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Verifica token antes de renderizar
  const token = localStorage.getItem('aurora_token');
  
  if (!token) {
    return null; // Não renderiza nada durante o redirecionamento
  }

  return <>{children}</>;
}
