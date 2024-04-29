interface SolutionWidgetContent {
	[key: string]: unknown;
	heading?: string | null;
	name?: string | null;
	background?: WidgetBackground | null;
	cards?: Card[] | null;
	cta?: Card | null;
	text?: WidgetText | null;
}
