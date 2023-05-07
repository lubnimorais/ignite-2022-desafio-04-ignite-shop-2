import { HTMLAttributes } from 'react';

import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from './styles';

// eslint-disable-next-line prettier/prettier
interface ICartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  color?: 'gray' | 'green';
  size?: 'medium' | 'large';
}

const CartButton = ({
  disabled = false,
  color,
  size,
  ...rest
}: ICartButtonProps) => {
  return (
    <CartButtonContainer
      disabled={disabled}
      color={color}
      size={size}
      {...rest}
    >
      <Handbag weight="bold" />
    </CartButtonContainer>
  );
};

export { CartButton };
