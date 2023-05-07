import { MouseEvent, useCallback, useEffect, useState } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import Link from 'next/link';

import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';

import Stripe from 'stripe';
import { stripe } from '../services/stripe';

import { useCart } from '../hooks/cart';

import { CartButton } from '../components/CartButton';

import { HomeContainer, Product, SliderContainer } from '../styles/pages/home';
import { ProductSkeleton } from '../components/ProductSkeleton';

type IProduct = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  price_formatted: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
};

type IHomeProps = {
  products: IProduct[];
};

export default function HomePage({ products }: IHomeProps) {
  const { addToCart, checkIfItemAlreadyExistsInCart } = useCart();

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = useCallback(
    (event: MouseEvent, product: IProduct) => {
      event.preventDefault();
      addToCart(product);
    },
    [addToCart],
  );

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <HomeContainer>
          <div ref={emblaRef} className="embla">
            <SliderContainer className="embla__container container">
              {isLoading ? (
                <>
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                </>
              ) : (
                <>
                  {products.map(product => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      passHref
                    >
                      <Product className="embla__slide">
                        <Image
                          src={product.imageUrl}
                          width={520}
                          height={480}
                          alt=""
                        />

                        <footer>
                          <div>
                            <strong>{product.name}</strong>
                            <span>{product.price_formatted}</span>
                          </div>

                          <CartButton
                            color="green"
                            size="large"
                            disabled={checkIfItemAlreadyExistsInCart(
                              product.id,
                            )}
                            onClick={event => {
                              handleAddToCart(event, product);
                            }}
                          />
                        </footer>
                      </Product>
                    </Link>
                  ))}
                </>
              )}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      price_formatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
