import { BASE_URL } from '../utils/baseUrl.js';

export async function getProduct(productId) {
  const response = await fetch(`${BASE_URL}/product/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  const data = await response.json();
  const product = await data.product;

  return product;
}
