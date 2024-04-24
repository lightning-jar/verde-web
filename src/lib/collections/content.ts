import { footerContent } from "$lib/logic/footer.svelte";
import { headerContent } from "$lib/logic/header.svelte";
import { homeContent } from "$lib/logic/home.svelte";
import { newsContent } from "$logic/news.svelte";
import { blogContent } from "$logic/blog.svelte";
import { contactPage } from "$logic/contactPage.svelte";
import { glossary } from "$logic/glossary.svelte";

export const content = {
	blog:
		{
			articles: blogContent.articles ?? {},
			page: blogContent.page ?? {},
			latestBlog: blogContent.latest ?? {},
		} ?? {},
	contactPage: contactPage.data ?? {},
	glossary: { entries: glossary.entries, page: glossary.page } ?? {},
	headerWC: {
		component: headerContent.component ?? "",
		url: headerContent.url ?? "",
	},
	footerWC: {
		component: footerContent.component ?? "",
		url: footerContent.url ?? "",
	},
	home: homeContent.data ?? {},
	news:
		{
			articles: newsContent.articles,
			page: newsContent.page,
			latestNews: newsContent.latestNews,
		} ?? {},
};
export default content;
type Content = typeof content;
