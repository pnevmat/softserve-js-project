import { getArray } from '../helpers/getArray.js';

export function cartProductCard(product, baseUrlFolder, active) {
  const optionsArr = getArray(1, product.inStock);

  return `
		<li class="shopping_cart_product_card">
			<div class="shopping_cart_product_container">
				<div class="shopping_cart_product_img_container">
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
						<li>
							<span>size: </span>
							<span>${product.size}</span>
						</li>
						<li>
							<span>width: </span>
							<span>${product.width}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="shopping_cart_product_tools_wrapper">
				<p class="shopping_cart_product_total_price">
					$${product.price * product.quantity}
				</p>
				${
          product.quantity > 1
            ? `<p class="shopping_cart_product_item_price">
								($${product.price} each)
							</p>`
            : ''
        }
				<div class="shopping_cart_product_quantity_change_wrapper">
					<div>
						<select
							id="${product.id}" class="shopping_cart_product_quantity_change_select"
						>
							<option value="${product.quantity}">${product.quantity}
							</option>
							${optionsArr.map(
                option =>
                  `<option value="${option}">${option}
								</option>`,
              )}
						</select>
					</div>
					<button
						id="${product.id}"
						class="shopping_cart_product_quantity_change_btn"
					>
						Remove
					</button>
				</div>
			</div>
		</li>
	`;
}
