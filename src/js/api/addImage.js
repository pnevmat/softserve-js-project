import { BASE_URL } from '../utils/baseUrl.js';

export async function addImage(productId, file, main) {
  console.log('Product id in add image: ', productId);
  console.log('Image file: ', file);
  const formData = new FormData();
  formData.append('main', main);
  formData.append('productId', productId);
  formData.append('image', file, file.name);

  const response = await fetch(`${BASE_URL}/product/image`, {
    method: 'POST',
    heders: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  const data = await response.json();
  const product = await data.product;

  return product;
}
