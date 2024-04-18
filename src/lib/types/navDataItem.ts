interface NavDataItem {
	label: string;
	type?: string;
	hover?: string;
	items?: NavDataItem[] | null;
	mobileLink?: string | null; // force a link on mobile vs flyout
	mobileLabel?: string;
	mobileHide?: boolean; // hide on mobile
	parentMenu?: string | null;
	relativePath?: string;
	title?: string;
	externalUrl?: string;
}
