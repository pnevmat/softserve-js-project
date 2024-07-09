export function fvoritesProductCard(product, baseUrlFolder) {
  return `
		<li class="favorites_product_card">
			<a
				href="${baseUrlFolder ? '/' + baseUrlFolder : '/'}product/?id=${product.id}"
			>
				<div class="favorites_product_card_img_container">
					<img src="${product.imgSet[3]}" alt="" />
				</div>
			</a>
			<div class="favorites_product_card_description_container">
				<button id="${product.id}"></button>
				<div class="favorites_product_card_price_container">
					<p>$${product.price}</p>
				</div>
			</div>
		</li>
	`;
}
