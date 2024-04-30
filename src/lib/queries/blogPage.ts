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
  }
}
`;
export default blogPageQuery;
