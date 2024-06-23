// LocationSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const LocationSection: React.FC = () => {
  const images = [
    '/assets/local/Estacio-01.jpg',
    '/assets/local/Estacio-02.jpg',
    '/assets/local/Capus.png',
  ];

  return (
    <section id="location" className="py-10 bg-white">
      <div className="container mx-auto  bg-gray-100 p-6 md:p-6 rounded-lg shadow-lg ">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ">
            <h2 className="text-4xl md:text-3xl font-bold mb-12 mt-10 text-center text-[#ea0bb4] ">
              Sobre o local do evento
            </h2>
            <p className="text-gray-700 mb-4 text-justify lg:text-left ">
              Centro Universitário Estácio do Ceará - Campus Iguatu Barro Alto,
              Iguatu - CE A XLIII Jornada de Ginecologia e Obstetrícia e a VII
              Jornada Iguatuense ocorrerão no Centro Universitário Estácio do
              Ceará – Campus Iguatu, onde está localizada a primeira faculdade
              de Medicina em Iguatu, O campus representa um marco na educação
              médica regional, reforçando o compromisso da Estácio com a
              formação de profissionais médicos capacitados. A jornada não
              apenas celebra a excelência na área da saúde, mas também marca um
              novo capítulo na educação médica em Iguatu e no sertão cearense.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full  lg:mb-8">
              <Swiper spaceBetween={10} slidesPerView={1} loop>
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`Local do Evento ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mt-8  mb-8 lg:mt-0">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3495670466946!2d-38.52791902475591!3d-3.7337708432000563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748556e9bffa3%3A0x249b755cbeee9194!2sCentro%20Universit%C3%A1rio%20Est%C3%A1cio%20do%20Cear%C3%A1%20-%20Campus%20Centro!5e0!3m2!1spt-BR!2sbr!4v1718936042616!5m2!1spt-BR!2sbr"
            allowFullScreen
            title="Local do Evento"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
