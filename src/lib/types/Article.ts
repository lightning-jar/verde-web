interface Article {
	[key: string]: unknown;
	author?: string | null;
	date: Date;
	excerpt?: string | null;
	headline: string;
	id: string;
	image?: Image;
	imageAlt?: string;
	markup?: string;
	source?: ArticleSource | null;
	sourceArticleUrl?: string | null;
	text?: {
		html?: string | null;
	} | null;
	slug: string;
	tags: string[];
	type: "news" | "blog";
}
