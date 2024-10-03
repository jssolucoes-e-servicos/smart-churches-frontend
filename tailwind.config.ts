// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   darkMode: 'class', // Ative o modo escuro com base na classe
//   theme: {
    
//     extend: {
//       keyframes: {
//         rotating: {
//           "0%, 100%": { transform: "rotate(360deg)" },
//           "50%": { transform: "rotate(0deg)" },
//         },
//       },
//       animation: {
//         "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
//         rotating: "rotating 30s linear infinite",
//         "spin-1.5": "spin 1.5s linear infinite",
//         "spin-2": "spin 2s linear infinite",
//         "spin-3": "spin 3s linear infinite",
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       // colors: {
       
//       //     'purpleivera': '#4a0833',
        
//       // },
//     },
//   },
//   variants: {
//     extend: {
    
//       // Defina grupos de variantes para as classes condicionais
//       backgroundColor: ['dark'],
//       borderColor: ['dark'],
//       divideColor: ['dark'],
//       textColor: ['dark'],
//       // Adicione outros grupos de variantes conforme necessário
//     },
//   },
//   plugins: [],
// }

// export default config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Ative o modo escuro com base na classe
  theme: {
    
    extend: {
      keyframes: {
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero': "url('/asset/bg-hero.svg')"
      },
      colors: {
       
          'purpleivera': '#4d0033',
          "orage-warn": "#F60",
          "primary":"#fb1949",
          "darkBlue": "#0B1B35",
          "customGray": "#8A898E",
          "lightBlue": "#1E0E62",
          "customLightGray": "#15143966",
          'green-primary': '#1D3531',
          'green-actived': '#5D8A83',
          'green-border': '#2A4B46',
          'green-btn': '#CCEC60',
          'green-title-card': '#719D96'
        
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icons': '53.4375rem',
        'area-mockups': '59.8125rem',
        'area-cards': '82.5rem'
      },
      height: {
        'section-hero': '54.6rem',
        'area-cards': '35.1rem'
      }
    },
  },
  variants: {
    extend: {
    
      // Defina grupos de variantes para as classes condicionais
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      divideColor: ['dark'],
      textColor: ['dark'],
      // Adicione outros grupos de variantes conforme necessário
    },
  },
  plugins: [],
}