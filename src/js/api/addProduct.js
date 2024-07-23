export function addProduct(product) {
  const products = JSON.parse(localStorage.getItem('products'));
  if (products) {
    localStorage.setItem('products', JSON.stringify([...products, product]));
  } else {
    localStorage.setItem('products', JSON.stringify([product]));
  }
}
