module.exports = {
	purge: {
		enable: true,
		content: ["../src/**/*.{js,jsx,ts,tsx}", "../public/index.html"],
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {},
	important: true,
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
