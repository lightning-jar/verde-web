function cleanUpPugClasses(pugEl: string) {
	const str = pugEl.trim();

	// helper function
	const format = (array: string[]) => `${array.join(`\n\t\t`)}`;

	// if literal id, extract literal id
	const literalId = str.match(/#[a-z-]+/)?.[0] ?? "";

	// create new variable from full string minus literal id
	const s = str.replace(literalId, "");

	// get tag
	const explicitTag = s
		.replace(str.split("(")?.[1], "")
		.slice(0, -1)
		.trim()
		.match(/[a-z-]*?\./)?.[0]
		.replace(".", "");
	const tag = explicitTag ? explicitTag : "div";

	// get enclosed classes
	const enclosedStatement = str.match(/class=["'`](?:.|\n)*?["'`]/i)?.[0] ?? "";
	const enclosedStatementScrubbed = enclosedStatement.replace(/(?:\n)+?/g, " ");
	const enclosedClasses = enclosedStatement
		?.replace(/class=["'`]/i, "")
		.slice(0, -1)
		.split(` `)
		.filter((item) => item);

	// get parenthetical -- provide empty string fallback in case there is no parenthetical
	const p = str.match(/\((?:.|\n)*\)/)?.[0]?.trim() ?? "";

	// remove the whole class statement
	const pMinusClass = p
		? p
				.replace(enclosedStatement, "")
				.trim()
				.replaceAll(/\s{2,}/g, " ")
		: "";
	const pInner = pMinusClass
		? pMinusClass.substring(1, pMinusClass.length - 1).trim()
		: "";
	const ps = pInner
		? [
				...pInner.matchAll(
					/[a-z-:!|]+=?["'`]?[a-z0-9:{},\s]*["'`]?(?=[,\s\b]|$)/gi,
				),
			].flatMap((p) => p)
		: [];

	// if one of the attribute values ends in a comma, remove the comma
	const psScrubbed = ps.map((p) =>
		p[p.length - 1] == "," ? p.slice(0, -1) : p,
	);

	// do we have any attributes that aren't class?
	const hasAttributes = psScrubbed[0] ? true : false;

	// add class attribute as a marker to replace later
	psScrubbed.push("class");

	// sort attributes
	const psSorted = psScrubbed.sort();

	// get literal string by removing parenthetical
	const literalStringRaw = p ? s.replace(p, "") : s;

	// now if the substring up until the first "." === tag, remove it
	const literalFirst = literalStringRaw.split(".")?.[0] ?? "";
	const literalString =
		tag && literalFirst === tag
			? literalStringRaw.substring(literalFirst.length)
			: literalStringRaw;

	// extract classes from what's left of the literal string (minus stag and literal id)
	const literalClasses = literalString.includes(".")
		? literalString.split(".")
		: [];

	// remove empty first class -- a byproduct of the last move
	if (literalClasses[0] === "") literalClasses.shift();

	// consolidated and deduped classes
	const classes = [...new Set([...enclosedClasses, ...literalClasses])];

	// normal classes
	const normalClasses = classes.filter((s) => !s.includes(":")).toSorted();
	const normalClassesFormatted = format(normalClasses);

	// extract special classes
	const special = classes.filter((s) => s.includes(":"));

	// breakpoints definition
	const bps = ["xs", "sm", "md", "lg", "xl", "2xl"];

	// extract pseudo classes that do not begin with breakpoints
	const pseudoClasses = special
		.filter((s) => !bps.some((bp) => s.startsWith(`${bp}:`)))
		.toSorted();
	const pseudoClassesFormatted = format(pseudoClasses);

	// extract bp classes
	const bpClasses = bps.flatMap((bp) => {
		return special.filter((s) => s.startsWith(`${bp}:`));
	});
	const bpClassesFormatted = format(bpClasses);

	// do we have any classes?
	const hasClasses =
		normalClassesFormatted || pseudoClassesFormatted || bpClassesFormatted
			? true
			: false;

	// if no classes and no other attributes return tag and literal id
	if (!hasAttributes && !hasClasses) return `${tag}${literalId}`;

	// format classes
	const classesFormatted = `\n\tclass=\`\n\t\t${format(normalClasses)}${format(pseudoClasses)}${format(bpClasses)}\``;

	// format parenthetical
	const parentheticalFormatted = psScrubbed
		.join(`\n\t`)
		.replace("class", `${classesFormatted}`);

	return `${tag}${literalId}(${parentheticalFormatted})`;
}

const test = `mb-4.text-15.text-slimy-900.py-3.px-3.border-0.border-penn-600.border-1.rounded.leading-none.whitespace-nowrap sm:inline-block(class="sm:mb-0 md:text-14 bg-slimy-300/90 opacity-90 hover:opacity-100 transition-opacity")`;

console.log("classClean", cleanUpPugClasses(test));
