// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as newsPageBackupDataYAML } from "$data/newsPage.yaml?raw";

// parse raw data
const newsPageBackupData: ArticlesPage = YAML.parse(newsPageBackupDataYAML);

// queries
import { newsPageQuery } from "$queries/newsPage";

export async function fetchNewsPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		const newsPageData: { articlesPages: ArticlesPage[] } =
			await hygraphHighSpeed.request(newsPageQuery);
		const newsPage = newsPageData.articlesPages?.[0];
		console.log("using fetched data for news");
		return newsPage;
	} catch (error) {
		console.log(error, "using backup data for news");
		return newsPageBackupData;
	}
}
