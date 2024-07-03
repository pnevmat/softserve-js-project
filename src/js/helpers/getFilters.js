export function getFilters(searchParams) {
  let searchObj = {};
  searchParams.split('&').forEach(param => {
    const paramArr = param.split('=');
    if (paramArr[0] !== 'sort') searchObj[paramArr[0]] = paramArr[1];
  });

  return searchObj;
}
