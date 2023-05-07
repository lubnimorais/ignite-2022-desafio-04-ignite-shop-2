import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Stripe from 'stripe';

import { stripe } from '../services/stripe';

import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success';

type ISuccessPageProps = {
  customerName: string;
  productsImages: string[];
};

export default function SuccessPage({
  customerName,
  productsImages,
}: ISuccessPageProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        {/* Não indexar essa página */}
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image src={image} alt="" width={120} height={110} />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuu! <strong>{customerName}</strong>, sua compra de{' '}
          {productsImages.length} camisetas já está a caminho da sua casa
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { session_id } = query;

  if (!session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = session_id as string;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product;

    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
