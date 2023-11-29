/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/nermalcat69/',
        permanent: false,
      },
    ];
  },
};
