// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as blogPageBackupDataYAML } from "$data/blogPage.yaml?raw";
import { default as blogArticlesData } from "$data/blogArticles.json";

// parse raw data
const blogPageBackupData: ArticlesPage = YAML.parse(blogPageBackupDataYAML);
const blogArticlesBackupData: Article[] = blogArticlesData ?? [];
blogPageBackupData.articles = blogArticlesBackupData ?? [];

// queries
import { blogPageQuery } from "$queries/blogPage";
import { blogArticlesQuery } from "$queries/blogArticles";

export async function fetchBlogPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		console.log("fetching data for blog page");
		const blogPageData: { articlesPages: ArticlesPage[] } =
			await hygraphHighSpeed.request(blogPageQuery);
		const blogPage = blogPageData.articlesPages?.[0];

		console.log("fetching data for blog articles");
		const blogArticlesData: { articles: Article[] } =
			await hygraphHighSpeed.request(blogArticlesQuery);
		const blogArticles = blogArticlesData.articles;

		// merge data
		console.log("merging fetched data for blog");
		blogPage.articles = blogArticles;

		console.log("using fetched data for blog");
		return blogPage;
	} catch (error) {
		console.log(error, "using backup data for blog");
		return blogPageBackupData;
	}
}
