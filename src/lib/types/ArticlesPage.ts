interface ArticlesPage {
	[key: string]: unknown;
	header: PageHeader;
	meta: PageMeta;
	articles?: Article[] | null;
}
