import Link from 'next/link';
import React from 'react';
import BotaoEscreva from '../botaoEscreva-se';

const ProgramacaoJornada = () => {
  return (
    <>
      {/*Primeiro bolco */}
      <div className="">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 mt-16 text-center text-[#ea0bb4]">
          Programação
        </h2>
        <h3 className="font-bold text-center mb-10">
          III JORNADA MULTIPROFISSIONAL DA SAÚDE ESTÁCIO – IDOMED – IGUATU
          “HUMANIZAÇÃO E INTEGRALIDADE AO CUIDAR DA MULHER”
        </h3>
        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-lg font-bold">1 DIA - SEXTA-FEIRA</h2>
          <div className="border-b-2 border-gray-300 my-3"></div>
          <p className="font-bold">08:00am - 08:30am</p>
          <p>Entrega de material</p>
          {/* Linha divisória */}
          <hr className="my-3" />
          <p className="font-bold">08:00am - 08:30am</p>
          <p>
            Abertura oficial da III Jornada Multiprofissional da Saúde da
            Estácio – IDOMED – Iguatu
          </p>
          {/* Adicione mais eventos conforme necessário */}
        </div>

        <h3 className="text-xl md:text-3xl text-center font-bold  mb-10 mt-10 text-[#ea0bb4]">
          Uma rede de assistência: Como eu vejo:
        </h3>
        {/* Adicione mais dias e categorias conforme necessário */}

        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <p className="font-bold">08:30am - 09:10am</p>
          <p className="font-bold">
            SEGUIMENTO DAS DOENÇAS MAIS FREQUENTES NA GRAVIDEZ
          </p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dr. ALVARO
            COSTA MARQUES
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />
          <p className="font-bold">09:20am - 10:00am</p>
          <p className="font-bold">O ACOLHIMENTO NO PERÍODO PERI-PARTO</p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. MARISETE
            CAMPINHO BRAGA
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:00am - 10:30am</p>
          <p className="font-bold">COFFEE – BREAK</p>

          {/* Linha divisória */}
          <hr className="my-3" />
          <p className="font-bold">10:30am - 11:10am</p>
          <p className="font-bold">CUIDADOS COM A AMAMENTAÇÃO</p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. MARIA
            AURICIANE HOLANDA PIRES
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">11:20am - 12:00am</p>
          <p className="font-bold">SANGRAMENTOS NA GRAVIDEZ E PUERPÉRIO</p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. MILENA
            MÁXIMO DE FREITAS
          </p>
          {/* Adicione mais eventos conforme necessário */}
        </div>

        <h3 className="text-xl md:text-3xl text-center font-bold  mb-10 mt-10 text-[#ea0bb4]">
          Uma rede de apoio: Como eu vejo:
        </h3>

        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <p className="font-bold">14:00am - 14:40am</p>
          <p className="font-bold">ENFERMAGEM NO “HUMANIZA PARTO”</p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. NATÁLIA
            BASTOS FERREIRA TAVARES
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />
          <p className="font-bold">14:50am - 15:30am</p>
          <p className="font-bold">FISIOTERAPIA NA “GRAVIDEZ E PUERPÉRIO” </p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. AMANDA
            KARLA MOREIRA FEITOSA
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">15:30am - 16:00am</p>
          <p className="font-bold">COFFEE – BREAK</p>

          {/* Linha divisória */}
          <hr className="my-3" />
          <p className="font-bold">16:00am - 16:40am</p>
          <p className="font-bold">PSICOLOGIA NA “MATERNIDADE”</p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. ARIEL
            BARBOSA GONÇALVES
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">16:50am - 17:30am</p>
          <p className="font-bold">
            A REDE SUS LOCAL NA “ASSISTÊNCIA INTEGRAL À MULHER”
          </p>
          <p>
            <span className="font-semibold">Palestrante</span> – Dra. FIDERALINA
            RODRIGUES DE ALBUQUERQUE
          </p>
          {/* Adicione mais eventos conforme necessário */}
        </div>
        <div className="flex justify-center">
          <Link href="#schedule">
            <BotaoEscreva
              text="Voltar ao menu Programação"
              bgColor="#ea0bb4"
              hoverColor="#e804c4"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProgramacaoJornada;
