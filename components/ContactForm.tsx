import React from 'react';
import AuroraButton from './AuroraButton';

const ContactForm: React.FC = () => {
  return (
    <form className="bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-500/30 max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Seu nome"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Seu email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-white text-sm font-bold mb-2">Assunto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Assunto da mensagem"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Sua mensagem"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <AuroraButton type="submit">Enviar Mensagem</AuroraButton>
      </div>
    </form>
  );
};

export default ContactForm;
