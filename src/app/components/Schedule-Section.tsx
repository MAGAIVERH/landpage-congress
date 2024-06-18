const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Programação</h2>
        <div className="text-left">
          <p className="text-md md:text-lg mb-4">
            Confira a programação completa do nosso congresso:
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
