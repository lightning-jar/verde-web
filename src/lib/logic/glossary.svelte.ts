// import YAML
import YAML from "yaml";

interface GlossaryEntry {
	term: string;
	definition: string;
}

// import raw data
import { default as glossaryDataRaw } from "$data/glossary.yaml?raw";
import { default as glossaryPageDataRaw } from "$data/glossaryPage.yaml?raw";

// util
import { slugify } from "$utils/slugify";

// parse raw data
const glossaryEntriesDataRaw = YAML.parse(glossaryDataRaw);
const glossaryPageData = YAML.parse(glossaryPageDataRaw);

export function createGlossary() {
	let glossaryEntriesData = $state(glossaryEntriesDataRaw as GlossaryEntry[]);
	let glossaryPage = $state(glossaryPageData);

	return {
		get entries() {
			return glossaryEntriesData;
		},
		get page() {
			return glossaryPage;
		},
	};
}

export const glossary = createGlossary();
