import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { activeFilter } from '../components/activeFilter.js';
import { leftFilter } from '../components/leftFilter.js';
import { productCard } from '../components/productCard.js';
import { getTitle } from '../helpers/getTitle.js';
import { getFilteredProducts } from '../helpers/getFilteredProducts.js';
import { getImgPath } from '../helpers/imagesPaths.js';

export function productsPage(page, baseUrlFolder) {
  const searchParams = window.location.search.split('?').join('');
  const categoriesArr = searchParams.split('&').map(category => {
    const splitedCategory = category.split('=');
    return { [splitedCategory[0]]: splitedCategory[1] };
  });

  const titleCategoriesArr = categoriesArr.filter(
    category =>
      Object.keys(category).includes('category') ||
      Object.keys(category).includes('subcategory'),
  );
  const title = getTitle(titleCategoriesArr);

  const activeFiltersArr = categoriesArr.filter(
    cat => Object.keys(cat)[0] && Object.keys(cat)[0] !== 'sort',
  );
  const activeFiltersLayout = activeFiltersArr.map(category => {
    return activeFilter(page, categoriesArr, category, baseUrlFolder);
  });

  const filtersArr = [
    {
      name: 'category',
      options: [
        { name: 'sandals', quantity: 10 },
        { name: 'heels', quantity: 10 },
      ],
    },
    {
      name: "women's size",
      options: [
        { name: '1', quantity: null },
        { name: '1.5', quantity: null },
        { name: '2', quantity: null },
        { name: '3', quantity: null },
      ],
    },
    {
      name: "women's width",
      options: [
        { name: 'ss', quantity: null },
        { name: 's', quantity: null },
        { name: 'n', quantity: null },
        { name: 'm', quantity: null },
      ],
    },
    {
      name: 'price',
      options: [
        { name: '$10.00 and Under', quantity: 5 },
        { name: '$25.00 and Under', quantity: 3 },
        { name: '$30.00 and Under', quantity: 8 },
        { name: '$35.00 and Under', quantity: 10 },
      ],
    },
    {
      name: 'color',
      options: [
        { name: 'black', quantity: 10 },
        { name: 'brown', quantity: 11 },
        { name: 'white', quantity: 20 },
        { name: 'beige', quantity: 3 },
      ],
    },
    {
      name: 'styles',
      options: [
        { name: 'comfort', quantity: 5 },
        { name: 'platform', quantity: 7 },
        { name: 'slide', quantity: 8 },
        { name: 'wedges', quantity: 7 },
      ],
    },
    {
      name: 'occasion',
      options: [
        { name: 'casual', quantity: 7 },
        { name: 'dress', quantity: 7 },
        { name: 'athletic', quantity: 7 },
        { name: 'outdoor', quantity: 7 },
      ],
    },
    {
      name: 'features',
      options: [
        { name: 'strappy', quantity: 7 },
        { name: 'leather outsole', quantity: 7 },
        { name: 'waterproof', quantity: 7 },
        { name: 'arch support', quantity: 7 },
      ],
    },
    {
      name: 'materials',
      options: [
        { name: 'leather', quantity: 7 },
        { name: 'manmade', quantity: 7 },
        { name: 'fabric', quantity: 7 },
        { name: 'suede', quantity: 7 },
      ],
    },
    {
      name: 'pattern',
      options: [
        { name: 'solid', quantity: 7 },
        { name: 'metallic', quantity: 7 },
        { name: 'reptile', quantity: 7 },
        { name: 'animal print', quantity: 7 },
      ],
    },
    {
      name: 'theme',
      options: [
        { name: 'action sports', quantity: 7 },
        { name: 'winter', quantity: 7 },
        { name: 'athletic inspired', quantity: 7 },
        { name: 'western', quantity: 7 },
      ],
    },
    {
      name: 'accents',
      options: [
        { name: 'buckle', quantity: 7 },
        { name: 'rhinestones', quantity: 7 },
        { name: 'perforated', quantity: 7 },
        { name: 'studded', quantity: 7 },
      ],
    },
  ];

  const filters = filtersArr
    .map(option => leftFilter(option, page, categoriesArr, baseUrlFolder))
    .join('');

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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
      subcategory: 'women',
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
  let searchObj = {};
  searchParams.split('&').forEach(param => {
    const paramArr = param.split('=');
    if (paramArr[0] !== 'sort') searchObj[paramArr[0]] = paramArr[1];
  });
  const sortParam = searchParams
    .split('&')
    .find(param => param.includes('sort'))
    ? searchParams
        .split('&')
        .find(param => param.includes('sort'))
        .split('=')[1]
    : null;
  const filteredProducts = getFilteredProducts(productsArr, searchObj).sort(
    (a, b) => {
      if (sortParam === 'price-asc' && a.price < b.price) {
        return -1;
      }

      if (sortParam === 'price-desc' && a.price > b.price) {
        return -1;
      }
    },
  );

  return `
	${header(page, baseUrlFolder)}
		<section class="products">
        <div class="products_sort_goup_container">
          <div class="products_sort_title_container">
            <h1 class="products_sort_title">${
              title.length ? title.join(' ') : 'your search results'
            }</h1>
            <p class="products_sort_found">
							<span>
								(${filteredProducts.length})
							</span>
							<span>items found</span>
						</p>
          </div>
          <div>
            <span class="products_sort_label">Sort By</span>
            <select class="products_sort_select" name="sort" id="products-sort">
              <option value="newest" selected>Newest</option>
              <option value="price-asc">Lowest Price</option>
              <option value="price-desc">Highest Price</option>
            </select>
          </div>
        </div>
        <div class="products_list_container">
					<div class="products_left_filter_container">
						<h2 class="products_left_filter_title">Narrow Choices</h2>
      			<ul class="products_left_filter_list">
          		${filters}
						</ul>
					</div>
          <div class="products_list_wrapper">
            <div class="products_list_active_filters_container">
              <div class="products_list_active_filters_wrapper">
                <p class="products_list_active_filters_title">
									Your Selections
								</p>
                <ul class="products_list_active_filters_list">
                  ${activeFiltersLayout.join('')}
                </ul>
              </div>
              <a
								class="products_list_active_filters_btn"
								href="${baseUrlFolder ? `/` + baseUrlFolder : '/'}products"
							>
								Clear all filters
							</a>
            </div>
            <ul class="products_list">
							${filteredProducts.map(product => productCard(product)).join('')}
						</ul>
          </div>
        </div>
      </section>
			${footer()}
	`;
}
