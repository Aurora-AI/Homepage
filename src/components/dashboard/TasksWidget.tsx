// Caminho: src/components/dashboard/TasksWidget.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TaskItem = ({ title, time }: { title: string, time: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/70 transition-colors">
      <motion.div
        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center cursor-pointer 
          ${isChecked ? 'bg-primary-blue border-primary-blue' : 'border-gray-300'}`}
        onClick={() => setIsChecked(!isChecked)}
        whileTap={{ scale: 0.9 }}
      >
        {isChecked && <span className="text-white text-lg">✓</span>}
      </motion.div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${isChecked ? 'line-through text-text-secondary' : 'text-text-primary'}`}>{title}</p>
        <p className="text-xs text-text-secondary">{time}</p>
      </div>
    </div>
  );
};

const TasksWidget = () => {
  const tasks = [
    { title: "Validate dataset for NLP model", time: "Today, 2:00 PM" },
    { title: "Optimize prediction algorithm", time: "Today, 4:30 PM" },
    { title: "Review accuracy metrics", time: "Tomorrow, 9:00 AM" },
  ];

  return (
    <motion.div 
      className="bg-glass-white backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/50"
      whileHover={{ y: -8, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Pending Tasks</h3>
        <div className="text-text-secondary cursor-pointer">+</div>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <TaskItem key={index} title={task.title} time={task.time} />
        ))}
      </div>
    </motion.div>
  );
};

export default TasksWidget;