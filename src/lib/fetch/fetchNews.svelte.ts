// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// import YAML
import YAML from "yaml";

// import raw data
import { default as newsPageBackupDataYAML } from "$data/newsPage.yaml?raw";
import { default as newsArticlesDataJson } from "$data/newsArticles.json";

// import, parse and merge backup data
const newsPageBackupData: ArticlesPage = YAML.parse(newsPageBackupDataYAML);
const newsArticlesBackupData: Article[] = newsArticlesDataJson ?? [];
newsPageBackupData.articles = newsArticlesBackupData;

// queries
import { newsPageQuery } from "$queries/newsPage";
import { newsArticlesQuery } from "$queries/newsArticles";

export async function fetchNewsPage(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		return;
	}

	// try getting data from hygraph, fallback to local backup data
	try {
		console.log("fetching data for news page");
		const newsPageData: { articlesPages: ArticlesPage[] } =
			await hygraphHighSpeed.request(newsPageQuery);
		const newsPage = newsPageData.articlesPages?.[0];

		console.log("fetching data for news articles");
		const newsArticlesData: { articles: Article[] } =
			await hygraphHighSpeed.request(newsArticlesQuery);
		const newsArticles = newsArticlesData.articles;

		// merge data
		console.log("merging fetched data for news");
		newsPage.articles = newsArticles;

		console.log("using fetched data for news");
		return newsPage;
	} catch (error) {
		console.log(error, "using backup data for news");
		return newsPageBackupData;
	}
}
