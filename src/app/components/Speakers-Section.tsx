const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-10">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Palestrantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Repita este bloco para cada palestrante */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-speaker-image.jpg"
              alt="Nome do Palestrante"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-bold">
                Nome do Palestrante
              </h3>
              <p className="text-gray-600">Especialista em Pediatria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
