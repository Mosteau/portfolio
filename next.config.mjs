// next.config.mjs
export default {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'; style-src 'self' 'https://fonts.googleapis.com'; font-src 'self' 'https://fonts.gstatic.com'; img-src 'self';",
            },
          ],
        },
      ];
    },
  };