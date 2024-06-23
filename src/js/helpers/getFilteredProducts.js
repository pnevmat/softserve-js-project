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
      console.log('produt obj values: ', Object.values(product));
      console.log('Filters value: ', filters[key]);
      console.log(
        'Found product: ',
        Object.values(product).find(
          value =>
            value.toString().toLowerCase() === filters[key].toLowerCase(),
        ),
      );
      if (
        (isNaN(Number(filters[key])) && filters[key] === product[key]) ||
        (isNaN(Number(filters[key])) &&
          key === 'search' &&
          Object.values(product).find(
            value =>
              value.toString().toLowerCase() === filters[key].toLowerCase(),
          ))
      ) {
        maches.push(true);
      }
    });

    if (maches.length === filtersKeysArr.length) return product;
  });

  return filteredProducts;
}
