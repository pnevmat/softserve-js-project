import { homePage } from './src/js/pages/home.js';
import { shippingAndDeliveryQuestionsPage } from './src/js/pages/shippingAndDeliveryQuestions.js';
import { productsPage } from './src/js/pages/products.js';
import { productPage } from './src/js/pages/product.js';
import { favoritesPage } from './src/js/pages/favorites.js';
import { getLocation } from './src/js/helpers/getLocation.js';
import { shoppingCart } from './src/js/pages/shoppingCart.js';
import { adminArea } from './src/js/pages/adminArea.js';

const router = async () => {
  const location = getLocation();

  const root = document.getElementById('root');

  switch (location.page) {
    case '/':
      root.innerHTML = homePage(location);
      break;
    case 'shipping-and-delivery-questions':
      root.innerHTML = shippingAndDeliveryQuestionsPage(location);
      break;
    case 'products':
      root.innerHTML = await productsPage(location);
      break;
    case 'product':
      root.innerHTML = productPage(location);
      break;
    case 'favorites':
      root.innerHTML = favoritesPage(location);
      break;
    case 'shopping-cart':
      root.innerHTML = shoppingCart(location);
      break;
    case 'admin-area':
      root.innerHTML = await adminArea(location);
      break;
    default:
      break;
  }
};

router();
