// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as glossaryPageBackupDataYAML } from "$data/glossaryPage.yaml?raw";

// parse raw data
const glossaryPageBackupData: GlossaryPageContent = YAML.parse(
	glossaryPageBackupDataYAML,
);

// queries
import { glossaryPageQuery } from "$queries/glossaryPage";

export async function fetchGlossaryPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		const glossaryPageData: { glossaryPage: GlossaryPageContent } =
			await hygraphHighSpeed.request(glossaryPageQuery);

		const glossaryPage = glossaryPageData.glossaryPage;

		console.log("using fetched data for glossary");
		// !! ran up against Hygraph query pagination limit
		return glossaryPageBackupData;
		//return glossaryPageBackupData;
		return glossaryPage;
	} catch (error) {
		console.log(error, "using backup data for glossary");
		return glossaryPageBackupData;
	}
}
