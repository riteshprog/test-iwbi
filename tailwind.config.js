/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'museo-sans': ['museo-sans'],
        'museo-slab': ['museo-slab'],
      },

      height: {
        88: '22.06rem',
      },
      scale: {
        '-1': '-1',
      },
      transitionProperty: {
        width: 'width',
      },
      colors: {
        primary: {
          50: '#FBFDFE',
          100: '#F4F9FB',
          200: '#CFE6ED',
          300: '#A9D2E0',
          400: '#84BFD2',
          500: '#5EABC4',
          600: '#4094B0',
          700: '#32748A',
          800: '#255565',
          900: '#17353F',
          1000: '#0F2329',
          1100: '#91B4C0',
          1200: '#CEE4ED',
          1300: '#429DB5',
        },
        secondary: {
          50: '#FDFCFC',
          100: '#FAF7F5',
          200: '#F7F1EE',
          300: '#EEE3DD',
          400: '#E7D7CF',
          500: '#DFC9BE',
          600: '#CEAD9C',
          700: '#BD907A',
          800: '#AC7358',
          900: '#8C5C45',
          1000: '#B8BEA3',
          1100: '#725A85',
          1200: '#F3AE9C',
        },
        blue: {
          50: '#FCFDFD',
          100: '#FAFBFB',
          200: '#F8F9FA',
          300: '#F6F7F8',
          400: '#F4F5F7',
          500: '#17a2b8',
          600: '#EFF1F3',
          700: '#EDEFF2',
          800: '#EBEDF0',
          900: '#E9ECEF',
          1000: '#0C9DB0',
          1100: '#148ea1',
          1200: '#05407c',
          1300: '#0056b3',
          1400: '#d1ecf1',
          1500: '#213a45',
          1600: '#28829f',
          1700: '#0866c6',
        },
        tertiary: {
          50: '#E9D3D7',
          100: '#DFBEC4',
          200: '#CE9CA5',
          300: '#BD7A86',
          400: '#AC5867',
          500: '#e2725b',
          600: '#6A343E',
          700: '#48232A',
          800: '#261216',
          900: '#140A0C',
          1000: '#656565',
          1100: '#333333',
          1200: '#444444',
          1300: '#0c5460',
          1400: '#000000',
        },
        warning: {
          300: '#F0EDCC',
          400: '#E5E0A4',
          500: '#D9D27B',
          600: '#CEC555',
          700: '#BAB036',
          800: '#23bf08',
        },
        success: {
          300: '#C2D8C1',
          400: '#A3C4A1',
          500: '#84B082',
          600: '#659C63',
          700: '#517D4F',
        },
        danger: {
          300: '#BD7A86',
          400: '#AC5867',
          500: '#8C4552',
          600: '#6A343E',
          700: '#48232A',
        },
        gray: {
          50: '#656565',
          100: '#555555',
          200: '#444444',
          300: '#333333',
          400: '#D8D8D8',
          500: '#6b7280',
          600: '#263d46',
          700: '#999999',
          800: '#343a40',
          900: '#dee2e6',
          1000: '#f7f7f7',
          1100: '#868e96',
          1200: '#666666',
          1300: '#CCCCCC',
          1400: '#888888',
          1500: '#f8f7f7',
          1600: '#495057',
          1700: '#eeeeee',
          1800: '#35495e',
          1900: '#adb5bd',
          2000: '#545b62',
          2100: '#727b84',
          2200: '#515150',
        },
      },
      fontSize: {
        64: '4rem',
        56: '3.5rem',
        40: '2.5rem',
        28: '1.75rem',
        32: '2rem',
        10: '0.625rem',
        13: '0.812rem',
        15: '0.937rem',
        18: '1.125rem',
        10: '0.625rem',
        11: '0.6875rem',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3.31rem',
        13: '4.1rem',
        14: '1.43rem',
        15: '3.875rem',
      },
      listStyleType: {
        circle: 'circle',
        loweralpha: 'lower-alpha !important',
        square: 'square',
      },
      backgroundImage: (theme) => ({
        'hero-pattern':
          'linear-gradient(86.99deg, rgba(255,255,255,1) -16.18%, rgba(236, 243, 244, 1) 92.94%)',
        'concept-pattern': 'linear-gradient(#16323B,#265563)',
      }),
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    borderRadius: ['hover', 'focus'],
    overflow: ['hover', 'focus'],
    fontWeight: ['hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
      },
      variants: [],
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/@teamfunction/wind-components/src/components/**/*.vue',
      'Wind-Components/src/components/**/*.vue',
    ],
  },
}
