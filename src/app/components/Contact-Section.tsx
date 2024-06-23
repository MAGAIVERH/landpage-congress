import BotaoEscreva from './botaoEscreva-se';

const RegisterSection = () => {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto text-center p-4  bg-gray-100 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">
          Qualquer dúvida, favor entrar em contato.
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-left text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#ea0bb4] placeholder-gray-400"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#ea0bb4] placeholder-gray-400"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="assunto"
              className="block text-left text-gray-700 mb-1"
            >
              Assunto
            </label>
            <input
              id="assunto"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#ea0bb4] placeholder-gray-400"
              placeholder="Digite o assunto"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mensagem"
              className="block text-left text-gray-700 mb-1"
            >
              Sua Mensagem
            </label>
            <textarea
              id="mensagem"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#ea0bb4] placeholder-gray-400"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>

          <BotaoEscreva
            text="Enviar"
            bgColor="#ea0bb4" // Cor da logo
            hoverColor="#e804c4" // Cor da logo mais escura
            className=" mb-8"
          />
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;
