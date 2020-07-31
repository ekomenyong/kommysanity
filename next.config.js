module.exports = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
  },
  async rewrites() {
    return [
      // check if Next.js project routes match before we attempt proxying
      {
        source: '/sitemap.xml',
        destination: '/_next/public/sitemap.xml'
      },
      {
        source: '/feed.json',
        destination: `/_next/public/feed.json`
      }
    ];
  }
};

