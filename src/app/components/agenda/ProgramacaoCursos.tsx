import React from 'react';
import BotaoEscreva from '../botaoEscreva-se';
import Link from 'next/link';

const ProgramacaoCursos = () => {
  return (
    <>
      {/* Terceiro bloco */}
      <div className="">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 mt-16 text-center text-[#ea0bb4]">
          Programação Cursos
        </h2>
        <h3 className="font-bold text-center mb-6">
          ATUALIZAÇÃO EM PATOLOGIA DO TRATO GENITAL INFERIOR-PTGI
        </h3>
        <p className="font-bold text-[red] text-center mb-8">
          MANHÃ 09:00 às 12:00
        </p>
        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <p className="font-semibold ">
            Dra. Liana Rabelo Cavalcante (FORT/CE)
          </p>
          <p className="font-semibold">
            Dra. Manuela Cavalcante Portela (FORT/CE)
          </p>
          <p className="font-semibold">
            <span>Colaborador:</span> Sabrinny Pedroza Martins (IGUATU/CE)
          </p>

          <div className="border-b-2 border-gray-300 my-3"></div>
          <p>
            A) NOVAS RECOMENDAÇÕES PARA RASTREAMENTO DO CÂNCER DO COLO DO ÚTERO
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>B) COLPOSCOPIA – O QUE PRECISA SABER</p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>C) ASC US, LSIL – COMO CONDUZIR</p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>D) ASC H, HSIL E LESÕES GLANDULARES – COMO CONDUZIR</p>

          {/* Adicione mais eventos conforme necessário */}
        </div>

        <h3 className="font-bold text-center mb-6 mt-10">
          ATUALIZAÇÃO EM ULTRASSOM OBSTÉTRICA
        </h3>
        <p className="font-bold text-[red] text-center mb-8">
          TARDE 14:00 às 17:00
        </p>

        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <p className="font-semibold">
            <span>Coordenadora:</span> Coordenadora: Nivea Bezerra de
            Albuquerque (IGUATU/CE)
          </p>

          <div className="border-b-2 border-gray-300 my-3"></div>
          <p>
            A) ATUALIZAÇÃO EM MORFOLOGICO (1º TRIMESTRE) Dra. Sammya Bezerra
            Maia e Holanda Moura (FORT/CE)
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>
            B) ATUALIZAÇÃO EM MORFOLOGICO (2º TRIMESTRE) Dra. Jéssica Feitosa
            Cavalcante (FORT/CE)
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>
            C) ATUALIZAÇÃO EM RESTRIÇÃO DE CRESCIMENTO FETAL Dra. Stefanie Viana
            Aguiar Conde (FORT/CE)
          </p>
          {/* Linha divisória */}
          <hr className="my-3" />

          <p>
            B) ATUALIZAÇÃO EM GEMELAR MONOCORIÔNICO Dra. Jéssica Feitosa
            Cavalcante (FORT/CE)
          </p>

          {/* Adicione mais eventos conforme necessário */}
        </div>

        <Link href="#schedule">
          <BotaoEscreva
            text="Voltar ao menu Programação"
            bgColor="#ea0bb4"
            hoverColor="#e804c4"
          />
        </Link>
      </div>
    </>
  );
};

export default ProgramacaoCursos;
