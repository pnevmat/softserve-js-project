import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { activeFilter } from '../components/activeFilter.js';
import { leftFilter } from '../components/leftFilter.js';
import { getTitle } from '../helpers/getTitle.js';

export function productsPage(page) {
  const searchParams = window.location.search.split('?').join('');
  const categoriesArr = searchParams.split('&').map(category => {
    const splitedCategory = category.split('=');
    return { [splitedCategory[0]]: splitedCategory[1] };
  });

  const title = getTitle(categoriesArr);

  const activeFiltersLayout = categoriesArr.map(category => {
    return activeFilter(page, categoriesArr, category);
  });

  return `
	${header(page)}
		<section class="products">
        <div>
          <div>
            <h1>${title.join(' ')}</h1>
            <p><span id="products-quantity"></span><span>items found</span></p>
          </div>
          <div>
            <span></span>
            <select name="sort" id="products-sort">
              <option value="newest" selected>Newest</option>
              <option value="most-popular">Most Popular</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
              <option value="highest-off">% Off</option>
            </select>
          </div>
        </div>
        <div>
					<div>
						<h2>Narrow Choices</h2>
      			<ul>
          		${leftFilter()}
						</ul>
					</div>
          <div>
            <div>
              <div>
                <p>Your Selections</p>
                <ul>
                  ${activeFiltersLayout.join('')}
                </ul>
              </div>
              <button>Clear all filters</button>
            </div>
            <div>Products cards</div>
          </div>
        </div>
      </section>
			${footer()}
	`;
}
