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

if (page === 'shopping-cart') {
  const changeQuantitySelects = [
    ...document.getElementsByClassName(
      'shopping_cart_product_quantity_change_select',
    ),
  ];

  changeQuantitySelects.forEach(select =>
    select.addEventListener('change', e => {
      const product = productsArr.find(product => product.id === select.id);
      const cart = JSON.parse(localStorage.getItem('cart'));

      const newCartArr = cart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity = Number(e.target.value);
        }

        return cartProduct;
      });

      localStorage.setItem('cart', JSON.stringify(newCartArr));
      location.reload();
    }),
  );

  const removeFromCartBtns = [
    ...document.getElementsByClassName(
      'shopping_cart_product_quantity_change_btn',
    ),
  ];

  removeFromCartBtns.forEach(btn =>
    btn.addEventListener('click', () => {
      const product = productsArr.find(product => product.id === btn.id);
      const cart = JSON.parse(localStorage.getItem('cart'));

      const newCartArr = cart.filter(
        cartProduct => cartProduct.id !== product.id,
      );
      localStorage.setItem('cart', JSON.stringify(newCartArr));
      location.reload();
    }),
  );

  const addToCartBtns = [
    ...document.getElementsByClassName('shopping_cart_favorite_btn'),
  ];

  addToCartBtns.forEach(btn => {
    const product = productsArr.find(product => product.id === btn.id);

    if (product) {
      btn.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart'));

        product.quantity = 0;
        product.quantity += 1;

        let newCartArr = [];
        if (cart) {
          newCartArr = [...cart, product];
        } else {
          newCartArr = [product];
        }

        localStorage.setItem('cart', JSON.stringify(newCartArr));
        location.reload();
      });
    }
  });

  const toggleFavoritesBtns = [
    ...document.getElementsByClassName(
      'shopping_cart_product_img_favorite_btn',
    ),
  ];

  toggleFavoritesBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      const product = productsArr.find(product => product.id === btn.id);
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      const activeImg = btn.children[0];

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
      location.reload();
    }),
  );
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

  const addToCartBtn = document.getElementsByClassName(
    'product_description_add_to_cart_btn',
  )[0];

  addToCartBtn.addEventListener('click', () => {
    const product = productsArr.find(product => product.id === addToCartBtn.id);
    const cart = JSON.parse(localStorage.getItem('cart'));

    product.quantity = 0;
    product.quantity += 1;

    let newCartArr = [];
    if (cart) {
      const machProduct = cart.find(
        cartProduct => cartProduct.id === product.id,
      );

      if (machProduct) {
        newCartArr = cart.map(product => {
          if (product.id === machProduct.id) {
            product.quantity += 1;
            return product;
          }

          return product;
        });
      } else {
        newCartArr = [...cart, product];
      }
    } else {
      newCartArr = [product];
    }

    localStorage.setItem('cart', JSON.stringify(newCartArr));
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
