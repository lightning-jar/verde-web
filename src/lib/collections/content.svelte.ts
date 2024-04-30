import { footerContent } from "$lib/logic/footer.svelte";
import { headerContent } from "$lib/logic/header.svelte";
import { homeContent } from "$lib/logic/home.svelte";
import { newsContent } from "$logic/news.svelte";
import { blogContent } from "$logic/blog.svelte";
import { contactPageContent } from "$logic/contactPage.svelte";
import { glossaryPageContent } from "$logic/glossaryPage.svelte";

export const content = {
	blog:
		{
			articles: blogContent.articles ?? {},
			page: blogContent.page ?? {},
			latestBlog: blogContent.latestBlog ?? {},
		} ?? {},
	contactPage: contactPageContent.page ?? {},
	glossaryPage: glossaryPageContent.page ?? {},
	headerWC: {
		component: headerContent.component ?? "",
		url: headerContent.url ?? "",
	},
	footerWC: {
		component: footerContent.component ?? "",
		url: footerContent.url ?? "",
	},
	// home: homeContent.data ?? {},
	home: homeContent.page ?? {},
	news:
		{
			articles: newsContent?.articles ?? [],
			page: newsContent.page,
			latestNews: newsContent.latestNews,
		} ?? {},
};
export default content;
type Content = typeof content;
