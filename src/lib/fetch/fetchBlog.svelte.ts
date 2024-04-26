// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as blogPageBackupDataYAML } from "$data/blogPage.yaml?raw";

// parse raw data
const blogPageBackupData: ArticlesPage = YAML.parse(blogPageBackupDataYAML);

// queries
import { blogPageQuery } from "$queries/blogPage";

export async function fetchBlogPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		const blogPageData: { articlesPages: ArticlesPage[] } =
			await hygraphHighSpeed.request(blogPageQuery);
		const blogPage = blogPageData.articlesPages?.[0];
		const yaml = YAML.stringify(blogPage);
		console.log(yaml);
		console.log("using fetched data for blog");
		return blogPage;
	} catch (error) {
		console.log(error, "using backup data for blog");
		return blogPageBackupData;
	}
}
