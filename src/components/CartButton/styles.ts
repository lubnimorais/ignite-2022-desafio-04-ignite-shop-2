import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 'none',
  borderRadius: 6,

  position: 'relative',

  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  // VARIAÇÃO NO STITCHES
  // VARIAÇÃO DO BOTÃO
  variants: {
    color: {
      gray: {
        background: '$gray800',

        color: '$gray500',
      },

      green: {
        background: '$green500',

        color: '$white',

        transition: '0.4s',

        '&:not(:disabled):hover': {
          background: '$green300',
        },
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  // aqui é a varante que definimos acima
  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
});
