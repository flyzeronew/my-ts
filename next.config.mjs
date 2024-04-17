/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // development
      'localhost',
      'esg-app-alpha.vercel.app',
      // staging
      'esg-statics-staging.tvbs.com.tw',
      'esg-frontend-staging.tvbs.com.tw',
      // production
      'esg-statics-production.tvbs.com.tw',
      'esg.tvbs.com.tw',
      // youtube
      'img.youtube.com',
    ],   
  }, 
  env: {
    APP_URL: process.env.APP_URL,
    GTM_ID: process.env.GTM_ID,
    IMG_DEFAULT: process.env.IMG_DEFAULT,
    IMG_DEFAULT_SQUARE: process.env.IMG_DEFAULT_SQUARE,
  },  
};

export default nextConfig;
