'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate: Date = new Date('2024-12-31T00:00:00Z'); // Data do evento em UTC

    const countdown = setInterval(() => {
      updateTimeLeft(targetDate);
    }, 1000);

    updateTimeLeft(targetDate); // Atualização imediata ao montar o componente

    return () => clearInterval(countdown);
  }, []);

  const updateTimeLeft = (targetDate: Date) => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes: number = Math.floor((difference / 1000 / 60) % 60);
      const seconds: number = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  const formatNumber = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center p-4 "
      style={{ backgroundImage: "url(/assets/imagem-congresso.png)" }}
    >
      <div className="absolute inset-0 bg-[#ea0bb4] opacity-80"></div>
      <div className="relative text-center">
        {/* Adicionando a imagem da logo */}
        <Image
          src="/assets/Logo-PNG-semfundo.png"  // Caminho para a imagem da logo branca
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto mt-4 w-32 md:hidden bg-white p-2 rounded-full mb-10" // Estilos para centralizar e ajustar tamanho
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          XLIII Jornada de Ginecologia e Obstetrícia
          VII Jornada Iguatuense de Ginecologia e Obstetrícia
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white">
          Participe do nosso congresso pediátrico e atualize seus conhecimentos
        </p>
        <div className="text-white text-3xl md:text-5xl font-bold mb-6">
          <div className="mb-6">Outubro 17-18 | Fortaleza, CE</div>
          <div className="flex justify-center items-center mb-4 space-x-4">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
                <span className="text-[#ea0bb4] text-2xl font-bold">
                  {formatNumber(timeLeft.days)}
                </span>
              </div>
              <span className="text-xs mt-2">DIAS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
                <span className="text-[#ea0bb4] text-2xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-xs mt-2">HORAS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
                <span className="text-[#ea0bb4] text-2xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-xs mt-2">MINUTOS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
                <span className="text-[#ea0bb4] text-2xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
              <span className="text-xs mt-2">SEGUNDOS</span>
            </div>
          </div>
        </div>
        <a
          href="#register"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-14 md:py-4 md:px-8 rounded-[20px] inline-block mt-4"
        >
          Inscreva-se Agora
        </a>
      </div>
    </section>
  );
};

export default HeroSection;




