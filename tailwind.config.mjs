/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			gray: {
				10: "#F4F4F4",
				20: "#E0E0E0",
				30: "#C6C6C6",
				40: "#A8A8A8",
				50: "#8D8D8D",
				60: "#6F6F6F",
				70: "#525252",
				80: "#393939",
				90: "#262626",
				100: "#000000"
			},
			primary: {
				10: "#EDF5FF",
				20: "#D0E2FF",
				30: "#A6C8FF",
				40: "#78A9FF",
				50: "#4589FF",
				60: "#0F62FE",
				70: "#0043CE",
				80: "#002D9C",
				90: "#001D6C",
				100: "#001141"
			},
			secondary: {
				10: "#FCCFE3",
				20: "#F99FC7",
				30: "#F66FAB",
				40: "#B20B55",
				50: "#F00F73",
				60: "#C00C5C",
				70: "#900945",
				80: "#60062E",
				90: "#300317",
				100: "#18010B"
			},
			tertiary: {
				10: "#D9FBFB",
				20: "#9EF0F0",
				30: "#3DDBD9",
				40: "#08BDBA",
				50: "#009D9A",
				60: "#007D79",
				70: "#005D5D",
				80: "#004144",
				90: "#022B30",
				100: "#081A1C"
			},
		},
		fontFamily: {
			montserrat: ['Montserrat Alternates', 'serif'],
			hind: ['Hind', 'sans-serif'],
		},
		fontSize: {
			H1: ['287.07px'],
			H2: ['177.42px'],
			H3: ['109.66px'],
			H4: ['67.77px'],
			H5: ['41.89px'],
			H6: ['25.89px'],
			P: ['16px'],
			PSMALL: ['14px'],
			SMALL: ['9.89px'],
			TINY: ['6.11px']
		},
		extend: {
			spacing: {
				H1: '287.07px',
				H2: '177.42px',
				H3: '109.66px',
				H4: '67.77px',
				H5: '41.89px',
				H6: '25.89px',
				P: '16px',
				PSMALL: '14px',
				SMALL: '9.89px',
				TINY: '6.11px',
			}
		},
	},
	plugins: [],
}
