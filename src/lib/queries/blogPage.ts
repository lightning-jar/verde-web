export const blogPageQuery = `
query BlogPage {
  articlesPages(where: {name: "Blog Page"}) {
    id
    name
    header {
      headline
      text
    }
    meta {
      title
      shortTitle
      description
      analyticsOn
      robotsFollow
    }
    articles(orderBy: publishedAt_DESC) {
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
  }
`;
export default blogPageQuery;
