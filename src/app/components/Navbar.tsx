'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-2 text-[#ea0bb4] md:block hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Image
            src="/assets/logo-PNG-semfundo.png"
            alt="Ginecologia e Obstetrícia"
            width={80}
            height={80}
          />
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Caso eu decidar colocar menu na versao mobile */}
            {/* <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.364 18.364a1 1 0 010-1.414L17.95 17H6.05l-.414.414a1 1 0 11-1.414-1.414L4.636 15H5.95L12 9.95l6.05 6.05h1.314l.414-.414a1 1 0 011.414 1.414l-.414.414H19.95l-6.05 6.05L7.95 19H6.636l-.414.414a1 1 0 01-1.414-1.414L6.05 17H5.95L12 12.05 18.05 18h1.314l.414-.414a1 1 0 010-1.414L18.364 18z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg> */}
          </button>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 md:ml-4`}
          style={{ marginLeft: '-0.5rem' }} // Alinhar um pouco mais para a esquerda
        >
          <Link
            href="#about"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Sobre
          </Link>
          <Link
            href="#speakers"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Presidentes
          </Link>

          <Link
            href="#schedule"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Programação
          </Link>

          <Link
            href="#people"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Palestrantes
          </Link>

          <Link
            href="#location"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Local
          </Link>

          <Link
            href="#contact"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Contato
          </Link>

          <Link
            href="#contact"
            className="text-xl transition duration-300 hover:text-[#e804c4] hover:scale-105"
          >
            Inscreva-se
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
