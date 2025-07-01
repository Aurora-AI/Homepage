'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormSchema } from '@/lib/schemas/contactFormSchema';
import AuroraButton from './AuroraButton';
import AuroraLoader from './AuroraLoader'; // Assuming you have an AuroraLoader component

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data: ContactFormSchema) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setMessage('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success or error based on some condition (e.g., data content)
      if (data.email === 'error@example.com') {
        throw new Error('Simulated API error: Could not send message.');
      }

      setIsSuccess(true);
      setMessage('Mensagem enviada com sucesso!');
      reset(); // Clear form fields on success
    } catch (error: unknown) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : 'Ocorreu um erro ao enviar a mensagem.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-500/30 max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="nome" className="block text-white text-sm font-bold mb-2">Nome:</label>
        <input
          type="text"
          id="nome"
          {...register('name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Seu nome"
        />
        {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Seu email"
        />
        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Mensagem:</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          placeholder="Sua mensagem"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
      </div>
      <div className="flex items-center justify-center">
        <AuroraButton type="submit" disabled={isLoading}>
          {isLoading ? <AuroraLoader type="constellation" /> : 'Enviar Mensagem'}
        </AuroraButton>
      </div>
      {isSuccess && <p className="text-green-500 text-center mt-4">{message}</p>}
      {isError && <p className="text-red-500 text-center mt-4">{message}</p>}
    </form>
  );
};

export default ContactForm;
