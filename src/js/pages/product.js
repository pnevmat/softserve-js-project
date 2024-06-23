import { header } from '../components/header.js';
import { footer } from '../components/footer.js';

export function productPage(page, baseUrlFolder) {
  return `
		${header(page)}
		<section class="product">
			<ul class="product_nav"></ul>
			<div class="product_container">
				<div class="product_images_container">
					<div class="product_images_favorite_container">
						<div class="product_images_favorite_img"></div>
					</div>
					<ul class="product_images_list">
						<li class="product_images_list_item-first"></li>
						<li>
							<ul>
								<li class="product_images_list_item_secondary_item">
									Перенести в отдельный компонент а тут сделать мап
									<img src="" alt="" />
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="product_description_container">
					<div class="product_description_title_and_price_container">
						<div>
							<h1 class="product_description_title"></h1>
							<p class="product_description_name"></p>
						</div>
						<div class="product_description_price_container">
							<div class="product_description_price_wrapper">
								<span class="product_description_price"></span>
							</div>
						</div>
					</div>
					<div class="product_description_interactives_container">
						<div class="product_description_color_filters_container">
							<p class="product_description_color_filters_title">
								<span class="filter_name"></span>
								<span class="color"></span>
							</p>
							<ul class="product_description_color_filters_cards_list">
								<li>
									Картинка из объекта товара
									<img src="" alt="" />
								</li>
							</ul>
						</div>
						<div class="product_description_size_and_width_filters_container">
							<div>
								<p class="product_description_size_filters_title"></p>
								<ul class="product_description_size_filters_list">
									<li></li>
								</ul>
							</div>
							<div>
								<p class="product_description_width_filters_title"></p>
								<ul class="product_description_width_filters_list">
									<li></li>
								</ul>
							</div>
							<div class="product_description_add_to_cart_btn_container">
								<button class="product_description_add_to_cart_btn"></button>
							</div>
						</div>
						<div class="product_description_information_container">
							<h3 class="product_description_information_title"></h3>
							<div
								class="product_description_information_description_container"
							>
								<div>
									<span
										class="product_description_information_description_title"
									>
									</span>
									<ul class="product_description_information_description_list">
										<li>Лишки описания товара</li>
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
