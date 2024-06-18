const RegisterSection = () => {
  return (
    <section id="register" className="py-10">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Inscreva-se</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-left text-gray-700">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;
