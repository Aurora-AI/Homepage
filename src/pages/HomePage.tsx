/**
 * HomePage - Página inicial pública da Aurora
 * Placeholder para testes de roteamento React
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Aurora - HomePage
        </h1>
        <p className="text-cyan-200 text-lg">
          Página inicial pública - Roteamento React ativo
        </p>
        <div className="mt-8 space-x-4">
          <a 
            href="/login" 
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-md transition-all duration-300"
          >
            Ir para Login
          </a>
          <a 
            href="/app/crawler" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
          >
            Testar Rota Protegida
          </a>
        </div>
      </div>
    </div>
  );
}
