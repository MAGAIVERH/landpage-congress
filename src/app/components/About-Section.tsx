import FirstAbout from "./about/FirstAbout";
import SecondAbout from "./about/SecondAbout";
import ThirdAbout from "./about/ThirdAbout";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-12  text-[#ea0bb4]">
          Inscreva-se
        </h2>
   
        <FirstAbout />
        
        <h2 className="text-4xl md:text-3xl font-bold text-[#ea0bb4] mt-12 mb-12">
          XLIII Jornada de Ginecologia e Obstetrícia e VII Jornada Iguatuense de Ginecologia e Obstetrícia.
        </h2>
        <SecondAbout />

        <h2 className="text-4xl md:text-3xl font-bold mb-10 text-[#ea0bb4] mt-12">
         Inscreva-se nos Cursos de Atualização
        </h2>
        <p className='text-[red] mb-8'>Aviso: Para se inscrever nos cursos é necessário estar inscrito na Jornada</p>

        <ThirdAbout />
      </div>
    </section>
  );
};

export default AboutSection;


