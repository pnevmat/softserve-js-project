import { header } from '../components/header.js';
import { cartProductCard } from '../components/cartProductCard.js';
import { cartFavoriteCard } from '../components/cartFavoriteCard.js';
import { footer } from '../components/footer.js';
import { getImgPath } from '../helpers/imagesPaths.js';

export function shoppingCart({ page, baseUrlFolder }) {
  let cartProducts = [];
  let favoriteProducts = [];
  let orderedQuantity = 0;
  let subtotalPrice = 0;
  const cart = localStorage.getItem('cart');
  const favorites = localStorage.getItem('favorites');

  if (cart) cartProducts = JSON.parse(cart);
  if (favorites) favoriteProducts = JSON.parse(favorites);

  cartProducts.forEach(product => {
    orderedQuantity += product.quantity;
    subtotalPrice += product.price * product.quantity;
  });

  return `
		${header(page, baseUrlFolder)}
		<section class="shopping_cart">
			<a
				class="shopping_cart_nav_link"
				href="${baseUrlFolder ? `/` + baseUrlFolder : ''}/products"
			>
				<span class="shopping_cart_nav_link_arrow"></span>
				<span class="shopping_cart_nav_link_text">Continue Shopping</span>
			</a>
			${
        cartProducts.length > 0
          ? `
					<h1 class="shopping_cart_title">
						<span>${orderedQuantity}</span>
						<span> items in My Cart</span>
					</h1>
					<div class="shopping_cart_and_checkout_container">
						<div class="shopping_cart_products_table">
							<div class="shopping_cart_products_table_head">
								<p>Item</p>
								<p>Price / Quantity</p>
							</div>
							<ul>
								${cartProducts
                  .map(product => {
                    const active = favoriteProducts.find(
                      favorite => favorite.id === product.id,
                    );
                    return cartProductCard(product, baseUrlFolder, active);
                  })
                  .join('')}
							</ul>
						</div>
						<div class="shopping_cart_checkout_container">
							<div class="shopping_cart_checkout_wrapper">
								<button class="shopping_cart_checkout_btn">
									Proceed to Checkout
								</button>
								<p class="shopping_cart_checkout_text">
									Have a Promotional Code? Proceed to checkout to redeem it.
								</p>
								<h3 class="shopping_cart_checkout_title">
									<span>cart summary </span>
									<span>(${orderedQuantity} items)</span>
								</h3>
								<div class="shopping_cart_checkout_subtotal_container">
									<p>
										<span>Subtotal</span>
										<span>(${orderedQuantity} items)</span>
									</p>
									<p>$${subtotalPrice}</p>
								</div>
							</div>
							<p class="shopping_cart_checkout_conditions_text">
								<span>
									<span>6pm.com is required by law to collect </span>
									<a href="">sales tax</a>
									<span> on orders shipped to specific states.</span>
								</span>
								<span> Appropriate charges will be added to your merchandise total and displayed for your review at checkout.<br><br>Unless otherwise noted, all products are sold by 6pm.com</span>
							</p>
						</div>
					</div>
					${
            favoriteProducts.length > 0
              ? `<div class="shopping_cart_favorites_container">
						<h2 class="shopping_cart_favorites_title">Your Favorites</h2>
						<div class="shopping_cart_favorites_table">
							<div class="shopping_cart_favorites_table_head">
								<p>Item</p>
							</div>
							<ul>
								${favoriteProducts
                  .map(favorite => {
                    const disabled = cartProducts.find(
                      product => product.id === favorite.id,
                    );
                    return cartFavoriteCard(
                      favorite,
                      baseUrlFolder,
                      'active',
                      disabled,
                    );
                  })
                  .join('')}
							</ul>
						</div>
					</div>`
              : ''
          }`
          : `
						<h1 class="shopping_cart_empty_title">My Cart</h1>
						<p class="shopping_cart_empty_text">
							Fill up your Bag by checking out all the awesome things you can buy on 6pm or by adding items from Your Favorites!
						</p>
						<ul class="shopping_cart_empty_links_list">
							<li>
								<a
									href="${baseUrlFolder ? '/' + baseUrlFolder : ''}/products/?subcategory=women"
								>
									Shop Women's
								</a>
							</li>
						</ul>
						<img
							class="shopping_cart_empty_img"
							src="${getImgPath(page, 'emptyCart.svg')}"
						/>
					`
      }
		</section>
		${footer()}
	`;
}
