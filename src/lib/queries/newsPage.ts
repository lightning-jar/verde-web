export const newsPageQuery = `
query NewsPage {
  articlesPages(where: {name: "News Page"}) {
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
  }
`;
export default newsPageQuery;
