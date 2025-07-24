/**
 * ManifestoPage - Página pública do Manifesto Aurora
 * Apresenta a missão e visão do projeto Aurora
 */
export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 flex items-center justify-center">
      <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-cyan-300 mb-4">
          Manifesto Aurora
        </h1>
        <p className="text-white/80 text-lg">
          O Aurora nasce para redefinir a relação entre humanos e sistemas inteligentes. Nossa missão é criar uma plataforma aberta, ética e radicalmente eficiente, onde a soberania cognitiva e a colaboração entre inteligências sejam o centro de tudo.<br /><br />
          Este manifesto é um convite à construção coletiva de um novo paradigma tecnológico.
        </p>
      </div>
    </div>
  );
}
