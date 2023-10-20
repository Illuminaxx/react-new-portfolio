const { i18n } = require('./next-i18next.config.js');
/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	},
	experimental: {
		serverActions: true
	}
};

module.exports = nextConfig;
