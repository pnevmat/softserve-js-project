import { getLocation } from './getLocation.js';
import { productsArr } from './productsArr.js';

const { page } = getLocation();
const search = document.getElementById('search');

if (page === 'products') {
  const productsSort = document.getElementById('products-sort');
  const productsList = document.getElementById('products-list');

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

  [...productsList.children].forEach(child => {
    const button = child.children[0].children[0];

    button.addEventListener('click', e => {
      e.preventDefault();

      const product = productsArr.find(product => product.id === button.id);
      const favoriteProducts = JSON.parse(localStorage.getItem('favorites'));

      if (favoriteProducts) {
        const filteredProducts = favoriteProducts.filter(
          p => p.id !== product.id,
        );

        let newFavoritesArr = [];
        if (favoriteProducts.length > filteredProducts.length) {
          newFavoritesArr = [...filteredProducts];
          button.classList.remove('active');
        } else {
          newFavoritesArr = [...filteredProducts, product];
          button.classList.add('active');
        }

        localStorage.setItem('favorites', JSON.stringify(newFavoritesArr));
      } else {
        localStorage.setItem('favorites', JSON.stringify([product]));
      }
    });
  });
}

if (page === 'favorites') {
  const favoritesList = document.getElementById('favorites-list');

  if (favoritesList) {
    [...favoritesList.children].forEach(child => {
      const button = child.children[1].children[0];

      button.addEventListener('click', e => {
        e.preventDefault();

        const favorites = localStorage.getItem('favorites');

        if (favorites) {
          const favoritesArr = JSON.parse(favorites);

          const newFavoritesArr = favoritesArr.filter(
            favorite => favorite.id !== button.id,
          );

          localStorage.setItem('favorites', JSON.stringify(newFavoritesArr));
          location.reload();
        }
      });
    });
  }
}

if (page === 'product') {
  const button = document.getElementsByClassName(
    'product_images_favorite_container',
  )[0];

  button.addEventListener('click', () => {
    const product = productsArr.find(product => product.id === button.id);
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const activeImg = document.getElementsByClassName(
      'product_images_favorite_img',
    )[0];

    if (favorites) {
      const filteredFavorites = favorites.filter(
        favorite => favorite.id !== product.id,
      );

      let newFavoritesArr = [];
      if (favorites.length > filteredFavorites.length) {
        newFavoritesArr = [...filteredFavorites];
        activeImg.classList.remove('active');
      } else {
        newFavoritesArr = [...filteredFavorites, product];
        activeImg.classList.add('active');
      }

      localStorage.setItem('favorites', JSON.stringify(newFavoritesArr));
    } else {
      localStorage.setItem('favorites', JSON.stringify([product]));
    }
  });
}

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

  window.location.search = link;
});
