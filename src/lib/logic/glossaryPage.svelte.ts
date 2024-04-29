import { fetchGlossaryPage } from "$lib/fetch/fetchGlossaryPage.svelte";

console.log("fetching glossary data");
const glossaryPageData = (await fetchGlossaryPage(true)) as GlossaryPageContent;

export function createGlossary() {
	let data = $state(glossaryPageData as GlossaryPageContent);

	return {
		get page() {
			return data;
		},
	};
}

export const glossaryPageContent = createGlossary();
