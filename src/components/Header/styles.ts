import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1180,

  margin: '0 auto',

  padding: '2rem 0',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    marginLeft: 'auto',
  },
});
