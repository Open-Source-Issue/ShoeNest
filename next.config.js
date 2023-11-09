/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        domains: ['fakestoreapi.com'],
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
              port: '',
              pathname: '/products',
            },
          ],
        },
}

module.exports = nextConfig
