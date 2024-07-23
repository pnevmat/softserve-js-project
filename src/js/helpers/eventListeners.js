import { getLocation } from './getLocation.js';
import { getProducts } from '../api/getProducts.js';
import { addProduct } from '../api/addProduct.js';

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

      const product = getProducts().find(product => product.id === button.id);
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

if (page === 'admin-area') {
  const addCategoryBtn = document.getElementsByClassName(
    'admin_area_add_category_btn',
  )[0];
  const saveCategoryBtn = document.getElementsByClassName(
    'admin_area_save_category_btn',
  )[0];
  const addSubcategoryBtns = [
    ...document.getElementsByClassName('admin_area_add_subcategory_btn'),
  ];
  const saveSubcategoryBtns = [
    ...document.getElementsByClassName('admin_area_save_subcategory_btn'),
  ];
  const addSubsubcategoryBtns = [
    ...document.getElementsByClassName('admin_area_add_subsubcategory_btn'),
  ];
  const saveSubsubcategoryBtns = [
    ...document.getElementsByClassName('admin_area_save_subsubcategory_btn'),
  ];
  const categoriesNavBtn = document.getElementById('categories');
  const productsNavBtn = document.getElementById('products');
  const addProductBtn = document.getElementsByClassName(
    'admin_area_add_product_btn',
  )[0];
  const saveProductBtn = document.getElementsByClassName(
    'admin_area_save_product_btn',
  )[0];
  const addProductColorBtn = document.getElementsByClassName(
    'admin_area_add_product_color_btn',
  )[0];
  const saveProductColorBtn = document.getElementsByClassName(
    'admin_area_save_product_color_btn',
  )[0];
  const addProductSizeBtn = document.getElementsByClassName(
    'admin_area_add_product_size_btn',
  )[0];
  const saveProductSizeBtn = document.getElementsByClassName(
    'admin_area_save_product_size_btn',
  )[0];
  const addProductWidthBtn = document.getElementsByClassName(
    'admin_area_add_product_width_btn',
  )[0];
  const saveProductWidthBtn = document.getElementsByClassName(
    'admin_area_save_product_width_btn',
  )[0];
  const addProductDescriptionBulletBtn = document.getElementsByClassName(
    'admin_area_add_product_description_bullet__btn',
  )[0];
  const saveProductDescriptionBulletBtn = document.getElementsByClassName(
    'admin_area_save_product_description_bullet__btn',
  )[0];

  categoriesNavBtn.addEventListener('click', () => {
    let activeTab = 'categories';
    localStorage.setItem('activeTab', activeTab);
    localStorage.setItem('editProduct', JSON.stringify(''));
    location.reload();
  });

  productsNavBtn.addEventListener('click', () => {
    let activeTab = 'products';
    localStorage.setItem('activeTab', activeTab);
    location.reload();
  });

  if (addCategoryBtn) {
    addCategoryBtn.addEventListener('click', () => {
      localStorage.setItem('saveCategory', JSON.stringify(true));
      location.reload();
    });
  }

  if (saveCategoryBtn) {
    saveCategoryBtn.addEventListener('click', () => {
      const saveCategoryInput = document.getElementsByClassName(
        'admin_area_save_category_input',
      )[0];

      if (saveCategoryInput.value !== '') {
        const categories = localStorage.getItem('categories');

        let newCategoriesArr = [];
        const newCategory = {
          category: saveCategoryInput.value,
          subcategories: [],
        };

        if (categories) {
          newCategoriesArr = [...JSON.parse(categories), newCategory];
          const lastIndex = newCategoriesArr.length - 1;
          newCategoriesArr[lastIndex].id = lastIndex;
        } else {
          newCategory.id = 0;
          newCategoriesArr = [newCategory];
        }

        localStorage.setItem('categories', JSON.stringify(newCategoriesArr));
        localStorage.setItem('saveCategory', JSON.stringify(false));
        location.reload();
      }
    });
  }

  if (addSubcategoryBtns.length > 0) {
    addSubcategoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const saveSubcategory = JSON.parse(
          localStorage.getItem('saveSubcategory'),
        );

        saveSubcategory[btn.id] = true;
        localStorage.setItem(
          'saveSubcategory',
          JSON.stringify(saveSubcategory),
        );
        location.reload();
      });
    });
  }

  if (saveSubcategoryBtns.length > 0) {
    saveSubcategoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const saveSubcategoryInput = [
          ...document.getElementsByClassName(
            'admin_area_save_subcategory_input',
          ),
        ].find(input => input.id === btn.id);

        const saveSubcategory = JSON.parse(
          localStorage.getItem('saveSubcategory'),
        );

        if (saveSubcategoryInput.value !== '') {
          const categories = JSON.parse(localStorage.getItem('categories'));
          const newSubcategory = {
            id: `${btn.id}`,
            subcategory: saveSubcategoryInput.value,
            subsubcategories: [],
          };

          const newCategoriesArr = categories.map(category => {
            if (btn.id === `subcategory${category.id}`) {
              category.subcategories = [
                ...category.subcategories,
                newSubcategory,
              ];
              return category;
            }

            return category;
          });

          localStorage.setItem('categories', JSON.stringify(newCategoriesArr));

          saveSubcategory[`${btn.id}`] = false;
          localStorage.setItem(
            'saveSubcategory',
            JSON.stringify(saveSubcategory),
          );
          location.reload();
        }
      });
    });
  }

  if (addSubsubcategoryBtns.length > 0) {
    addSubsubcategoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const saveSubsubcategory = JSON.parse(
          localStorage.getItem('saveSubcategory'),
        );

        saveSubsubcategory[`${btn.id}`] = true;
        localStorage.setItem(
          'saveSubcategory',
          JSON.stringify(saveSubsubcategory),
        );
        location.reload();
      });
    });
  }

  if (saveSubsubcategoryBtns.length > 0) {
    saveSubsubcategoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const saveSubcategoryInput = [
          ...document.getElementsByClassName(
            'admin_area_save_subsubcategory_input',
          ),
        ].find(input => input.id === btn.id);

        const saveSubsubcategory = JSON.parse(
          localStorage.getItem('saveSubcategory'),
        );

        if (saveSubcategoryInput.value !== '') {
          const categories = JSON.parse(localStorage.getItem('categories'));
          const newSubsubcategory = {
            id: `${btn.id}`,
            subsubcategory: saveSubcategoryInput.value,
          };

          const newCategoriesArr = categories.map(category => {
            category.subcategories.map(subcategory => {
              if (btn.id === `sub${subcategory.id}`) {
                subcategory.subsubcategories = [
                  ...subcategory.subsubcategories,
                  newSubsubcategory,
                ];
                return category;
              }
              return subcategory;
            });
            return category;
          });

          localStorage.setItem('categories', JSON.stringify(newCategoriesArr));

          saveSubsubcategory[`${btn.id}`] = false;
          localStorage.setItem(
            'saveSubcategory',
            JSON.stringify(saveSubsubcategory),
          );
          location.reload();
        }
      });
    });
  }

  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => {
      localStorage.setItem('editProduct', JSON.stringify('null'));
      location.reload();
    });
  }

  if (addProductColorBtn) {
    addProductColorBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );

      saveProductOptions.color = true;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (saveProductColorBtn) {
    saveProductColorBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );
      let tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
      const saveColorInput = document.getElementsByClassName(
        'admin_area_save_product_color_input',
      )[0];
      const newColor = {
        color: saveColorInput.value,
        img: '',
      };

      if (tempProduct.color) {
        tempProduct.color = [...tempProduct.color, newColor];
      } else {
        tempProduct.color = [newColor];
      }

      localStorage.setItem('tempProduct', JSON.stringify(tempProduct));
      saveProductOptions.color = false;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (addProductSizeBtn) {
    addProductSizeBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );

      saveProductOptions.size = true;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (saveProductSizeBtn) {
    saveProductSizeBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );
      let tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
      const saveSizeInput = document.getElementsByClassName(
        'admin_area_save_product_size_input',
      )[0];
      const newSize = {
        size: saveSizeInput.value,
      };

      if (tempProduct.size) {
        tempProduct.size = [...tempProduct.size, newSize];
      } else {
        tempProduct.size = [newSize];
      }

      localStorage.setItem('tempProduct', JSON.stringify(tempProduct));
      saveProductOptions.size = false;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (addProductWidthBtn) {
    addProductWidthBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );

      saveProductOptions.width = true;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (saveProductWidthBtn) {
    saveProductWidthBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );
      let tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
      const saveWidthInput = document.getElementsByClassName(
        'admin_area_save_product_width_input',
      )[0];
      const newWidth = {
        width: saveWidthInput.value,
      };

      if (tempProduct.width) {
        tempProduct.width = [...tempProduct.width, newWidth];
      } else {
        tempProduct.width = [newWidth];
      }

      localStorage.setItem('tempProduct', JSON.stringify(tempProduct));
      saveProductOptions.width = false;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (addProductDescriptionBulletBtn) {
    addProductDescriptionBulletBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );

      saveProductOptions.description = true;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (saveProductDescriptionBulletBtn) {
    saveProductDescriptionBulletBtn.addEventListener('click', () => {
      let saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );
      let tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
      const saveDescriptionBulletInput = document.getElementsByClassName(
        'admin_area_save_product_description_bullet__input',
      )[0];
      const newDescriptionBullet = saveDescriptionBulletInput.value;

      if (tempProduct.description) {
        tempProduct.description = [
          ...tempProduct.description,
          newDescriptionBullet,
        ];
      } else {
        tempProduct.description = [newDescriptionBullet];
      }

      localStorage.setItem('tempProduct', JSON.stringify(tempProduct));
      saveProductOptions.description = false;
      localStorage.setItem(
        'saveProductOptions',
        JSON.stringify(saveProductOptions),
      );
      location.reload();
    });
  }

  if (saveProductBtn) {
    saveProductBtn.addEventListener('click', () => {
      const tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
      const productDataInputs = [
        ...document.getElementsByClassName(
          'admin_area_save_product_data_input',
        ),
      ];

      if (!productDataInputs.find(input => input.value === '')) {
        const randomId = Math.random(0, 1000000000)
          .toString()
          .split('.')
          .join('');

        let newProduct = { id: randomId, ...tempProduct };
        productDataInputs.forEach(input => {
          if (input.id === 'price' || input.id === 'inStock') {
            newProduct[input.id] = Number(input.value);
          } else {
            newProduct[input.id] = input.value;
          }
        });

        addProduct(newProduct);

        localStorage.setItem('tempProduct', JSON.stringify({}));
      }
    });
  }
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
      const product = getProducts().find(product => product.id === select.id);
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
      const product = getProducts().find(product => product.id === btn.id);
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
    const product = getProducts().find(product => product.id === btn.id);

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
      const product = getProducts().find(product => product.id === btn.id);
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
    const product = getProducts().find(product => product.id === button.id);
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
    const product = getProducts().find(
      product => product.id === addToCartBtn.id,
    );
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
