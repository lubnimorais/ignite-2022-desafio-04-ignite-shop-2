import { styled } from '../../styles';

import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  width: '30rem',

  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  background: '$gray800',

  padding: '3rem',
  paddingTop: '4.5rem',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  h2: {
    fontSize: '$lg',
    fontWeight: 700,
    color: '$gray100',

    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '1.5rem',

    overflowY: 'auto',
  },
});

export const CartClose = styled(Dialog.Close, {
  background: 'none',

  border: 'none',

  color: '$gray500',

  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
});

export const CartProduct = styled('div', {
  width: '100%',
  height: '5.8125rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
});

export const CardProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.8125rem',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
});

export const CardProductDetail = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '$md',
    color: '$gray300',
  },

  strong: {
    marginTop: '0.25rem',

    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    width: 'max-content',

    marginTop: 'auto',

    background: 'none',

    fontSize: '1rem',
    fontWeight: 700,
    color: '$green500',

    border: 'none',
  },
});

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: 'auto',

  button: {
    width: '100%',
    height: '4.3125rem',

    background: '$green500',

    fontSize: '$md',
    fontWeight: 700,
    color: '$white',

    border: 'none',
    borderRadius: 8,

    transition: '0.4s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
});

export const FinalizationDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  marginBottom: 55,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        fontSize: '$xl',
        color: '$gray100',
      },
    },
  },
});
