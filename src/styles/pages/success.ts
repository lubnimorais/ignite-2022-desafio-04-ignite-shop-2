import { styled } from '..';

export const SuccessContainer = styled('main', {
  height: 656,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: 560,

    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',

    lineHeight: 1.4,

    marginTop: '2rem',
  },

  a: {
    marginTop: '5rem',

    display: 'block',

    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',

    textDecoration: 'none',

    transition: '0.2s',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',

  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  },
});

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: '50%',

  boxShadow: '0px, 0px 60px rgba(0, 0, 0, 0.8)',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});
