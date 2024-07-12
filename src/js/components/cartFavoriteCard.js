export function cartFavoriteCard(product, baseUrlFolder, active, disabled) {
  return `
		<li class="shopping_cart_favorites_item">
			<div class="shopping_cart_favorites_item_product_container">
				<div class="shopping_cart_favorites_item_product_img_container">
					<a
						href="${baseUrlFolder ? '/' + baseUrlFolder : ''}/product/?id=${product.id}"
					>
						<div class="shopping_cart_product_img_favorite_container">
							<button
								id="${product.id}" class="shopping_cart_product_img_favorite_btn"
							>
								<span class="${active ? 'active' : ''}"></span>
							</button>
						</div>
						<div class="shopping_cart_product_img_wrapper">
							<img src="${product.img}" alt="" />
						</div>
					</a>
				</div>
				<div class="shopping_cart_product_info_container">
					<a href="">
						<p>${product.brand}</p>
						<p class="shopping_cart_product_info_name">${product.name}</p>
					</a>
					<ul class="shopping_cart_product_info_list">
						<li>
							<span>color: </span>
							<span>${product.color[0].color}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="shopping_cart_favorite_tools_wrapper">
				<p class="shopping_cart_product_total_price">$${product.price}</p>
				<div class="shopping_cart_favorite_btn_wrapper">
				${
          disabled
            ? `
						<button
							class="shopping_cart_favorite_btn disabled"
						>
							Added to Cart
						</button>
					`
            : `
						<button
							id="${product.id}"
							class="shopping_cart_favorite_btn"
						>
							Add to Cart
						</button>
					`
        }
				</div>
			</div>
		</li>
	`;
}
