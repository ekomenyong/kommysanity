module.exports = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  trailingSlash: true,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true
  },
};

