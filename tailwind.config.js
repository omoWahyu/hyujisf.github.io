/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		borderRadius: { more: "1.25rem", "more-lg": "1.5rem" },
	},
	plugins: [require("@tailwindcss/typography")],
}
