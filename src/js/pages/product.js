import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { productPageImg } from '../components/productPageImg.js';
import { productPageColor } from '../components/productPageColor.js';
import { productsArr } from '../helpers/productsArr.js';
import { getFilteredProducts } from '../helpers/getFilteredProducts.js';
import { getFilters } from '../helpers/getFilters.js';

export function productPage({ page, baseUrlFolder }) {
  const searchParams = window.location.search.split('?').join('');
  const product = getFilteredProducts(productsArr, getFilters(searchParams))[0];

  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const active = favorites.find(favorite => favorite.id === product.id);

  return `
		${header(page, baseUrlFolder)}
		<section class="product">
			<ul class="product_nav"></ul>
			<div class="product_container">
				<div class="product_images_container">
					<div id="${product.id}" class="product_images_favorite_container">
						<div
							class="product_images_favorite_img ${active ? 'active' : ''}"
						>
						</div>
					</div>
					<ul class="product_images_list">
						<li class="product_images_list_item-first">
							<img src="${product.imgSet[0]}" alt="" />
						</li>
						<li>
							<ul class="product_images_list_item_secondary_list">
								${product.imgSet
                  .map((img, i) => {
                    if (i !== 0) return productPageImg(img);
                    if (i === 0) return '';
                  })
                  .join('')}
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<div class="product_description_title_and_price_container">
						<div>
							<h1 class="product_description_title">${product.brand}</h1>
							<p class="product_description_name">${product.name}</p>
						</div>
						<div class="product_description_price_container">
							<div class="product_description_price_wrapper">
								<span class="product_description_symbol">$</span>
								<span class="product_description_price">${product.price}</span>
							</div>
						</div>
					</div>
					<div class="product_description_interactives_container">
						<div class="product_description_color_filters_container">
							<p class="product_description_color_filters_title">
								<span>Color: </span>
								<span class="color">${product.color[0].color}</span>
							</p>
							<ul class="product_description_color_filters_cards_list">
									${product.color.map(color => productPageColor(color)).join('')}
							</ul>
						</div>
						<div class="product_description_size_and_width_filters_container">
							<div>
								<p class="product_description_size_filters_title">
									<span>${product.subcategory + `'s`}</span>
									<span>sizes:</span>
								</p>
								<ul class="product_description_size_filters_list">
									<li class="product_description_size_filters_item">
										<span>${product.size}</span>
									</li>
								</ul>
							</div>
							<div>
								<p class="product_description_width_filters_title">
									width options:
								</p>
								<ul class="product_description_width_filters_list">
									<li class="product_description_width_filters_item">
										<span>${product.width}</span>
									</li>
								</ul>
							</div>
							<div class="product_description_add_to_cart_btn_container">
								<button
									id="${product.id}"
									class="product_description_add_to_cart_btn"
								>
									Add to Shopping Cart
								</button>
							</div>
						</div>
						<div class="product_description_information_container">
							<h3 class="product_description_information_title">
								Product Information
							</h3>
							<div
								class="product_description_information_description_container"
							>
								<div>
									<ul class="product_description_information_description_list">
										${product.description
                      .map(line => {
                        return `
													<li
														class="product_description_information_description_list_item"
													>
														${line}
													</li>
												`;
                      })
                      .join('')}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		${footer(page)}
	`;
}
