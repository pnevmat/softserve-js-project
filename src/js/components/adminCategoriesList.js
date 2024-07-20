export function adminCategoriesList(categories) {
  const saveSubcategory = JSON.parse(localStorage.getItem('saveSubcategory'));
  if (!saveSubcategory) {
    localStorage.setItem('saveSubcategory', JSON.stringify({}));
  }

  return `
		${
      categories.length > 0
        ? categories
            .map(
              ({ id, category, subcategories }) =>
                `<li>
									<span>${category}</span>
									<ul class="admin_area_subcategories_list">
										${
                      saveSubcategory[`subcategory${id}`]
                        ? `<li class="admin_area_save_subcategory_item">
															<input
																id="${`subcategory${id}`}"
																class="admin_area_save_subcategory_input"
																type="text"
																placeholder="Subcategory name"
															/>
															<button
																id="${`subcategory${id}`}" class="admin_area_save_subcategory_btn"
															>
																save
															</button>
													</li>`
                        : `<li>
														<button
															id="${`subcategory${id}`}"
															class="admin_area_add_subcategory_btn"
														>
															add subcategory
														</button>
													</li>`
                    }
										${
                      subcategories.length > 0
                        ? subcategories
                            .map(
                              ({ id, subcategory, subsubcategories }) =>
                                `<li>
																		<span>${subcategory}</span>
																	<ul
																		class="admin_area_subsubcategories_list"
																	>
																		${
                                      saveSubcategory[`sub${id}`]
                                        ? `<li
																						class="admin_area_save_subcategory_item"
																					>
																						<input
																							id="${`sub${id}`}"
																							class="admin_area_save_subsubcategory_input"
																							type="text"
																							placeholder="Subsubcategory name"
																						/>
																						<button
																							id="${`sub${id}`}" class="admin_area_save_subsubcategory_btn"
																						>
																							save
																						</button>
																				</li>`
                                        : `<li>
																			<button
																				id="${`sub${id}`}"
																				class="admin_area_add_subsubcategory_btn"
																			>
																				add subsubcategory
																			</button>
																		</li>`
                                    }
																		${
                                      subsubcategories.length > 0
                                        ? subsubcategories
                                            .map(
                                              ({ id, subsubcategory }) =>
                                                `<li>
																									<span>
																										${subsubcategory}
																									</span>
																								</li>
																							`,
                                            )
                                            .join('')
                                        : ''
                                    }                           
																	</ul>
																</li>
															`,
                            )
                            .join('')
                        : ''
                    }
									</ul>
    						</li>
							`,
            )
            .join('')
        : ''
    }
	`;
}
