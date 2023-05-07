import Image from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';

import { X } from 'phosphor-react';

import { useCart } from '../../hooks/cart';

import { CartButton } from '../CartButton';

import {
  CardProductDetail,
  CardProductImage,
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  FinalizationDetail,
} from './styles';
import { useCallback, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const { cartItems, cartTotal, removeCartItem } = useCart();

  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  const cartItemsQuantity = cartItems.length;

  const cartTotalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal);

  const handleCheckout = useCallback(async () => {
    try {
      setIsCreatingCheckout(true);

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckout(false);
      alert('Falha ao redirecionar ao checkout');
    }
  }, [cartItems]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartItemsQuantity <= 0 && (
              <p> Parece que seu carrinho está vazio :(</p>
            )}

            {cartItems.map(product => (
              <CartProduct key={product.id}>
                <CardProductImage>
                  <Image
                    width={100}
                    height={93}
                    src={product.imageUrl}
                    alt=""
                  />
                </CardProductImage>

                <CardProductDetail>
                  <p>{product.name}</p>

                  <strong>{product.price_formatted}</strong>

                  <button
                    onClick={() => {
                      removeCartItem(product.id);
                    }}
                  >
                    Remover
                  </button>
                </CardProductDetail>
              </CartProduct>
            ))}
          </section>

          <CartFinalization>
            <FinalizationDetail>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartItemsQuantity}{' '}
                  {cartItemsQuantity === 1 ? 'item' : 'itens'}
                </p>
              </div>

              <div>
                <span>Valor total</span>
                <p>{cartTotalFormatted}</p>
              </div>
            </FinalizationDetail>

            <button
              disabled={isCreatingCheckout || cartItemsQuantity <= 0}
              onClick={handleCheckout}
            >
              FInalizar compra
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Cart };
