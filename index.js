import { homePage } from './src/js/pages/home.js';
import { shippingAndDeliveryQuestionsPage } from './src/js/pages/shippingAndDeliveryQuestions.js';
import { productsPage } from './src/js/pages/products.js';

const router = () => {
  const location = window.location.pathname;
  const page =
    location.split('/').length <= 2 ||
    location.split('/').contain('softserve-js-project')
      ? '/'
      : location.split('/')[1];
  console.log('Router page: ', page);
  const root = document.getElementById('root');

  switch (page) {
    case '/':
      root.innerHTML = homePage(page);
      break;
    case 'shipping-and-delivery-questions':
      root.innerHTML = shippingAndDeliveryQuestionsPage(page);
      break;
    case 'products':
      root.innerHTML = productsPage(page);
      break;

    default:
      break;
  }
};

router();
