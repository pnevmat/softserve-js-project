import { header } from '../components/header.js';
import { homePageContent } from '../components/homePageContent.js';
import { footer } from '../components/footer.js';

export function homePage({ page, baseUrlFolder }) {
  return `
		${header(page, baseUrlFolder)}
		${homePageContent()}
		${footer()}
	`;
}
