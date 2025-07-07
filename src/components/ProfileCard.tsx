import React from 'react';

const ProfileCard = () => {
  return (
    <div className="profile-card bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center text-white max-w-md mx-auto border border-cyan-500/20">
      <img 
        src="/profile.png" 
        alt="Profile of Aurora" 
        className="profile-image w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-400"
      />
      <h1 className="text-3xl font-bold text-cyan-300">Aurora</h1>
      <p className="text-slate-300 mt-2">
        Desenvolvedora Fullstack, focada em criar experiências digitais incríveis.
      </p>
      <div className="social-links mt-6 flex justify-center gap-4">
        <a 
          href="https://github.com/Aurora-Homepage" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/aurora" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:contato@aurora-homepage.com" 
          className="hover:text-cyan-400 transition-colors"
        >
          Email
        </a>
      </div>
      
      <style jsx>{`
        .profile-card {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;