import React from 'react';
import { motion } from 'framer-motion';

const TrainingWidget = () => {
  return (
    <motion.div 
      className="bg-glass-white backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/50"
      whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
       <h2 className="text-lg font-semibold text-charcoal mb-4">Model Training</h2>
       {/* Conteúdo do widget de treinamento aqui */}
       <p className="text-gray-500">Training progress will be displayed here.</p>
    </motion.div>
  );
};

export default TrainingWidget;