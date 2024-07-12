import { getImgPath } from '../helpers/imagesPaths.js';

export function header(page, baseUrlFolder) {
  return `
<section class="header">
	<div class="header_tools_wrapper">
		<a
			class="header_logo_container"
			href="${baseUrlFolder ? `/` + baseUrlFolder : '/'}"
		>
			<picture>
				<img 
					class="header_logo_img"
					./src/images/logo1x.png
					src=${getImgPath(page, 'logo1x.png')}
					srcset=${getImgPath(page, 'logo1x.png')} 1x,
						${getImgPath(page, 'logo2x.png')} 2x
					alt="6pm - Your Premier Destination for Discount Fashion"
				/>
			</picture>
		</a>
		<div class="header_shipping_container">
			<a class="header_shipping_link" href="${
        baseUrlFolder ? `/` + baseUrlFolder : ''
      }/shipping-and-delivery-questions">
				<p>
					<span>$100+ receives </span>
					<span class="header_shipping_text_brown">free shipping </span>
				</p>
				<span class="header_shipping_text_underlined">See Details</span>
			</a>
		</div>
		<div class="header_contacts_container">
			<div class="header_contacts_wrapper">
				<p class="header_contacts_phone">1-888-676-2660</p>
				<p class="header_contacts_work-time">M-F, 6AM-6PM PST</p>
			</div>
		</div>
		<div class="header_tools_container">
			<div class="header_tool_wrapper">
				<a class="header_tool_link admin"></a>
			</div>
			<div class="header_tool_wrapper">
				<a
					class="header_tool_link favorite"
					href="${baseUrlFolder ? `/` + baseUrlFolder : ''}/favorites"
				>
				</a>
			</div>
			<div class="header_tool_wrapper">
				<a
					class="header_tool_link cart"
					href="${baseUrlFolder ? `/` + baseUrlFolder : ''}/shopping-cart"
				>
				</a>
			</div>
		</div>
	</div>
	<ul class="header_nav">
		<li class="header_nav_list_item">
			<p class="header_nav_list_item_text">Shoes</p>
			<div class="header_nav_popup">
				<ul class="header_nav_popup_ctegory_list">
					<li class="header_nav_popup_ctegory_item">
						<a
							class="header_nav_popup_ctegory_name"
							href="${
                baseUrlFolder ? `/` + baseUrlFolder : ''
              }/products/?category=shoes&subcategory=women"
						>
							Women's
						</a>
						<a 
							class="header_nav_popup_ctegory_link"
							href="${
                baseUrlFolder ? `/` + baseUrlFolder : ''
              }/products/?category=shoes&subcategory=women&subsubcategory=sandals"
						>
							Sandals
						</a>
						<a 
							class="header_nav_popup_ctegory_link"
							href="${
                baseUrlFolder ? `/` + baseUrlFolder : ''
              }/products/?category=shoes&subcategory=women&subsubcategory=heels"
						>
							Heels
						</a>
					</li>
				</ul>
			</div>
		</li>
	</ul>
	<div class="header_search_container">
		<div class="header_search_wrapper">
			<div class="header_search_input_wrapper">
				<input
					class="header_search_input"
					type="text"
					placeholder="Search 6pm"
					id="search"
				/>
				<button class="header_search_submit"></button>
			</div>
			<div class="header_search_sale_container">
				<a
					class="header_search_sale_link"
					href="${
            baseUrlFolder ? `/` + baseUrlFolder : ''
          }/products/?category=shoes&subcategory=women&subsubcategory=heels&price=30.99"
				>
					<p>
						<span>Heels on Sale </span>
						<span class="header_search_sale_link_text">$30.99 or Less! </span>
					</p>
					<span class="header_search_sale_link_text-underlined">
						Shop Heels on Sale
					</span>
				</a>
			</div>
		</div>
	</div>
</section>
`;
}
