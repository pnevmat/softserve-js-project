import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { activeFilter } from '../components/activeFilter.js';
import { leftFilter } from '../components/leftFilter.js';
import { productCard } from '../components/productCard.js';
import { getTitle } from '../helpers/getTitle.js';
import { getFilteredProducts } from '../helpers/getFilteredProducts.js';
import { getImgPath } from '../helpers/imagesPaths.js';

export function productsPage(page) {
  const searchParams = window.location.search.split('?').join('');
  const categoriesArr = searchParams.split('&').map(category => {
    const splitedCategory = category.split('=');
    return { [splitedCategory[0]]: splitedCategory[1] };
  });

  const title = getTitle(categoriesArr);

  const activeFiltersLayout = categoriesArr.map(category => {
    return activeFilter(page, categoriesArr, category);
  });

  const filtersArr = [
    {
      name: 'category',
      options: [
        { name: 'Sandals', quantity: 10 },
        { name: 'Heels', quantity: 10 },
      ],
    },
    {
      name: "Women's Size",
      options: [
        { name: '1', quantity: null },
        { name: '1.5', quantity: null },
        { name: '2', quantity: null },
        { name: '3', quantity: null },
      ],
    },
    {
      name: "Women's Width",
      options: [
        { name: 'ss', quantity: null },
        { name: 's', quantity: null },
        { name: 'n', quantity: null },
        { name: 'm', quantity: null },
      ],
    },
    {
      name: 'Price',
      options: [
        { name: '$10.00 and Under', quantity: 5 },
        { name: '$25.00 and Under', quantity: 3 },
        { name: '$30.00 and Under', quantity: 8 },
        { name: '$35.00 and Under', quantity: 10 },
      ],
    },
    {
      name: 'Color',
      options: [
        { name: 'Black', quantity: 10 },
        { name: 'Brown', quantity: 11 },
        { name: 'White', quantity: 20 },
        { name: 'Beige', quantity: 3 },
      ],
    },
    {
      name: 'Styles',
      options: [
        { name: 'Comfort', quantity: 5 },
        { name: 'Platform', quantity: 7 },
        { name: 'Slide', quantity: 8 },
        { name: 'Wedges', quantity: 7 },
      ],
    },
    {
      name: 'Occasion',
      options: [
        { name: 'Casual', quantity: 7 },
        { name: 'Dress', quantity: 7 },
        { name: 'Athletic', quantity: 7 },
        { name: 'Outdoor', quantity: 7 },
      ],
    },
    {
      name: 'Features',
      options: [
        { name: 'Strappy', quantity: 7 },
        { name: 'Leather Outsole', quantity: 7 },
        { name: 'Waterproof', quantity: 7 },
        { name: 'Arch Support', quantity: 7 },
      ],
    },
    {
      name: 'Materials',
      options: [
        { name: 'Leather', quantity: 7 },
        { name: 'Manmade', quantity: 7 },
        { name: 'Fabric', quantity: 7 },
        { name: 'Suede', quantity: 7 },
      ],
    },
    {
      name: 'Pattern',
      options: [
        { name: 'Solid', quantity: 7 },
        { name: 'Metallic', quantity: 7 },
        { name: 'Reptile', quantity: 7 },
        { name: 'Animal Print', quantity: 7 },
      ],
    },
    {
      name: 'Theme',
      options: [
        { name: 'Action Sports', quantity: 7 },
        { name: 'Winter', quantity: 7 },
        { name: 'Athletic Inspired', quantity: 7 },
        { name: 'Western', quantity: 7 },
      ],
    },
    {
      name: 'Accents',
      options: [
        { name: 'Buckle', quantity: 7 },
        { name: 'Rhinestones', quantity: 7 },
        { name: 'Perforated', quantity: 7 },
        { name: 'Studded', quantity: 7 },
      ],
    },
  ];

  const filters = filtersArr.map(option => leftFilter(option)).join('');

  const productsArr = [
    {
      id: '1',
      name: 'Crater-G',
      brand: 'NASA',
      price: 8.99,
      img: getImgPath('products', 'carterG.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'carterG1.jpg', 'product'),
        getImgPath('products', 'carterG2.jpg', 'product'),
        getImgPath('products', 'carterG3.jpg', 'product'),
        getImgPath('products', 'carterG4.jpg', 'product'),
        getImgPath('products', 'carterG5.jpg', 'product'),
        getImgPath('products', 'carterG6.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'sandals',
      size: 1,
      width: 'm',
      color: 'white',
      style: 'comfort',
      occasion: 'casual',
      feature: 'strappy',
      material: 'manmade',
      pattern: 'solid',
      theme: 'action sports',
      accent: 'buckle',
    },
    {
      id: '2',
      name: 'Wed',
      brand: 'David Tate',
      price: 25,
      img: getImgPath('products', 'wed.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'wed1.jpg', 'product'),
        getImgPath('products', 'wed2.jpg', 'product'),
        getImgPath('products', 'wed3.jpg', 'product'),
        getImgPath('products', 'wed4.jpg', 'product'),
        getImgPath('products', 'wed5.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'heels',
      size: 1.5,
      width: 'n',
      color: 'black',
      style: 'platform',
      occasion: 'casual',
      feature: 'strappy',
      material: 'manmade',
      pattern: 'metallic',
      theme: 'winter',
      accent: 'rhinestones',
    },
    {
      id: '3',
      name: 'Asteroid-G (Little Kid)',
      brand: 'NASA',
      price: 30,
      img: getImgPath('products', 'asteroidG.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'asteroidG1.jpg', 'product'),
        getImgPath('products', 'asteroidG2.jpg', 'product'),
        getImgPath('products', 'asteroidG3.jpg', 'product'),
        getImgPath('products', 'asteroidG4.jpg', 'product'),
        getImgPath('products', 'asteroidG5.jpg', 'product'),
        getImgPath('products', 'asteroidG6.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'sandals',
      size: 2,
      width: 'm',
      color: 'black',
      style: 'slide',
      occasion: 'casual',
      feature: 'waterproof',
      material: 'manmade',
      pattern: 'reptile',
      theme: 'athletic inspired',
      accent: 'perforated',
    },
    {
      id: '4',
      name: 'Rover',
      brand: 'La Canadienne',
      price: 35,
      img: getImgPath('products', 'rover.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'rover1.jpg', 'product'),
        getImgPath('products', 'rover2.jpg', 'product'),
        getImgPath('products', 'rover3.jpg', 'product'),
        getImgPath('products', 'rover4.jpg', 'product'),
        getImgPath('products', 'rover5.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'heels',
      size: 3,
      width: 'm',
      color: 'white',
      style: 'wedges',
      occasion: 'casual',
      feature: 'arch support',
      material: 'leather',
      pattern: 'solid',
      theme: 'western',
      accent: 'studded',
    },
    {
      id: '5',
      name: 'MX Flipsider',
      brand: 'ECCO Sport',
      price: 10,
      img: getImgPath('products', 'mxFlipsider.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'mxFlipsider1.jpg', 'product'),
        getImgPath('products', 'mxFlipsider2.jpg', 'product'),
        getImgPath('products', 'mxFlipsider3.jpg', 'product'),
        getImgPath('products', 'mxFlipsider4.jpg', 'product'),
        getImgPath('products', 'mxFlipsider5.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'sandals',
      size: 3,
      width: 'm',
      color: 'beige',
      style: 'comfort',
      occasion: 'casual',
      feature: 'strappy',
      material: 'leather',
      pattern: 'solid',
      theme: 'action sports',
      accent: 'buckle',
    },
    {
      id: '6',
      name: 'Dalian',
      brand: 'Vaneli',
      price: 15,
      img: getImgPath('products', 'dalian.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'dalian1.jpg', 'product'),
        getImgPath('products', 'dalian2.jpg', 'product'),
        getImgPath('products', 'dalian3.jpg', 'product'),
        getImgPath('products', 'dalian4.jpg', 'product'),
        getImgPath('products', 'dalian5.jpg', 'product'),
        getImgPath('products', 'dalian6.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'heels',
      size: 1.5,
      width: 'n',
      color: 'black',
      style: 'platform',
      occasion: 'dress',
      feature: 'leather outsole',
      material: 'suede',
      pattern: 'solid',
      theme: 'winter',
      accent: 'rhinestones',
    },
    {
      id: '7',
      name: 'Nelina',
      brand: 'Vaneli',
      price: 35,
      img: getImgPath('products', 'nelina.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'nelina1.jpg', 'product'),
        getImgPath('products', 'nelina2.jpg', 'product'),
        getImgPath('products', 'nelina3.jpg', 'product'),
        getImgPath('products', 'nelina4.jpg', 'product'),
        getImgPath('products', 'nelina5.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'sandals',
      size: 2,
      width: 'n',
      color: 'white',
      style: 'slide',
      occasion: 'casual',
      feature: 'strappy',
      material: 'fabric',
      pattern: 'solid',
      theme: 'athletic inspired',
      accent: 'perforated',
    },
    {
      id: '8',
      name: 'Shandra',
      brand: 'Easy Spirit',
      price: 28,
      img: getImgPath('products', 'shandra.jpg', 'product'),
      imgSet: [
        getImgPath('products', 'shandra1.jpg', 'product'),
        getImgPath('products', 'shandra2.jpg', 'product'),
        getImgPath('products', 'shandra3.jpg', 'product'),
        getImgPath('products', 'shandra4.jpg', 'product'),
        getImgPath('products', 'shandra5.jpg', 'product'),
      ],
      category: 'shoes',
      subcategory: 'womens',
      subsubcategory: 'heels',
      size: 3,
      width: 'm',
      color: 'beige',
      style: 'wedges',
      occasion: 'dress',
      feature: 'arch support',
      material: 'suede',
      pattern: 'solid',
      theme: 'western',
      accent: 'studded',
    },
  ];

  const filteredProducts = getFilteredProducts(productsArr, {});

  return `
	${header(page)}
		<section class="products">
        <div>
          <div>
            <h1>${title.join(' ')}</h1>
            <p>
							<span id="products-quantity">
								(${filteredProducts.length})
							</span>
							<span>items found</span>
						</p>
          </div>
          <div>
            <span></span>
            <select name="sort" id="products-sort">
              <option value="newest" selected>Newest</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
            </select>
          </div>
        </div>
        <div>
					<div>
						<h2>Narrow Choices</h2>
      			<ul>
          		${filters}
						</ul>
					</div>
          <div>
            <div>
              <div>
                <p>Your Selections</p>
                <ul>
                  ${activeFiltersLayout.join('')}
                </ul>
              </div>
              <button>Clear all filters</button>
            </div>
            <ul>
							${filteredProducts.map(product => productCard(product)).join('')}
						</ul>
          </div>
        </div>
      </section>
			${footer()}
	`;
}
