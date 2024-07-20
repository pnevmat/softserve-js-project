import { header } from '../components/header.js';
import { adminCategoriesList } from '../components/adminCategoriesList.js';
import { adminProductCard } from '../components/adminProductCard.js';
import { adminProductPage } from '../components/adminProductPage.js';
import { footer } from '../components/footer.js';
import { productsArr } from '../helpers/productsArr.js';

export function adminArea({ page, baseUrlFolder }) {
  const activeTab = localStorage.getItem('activeTab');
  const saveCategory = JSON.parse(localStorage.getItem('saveCategory'));
  const categories = JSON.parse(localStorage.getItem('categories'));
  const editProductId = JSON.parse(localStorage.getItem('editProduct'));
  const tempProduct = getTempProduct();

  if (!activeTab) localStorage.setItem('activeTab', 'categories');
  if (!categories) localStorage.setItem('categories', JSON.stringify([]));
  if (!editProductId || activeTab === 'categories') {
    localStorage.setItem('editProduct', JSON.stringify(''));
  }

  function getTempProduct() {
    let tempProduct = localStorage.getItem('tempProduct');

    if (!tempProduct) localStorage.setItem('tempProduct', JSON.stringify({}));
    tempProduct = localStorage.getItem('tempProduct');

    return tempProduct;
  }

  // const categories = [
  //   {
  //     category: 'shoes',
  //     subcategories: [
  //       {
  //         subcategory: 'women',
  //         subsubcategories: [
  //           {
  //             subsubcategory: 'sandals',
  //           },
  //         ],
  //       },
  //       {
  //         subcategory: 'women',
  //         subsubcategories: [
  //           {
  //             subsubcategory: 'heels',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  return `
		${header(page, baseUrlFolder)}
		<section class="admin_area">
			<h1 class="admin_area_title">admin area</h1>
			<ul class="admin_area_nav_list">
				<li
					id="categories"
					class="${activeTab === 'categories' ? 'active' : ''}"
				>
					categories
				</li>
				<li id="products" class="${activeTab === 'products' ? 'active' : ''}">
					products
				</li>
			</ul>
			${
        activeTab === 'categories'
          ? `<div class="admin_area_categories_table">
							<div class="admin_area_categories_table_head"></div>
							<ul class="admin_area_categories_list">
								${adminCategoriesList(categories)}

								${
                  saveCategory
                    ? `<li class="admin_area_save_category_item">
													<input
														class="admin_area_save_category_input"
														type="text"
														placeholder="Category name"
													/>
													<button class="admin_area_save_category_btn">
														save
													</button>
												</li>`
                    : `<li>
													<button class="admin_area_add_category_btn">
														add category
													</button>
												</li>`
                }
							</ul>
						</div>`
          : `
						<div class="admin_area_categories_table">
							<div class="admin_area_categories_table_head"></div>
							${
                editProductId === ''
                  ? `<div class="admin_area_add_product_container">
											<button class="admin_area_add_product_btn">
												add product
											</button>
										</div>`
                  : ''
              }
							${
                editProductId === ''
                  ? `<ul class="admin_area_products_list">
											${productsArr.map(product => `${adminProductCard(product)}`).join('')}
										</ul>`
                  : adminProductPage(tempProduct, editProductId)
              }
						</div>
					`
      }
		</section>
		${footer()}
	`;
}
