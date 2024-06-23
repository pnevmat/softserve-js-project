const productsSort = document.getElementById('products-sort');

productsSort.addEventListener('change', e => {
  e.preventDefault();
  const value = e.target.value;
  const prevLink = window.location.href;

  const link = prevLink.includes('sort')
    ? `?` +
      prevLink
        .split('?')[1]
        .split('&')
        .filter(param => !param.includes('sort'))
        .join('&') +
      `&sort=${value}`
    : `?` + prevLink.split('?')[1] + `&sort=${value}`;
  console.log('Prev link: ', prevLink);
  console.log('Link with sort: ', link);
  window.location.search = link;
});
