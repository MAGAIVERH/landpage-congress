import Link from 'next/link';
import BotaoEscreva from './botaoEscreva-se';
import ProgramacaoJornada from './agenda/ProgramacaoJornada';
import ProgramacaoGinecologia from './agenda/ProgramacaoGinecologia';
import ProgramacaoCursos from './agenda/ProgramacaoCursos';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-10 bg-white">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl md:text-3xl font-bold  mb-10 text-[#ea0bb4]">
          Programações Científicas
        </h2>
        <div className="text-left">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-stretch mb-8 mt-6">
            <BotaoEscreva
              text="SEXTA-FEIRA - 26/09/2024"
              bgColor="#ea0bb4"
              hoverColor="#e804c4"
              className="flex-1 h-full  md:mt-[0px] "
            />
            <BotaoEscreva
              text="SÁBADO - 27/09/2024 JORNADA"
              bgColor="#ea0bb4"
              hoverColor="#e804c4"
              className="flex-1 h-full"
            />
            <BotaoEscreva
              text="SÁBADO - 27/09/2024 CURSOS"
              bgColor="#ea0bb4"
              hoverColor="#e804c4"
              className="flex-1 h-full l"
            />
          </div>

          <div className=""> </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <ProgramacaoJornada />
            <ProgramacaoGinecologia />
            <ProgramacaoCursos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
