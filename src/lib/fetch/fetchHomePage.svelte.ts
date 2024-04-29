// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as homePageBackupDataYAML } from "$data/home.yaml?raw";

// parse raw data
const homePageBackupData: HomePageContent = YAML.parse(homePageBackupDataYAML);

// queries
import { homePageQuery } from "$queries/homePage";

export async function fetchHomePage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for home");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		const homePageData: { homePage: HomePageContent } =
			await hygraphHighSpeed.request(homePageQuery);
		const homePage = homePageData.homePage;

		return homePage;
		//return homePageBackupData;
	} catch (error) {
		console.log(error, "using backup data for home");
		return homePageBackupData;
	}
}
