/** @type {import('next').NextConfig} */
const nextConfig = {


  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/id/53/1280/',
      },
    ],
  },
  
}


module.exports = nextConfig
