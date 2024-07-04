export function fvoritesProductCard(product) {
  return `
		<li class="favorites_product_card">
			<div>
				<img src="${product.img}" alt="" />
			</div>
			<div>
				<button></button>
				<div>
					<p>$${product.price}</p>
				</div>
			</div>
		</li>
	`;
}
