import palette from './palette';

const typography = {
  h1: {
    /* This theme is for the main logo */
    fontSize: 48,
    fontFamily: 'Grand Hotel cursive',
    '@media (max-width: 600px)': {
      fontSize: 48,
    },
    color: palette.black,
  },
  body1: {
    /* This theme is for the registration and sign in: Main Message */
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '18px',
    fontFamily: 'Roboto, sans-serif',
  },
  body2: {
    /* This theme is for the registration and sign in: Sub Message */
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '14px',
    fontFamily: 'Roboto, sans-serif',
  },
  subtitle1: {
    /* This theme is for highlighted link */
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '18px',
    fontFamily: 'Roboto, sans-serif',
    color: palette.highlight,
  },
};

export default typography;
