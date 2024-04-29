import { fetchHomePage } from "$lib/fetch/fetchHome.svelte";

console.log("fetching home page content");
const homePageData = (await fetchHomePage(true)) as HomePageContent;

export function createHome() {
	let data = $state(homePageData);

	return {
		get page() {
			return data;
		},
	};
}

export const homeContent = createHome();
