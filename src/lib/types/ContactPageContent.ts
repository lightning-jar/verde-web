interface ContactPageContent {
	[key: string]: unknown;
	id?: string | null;
	header?: {
		headline?: string | null;
		text?: string | null;
	} | null;
	cards?:
		| {
				heading?: string | null;
				text?: string | null;
		  }[]
		| null;
	meta?: {
		title?: string | null;
		shortTitle?: string | null;
		description?: string | null;
		robotsFollow?: boolean | null;
		analyticsOn?: boolean | null;
	} | null;
}
