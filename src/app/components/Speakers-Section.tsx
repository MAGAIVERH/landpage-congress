'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import presidents from '../data/presidentsData';
import InstagramIcon from '../../../public/assets/icons/instagram.png';
import FacebookIcon from '../../../public/assets/icons/facebook.png';
import LinkedInIcon from '../../../public/assets/icons/linkedin.png';
import { President } from '../types/presidentTypes';
import BotaoEscreva from './botaoEscreva-se';

const SpeakersSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [activePresident, setActivePresident] = useState<President | null>(
    null,
  );
  const swiperRef = useRef<any>(null);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplaying) {
      interval = setInterval(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoplaying]);

  const handleShowMessage = (president: President) => {
    setActivePresident(president);
    setShowMessage(true);
    setIsAutoplaying(false); // Pausar o autoplay quando exibir a mensagem
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    setActivePresident(null);
    setIsAutoplaying(true); // Reiniciar o autoplay ao fechar a mensagem
  };

  return (
    <section id="speakers" className="py-10">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Presidentes</h2>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {presidents.slice(0, 3).map((president, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="overflow-hidden rounded-t-lg h-120 md:h-80">
                  <img
                    src={president.image}
                    alt={president.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl md:text-xl font-bold text-[#ea0bb4] mb-4">
                    {president.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{president.position}</p>
                  <p className="text-gray-600 font-semibold">
                    {president.atuacao}
                  </p>

                  <div className="mt-4 flex justify-center space-x-2">
                    <a
                      href={president.instagram}
                      className="bg-gray-300 p-2 rounded-full"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href={president.facebook}
                      className="bg-gray-300 p-2 rounded-full"
                    >
                      <Image
                        src={FacebookIcon}
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href={president.linkedin}
                      className="bg-gray-300 p-2 rounded-full"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                  </div>

                  <BotaoEscreva
                    text="Ver mensagem"
                    bgColor="#ea0bb4" // Cor da logo
                    hoverColor="#e804c4" // Cor da logo mais escura
                    onClick={() => handleShowMessage(president)}
                  />
                </div>

                {showMessage && activePresident === president && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6">
                    <div className="text-center">
                      <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                          src={president.image}
                          alt={president.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-600 font-bold mb-4">
                        {president.message}
                      </p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpeakersSection;
