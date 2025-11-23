/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			fontSize: {
				// Headings - Desktop
				'h1': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h2': ['3.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h3': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h4': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'h5': ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'h6': ['1.375rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				// Headings - Mobile
				'h1-mobile': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h2-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h3-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h4-mobile': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'h5-mobile': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'h6-mobile': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				// Text sizes
				'text-large': ['1.375rem', { lineHeight: '1.5' }],
				'text-medium': ['1.125rem', { lineHeight: '1.5' }],
				'text-regular': ['1rem', { lineHeight: '1.5' }],
				'text-small': ['0.875rem', { lineHeight: '1.5' }],
				'text-tiny': ['0.75rem', { lineHeight: '1.5' }],
			},
			fontWeight: {
				'extrabold': '800',
				'semibold': '600',
			},
			borderRadius: {
				'small': '4px',
				'medium': '8px',
				'large': '12px',
			},
			boxShadow: {
				'xxsmall': '0 1px 2px 0 rgba(0,0,0,0.05)',
				'xsmall': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
				'small': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
				'medium': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
				'large': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
				'xlarge': '0 25px 50px -12px rgba(0,0,0,0.25)',
				'xxlarge': '0 25px 50px -12px rgba(0,0,0,0.25), 0 25px 50px -12px rgba(0,0,0,0.25)',
			},
			colors: {
				// Neutrals
				'neutral': {
					lightest: '#f2f2f2',
					lighter: '#d9d9d9',
					light: '#b4b4b4',
					DEFAULT: '#828282',
					dark: '#505050',
					darker: '#1e1e1e',
					darkest: '#050606',
				},
				// Nevada (blues)
				'nevada': {
					lightest: '#eef0f1',
					lighter: '#dee2e3',
					light: '#8e999d',
					DEFAULT: '#5e6e73',
					dark: '#4b585c',
					darker: '#252c2e',
					darkest: '#1c2122',
				},
				// Denim (blues)
				'denim': {
					lightest: '#e7f1f7',
					lighter: '#cfe3f0',
					light: '#599dcd',
					DEFAULT: '#1274b8',
					dark: '#0e5c93',
					darker: '#072e49',
					darkest: '#052237',
				},
				// Forest Green
				'forest-green': {
					lightest: '#e8f4eb',
					lighter: '#d2ead7',
					light: '#62b673',
					DEFAULT: '#1f9738',
					dark: '#18782c',
					darker: '#0c3c16',
					darkest: '#092d10',
				},
				// White
				'white': {
					lightest: '#ffffff',
					lighter: '#ffffff',
					light: '#ffffff',
					DEFAULT: '#ffffff',
					dark: '#cccccc',
					darker: '#666666',
					darkest: '#4c4c4c',
				},
				// Color Schemes
				'scheme-1': {
					text: '#050606',
					background: '#cfe3f0',
					foreground: '#e7f1f7',
					border: 'rgba(5,6,6,0.15)',
					accent: '#5e6e73',
				},
				'scheme-2': {
					text: '#050606',
					background: '#ffffff',
					foreground: '#f2f2f2',
					border: 'rgba(5,6,6,0.15)',
					accent: '#5e6e73',
				},
				'scheme-3': {
					text: '#050606',
					background: '#dee2e3',
					foreground: '#eef0f1',
					border: 'rgba(5,6,6,0.15)',
					accent: '#5e6e73',
				},
				'scheme-4': {
					text: '#ffffff',
					background: '#072e49',
					foreground: '#052237',
					border: 'rgba(255,255,255,0.2)',
					accent: '#ffffff',
				},
			},
		},
	},
	plugins: [],
}
