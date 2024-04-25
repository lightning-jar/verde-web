// types

// hygraph singleton
import { hygraphHighSpeed } from "$lib/hygraph.server";

// queries
import { allNews } from "$queries/allNews";

// logic
import { newsContent } from "$logic/news.svelte";

export async function updateNews(building: boolean) {
	// if we are not building, return the backup data
	if (!building) {
		console.log("not building, using backup data for news");
		// return newsStore;
	}

	// get data from hygraph
	try {
		const newsArticlesData: { articles: Article[] } =
			await hygraphHighSpeed.request(allNews);
		const news = newsArticlesData.articles;
		console.log("fetched", news);
		// update the data store
		// newsStoreRaw.set(news);
		// // log success
		console.log("news data updated");
		// return newsStore;
	} catch (error) {
		console.log(error, "using backup data for news");
		// return newsStore;
	}
}
