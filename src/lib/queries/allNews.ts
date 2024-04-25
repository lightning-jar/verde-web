export const allNews = `
	query newsArticles {
		articles(where: {type: news}) {
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
      type
    }
	}
`;
export default allNews;
