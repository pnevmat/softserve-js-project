export function getLocation() {
  const location = window.location.pathname;

  const baseUrlFolder = location
    .split('/')
    .find(elem => elem === 'softserve-js-project');

  const page =
    location.split('/').length <= 2 ||
    (location.split('/').length <= 3 && baseUrlFolder)
      ? '/'
      : location.split('/')[location.split('/').length - 2];
  return { page, baseUrlFolder };
}
