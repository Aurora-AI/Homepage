// Caminho: src/components/dashboard/PerformanceWidget.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Subcomponente para os cards de estatísticas individuais
const StatCard = ({ label, value, change, isPositive }: { label: string, value: string, change: string, isPositive: boolean }) => (
  <div className="bg-white/50 rounded-xl p-4 flex-1 min-w-[120px]">
    <p className="text-sm text-text-secondary">{label}</p>
    <p className="text-2xl font-bold text-text-primary my-1">{value}</p>
    <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-success' : 'text-error'}`}>
      <span>{isPositive ? '▲' : '▼'}</span>
      <span>{change}</span>
    </div>
  </div>
);

const PerformanceWidget = () => {
  return (
    // Usamos motion.div para animar o widget inteiro no hover
    <motion.div 
      className="bg-glass-white backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/50"
      whileHover={{ y: -8, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Cabeçalho do Widget */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-text-primary">System Performance</h3>
        <div className="text-text-secondary cursor-pointer">...</div>
      </div>
      
      {/* Grid de Estatísticas */}
      <div className="flex flex-wrap gap-4">
        <StatCard label="Uptime" value="98%" change="2.3%" isPositive={true} />
        <StatCard label="Avg. Response" value="4.2s" change="0.4s" isPositive={false} />
        <StatCard label="Accuracy" value="87%" change="5.1%" isPositive={true} />
      </div>

      {/* Placeholder para o Gráfico */}
      <div className="mt-6 h-48 bg-white/40 rounded-xl flex items-center justify-center text-text-secondary font-medium">
        Performance Chart Visualization
      </div>
    </motion.div>
  );
};

export default PerformanceWidget;