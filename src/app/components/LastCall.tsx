// LastCall.tsx

import React from 'react';
import Image from 'next/image';
import BotaoEscreva from './botaoEscreva-se';
import Link from 'next/link';

const LastCall: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/assets/imagem-congresso.png')" }}
    >
      <div className="absolute inset-0 bg-[#ea0bb4] opacity-80"></div>
      <div className="relative text-center">
        {/* Adicionando a imagem da logo */}
        {/* <Image
          src="/assets/Logo-PNG-semfundo.png" // Caminho para a imagem da logo branca
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto mt-4 w-32 md:hidden bg-white p-2 rounded-full mb-10" // Estilos para centralizar e ajustar tamanho
        /> */}

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Reivindique sua vaga agora
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white">
          Inscreva-se até 9 de novembro para economizar R$ 100,00 na taxa de
          inscrição.
        </p>
        <Link href="#about">
          <BotaoEscreva
            text="Inscreva-se"
            bgColor="#006400"
            hoverColor="#228B22"
          />
        </Link>
      </div>
    </section>
  );
};

export default LastCall;
