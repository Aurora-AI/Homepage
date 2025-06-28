import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContatoPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-white text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse-neon mb-12">
            Entre em Contato
          </h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
