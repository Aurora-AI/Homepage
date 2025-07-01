import HeroAnimation from '@/components/HeroAnimation';

export default function HomePage() {
  return (
    <main className="bg-night-blue">
      <HeroAnimation />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-serif mb-4">A Fábrica de IA para Sistemas Complexos.</h1>
        <p className="text-xl font-sans mb-8 max-w-3xl mx-auto">Orquestramos agentes de IA para transformar caos de desenvolvimento em produtos inteligentes. De um emaranhado de 250+ erros a um sistema resiliente, nossa metodologia foi provada em campo.</p>
        <div className="space-x-4">
          <a href="/contato" className="bg-aurora-accent text-night-blue font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition-colors">Inicie sua Jornada</a>
          <a href="/credo" className="border border-aurora-accent text-aurora-accent font-bold py-3 px-6 rounded-full hover:bg-aurora-accent hover:text-night-blue transition-colors">Leia nosso Credo</a>
        </div>
      </section>
      <section className="py-20 px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Nossa Sinfonia de Execução</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4">O Poema Oculto nos Dados</h3>
            <p className="font-sans">Diagnóstico</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4">A Partitura da Inteligência</h3>
            <p className="font-sans">Orquestração</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4">A Dança da Criação</h3>
            <p className="font-sans">Execução</p>
          </div>
        </div>
      </section>
    </main>
  );
}
