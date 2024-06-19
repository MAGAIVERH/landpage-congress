import BotaoEscreva from '../botaoEscreva-se';
import infoCursos from '../data/infoCursosaData';

const ThirdAbout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {infoCursos.slice(9).map((curso, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[black] mb-2">{curso.titulo}</h3>
          {curso.oferta && <p className="text-green-600 font-semibold">{curso.oferta}</p>}
          {curso.status && <p className="text-yellow-600">{curso.status}</p>}
          {curso.preco && <p className="text-red-600">{curso.preco}</p>}
          <p className="text-gray-600">{curso.data}</p>
          <BotaoEscreva text="Inscreva-se" bgColor='#006400' hoverColor='#228B22'/>
        </div>
      ))}
    </div>
  );
};

export default ThirdAbout;