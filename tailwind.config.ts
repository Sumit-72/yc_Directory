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
    			// primary: {
    			// 	'100': '#FFE8F0',
    			// 	DEFAULT: '#EE2B69'
    			// },
				primary: {
					'100': '#E0F2FE',  // Light blue shade
					DEFAULT: '#1D4ED8', // Main blue color (similar to bg-blue-600)
					'700': '#1E40AF'    // Darker blue shade, similar to bg-blue-700
				  },
    			secondary: '#FBE843',
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
				'100': '2px 2px 0px 0px rgb(0, 0, 0)',  // Light blue shadow
				'200': '2px 2px 0px 2px rgb(0, 0, 0)',  // Medium blue shadow
				'300': '2px 2px 0px 2px rgb(3, 63, 134)'    // Dark blue shadow
			  },
			  
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