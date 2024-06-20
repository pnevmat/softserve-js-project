export function getLinkPath(page, categoriesArr, category) {
  const key = Object.keys(category)[0];
  return `/${page}/?${categoriesArr
    .filter(cat => cat[key] !== category[key])
    .map(cat => `${Object.keys(cat)}=${Object.values(cat)}`)}`;
}
