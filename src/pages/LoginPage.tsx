import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * LoginPage - Página de autenticação pública
 * Placeholder para testes de roteamento React
 * Permite definir token no localStorage para testar rotas protegidas
 */
export default function LoginPage() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (token.trim()) {
      // Define token no localStorage
      localStorage.setItem('aurora_token', token);
      // Redireciona para rota protegida
      navigate('/app/crawler');
    } else {
      alert('Por favor, insira um token para testar a rota protegida');
    }
  };

  const setTestToken = () => {
    setToken('test-aurora-token');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
      <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Login Aurora
          </h1>
          <p className="text-cyan-200">
            Página de autenticação - Teste de rotas
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Token de teste (qualquer valor)"
              className="w-full bg-black/20 text-white placeholder-white/50 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-md transition-all duration-300"
          >
            Definir Token e Acessar
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={setTestToken}
            className="text-cyan-400 hover:text-cyan-300 underline text-sm"
          >
            Usar token de teste
          </button>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-white/70 hover:text-white underline text-sm"
          >
            Voltar para Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
