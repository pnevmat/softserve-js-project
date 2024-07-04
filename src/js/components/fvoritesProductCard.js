export function fvoritesProductCard(product) {
  return `
		<li class="favorites_product_card">
			<div class="favorites_product_card_img_container">
				<img src="${product.imgSet[3]}" alt="" />
			</div>
				<div class="favorites_product_card_description_container">
					<button id="${product.id}"></button>
					<div class="favorites_product_card_price_container">
						<p>$${product.price}</p>
					</div>
				</div>
		</li>
	`;
}
