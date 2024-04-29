interface BillboardWidgetContent {
	[key: string]: unknown;
	heading?: string | null;
	name?: string | null;
	background?: WidgetBackground | null;
	cards?: Card[] | null;
	text?: WidgetText | null;
}
