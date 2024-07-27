import { adminProductPageColor } from '../components/adminProductPageColor.js';
import { adminProductPageImg } from '../components/adminProductPageImg.js';
import { getProduct } from '../api/getProduct.js';

export async function adminProductPage(product, editProductId) {
  const tempProduct = JSON.parse(localStorage.getItem('tempProduct'));
  const getSaveProductOptions = () => {
    let saveProductOptions = JSON.parse(
      localStorage.getItem('saveProductOptions'),
    );

    if (!saveProductOptions) {
      localStorage.setItem('saveProductOptions', JSON.stringify({}));
      saveProductOptions = JSON.parse(
        localStorage.getItem('saveProductOptions'),
      );
    }

    return saveProductOptions;
  };

  const getEditProduct = async () => {
    if (editProductId !== '' && editProductId !== 'null') {
      return await getProduct(editProductId);
    } else {
      return;
    }
  };

  const editProduct = await getEditProduct();

  return `
		<div class="admin_area_product_container">
				<div class="admin_area_product_images_container">
          <div>
						<input
							id="${`${editProduct ? editProduct.id : 'null'}`}"
							class="admin_area_save_main_img_input"
							type="file"
						/>
						<button 
							id="${editProduct ? editProduct.id : 'null'}"
							class="admin_area_save_main_img_btn"
						>
							save main image
						</button>
					</div>
					<div>
						<input
							id="${`${editProduct ? editProduct.id : 'null'}`}"
							class="admin_area_save_img_set_img_input"
							type="file"
						/>
						<button 
							id="${editProduct ? editProduct.id : 'null'}"
							class="admin_area_save_img_set_img_btn"
						>
							save image
						</button>
					</div>
					<ul class="admin_area_product_images_list">
						<li class="admin_area_product_images_list_item-first">
							${
                editProduct?.imgSet?.length > 0
                  ? `<img src="${editProduct.imgSet[0].url}" alt="" />`
                  : ''
              }
						</li>
						<li>
							<ul class="admin_area_product_images_list_item_secondary_list">
								${
                  editProduct?.imgSet?.length > 0
                    ? editProduct.imgSet
                        .map((img, i) => {
                          if (i !== 0) return adminProductPageImg(img);
                          if (i === 0) return '';
                        })
                        .join('')
                    : ''
                }
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<div class="admin_area_product_description_title_and_price_container">
						<div>
							<div>
								<input 
									class="admin_area_save_product_data_input"
									id="${editProduct ? editProduct.id : 'brand'}"
									type="text"
									placeholder="Brand name"
									value="${editProduct ? editProduct.brand : ''}"
								/>
							</div>
							<div>
								<input
									class="admin_area_save_product_data_input"
									id="${editProduct ? editProduct.id : 'name'}"
									type="text"
									placeholder="Product name"
									value="${editProduct ? editProduct.name : ''}"
								/>
							</div>
						</div>
						<div class="admin_area_product_description_price_container">
							<div class="admin_area_product_description_price_wrapper">
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'price'}"
										type="text"
										placeholder="Price"
										value="${editProduct ? editProduct.price : ''}"
									/>
								</div>
								 	<div>
										<input
											class="admin_area_save_product_data_input"
											id="${'category'}"
											type="text"
											placeholder="Product category"
											value="${editProduct ? editProduct.category : ''}"
										/>
									</div>
									<div>
										<input
											class="admin_area_save_product_data_input"
											id="${'subcategory'}"
											type="text"
											placeholder="Product subcategory"
											value="${editProduct ? editProduct.subcategory : ''}"
										/>
									</div>
									<div>
										<input
											class="admin_area_save_product_data_input"
											id="${'subsubcategory'}"
											type="text"
											placeholder="Product subsubcategory"
											value="${editProduct ? editProduct.subsubcategory : ''}"
										/>
									</div>
									<div>
										<input
											class="admin_area_save_product_data_input"
											id="${'inStock'}"
											type="text"
											placeholder="In stock quantity"
											value="${editProduct ? editProduct.inStock : ''}"
										/>
									</div>
							</div>
						</div>
					</div>
					<div class="admin_area_product_description_interactives_container">
						<div class="admin_area_product_description_color_filters_container">
							<div class="admin_area_product_description_color_filters_title">
								<span
									class="admin_area_product_description_size_filters_title"
								>
									colors:
								</span>
								${
                  editProductId !== '' && !getSaveProductOptions().color
                    ? `<div>
												<button class="admin_area_add_product_color_btn">
													add color
												</button>
											</div>`
                    : `<div>
												<input
													class="admin_area_save_product_color_input"
													type="text"
													placeholder="Color name"
												/>
												<input
													class="admin_area_save_product_color_img_input"
													type="file"
												/>
												<button class="admin_area_save_product_color_btn">
													save
												</button>
											</div>`
                }
							</div>
							<ul
								class="admin_area_product_description_color_filters_cards_list"
							>
									${
                    editProduct
                      ? editProduct.color
                          .map(color => adminProductPageColor(color))
                          .join('')
                      : tempProduct.color
                      ? tempProduct.color
                          .map(color => adminProductPageColor(color))
                          .join('')
                      : ''
                  }
							</ul>
						</div>
						<div
							class="admin_area_product_description_size_and_width_filters_container"
						>
							<div>
								<span
									class="admin_area_product_description_size_filters_title"
								>
									sizes:
								</span>
								${
                  editProductId !== '' && !getSaveProductOptions().size
                    ? `<div
												class="admin_area_product_description_size_filters_btn_wrapper"
											>
												<button class="admin_area_add_product_size_btn">
													add size
												</button>
											</div>`
                    : `<div>
												<input
													class="admin_area_save_product_size_input"
													type="text"
													placeholder="size"
												/>
												<button class="admin_area_save_product_size_btn">
													save
												</button>
											</div>`
                }
								<ul class="admin_area_product_description_size_filters_list">
									${
                    editProduct
                      ? editProduct.size
                          .map(
                            size => `
													<li
														class="admin_area_product_description_size_filters_item"
													>
														<span>${size.size}</span>
													</li>`,
                          )
                          .join('')
                      : tempProduct.size
                      ? tempProduct.size
                          .map(
                            size => `
													<li
														class="admin_area_product_description_size_filters_item"
													>
														<span>${size.size}</span>
													</li>`,
                          )
                          .join('')
                      : ''
                  }
								</ul>
							</div>
							<div>
								<p class="admin_area_product_description_width_filters_title">
									width options:
								</p>
								${
                  editProductId !== '' && !getSaveProductOptions().width
                    ? `<div>
												<button class="admin_area_add_product_width_btn">
													add width
												</button>
											</div>`
                    : `<div>
												<input
													class="admin_area_save_product_width_input"
													type="text"
													placeholder="width"
												/>
												<button class="admin_area_save_product_width_btn">
													save
												</button>
											</div>`
                }
								<ul class="admin_area_product_description_width_filters_list">
									${
                    editProduct
                      ? editProduct.width
                          .map(
                            width => `
												<li
													class="admin_area_product_description_width_filters_item"
												>
													<span>${width.width}</span>
												</li>`,
                          )
                          .join('')
                      : tempProduct.width
                      ? tempProduct.width
                          .map(
                            width => `
													<li
														class="admin_area_product_description_width_filters_item"
													>
														<span>${width.width}</span>
													</li>
												`,
                          )
                          .join('')
                      : ''
                  }
								</ul>
							</div>
							<div class="admin_area_product_description_options_container">
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'style'}"
										type="text"
										placeholder="style"
										value="${editProduct ? editProduct.style : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'occasion'}"
										type="text"
										placeholder="occasion"
										value="${editProduct ? editProduct.occasion : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'feature'}"
										type="text"
										placeholder="feature"
										value="${editProduct ? editProduct.feature : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'material'}"
										type="text"
										placeholder="material"
										value="${editProduct ? editProduct.material : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'pattern'}"
										type="text"
										placeholder="pattern"
										value="${editProduct ? editProduct.pattern : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'theme'}"
										type="text"
										placeholder="theme"
										value="${editProduct ? editProduct.theme : ''}"
									/>
								</div>
								<div>
									<input
										class="admin_area_save_product_data_input"
										id="${'accent'}"
										type="text"
										placeholder="accent"
										value="${editProduct ? editProduct.accent : ''}"
									/>
								</div>
							</div>
						</div>
						<div class="admin_area_product_description_information_container">
							<h3 class="admin_area_product_description_information_title">
								Product Information
							</h3>
							<div
								class="admin_area_product_description_information_description_container"
							>
								<div>
									${
                    editProductId !== '' && !getSaveProductOptions().description
                      ? `<div>
													<button
														class="admin_area_add_product_description_bullet__btn"
													>
														add information bullet
													</button>
												</div>`
                      : `<div>
													<input
														class="admin_area_save_product_description_bullet__input"
														type="text"
														placeholder="description bullet"
													/>
													<button
														class="admin_area_save_product_description_bullet__btn"
													>
														save
													</button>
												</div>`
                  }
									<ul
										class="admin_area_product_description_information_description_list"
									>
										${
                      editProduct?.description?.length > 0
                        ? editProduct.description
                            .map(
                              line => `
																<li
																	class="admin_area_product_description_information_description_list_item"
																>
																	${line}
																</li>
															`,
                            )
                            .join('')
                        : tempProduct.description?.length > 0
                        ? tempProduct.description
                            .map(
                              line => `
															<li
																class="admin_area_product_description_information_description_list_item"
															>
																${line}
															</li>
													`,
                            )
                            .join('')
                        : ''
                    }
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="admin_area_save_product_btn_container">
					<button
						id="${
              editProduct ? editProduct.id : 'null'
            }" class="admin_area_save_product_btn"
					>
						save product
					</button>
				</div>
			</div>
	`;
}
