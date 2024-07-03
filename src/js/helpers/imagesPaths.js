const pathsObj = {
  '/': {
    'icons-sprite1x.png': './src/images/icons-sprite1x.png',
    'logo1x.png': './src/images/logo1x.png',
    'logo2x.png': './src/images/logo2x.png',
  },
  'shipping-and-delivery-questions': {
    'icons-sprite1x.png': '../src/images/icons-sprite1x.png',
    'logo1x.png': '../src/images/logo1x.png',
    'logo2x.png': '../src/images/logo2x.png',
  },
  products: {
    'icons-sprite1x.png': '../src/images/icons-sprite1x.png',
    'logo1x.png': '../src/images/logo1x.png',
    'logo2x.png': '../src/images/logo2x.png',
  },
  product: {
    'icons-sprite1x.png': '../src/images/icons-sprite1x.png',
    'logo1x.png': '../src/images/logo1x.png',
    'logo2x.png': '../src/images/logo2x.png',
  },
};

export function getImgPath(page, imgName, type) {
  try {
    if (!type) return pathsObj[page][imgName];
    if (type === 'product') return `../src/images/${imgName}`;
  } catch (e) {
    throw new Error('Page or image is not exist');
  }
}
