import { getLinkPath } from '../helpers/getLinkPath.js';

export function activeFilter(page, categoriesArr, category) {
  const key = Object.keys(category)[0];
  return `
		<li>
			<a
				class="products_list_active_filter_link"
				href="${getLinkPath(page, categoriesArr, category, 'remove')}"
			>
        <span>${category[key]}</span>
        <div class="products_list_active_filter_close"></div>
			</a>
    </li>
	`;
}
