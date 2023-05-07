import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
} from 'react';

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  price_formatted: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface ICartContextData {
  cartItems: IProduct[];
  cartTotal: number;
  addToCart: (product: IProduct) => void;
  checkIfItemAlreadyExistsInCart: (productId: string) => boolean;
  removeCartItem: (productId: string) => void;
}

interface ICartContextProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextData);

const CartProvider = ({ children }: ICartContextProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  const addToCart = useCallback((product: IProduct) => {
    setCartItems(oldState => [...oldState, product]);
  }, []);

  const removeCartItem = useCallback(
    (productId: string) => {
      const cartItemsCopy = cartItems;

      const cartItemsRemove = cartItemsCopy.filter(
        product => product.id !== productId,
      );

      setCartItems(cartItemsRemove);
    },
    [cartItems],
  );

  const checkIfItemAlreadyExistsInCart = useCallback(
    (productId: string) => {
      return cartItems.some(product => product.id === productId);
    },
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        checkIfItemAlreadyExistsInCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ICartContextData {
  const context = useContext(CartContext);

  if (!context) {
    alert('Use useCart with CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
