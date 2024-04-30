export const newsArticlesQuery = `
query NewsArticles {
  articles(first:50, orderBy: date_DESC, where: {type: news}) {
    author
    date
    excerpt
    headline
    id
    image {
      url
      width
      height
    }
    imageAlt
    slug
    source {
      name
      url
    }
    sourceArticleUrl
    tags
    text {
      html
    }
  }
}`;
export default newsArticlesQuery;
