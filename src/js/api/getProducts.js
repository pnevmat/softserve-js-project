import { BASE_URL } from '../utils/baseUrl.js';

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/product/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  const data = await response.json();
  const products = await data.products;

  return products;
}
