import React from 'react';
import BotaoEscreva from './botaoEscreva-se';
import { InfoCursos } from '../types/inforCursos.types';

interface Props {
  curso: InfoCursos;
}

const CursoCard: React.FC<Props> = ({ curso }) => {
  const handleComprar = () => {
    // Lógica para redirecionar para a página de pagamento do curso
    // Use useRouter ou qualquer método de navegação que você preferir
  };

  return (
    <div className="py-10 bg-gray-100 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-2xl lg:max-w-4xl border-l-2 border-r-2 border-gray-300">
        <h3 className="text-xl font-bold text-black mb-2">{curso.titulo}</h3>
        {curso.oferta && (
          <p className="text-green-600 font-semibold">
            <span className="font-bold text-black">Oferta: </span>
            {curso.oferta}
          </p>
        )}
        {curso.status && (
          <p className="text-yellow-600 mt-2">
            <span className="font-bold text-black">Status: </span>
            {curso.status}
          </p>
        )}
        {curso.preco && (
          <p className="text-red-600 mt-2">
            <span className="font-bold text-black">Preço: </span>
            {curso.preco}{' '}
          </p>
        )}
        {curso.data && (
          <p className="text-gray-600 mt-2">
            <span className="font-bold text-black">Data: </span>
            {curso.data}
          </p>
        )}

        {curso.preco && (
          <p className="text-black mt-4">
            <span className="font-bold text-black">
              Informações importantes: {''}
            </span>
            {curso.descricao}{' '}
          </p>
        )}

        <div className="flex justify-center">
          <BotaoEscreva
            text="Comprar"
            bgColor="#006400"
            hoverColor="#228B22"
            onClick={handleComprar}
          />
        </div>
      </div>
    </div>
  );
};

export default CursoCard;
