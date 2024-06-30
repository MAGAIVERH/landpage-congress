// next.config.js
const nextConfig = {
  // Enable dynamic routes
  trailingSlash: true,
  // Add support for dynamic routes
  async rewrites() {
    return [
      {
        source: '/cursos/:slug*',
        destination: '/cursos/[slug]', // Rota dinâmica
      },
    ];
  },
};

module.exports = nextConfig;
