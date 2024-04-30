interface GlossaryEntry {
	[key: string]: unknown;
	id: string;
	term: string;
	updatedAt?: string | null;
	definition: string;
}
