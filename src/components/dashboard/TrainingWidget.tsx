// Caminho: src/components/dashboard/TrainingWidget.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Subcomponente para a barra de progresso individual
const ProgressBar = ({ label, percentage, eta }: { label: string, percentage: number, eta: string }) => (
  <div className="w-full">
    <p className="text-sm font-medium text-text-primary">{label}</p>
    <div className="w-full bg-sidebar-bg rounded-full h-2 my-1.5 overflow-hidden">
      <motion.div
        className="bg-primary-blue h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
    <p className="text-xs text-text-secondary">
      {percentage}% concluído - ETA: {eta}
    </p>
  </div>
);

const TrainingWidget = () => {
  return (
    <motion.div 
      className="bg-glass-white backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/50"
      whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Treinamento de Modelos</h3>
        <div className="text-text-secondary cursor-pointer font-bold">...</div>
      </div>
      
      <div className="flex flex-col gap-6">
        <ProgressBar label="Análise de Sentimento" percentage={65} eta="2h 15m" />
        <ProgressBar label="Reconhecimento de Imagem" percentage={42} eta="5h 30m" />
      </div>
    </motion.div>
  );
};

export default TrainingWidget;