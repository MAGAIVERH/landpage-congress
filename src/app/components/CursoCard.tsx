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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-black mb-2">{curso.titulo}</h3>
      {curso.oferta && (
        <p className="text-green-600 font-semibold">{curso.oferta}</p>
      )}
      {curso.status && <p className="text-yellow-600">{curso.status}</p>}
      {curso.preco && (
        <p className="text-red-600">{curso.preco} : 'Gratuito'</p>
      )}
      <p className="text-gray-600">{curso.data}</p>
      <BotaoEscreva
        text="Comprar"
        bgColor="#006400"
        hoverColor="#228B22"
        onClick={handleComprar}
      />
    </div>
  );
};

export default CursoCard;
