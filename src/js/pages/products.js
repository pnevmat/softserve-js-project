import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { activeFilter } from '../components/activeFilter.js';
import { leftFilter } from '../components/leftFilter.js';
import { productCard } from '../components/productCard.js';
import { getTitle } from '../helpers/getTitle.js';
import { getFilteredProducts } from '../helpers/getFilteredProducts.js';
import { productsArr } from '../helpers/productsArr.js';
import { getFilters } from '../helpers/getFilters.js';

export function productsPage({ page, baseUrlFolder }) {
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

  const sortParam = searchParams
    .split('&')
    .find(param => param.includes('sort'))
    ? searchParams
        .split('&')
        .find(param => param.includes('sort'))
        .split('=')[1]
    : null;
  const filteredProducts = getFilteredProducts(
    productsArr,
    getFilters(searchParams),
  ).sort((a, b) => {
    if (sortParam === 'price-asc' && a.price < b.price) {
      return -1;
    }

    if (sortParam === 'price-desc' && a.price > b.price) {
      return -1;
    }
  });

  const favorites = JSON.parse(localStorage.getItem('favorites'));

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
            <ul id="products-list" class="products_list">
							${filteredProducts
                .map(product => {
                  const active = favorites.find(
                    favorite => favorite.id === product.id,
                  );
                  return productCard(product, baseUrlFolder, active);
                })
                .join('')}
						</ul>
          </div>
        </div>
      </section>
			${footer()}
	`;
}
