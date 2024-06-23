const productsSort = document.getElementById('products-sort');
const search = document.getElementById('search');

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

  window.location.search = link;
});

search.addEventListener('change', e => {
  const value = e.target.value;
  const prevLink = window.location.href;

  const link = prevLink.includes('search')
    ? `?` +
      prevLink
        .split('?')[1]
        .split('&')
        .filter(param => !param.includes('search'))
        .join('&') +
      `&search=${value}`
    : `?` + prevLink.split('?')[1] + `&search=${value}`;
  console.log('Prev link: ', prevLink);
  console.log('Link with search: ', link);
  window.location.search = link;
});
