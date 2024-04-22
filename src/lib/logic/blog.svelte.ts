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
import { default as blogDataRaw } from "$data/blog.yaml?raw";

// parse raw data
const dataRaw = YAML.parse(blogDataRaw);

export function createBlog() {
	let data = $state(dataRaw as BlogArticle[]);

	let latestBlogArticles = $derived.by(() => {
		const latest = data.slice(0, 20);
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
		get data() {
			return data;
		},
		get latestBlogArticles() {
			return latestBlogArticles;
		},
	};
}

export const blogContent = createBlog();
