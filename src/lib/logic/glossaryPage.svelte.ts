import { fetchGlossaryPage } from "$lib/fetch/fetchGlossaryPage.svelte";
import sluggo from "$utils/sluggo";

console.log("fetching glossary data");
const glossaryPageData = (await fetchGlossaryPage(true)) as GlossaryPageContent;

export function createGlossary() {
	let rawData = $state(glossaryPageData as GlossaryPageContent);
	let data = $derived.by(() => {
		const { header, meta, glossaryEntries } = rawData;
		// generate id for each glossary entry
		const updatedEntries =
			glossaryEntries?.map((entry: GlossaryEntry) => {
				const id = sluggo(entry.term);
				return { ...entry, id };
			}) ?? {};
		return { header, meta, glossaryEntries: updatedEntries };
	});

	return {
		get page() {
			return data;
		},
	};
}

export const glossaryPageContent = createGlossary();
