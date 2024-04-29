interface MessagingWidgetContent {
	[key: string]: unknown;
	heading?: string | null;
	name?: string | null;
	background?: WidgetBackground | null;
	callout?: string | null;
	cards?: Card[] | null;
}
