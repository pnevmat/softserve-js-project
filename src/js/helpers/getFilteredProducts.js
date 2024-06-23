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
  const filtersKeysArr = Object.keys(filters);

  const filteredProducts = products.filter(product => {
    const maches = [];

    filtersKeysArr.forEach(key => {
      if (
        !isNaN(Number(filters[key])) &&
        ((key === 'size' && Number(filters[key]) === Number(product[key])) ||
          (key === 'price' && Number(filters[key]) >= Number(product[key])))
      ) {
        maches.push(true);
      }

      if (isNaN(Number(filters[key])) && filters[key] === product[key]) {
        maches.push(true);
      }
    });

    if (maches.length === filtersKeysArr.length) return product;
  });

  return filteredProducts;
}
