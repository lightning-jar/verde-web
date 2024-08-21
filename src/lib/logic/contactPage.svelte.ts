import { fetchContactPage } from "$lib/fetch/fetchContactPage.svelte";

console.log("fetching contact page content");
const contactPageData = (await fetchContactPage(true)) as ContactPageContent;

export function createContact() {
	const data = $state(contactPageData);

	return {
		get page() {
			return data;
		},
	};
}

export const contactPageContent = createContact();
