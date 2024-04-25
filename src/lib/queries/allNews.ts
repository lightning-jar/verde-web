export const allNews = `
	query newsArticles(where: {type: news}) {
		articles {
      author
      date
      excerpt
      headline
      id
      image {
        id
        fileName
        url
        width
        height
        mimeType
      }
      imageAlt
      slug
      source {
        id
        name
        url
      }
      sourceArticleUrl
      tags
      text {
        html
      }
    }
	}
`;
export default allNews;
