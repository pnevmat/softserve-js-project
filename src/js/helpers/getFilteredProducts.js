export function getFilteredProducts(products, filters) {
  // Filters:

  // category
  // subcategory
  // subsubcategory
  // size
  // width
  // price
  // color
  // style
  // occasion
  // feature
  // material
  // pattern
  // theme
  // accent
  const filteredProducts = products.filter(product => {
    const filtersArr = Object.values(filters);
    const productArr = Object.values(product);

    const combinedArr = [...filtersArr, ...productArr];
    const productCollection = new Set(combinedArr);

    if (productCollection.size === productArr.length) return product;
  });
  return filteredProducts;
}
