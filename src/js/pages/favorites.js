import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { fvoritesProductCard } from '../components/fvoritesProductCard.js';

export function favoritesPage({ page, baseUrlFolder }) {
  const products = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

  return `
		${header(page, baseUrlFolder)}
		<section class="favorites">
			<div class="favorites_nav_container"></div>
			<div class="favorites_title_container">
				<h1 class="favorites_title">Favorites</h1>
			</div>
			${
        products.length > 0
          ? `<ul id="favorites-list" class="favorites_products_list">
						${products.map(product => fvoritesProductCard(product)).join('')}
					</ul>`
          : `<div class="favorites_empty_list_container">
						<p>This list needs some love.</p>
						<p>
							<span class="favorites_empty_list_icon"></span>
							<span> Add products you'd like to.</span>
						</p>
					</div>`
      }
		</section>
		${footer()}
	`;
}
