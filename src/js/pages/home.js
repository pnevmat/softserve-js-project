import { header } from '../components/header.js';
import { homePageContent } from '../components/homePageContent.js';
import { footer } from '../components/footer.js';

export function homePage(baseUrlFolder, page) {
  return `
		${header(baseUrlFolder, page)}
		${homePageContent()}
		${footer()}
	`;
}
