import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../services/stripe';

type IProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  defaultPriceId: string;
  price: number;
  price_formatted: string;
  numberPrice: number;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { products } = request.body as { products: IProduct[] };

  if (request.method !== 'POST') {
    return response.status(405).json({
      error: 'Method not allowed',
    });
  }

  if (!products) {
    return response.status(400).json({
      error: 'Products not found',
    });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    // para onde direcionar o usuário depois que ele finalizou a compra com sucesso
    success_url: successUrl,
    // para onde direcionar o usuário cancelou a compra
    cancel_url: cancelUrl,

    mode: 'payment',
    // informações de quais produtos o usuário está comprando
    line_items: products.map(product => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  });

  return response.status(201).json({
    // url para redirecionar o usuário, que é a URL para finalizar a compra
    checkoutUrl: checkoutSession.url,
  });
}
