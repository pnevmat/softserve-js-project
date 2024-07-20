export function adminProductCard(product) {
  return `
		<li id="${product.id}" class="admin_area_product_card">
			<div>
				<div>
					<img class="admin_area_product_card_img" src="${product.img}" />
				</div>
			</div>
			<div class="admin_area_product_card_text_container">
				<span class="admin_area_product_card_title">${product.brand}</span>
				<span class="admin_area_product_card_text">${product.name}</span>
				<span class="admin_area_product_card_text admin_area_price">
					$${product.price}
				</span>
			</div>
		</li>
	`;
}
