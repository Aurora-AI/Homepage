import React, { useEffect, useState } from 'react';
import axiosClient from '../lib/api/axiosClient';
import { useGlobalStore } from '../store/globalStore';

const ApiTestComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const { setErrorMessage } = useGlobalStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula uma chamada de API bem-sucedida
        const response = await axiosClient.get('/data');
        setData(JSON.stringify(response.data));
      } catch (error) {
        // O erro já será tratado pelo interceptor do axiosClient e exibido globalmente
        console.error('Erro ao buscar dados no componente:', error);
        // Opcional: setErrorMessage('Falha ao carregar dados.'); se quiser uma mensagem mais específica aqui
      }
    };

    fetchData();

    

  }, [setErrorMessage]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Teste de Integração de API</h2>
      {data ? (
        <p>Dados recebidos: <pre className="bg-gray-800 p-2 rounded text-sm overflow-auto"><code>{data}</code></pre></p>
      ) : (
        <p>Carregando dados ou aguardando chamada de API...</p>
      )}
      <p className="text-sm text-gray-400 mt-4">Observe o indicador de carregamento global e as mensagens de erro no topo da página.</p>
      <p className="text-sm text-gray-400">Para simular um erro, descomente a linha `const errorTimeout = setTimeout(fetchErrorData, 5000);` no código-fonte deste componente.</p>
    </div>
  );
};

export default ApiTestComponent;
