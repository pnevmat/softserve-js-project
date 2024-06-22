export function getLinkPath(page, categoriesArr, category, action, index) {
  const key = Object.keys(category)[0];
  let link = ``;
  if (action === 'remove') {
    const filteredArr = categoriesArr.filter(cat => cat[key] !== category[key]);
    link = `/${page}/?${filteredArr
      .map(cat => `${Object.keys(cat)}=${Object.values(cat)}`)
      .join('&')}`;

    return link;
  }

  if (action === 'add') {
    const { name, options } = category;
    const rootLink = `/${page}/?${categoriesArr
      .map(cat => `${Object.keys(cat)}=${Object.values(cat)}`)
      .join('&')}`;

    if (name === 'category') {
      link = rootLink + `&subsub${name}=${options[index].name}`;
    }

    if (name === "women's size" || name === "women's width") {
      link = rootLink + `&${name.split(' ')[1]}=${options[index].name}`;
    }

    if (name === 'price') {
      const price = Number(options[index].name.split('$')[1].split(' ')[0]);
      link = rootLink + `&${name}=${price}`;
    }

    if (
      name === 'color' ||
      name === 'occasion' ||
      name === 'pattern' ||
      name === 'theme'
    ) {
      link = rootLink + `&${name}=${options[index].name}`;
    }

    if (
      name === 'styles' ||
      name === 'features' ||
      name === 'materials' ||
      name === 'accents'
    ) {
      link =
        rootLink +
        `&${[...name].splice(0, name.length - 1).join('')}=${
          options[index].name
        }`;
    }

    return link;
  }
}