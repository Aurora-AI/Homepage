import { useState } from 'react';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password) {
      setError('Por favor, insira a senha.');
      return;
    }
    document.cookie = `auth_token=${password}; path=/; max-age=86400; SameSite=Lax;`;
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha de Acesso"
        className="bg-black/20 text-white placeholder-white/50 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        autoFocus
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-md transition-all duration-300"
      >
        Acessar
      </button>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </form>
  );
}
