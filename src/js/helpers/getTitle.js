export function getTitle(categoriesArr) {
  const title = categoriesArr
    .filter(
      category =>
        Object.keys(category)[0] === 'category' ||
        Object.keys(category)[0] === 'subcategory',
    )
    .map(category => Object.values(category)[0])
    .sort((a, b) => -1);

  return title;
}
