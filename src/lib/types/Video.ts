interface Video {
	[key: string]: unknown;
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	classes?: string;
	poster?: string;
	type?: string;
	url?: string;
}
