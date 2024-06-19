import BotaoEscreva from "./botaoEscreva-se";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-10 bg-white">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-12  text-[#ea0bb4]">Programações Científicas</h2>
        <div className="text-left">
          
          <p className="text-md md:text-lg mb-12">
          programacao
          </p>
          <ul className="list-disc list-inside text-left md:text-left mx-auto md:mx-0">
            <li>09:00 - Abertura</li>
            <li>10:00 - Palestra: Avanços na Pediatria</li>
            <li>11:30 - Workshop: Cuidados Neonatais</li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
