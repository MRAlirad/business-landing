/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: {
					primary: '#FFFFFF',
					flash: '#F4F5F7',
				},
				orange: {
					dark: '#FF8B00'
				},
				gray: {
					dim: '#616161',
				},
				blue: {
					risd: '#374bff',
				},
			},
			scale : {
				'200' : '2.00'
			}
		},
	},
	plugins: [],
}

