import React from 'react';
import { motion } from 'framer-motion';

// Ícones poéticos que representam nossos pilares tecnológicos
const IconMaestro = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.379a.75.75 0 01-1.135.093l-5.758-3.843a1.125 1.125 0 01-.661-1.043V3.373a.75.75 0 011.242-.676l4.5 3.575a1.125 1.125 0 01.378.894v4.5M6.75 18a.75.75 0 00-.75-.75H5.25A.75.75 0 004.5 18v.75c0 .414.336.75.75.75h.75A.75.75 0 006.75 18z" />
    </svg>
);
const IconEcho = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75c-1.38 0-2.5-1.12-2.5-2.5S10.62 4.75 12 4.75s2.5 1.12 2.5 2.5S13.38 9.75 12 9.75zm0 0c-1.38 0-2.5 1.12-2.5 2.5S10.62 14.75 12 14.75s2.5-1.12 2.5-2.5S13.38 9.75 12 9.75zm0 0v-2.5m0 5v2.5m-2.5-2.5h-2.5m5 0h2.5m-5 5l-1.768 1.768M14.232 7.268L16 5.5M7.268 7.268L5.5 5.5m9.264 9.264l1.768 1.768" />
    </svg>
);
const IconCrystal = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75l-3.75-3.75m3.75 3.75L15.75 18m-3.75 3.75V3m0 0l-3.75 3.75M12 3l3.75 3.75M12 3v18.75m-3.75-11.25H4.5m15 0h-3.75" />
    </svg>
);
const IconSunrise = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m-6.364.566l1.59 1.59M2.25 12h2.25m-.566 6.364l1.59-1.59M12 21.75v-2.25m6.364-.566l-1.59-1.59M21.75 12h-2.25m.566-6.364l-1.59 1.59M12 9a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

const Tecnologia = () => {
    return (
        <motion.section
            id="tecnologia"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        A Sinfonia da Inteligência: A Engenharia por Trás da Aurora
                    </h2>
                    <p className="mt-4 text-slate-300 text-lg">
                        Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Nós esculpimos a inteligência, inspirados pelos princípios da otimização extrema. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões. É a diferença entre um ruído de dados e uma sinfonia de insights.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="block rounded-xl p-6 transition-all bg-white/5">
                        <div className="flex items-center gap-4">
                            <IconMaestro />
                            <h3 className="text-xl font-bold text-white">O Maestro Silencioso: Nosso Grafo de Orquestração</h3>
                        </div>
                        <p className="mt-2 text-slate-300">
                            Como um maestro que rege uma orquestra, nosso 'Grafo de Orquestração' avalia cada nota — cada requisição — e a direciona para o músico certo. Ele garante que a inteligência seja processada com precisão cirúrgica, na camada mais eficiente, para que cada resposta seja uma harmonia perfeita de custo e performance.
                        </p>
                    </div>

                    <div className="block rounded-xl p-6 transition-all bg-white/5">
                        <div className="flex items-center gap-4">
                            <IconEcho />
                            <h3 className="text-xl font-bold text-white">Ecos e Sussurros: O Poder da Inteligência Próxima</h3>
                        </div>
                        <p className="mt-2 text-slate-300">
                            Nós acreditamos que a inteligência mais rápida é aquela que está mais perto. Nossos modelos 'Micro' e 'Nano' operam como sussurros locais, oferecendo respostas instantâneas, privadas e contextuais. Apenas quando um grito é necessário, nós alcançamos as nuvens, garantindo que o extraordinário nunca seja desperdiçado no ordinário.
                        </p>
                    </div>
                    
                    <div className="block rounded-xl p-6 transition-all bg-white/5">
                        <div className="flex items-center gap-4">
                            <IconCrystal />
                            <h3 className="text-xl font-bold text-white">Memórias de Cristal e Pensamentos Efêmeros</h3>
                        </div>
                        <p className="mt-2 text-slate-300">
                            Não pagamos por dados que não são essenciais. Nossas 'Memórias de Cristal' (caches semânticos) guardam o conhecimento valioso, enquanto nossos 'Pensamentos Efêmeros' (geração procedural) criam respostas no momento da necessidade. É a arte de lembrar o que importa e criar o que é necessário.
                        </p>
                    </div>

                    <div className="block rounded-xl p-6 transition-all bg-white/5">
                        <div className="flex items-center gap-4">
                            <IconSunrise />
                            <h3 className="text-xl font-bold text-white">A Aurora que Anuncia a Própria Aurora</h3>
                        </div>
                        <p className="mt-2 text-slate-300">
                            Nosso verdadeiro diferencial é usar nossa própria inteligência para desenhar e refinar a próxima geração de IA. Nossas 'Máquinas de Insights' informam e aceleram nosso ciclo de desenvolvimento. Cada amanhecer da nossa tecnologia anuncia um novo e mais brilhante horizonte, criado pela própria luz que geramos.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Tecnologia;