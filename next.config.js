/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
env:{
  GITHUB_ID: process.env.GITHUB_ID,
  GUTHUB_SECRET: process.env.GUTHUB_SECRET
},
}
