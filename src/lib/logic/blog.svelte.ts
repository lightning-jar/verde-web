// import YAML
import YAML from "yaml";

interface BlogArticle {
	author: string;
	date: string;
	excerpt: string;
	headline: string;
	id: string;
	image: Image;
	markup: string;
	slug: string;
	tags: string[];
}

// import raw data
import { default as blogArticlesDataRawYAML } from "$data/blog.yaml?raw";
import { default as blogPageDataRawYAML } from "$data/blogPage.yaml?raw";

// parse raw data
const blogArticlesDataRaw = YAML.parse(blogArticlesDataRawYAML);
const blogPageDataRaw = YAML.parse(blogPageDataRawYAML);

export function createBlog() {
	let articlesData = $state(blogArticlesDataRaw as BlogArticle[]);
	let pageData = $state(blogPageDataRaw);

	let latestBlogArticles = $derived.by(() => {
		const latest = articlesData.slice(0, 20);
		const articles = latest.map((article) => {
			const { headline, image, slug } = article;
			return {
				headline,
				image,
				url: slug,
			};
		});
		return articles;
	});

	return {
		get articles() {
			return articlesData;
		},
		get page() {
			return pageData;
		},
		get latest() {
			return latestBlogArticles;
		},
	};
}

export const blogContent = createBlog();
