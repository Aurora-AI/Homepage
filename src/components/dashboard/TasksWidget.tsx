import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialTasks = [
  { title: "Validar dataset para o modelo de PLN", time: "Hoje, 14:00" },
  { title: "Otimizar algoritmo de predição", time: "Hoje, 16:30" },
  { title: "Revisar métricas de acurácia", time: "Amanhã, 09:00" },
];

const TasksWidget = () => {
  const [tasks, setTasks] = useState(initialTasks.map(task => ({ ...task, done: false })));

  const handleToggle = (indexToToggle: number) => {
    setTasks(tasks.map((task, index) => 
      index === indexToToggle ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/20"
      whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Tarefas Pendentes</h3>
        <div className="text-slate-300 cursor-pointer text-xl font-bold">+</div>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer" onClick={() => handleToggle(index)}>
            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${task.done ? 'bg-cyan-500 border-cyan-500' : 'border-gray-300'}`}>
              {task.done && <span className="text-white text-lg">✓</span>}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium transition-colors ${task.done ? 'line-through text-slate-400' : 'text-white'}`}>{task.title}</p>
              <p className="text-xs text-slate-300">{task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TasksWidget;