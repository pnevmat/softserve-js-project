import { BASE_URL } from '../utils/baseUrl.js';

export async function updateImage(productId, file, main) {
  const response = await fetch(`${BASE_URL}/product/image`, {
    method: 'POST',
    heders: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: { main, productId },
  });

  const data = await response.json();
  const product = await data.product;

  return product;
}
