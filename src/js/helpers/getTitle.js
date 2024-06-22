export function getTitle(categoriesArr) {
  const title = categoriesArr
    .filter(
      category =>
        Object.keys(category)[0] === 'category' ||
        Object.keys(category)[0] === 'subcategory',
    )
    .map((category, i) => {
      if (Object.keys(categoriesArr[i])[0] === 'subcategory') {
        return `${Object.values(category)[0]}'s`;
      } else {
        return Object.values(category)[0];
      }
    })
    .sort((a, b) => -1);

  return title;
}
