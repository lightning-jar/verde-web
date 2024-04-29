// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as contactPageBackupDataYAML } from "$data/contactPage.yaml?raw";

// parse raw data
const contactPageBackupData: ContactPageContent = YAML.parse(
	contactPageBackupDataYAML,
);

// queries
import { contactPageQuery } from "$queries/contactPage";

export async function fetchContactPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for contact");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		const contactPageData: { contactPage: ContactPageContent } =
			await hygraphHighSpeed.request(contactPageQuery);
		const contactPage = contactPageData.contactPage;

		return contactPage;
		//return contactPageBackupData;
	} catch (error) {
		console.log(error, "using backup data for contact");
		return contactPageBackupData;
	}
}
