'use client'

import { useState } from 'react';
import InstagramIcon from '../../../public/assets/icons/instagram.png';
import FacebookIcon from '../../../public/assets/icons/facebook.png';
import LinkedInIcon from '../../../public/assets/icons/linkedin.png';
import Image from 'next/image';

const SpeakersSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <section id="speakers" className="py-10">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Presidentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Repita este bloco para cada palestrante */}
          <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-t-lg h-120 md:h-80">
              <img
                src="/assets/Sammya-Bezerra-Maia-E-Holanda-Moura.jpg"
                alt="Dr. Sammya Bezerra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl md:text-xl font-bold text-[#ea0bb4] mb-4">
                Dra. Sammya Bezerra
              </h3>
              <p className="text-gray-600 mb-4">Presidente da SOCEGO</p>
              <p className="text-gray-600 font-semibold">Palestrante</p>

              <div className="mt-4 flex justify-center space-x-2">
                <a href="https://instagram.com" className="bg-gray-300 p-2 rounded-full">
                  <Image 
                    src={InstagramIcon} 
                    alt="Instagram" 
                    width={24}
                    height={24}
                    className="w-6 h-6" 
                  />
                </a>
                <a href="https://facebook.com" className="bg-gray-300 p-2 rounded-full">
                  <Image 
                    src={FacebookIcon} 
                    alt="Facebook" 
                    width={24}
                    height={24}
                    className="w-6 h-6" 
                  />
                </a>
                <a href="https://linkedin.com" className="bg-gray-300 p-2 rounded-full">
                  <Image 
                    src={LinkedInIcon} 
                    alt="LinkedIn" 
                    width={24}
                    height={24}
                    className="w-6 h-6" 
                  />
                </a>
              </div>

              <a
                
                onClick={handleShowMessage}
                className="bg-[#ea0bb4] hover:bg-[#e804c4] text-white font-bold py-3 px-14 md:py-4 md:px-8 rounded-[15px] border-none inline-block mt-4"
              >
                Ver mensagem
              </a>
            </div>

            {showMessage && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6">
                <div className="text-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="/assets/Sammya-Bezerra-Maia-E-Holanda-Moura.jpg"
                      alt="Dr. Sammya Bezerra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 font-bold mb-4">Convidamos(a) os colegas médicos, residentes, estudantes e outros profissionais da área da saúde a participarem ativamente da nossa programação científica. Muito além da nossa preciosa troca de experiências, teremos o privilégio de homenagear presencialmente o Dr. Arnaldo Afonso Carvalho, ilustre filho de Iguatu, que há décadas abrilhanta a Sociedade Cearense de Ginecologia e Obstetrícia com seu notório conhecimento na especialidade.</p>
                  <button
                    onClick={handleCloseMessage}
                    className="bg-[#ea0bb4] hover:bg-[#e804c4] text-white font-bold py-2 px-4 rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
