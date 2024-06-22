import { getLinkPath } from '../helpers/getLinkPath.js';

export function leftFilter(option, page, categoriesArr, baseUrlFolder) {
  const linksArr = option.options.map((link, i) => {
    const linkPath = getLinkPath(
      page,
      categoriesArr,
      option,
      'add',
      i,
      baseUrlFolder,
    );
    const specialClasses =
      option.name === "women's size" || option.name === "women's width"
        ? { hidden: 'hidden', card: 'card', inlineBlock: 'inline_block' }
        : { hidden: '', card: '', inlineBlock: '' };

    return `
			<li class="${specialClasses.inlineBlock}">
				<a
					class="products_left_filter_item_option_link ${specialClasses.card}" href="${linkPath}"
				>
					<span class="products_left_filter_item_option_link_text">${link.name}</span>
					<span class="${specialClasses.hidden}">(${link.quantity})</span>
				</a>
			</li>
		`;
  });

  return `
    <li>
      <h3 class="products_left_filter_item_title">${option.name}</h3>
      <ul class="products_left_filter_item_options_list">
				${linksArr.join('')}
			</ul>
    </li>
	`;
}
