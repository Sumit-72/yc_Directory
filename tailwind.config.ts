import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		screens: {
    			xs: '475px'
    		},
    		colors: {
				primary: {
					'100': '#E0F3FF', /* Light shade of blue */
					DEFAULT: '#007BFF' /* Main blue color */
				},
				secondary: '#FBE843', /* Keeping the secondary color as is */
				
    			black: {
    				'100': '#333333',
    				'200': '#141413',
    				'300': '#7D8087',
    				DEFAULT: '#000000'
    			},
    			white: {
    				'100': '#F7F7F7',
    				DEFAULT: '#FFFFFF'
    			}
    		},
    		fontFamily: {
    			'work-sans': [
    				'var(--font-work-sans)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
<<<<<<< HEAD
				'100': '2px 2px 0px 0px rgb(0, 0, 0)', /* Solid blue shadow */
				'200': '2px 2px 0px 2px rgb(0, 0, 0)', /* Blue shadow with an outer spread */
				'300': '2px 2px 0px 2px rgb(0, 123, 255)' /* Lighter blue for a vibrant look */
			},			
=======
				'100': '2px 2px 0px 0px rgb(0, 0, 1)',  // Light blue shadow
				'200': '2px 2px 0px 2px rgb(0, 0, 0)',  // Medium blue shadow
				'300': '2px 2px 0px 2px rgb(3, 63, 134)'    // Dark blue shadow
			  },
			  
>>>>>>> 14a6c32d321e83c6602541d7b50ddcca88a3714c
    		animation: {
    			pulse: 'pulse var(--duration) ease-out infinite',
    			meteor: 'meteor 5s linear infinite'
    		},
    		keyframes: {
    			pulse: {
    				'0%, 100%': {
    					boxShadow: '0 0 0 0 var(--pulse-color)'
    				},
    				'50%': {
    					boxShadow: '0 0 0 8px var(--pulse-color)'
    				}
    			},
    			meteor: {
    				'0%': {
    					transform: 'rotate(215deg) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(215deg) translateX(-500px)',
    					opacity: '0'
    				}
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;