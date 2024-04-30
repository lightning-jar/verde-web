interface Article {
	[key: string]: unknown;
	author?: string | null;
	date: string;
	excerpt?: string | null;
	headline: string;
	id?: string | null;
	image?: Image | null;
	imageAlt?: string | null;
	markup?: string;
	source?: ArticleSource | null;
	sourceArticleUrl?: string | null;
	text?: {
		html?: string | null;
	} | null;
	slug: string;
	tags: string[];
	type?: string | null;
}
