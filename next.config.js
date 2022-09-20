/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['pepperest.com', 'picsum.photos', 'bit.ly'],
        loader: 'custom',
    },
}

module.exports = nextConfig
