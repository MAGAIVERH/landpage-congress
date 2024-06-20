'use client';
import React from 'react';

interface BotaoEscrevaProps {
  text: string;
  bgColor: string;
  hoverColor: string;
  onClick?: () => void;
  className?: string;
}

const BotaoEscreva: React.FC<BotaoEscrevaProps> = ({
  text,
  bgColor,
  hoverColor,
  onClick,
  className,
}) => {
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
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BotaoEscreva;
