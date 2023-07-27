/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				menu: {
					'0%': { transform: 'translatex(200%)' },
					'100%': { transform: 'translatex(0)' }
				}
			},
			animation: {
				menu: 'menu .3s ease-in'
			}
		},
		colors: {
			'primary': '#FF465B',
			'secondary': '#00FFFF',
			'white': '#ffffff',
			'backg': {
				100: '#2B2E40',
				200: '#232739',
				300: '#212435',
				400: '#1E2131'
			}
		}
	},
	plugins: [],
}
