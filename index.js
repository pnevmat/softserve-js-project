import { homePage } from './src/js/pages/home.js';
import { shippingAndDeliveryQuestionsPage } from './src/js/pages/shippingAndDeliveryQuestions.js';
import { productsPage } from './src/js/pages/products.js';
import { productPage } from './src/js/pages/product.js';
import { favoritesPage } from './src/js/pages/favorites.js';
import { getLocation } from './src/js/helpers/getLocation.js';

const router = () => {
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
      root.innerHTML = productsPage(location);
      break;
    case 'product':
      root.innerHTML = productPage(location);
      break;
    case 'favorites':
      root.innerHTML = favoritesPage(location);
      break;

    default:
      break;
  }
};

router();
