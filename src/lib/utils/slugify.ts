export function slugify(string: string) {
	if (!string) return "";
	const slugified = string
		.trim()
		.replace(/'/g, "")
		.replace(/\W/g, "-")
		.replace(/--*/gi, "-")
		.toLowerCase();
	return slugified;
}
export default slugify;