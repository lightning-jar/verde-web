import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params, url }) {
	const { slug } = params;

	// get content
	const { content, utils } = locals;
	const { articles }: { articles: Article[] } = content.news;

	// get article
	// const article = articles.find((article) => article.slug === slug);
	const articleIndex = articles.findIndex((article) => article.slug === slug);
	const article = articles[articleIndex];
	const onPageArticleText = truncateArticleText(article.text?.html ?? "");
	const nextArticle = articles[articleIndex + 1];
	const nextArticleSlug = nextArticle ? nextArticle.slug : articles[0].slug;
	const nextArticleTitle = nextArticle
		? nextArticle.headline
		: articles[0].headline;

	// if article not found, return 404
	if (!article) {
		return utils.redirect(404);
	}

	// functions
	function truncateArticleText(
		// limits the text to a certain number of characters and a certain number of paragraphs
		// if character limit is set too low, strange things might happen.
		text: string,
		characterLimit = 1400,
		grafLimit = 3,
	) {
		// truncateArticleText helper function to raise the character limit for anchor elements in the text--they don't render but they DO deplete the character allowance
		function raiseLimitForAnchorElements(
			text: string,
			searchStartIndex = 0,
			searchEndIndex = characterLimit,
		) {
			// search for anchor elements from the beginning of the text to the limit
			// if anchor found, raise the character limit by the length of the entire anchor element, even if the end of the element is beyond the character limit
			// use recursion to search for more anchor elements that might start between the end of the first anchor and the newly increased limit
			let excerpt = text.slice(searchStartIndex, searchEndIndex);
			let startOfAnchor = excerpt.indexOf("<a ");
			if (startOfAnchor === -1) return;
			else {
				startOfAnchor += searchStartIndex;
				let endOfAnchor =
					text.slice(searchStartIndex).indexOf("</a>") + 3 + searchStartIndex;
				let anchorLength = endOfAnchor - startOfAnchor;
				characterLimit += anchorLength;
				return raiseLimitForAnchorElements(
					text,
					endOfAnchor + searchStartIndex,
					characterLimit,
				);
			}
		}

		// truncateArticleText helper function to clean the end of the last graf so we don't get a "...." or a ". ..." or what have you at the end of the excerpt
		function cleanEnd(lastGraf: string) {
			let trimmingIndex =
				lastGraf.lastIndexOf(".") > 0
					? lastGraf.lastIndexOf(".")
					: lastGraf.lastIndexOf(" ");
			return trimmingIndex > 0 ? lastGraf.slice(0, trimmingIndex) : lastGraf;
		}

		// truncateArticleText helper function to apply the character limit to the text
		function applyCharacterLimit(text: string) {
			raiseLimitForAnchorElements(text);

			let limitedText =
				text.length > characterLimit ? text.slice(0, characterLimit) : text;
			return limitedText;
		}

		let characterLimitedText = applyCharacterLimit(text);

		// with the character count of our excerpt limited to account for the possibility of an article with no paragraph breaks, we now split our excerpt at the paragraph breaks that probably DO exist, and limit the number of paragraphs to the number specified in the grafLimit parameter
		let textArray: string[] = characterLimitedText.split("</p>");
		// filter out possible empty paragraphs.  It seems that Hygraph turns carriage returns into HTML paragraph tags, so they are easily produced by accident.
		textArray = textArray.filter((graf) => graf !== "<p>");

		if (textArray.length > grafLimit) {
			textArray = textArray.slice(0, grafLimit);
			if (
				textArray[grafLimit - 1] !== null &&
				textArray[grafLimit - 1] !== undefined
			)
				textArray[grafLimit - 1] = cleanEnd(textArray[grafLimit - 1]);
			return textArray.join("</p>") + "...";
		} else if (textArray.length > 1 && textArray.length <= grafLimit) {
			// if the textArray length is at or under the limit, it is overwhelmingly likely that the last graf is incomplete and cuts out awkwardly, so we dump it
			textArray.length -= 1;
			textArray[textArray.length - 1] = cleanEnd(
				textArray[textArray.length - 1],
			);
			return textArray.join("</p>") + "...";
		} else {
			// if the textArray length is 1, it's almost certain that the article is a single paragraph, so we just clean the end and return it
			return cleanEnd(characterLimitedText) + "...";
		}
	}

	const meta = {
		title: article.headline,
		description: article.excerpt,
		robotsFollow: true,
		plausibleAnalytics: true,
	};

	return {
		article,
		onPageArticleText,
		nextArticleSlug,
		nextArticleTitle,
		meta,
	};
};
