interface Article {
	[key: string]: unknown;
	author?: string;
	date: Date;
	excerpt?: string;
	headline: string;
	id: string;
	image: Image;
	markup: string;
	source?: ArticleSource;
	slug: string;
	tags: string[];
}
