interface PageMeta {
	title?: string;
	shortTitle?: string;
	description?: string;
	keywords?: string[];
	ogImage?: { [key: string]: string | number };
	robotsFollow?: boolean;
	plausibleAnalytics?: boolean;
}
