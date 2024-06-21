import { getLinkPath } from '../helpers/getLinkPath.js';

export function leftFilter(option, page, categoriesArr) {
  const linksArr = option.options.map((link, i) => {
    const linkPath = getLinkPath(page, categoriesArr, option, 'add', i);
    return `
			<li>
				<a href="${linkPath}">
					<span>${link.name}</span>
					<span>(${link.quantity})</span>
				</a>
			</li>
		`;
  });

  return `
    <li>
      <h3>${option.name}</h3>
      <ul>
				${linksArr.join('')}
			</ul>
    </li>
	`;
}
