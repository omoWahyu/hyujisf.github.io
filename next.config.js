/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")
const isProd = process.env.NODE_ENV === "production"
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = withContentlayer({
	...nextConfig,
	images: {
		domains: ["www.pexels.com"],
	},
	assetPrefix: isProd ? "https://hyujisf.github.io/" : "", // customize this value
	// experimental: {
	// 	images: {
	// 		unoptimized: true,
	// 	},
	// },
})
