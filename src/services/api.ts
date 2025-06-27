// src/services/api.ts

// Esta função agora está sendo exportada e pode ser usada em outros arquivos.
export const login = async (email: string, pass: string) => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${apiBaseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: email,
        password: pass,
      }),
    });

    if (!response.ok) {
      // Lança um erro se a resposta não for bem-sucedida
      throw new Error('Falha no login');
    }

    const data = await response.json();
    return data; // Retorna os dados (ex: { access_token: "...", token_type: "bearer" })
  } catch (error) {
    console.error('Erro na chamada de login:', error);
    throw error;
  }
};

// Se houver outras funções de API aqui, elas também precisam do 'export'.