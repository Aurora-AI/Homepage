import { useNavigate } from 'react-router-dom';

/**
 * CrawlerPage - Interface do Aurora Crawler (protegida)
 * Placeholder para desenvolvimento da aplicação Crawler
 * Acesso restrito via ProtectedRoute
 */
export default function CrawlerPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token do localStorage
    localStorage.removeItem('aurora_token');
    // Redireciona para login
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Aurora Crawler
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎯 Rota Protegida Ativa
          </h2>
          
          <div className="space-y-4 text-white/80">
            <p>
              ✅ <strong>Token encontrado:</strong> Acesso liberado com sucesso
            </p>
            <p>
              🔒 <strong>Proteção ativa:</strong> Esta rota é protegida pelo componente ProtectedRoute
            </p>
            <p>
              🚀 <strong>Próximos passos:</strong> Implementar interface do Aurora Crawler
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-4">
              <h3 className="text-cyan-400 font-bold mb-2">Crawler Status</h3>
              <p className="text-white/70 text-sm">Sistema em desenvolvimento</p>
            </div>
            
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
              <h3 className="text-purple-400 font-bold mb-2">Configurações</h3>
              <p className="text-white/70 text-sm">Interface placeholder</p>
            </div>
            
            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-4">
              <h3 className="text-indigo-400 font-bold mb-2">Relatórios</h3>
              <p className="text-white/70 text-sm">Em construção</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Token atual: <code className="bg-black/30 px-2 py-1 rounded text-cyan-400">
                {localStorage.getItem('aurora_token')}
              </code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
