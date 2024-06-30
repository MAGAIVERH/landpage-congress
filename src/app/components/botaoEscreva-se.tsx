'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface BotaoEscrevaProps {
  text: string;
  bgColor: string;
  hoverColor: string;
  redirectTo?: string;
  className?: string;
  onClick?: () => void;
}

const BotaoEscreva: React.FC<BotaoEscrevaProps> = ({
  text,
  bgColor,
  hoverColor,
  redirectTo,
  className,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo); // Redirecionar diretamente
    }
    if (onClick) {
      onClick(); // Chama onClick se estiver definido
    }
  };

  return (
    <button
      className={`text-white font-bold text-lg py-3 px-20 md:py-4 md:px-24 rounded-[15px] border-none inline-block mt-4 ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          hoverColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = bgColor;
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BotaoEscreva;
