import { homePage } from './src/js/pages/home.js';
import { shippingAndDeliveryQuestionsPage } from './src/js/pages/shippingAndDeliveryQuestions.js';
import { productsPage } from './src/js/pages/products.js';

const router = () => {
  const location = window.location.pathname;
  console.log('Location spleted: ', location.split('/'));
  const baseUrlFolder = location
    .split('/')
    .find(elem => elem === 'softserve-js-project');
  console.log('Base url folder: ', baseUrlFolder);
  const page =
    location.split('/').length <= 2 ||
    (location.split('/').length <= 3 && baseUrlFolder)
      ? '/'
      : location.split('/')[location.split('/').length - 2];
  console.log('Pge to router: ', page);
  const root = document.getElementById('root');

  switch (page) {
    case '/':
      root.innerHTML = homePage(page, baseUrlFolder);
      break;
    case 'shipping-and-delivery-questions':
      root.innerHTML = shippingAndDeliveryQuestionsPage(page, baseUrlFolder);
      break;
    case 'products':
      root.innerHTML = productsPage(page, baseUrlFolder);
      break;

    default:
      break;
  }
};

router();
