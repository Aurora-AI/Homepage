const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'; // Default to localhost for development

export const login = async (email: string, password: string) => {
  const formBody = new URLSearchParams();
  formBody.append('username', email);
  formBody.append('password', password);

  try {
    const response = await fetch(`${API_BASE_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to login');
    }

    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('token_type', data.token_type);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
