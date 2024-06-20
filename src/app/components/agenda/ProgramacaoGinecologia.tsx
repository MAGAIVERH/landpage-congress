import Link from 'next/link';
import React from 'react';
import BotaoEscreva from '../botaoEscreva-se';

const ProgramacaoGinecologia = () => {
  return (
    <>
      {/* Segundo bloco*/}
      <div className="">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 mt-16 text-center text-[#ea0bb4]">
          Programação
        </h2>
        <h3 className="font-bold text-center mb-6">
          XLIII Jornada de Ginecologia e Obstetrícia e VII Jornada Iguatuense de
          Ginecologia e Obstetrícia.
        </h3>
        <div className="mb-6 text-center bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-lg font-bold"> 2 DIA - SÁBADO JORNADA</h2>
          <div className="border-b-2 border-gray-300 my-3"></div>
          <p className="font-bold">08:00am - 08:30am</p>
          <p className="font-bold">ABERTURA DO EVENTO</p>
          <p>
            <span className="font-semibold">Palavra da Presidente</span> – Dra.
            Sammya Bezerra
          </p>
          <p>
            <span className="font-semibold">
              Palavra do Presidente da SOCEGO – Seccional Iguatu
            </span>{' '}
            – Dr. Joab Soares de Lima
          </p>
          <p>
            <span className="font-semibold">Homenagem </span> – Dr. Arnaldo
            Afonso Alves de Carvalho
          </p>

          {/* Linha divisória */}
          <hr className="my-3" />
          {/* Adicione mais eventos conforme necessário */}
          <p className="font-bold">08:30am - 10:30am</p>
          <p className="font-bold">
            MESA REDONDA – OBSTETRÍCIA DE RISCO HABITUAL
          </p>
          <p>
            <span className="font-semibold">Debatedor:</span> – Dr. Joab Soares
            de Lima (IGUATU/CE)
          </p>
          <p>
            <span className="font-semibold">Secretária:</span> – Juliana de
            Almeida Jorge Ferreira (IGUATU/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">08:30am - 08:50am</p>
          <p className="font-bold">
            MExames laboratoriais essenciais no pré-natal de risco habitual:
          </p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dra. Shirley
            Kelly Bedê Bruno (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">08:50am - 09:10am</p>
          <p className="font-bold">Uso racional de suplementos no pré-natal</p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dr. Joaquim
            Luiz de Castro Moreira (FORT-CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">09:10am - 09:30am</p>
          <p className="font-bold">
            Boas Práticas de Assistência ao Parto Normal:
          </p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dra. Liduína
            de Albuquerque Rocha e Sousa (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">09:30am - 10:00am</p>
          <p className="font-bold">DEBATE COM A PLATEIA</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:00am - 10:30am</p>
          <p className="font-bold">COFFEE – BREAK</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:30am - 11:30am</p>
          <p className="font-bold">MESA REDONDA – OBSTETRÍCIA PATOLÓGICA</p>
          <p>
            <span className="font-semibold">Debatedor:</span> – Dr. Helvécio
            Neves Feitosa (FORT-CE)
          </p>
          <p>
            <span className="font-semibold">Secretária: </span> – Laís Cristina
            Ferreira Alencar Cavalcante (IGUATU/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:30am - 10:50am</p>
          <p className="font-bold">Condutas no Diabetes na Gestação</p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dra. Ieda
            Maria Silveira Diógenes Feitosa (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:50am - 11:10am</p>
          <p className="font-bold">Manejo da Pré-eclâmpsia:</p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dra. Sammya
            Bezerra Maia e Holanda Moura (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">11:10am - 11:30am</p>
          <p className="font-bold">
            Seguimento clínico da Restrição de Crescimento fetal
          </p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dra.
            Stefanie Viana Aguiar Conde (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">11:30am - 12:00am</p>
          <p className="font-bold">CONFERÊNCIA</p>
          <p>
            <span className="font-semibold">Presidente:</span> – Dra. Sammya
            Bezerra
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">11:30am - 11:50am</p>
          <p className="font-bold">UCI- Neonatal: Até onde podemos ir?</p>
          <p>
            <span className="font-semibold">Palestrante:</span> – Dra. Alciléia
            Leite Carvalho (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">11:50am - 12:00am</p>
          <p className="font-bold">Discussão</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">14:00pm - 15:00pm</p>
          <p className="font-bold">
            MESA REDONDA – ATENÇÃO PRIMÁRIA EM GINECOLOGIA
          </p>
          <p>
            <span className="font-semibold">Debatedor:</span> – Dr. Hildernando
            José Bezerra Moreira (IGUATU-CE)
          </p>
          <p>
            <span className="font-semibold">Secretária:</span> – Ana Clara
            Penaforte Bizarria Monteiro (IGUATU/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">14:00am - 14:20pm</p>
          <p className="font-bold">
            Métodos contraceptivos: aconselhamento a diferentes perfis de
            mulheres
          </p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dra. Aline
            Veras de Morais Brilhante (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">08:50am - 09:10pm</p>
          <p className="font-bold">Uso racional de suplementos no pré-natal</p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dr. Joaquim
            Luiz de Castro Moreira (FORT-CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">14:20am - 14:40pm</p>
          <p className="font-bold">
            Vulvovaginites recorrentes: o que há de novo?
          </p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dra. Manuela
            Cavalcante Portela
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">14:40am - 15:00pm</p>
          <p className="font-bold">Investigação da Dor pélvica:</p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dr. Marcus
            Aurélio Bessa Paiva (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">15:00am - 15:30pm</p>
          <p className="font-bold">DEBATE COM A PLATEIA</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">15:30am - 16:00pm</p>
          <p className="font-bold">COFFEE BREAK</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">16:00am - 17:00pm</p>
          <p className="font-bold">MESA REDONDA – GINECOLOGIA PATOLÓGICA</p>
          <p>
            <span className="font-semibold">Debatedor(a):</span> – Dra.
            Francisca Sulene Araujo Medeiros (IGAUTU/CE)
          </p>
          <p>
            <span className="font-semibold">Secretária: </span> – Maira Hellen
            Leite de Oliveira (IGUATU/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">10:30am - 10:50pm</p>
          <p className="font-bold">Condutas no Diabetes na Gestação</p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dra. Ieda
            Maria Silveira Diógenes Feitosa (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">16:00am - 16:20pm</p>
          <p className="font-bold">
            Sangramento uterino anormal: diagnóstico e tratamento
          </p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dr. Marcus
            Aurélio Bessa Paiva (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">16:20am - 16:40pm</p>
          <p className="font-bold">Abordagem prática da anovulação crônica</p>
          <p>
            <span className="font-semibold">Colaborador(a):</span> – Dr. Fábio
            Eugênio Magalhães Rodrigues (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">16:40am - 17:00pm</p>
          <p className="font-bold">Atualização em Endometriose</p>
          <p>
            <span className="font-semibold">Colaborador:</span> – Dra. Nádia
            Viana de Melo (FORT/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">17:00am - 17:30pm</p>
          <p className="font-bold">DEBATE COM A PLATEIA</p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">17:30am - 18:00pm</p>
          <p className="font-bold">
            CONFERÊNCIA MAGNA: O QUE O GINECOLOGISTA PRECISA SABER SOBRE
            SEXOLOGIA
          </p>
          <p>
            <span className="font-semibold">Conferencista:</span> – Dra. Rayanne
            Cunha Pinheiro (FORT/CE)
          </p>
          <p>
            <span className="font-semibold">Presidente:</span> – Dra. Aline
            Veras de Morais Brilhante (FORT-CE)
          </p>
          <p>
            <span className="font-semibold">Secretária:</span> – Sophia Hellen
            Vidal de Lima (IGUATU/CE)
          </p>
          <hr className="my-3" />
          {/* Linha divisória */}

          <p className="font-bold">18:00pm</p>
          <p className="font-bold">ENCERRAMENTO</p>

          {/* Linha divisória */}
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

export default ProgramacaoGinecologia;
