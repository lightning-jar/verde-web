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
  }}`;
export default newsPageQuery;
