import React from 'react';

const ActiveMemorySection: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          {/* Placeholder Image for Context of Action */}
          <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-xl rounded-lg">
            [Imagem: Sistema ESKB]
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Memória Ativa</h2>
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActiveMemorySection;
