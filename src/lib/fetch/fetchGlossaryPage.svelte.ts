// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as glossaryPageOnlyBackupDataYAML } from "$data/glossaryPage.yaml?raw";
import { default as glossaryEntriesBackupDataJson } from "$data/glossaryEntries.json";

// parse raw data from page and articles and combine
const glossaryPageOnlyBackupData: GlossaryPageContent = YAML.parse(
	glossaryPageOnlyBackupDataYAML,
);
const glossaryEntriesBackupData: GlossaryEntry[] =
	glossaryEntriesBackupDataJson ?? [];
const glossaryPageBackupData: GlossaryPageContent = {
	...glossaryPageOnlyBackupData,
	glossaryEntries: glossaryEntriesBackupData,
};

// queries
import { glossaryPageQuery } from "$queries/glossaryPage";
import { glossaryEntriesQuery0To100 } from "$queries/glossaryEntries";
import { glossaryEntriesQuery100To200 } from "$queries/glossaryEntries";

export async function fetchGlossaryPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		console.log("fetching glossary page data");
		const glossaryPageData: { glossaryPage: GlossaryPageContent } =
			await hygraphHighSpeed.request(glossaryPageQuery);

		console.log("fetching glossary entries 0 to 100");
		const glossaryEntries0To100Data: { glossaryEntries: GlossaryEntry[] } =
			await hygraphHighSpeed.request(glossaryEntriesQuery0To100);
		const glossaryEntries0To100 = glossaryEntries0To100Data.glossaryEntries;

		console.log("fetching glossary entries 100 to 200");
		const glossaryEntries100To200Data: { glossaryEntries: GlossaryEntry[] } =
			await hygraphHighSpeed.request(glossaryEntriesQuery100To200);
		const glossaryEntries100To200 = glossaryEntries100To200Data.glossaryEntries;

		console.log("merging glossary entries");
		const glossaryEntries = [
			...glossaryEntries0To100,
			...glossaryEntries100To200,
		];

		console.log("merging glossary page data");
		const glossaryPage = {
			...glossaryPageData.glossaryPage,
			glossaryEntries,
		};

		console.log("using fetched data for glossary");
		return glossaryPage;
	} catch (error) {
		console.log(error, "using backup data for glossary");
		return glossaryPageBackupData;
	}
}
