import React from 'react';

// Os ícones podem ser substituídos por uma biblioteca de ícones no futuro.
const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar-bg p-6 flex flex-col shadow-lg">
      <div className="flex items-center gap-3 pb-5 mb-5 border-b border-gray-300">
        <div className="w-10 h-10 bg-pastel-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">A</div>
        <h1 className="text-2xl font-bold text-text-primary">Aurora</h1>
      </div>
      <nav className="flex flex-col gap-2 flex-grow">
        <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 font-medium text-pastel-blue-darker">
          <span>📊</span> Overview
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50">
          <span>🤖</span> Models
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50">
          <span>🗂️</span> Data
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50">
          <span>⚙️</span> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;