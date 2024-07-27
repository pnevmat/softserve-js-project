import { BASE_URL } from '../utils/baseUrl.js';

export async function addProduct(product) {
  const response = await fetch(`${BASE_URL}/product/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(product),
  });

  const data = await response.json();

  return data;
}
