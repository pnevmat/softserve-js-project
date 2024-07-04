export function productCard(product, baseUrlFolder) {
  return `
		<li class="products_list_product_card">
			<div class="products_list_product_card_btn_wrapper">
				<button id="${product.id}" class="products_list_product_card_btn">
				</button>
			</div>
			<a
				class="products_list_product_card_link"
				href="${baseUrlFolder ? `/` + baseUrlFolder : '/'}product/?id=${product.id}"
			>
				<div>
					<div>
						<img class="products_list_product_card_img" src="${product.img}" />
					</div>
				</div>
				<div class="products_list_product_card_text_container">
					<span class="products_list_product_card_title">${product.brand}</span>
					<span class="products_list_product_card_text">${product.name}</span>
					<span class="products_list_product_card_text price">$${product.price}</span>
				</div>
			</a>
		</li>
	`;
}
