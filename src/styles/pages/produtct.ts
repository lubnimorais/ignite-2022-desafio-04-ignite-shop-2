import { styled } from '..';

export const ProductContainer = styled('main', {
  maxWidth: 1180,

  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 8,

  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const ProductDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: 'block',

    marginTop: '1rem',

    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',

    fontSize: '$md',
    color: '$gray300',

    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',

    backgroundColor: '$green500',

    border: 0,
    borderRadius: 8,

    fontSize: 'medium',
    fontWeight: 'bold',
    color: '$white',

    padding: '1.25rem',

    cursor: 'pointer',

    transition: '0.3s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});
