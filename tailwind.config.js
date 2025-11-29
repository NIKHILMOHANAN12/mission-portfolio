/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scans your source code
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			lato: [
  				'Lato',
  				'sans-serif'
  			],
  			opensans: [
  				'Open Sans',
  				'sans-serif'
  			],
  			ptserif: [
  				'PT Serif"',
  				'serif'
  			],
  			fahkwang: [
  				'Fahkwang',
  				'sans-serif'
  			],
  			manrope: [
  				'Manrope',
  				'sans-serif'
  			],
  			zuume: [
  				'Zuume',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			h1: [
  				'4rem',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'3rem',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			h3: [
  				'2.5rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'2rem',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			h5: [
  				'1.75rem',
  				{
  					lineHeight: '1.35',
  					fontWeight: '500'
  				}
  			],
  			h6: [
  				'1.5rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '500'
  				}
  			],
  			bodylarge: [
  				'1.5rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '500'
  				}
  			],
  			bodymedium: [
  				'1.25rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			],
  			bodysmall: [
  				'1rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			]
  		},
  		colors: {
  			neutral: {
  				'100': '#FAFAFA',
  				'300': '#F5F5F5',
  				'500': '#D4D4D4',
  				'700': '#737373',
  				'900': '#171717'
  			},
  			black: '#171717',
  			white: '#ffffff',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			bounceY: 'bounceY 1s infinite',
  			bounceSlow: 'bounceY 2s infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
      require("tailwindcss-animate")
],
};
