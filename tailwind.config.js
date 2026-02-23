/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Tokens - Primary (Purple)
        primary: {
          50: '#fdfdfd',        // Near white for backgrounds
          100: '#f6eeff',       // colorPurple100
          200: '#cea6ff',       // colorPurple200
          300: '#c290ff',       // colorPurple300
          400: '#b67aff',       // colorPurple400
          500: '#a259fb',       // primaryDefault
          600: '#9137ff',       // primary600
          700: '#7216e3',       // primary700
          800: '#5200b7',       // primary800
          900: '#22252b',       // Dark for text
        },
        // Secondary (Pink/Magenta)
        secondary: {
          100: '#fee5ff',       // secondary100
          200: '#febfff',       // secondary200
          300: '#fc80ff',       // secondary300
          400: '#fb40ff',       // secondary400
          500: '#fa00ff',       // secondaryDefault
          600: '#bb00bf',       // secondary600
          700: '#7d0080',       // secondary700
          800: '#3e0040',       // secondary800
        },
        // Neutral/Grey scale
        neutral: {
          50: '#fdfdfd',        // neutralWhite
          100: '#ecedee',       // neutral100
          200: '#d0d1d4',       // neutral200
          300: '#a1a4aa',       // neutral300
          400: '#737780',       // neutral400
          500: '#444955',       // neutralDefault
          600: '#333740',       // neutral600
          700: '#22252b',       // neutral700
          800: '#111215',       // neutral800
          900: '#030303',       // neutralBlack
        },
        // Success (Green)
        success: {
          100: '#e7f6e5',       // success100
          200: '#c3e9bf',       // success200
          300: '#86d280',       // success300
          400: '#4abc40',       // success400
          500: '#0da500',       // successDefault
          600: '#109204',       // success600
          700: '#0c6304',       // success700
          800: '#074302',       // success800
        },
        // Error (Red)
        error: {
          100: '#ffe5e5',       // error100
          200: '#ffbfbf',       // error200
          300: '#ff8080',       // error300
          400: '#ff4040',       // error400
          500: '#ff0000',       // errorDefault
          600: '#bf0000',       // error600
          700: '#800000',       // error700
          800: '#400000',       // error800
        },
        // Warning (Orange)
        warning: {
          100: '#fff0e5',       // warning100
          200: '#ffdabf',       // warning200
          300: '#ffb580',       // warning300
          400: '#ff9040',       // warning400
          500: '#ff6b00',       // warningDefault
          600: '#bf5000',       // warning600
          700: '#803600',       // warning700
          800: '#401b00',       // warning800
        },
        // Information (Blue)
        info: {
          100: '#e5e7ff',       // information100
          200: '#bfc2ff',       // information200
          300: '#8085ff',       // information300
          400: '#4047ff',       // information400
          500: '#000aff',       // informationDefault
          600: '#0008bf',       // information600
          700: '#000580',       // information700
          800: '#000340',       // information800
        },
      },
      // Semantic colors from Figma "mapped" tokens
      textColor: {
        heading: '#22252b',        // textHeadings
        body: '#333740',           // textBody
        action: '#a259fb',         // textAction
        'action-hover': '#9137ff', // textActionHover
        disabled: '#737780',       // textDisabled
        info: '#000aff',           // textInformation
        success: '#0da500',        // textSuccess
        warning: '#ff6b00',        // textWarning
        error: '#ff0000',          // textError
        'on-action': '#fdfdfd',    // textOnAction
        'on-disabled': '#22252b',  // textOnDisabled
      },
      backgroundColor: {
        page: '#fdfdfd',           // surfacePage
        surface: '#fdfdfd',        // surfacePrimary
        action: '#a259fb',         // surfaceAction
        'action-hover': '#9137ff', // surfaceActionHover
        'action-hover-2': '#f6eeff', // surfaceActionHover2
        disabled: '#ecedee',       // surfaceDisabled
        'disabled-selected': '#737780', // surfaceDisabledSelected
        success: '#e7f6e5',        // surfaceSuccess
        error: '#ffe5e5',          // surfaceError
        warning: '#fff0e5',        // surfaceWarning
        info: '#e5e7ff',           // surfaceInformation
      },
      borderColor: {
        primary: '#d0d1d4',        // borderPrimary
        secondary: '#a259fb',      // borderSecondary
        action: '#a259fb',         // borderAction
        'action-hover': '#9137ff', // borderActionHover
        focus: '#a259fb',          // borderFocus
        disabled: '#a1a4aa',       // borderDisabled
        error: '#ff0000',          // borderError
        success: '#0da500',        // borderSuccess
        warning: '#ff6b00',        // borderWarning
        info: '#000aff',           // borderInformation
      },
      // Figma Design Token Spacing Scale
      spacing: {
        '3xs': '2px',   // spacing3xs
        '2xs': '4px',   // spacing2xs
        'xs': '8px',    // spacingXs
        'sm': '12px',   // spacingSm
        'md': '16px',   // spacingMd
        'lg': '24px',   // spacingLg
        'xl': '32px',   // spacingXl
        '2xl': '48px',  // spacing2xl
        '3xl': '64px',  // spacing3xl
        'section': '120px',  // Standard section spacing
        // Brand scale tokens
        0: '0px',       // scale0
        1: '1px',       // scale251
        2: '2px',       // scale502
        4: '4px',       // scale1004
        6: '6px',       // scale1506
        8: '8px',       // scale2008
        12: '12px',     // scale30012
        16: '16px',     // scale40016
        20: '20px',     // scale50020
        24: '24px',     // scale60024
        28: '28px',     // scale70028
        32: '32px',     // scale80032
        36: '36px',     // scale90036
        40: '40px',     // scale100040
        44: '44px',     // scale110044
        48: '48px',     // scale120048
        52: '52px',     // scale130052
        56: '56px',     // scale140056
        60: '60px',     // scale150060
        64: '64px',     // scale160064
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],        // typeFontFamilyBody
        display: ['Poppins', 'system-ui', 'sans-serif'],   // typeFontFamilyHeading
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // Figma Design Token Typography
      fontSize: {
        'body-xs': ['10px', { lineHeight: '16px' }],      // Extra small body text
        'body-sm': ['12px', { lineHeight: '20px' }],      // fontsizeBodySm / lineHeightBodySm
        'body-md': ['16px', { lineHeight: '24px' }],      // fontsizeBodyMd / lineHeightBodyMd
        'body-lg': ['20px', { lineHeight: '32px' }],      // fontsizeBodyLarge / lineHeightBodyLg
        'body-xl': ['24px', { lineHeight: '36px' }],      // Extra large body text
        'h6': ['20px', { lineHeight: '24px' }],           // fontsizeHeadingH6 / lineHeightHeadingH6
        'h5': ['24px', { lineHeight: '28px' }],           // fontsizeHeadingH5 / lineHeightHeadingH5
        'h4': ['32px', { lineHeight: '40px' }],           // fontsizeHeadingH4 / lineHeightHeadingH4
        'h3': ['40px', { lineHeight: '48px' }],           // fontsizeHeadingH3 / lineHeightHeadingH3
        'h2': ['48px', { lineHeight: '56px' }],           // fontsizeHeadingH2 / lineHeightHeadingH2
        'h1': ['60px', { lineHeight: '72px' }],           // fontsizeHeadingH1 / lineHeightHeadingH1
        'display': ['72px', { lineHeight: '84px' }],      // Extra large display for hero sections
      },
      // Figma Design Token Border Radius
      borderRadius: {
        'none': '0px',      // borderRadiusNone
        'sm': '2px',        // borderRadiusSm
        'md': '4px',        // borderRadiusMd
        'lg': '8px',        // borderRadiusLg
        'xl': '16px',       // borderRadiusXl
        '2xl': '24px',      // borderRadiusXxl
        'round': '52px',    // borderRadiusRound
        'full': '9999px',
      },
      // Figma Design Token Border Width
      borderWidth: {
        'none': '0px',      // borderWidthNone
        'sm': '1px',        // borderWidthSm
        'md': '2px',        // borderWidthMd
        'lg': '4px',        // borderWidthLg
        DEFAULT: '1px',
      },
      // Figma Design Token Font Weights
      fontWeight: {
        normal: '400',      // typeFontWeightRegular
        semibold: '600',    // typeFontWeightSemibold
        bold: '700',        // typeFontWeightBold
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-in-subtle': 'scaleInSubtle 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'wave': 'wave 20s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleInSubtle: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #b67aff 0%, #a259fb 50%, #9137ff 100%)',
        'gradient-accent': 'linear-gradient(135deg, #a259fb 0%, #9137ff 25%, #fb40ff 75%, #fa00ff 100%)',
      },
      // Enhanced shadow system with depth hierarchy
      boxShadow: {
        // Soft shadows for subtle elevation
        'soft': '0 8px 16px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 32px rgba(0, 0, 0, 0.06)',

        // Card shadows for primary surfaces
        'card': '0 8px 24px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 16px 40px rgba(0, 0, 0, 0.08)',
        'card-elevated': '0 24px 48px rgba(0, 0, 0, 0.1)',

        // Depth levels (1-4 for increasing elevation)
        'depth-1': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'depth-2': '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'depth-3': '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.1)',
        'depth-4': '0 16px 48px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.12)',

        // Purple glow effects
        'glow': '0 0 24px rgba(162, 89, 251, 0.2)',
        'glow-lg': '0 0 48px rgba(162, 89, 251, 0.25)',
        'glow-subtle': '0 0 16px rgba(162, 89, 251, 0.15)',
        'inner-glow': 'inset 0 0 24px rgba(162, 89, 251, 0.1)',

        // Combined shadows (depth + glow)
        'elevated': '0 16px 40px rgba(0, 0, 0, 0.08), 0 0 24px rgba(162, 89, 251, 0.1)',
        'elevated-lg': '0 24px 48px rgba(0, 0, 0, 0.1), 0 0 32px rgba(162, 89, 251, 0.15)',
      },
    },
  },
  plugins: [],
}