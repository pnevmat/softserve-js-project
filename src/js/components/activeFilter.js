import { getLinkPath } from '../helpers/getLinkPath.js';

export function activeFilter(page, categoriesArr, category) {
  const key = Object.keys(category)[0];
  return `
		<li>
			<a href="${getLinkPath(page, categoriesArr, category, 'remove')}">
        <span>${category[key]}</span>
        <div></div>
			</a>
    </li>
	`;
}
