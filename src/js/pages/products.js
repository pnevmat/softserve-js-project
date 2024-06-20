import { header } from '../components/header.js';
import { footer } from '../components/footer.js';

export function productsPage(page) {
  return `
	${header(page)}
		<section class="products">
        <div>
          <div>
            <div id="title"></div>
            <p><span id="products-quantity"></span><span></span></p>
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
            <ul>
              <h2>Narrow Choices</h2>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
              <li>
                <h3></h3>
                <ul></ul>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div>
                <p></p>
                <ul>
                  <li>
                    <span></span>
                    <img src="" alt="" />
                  </li>
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
