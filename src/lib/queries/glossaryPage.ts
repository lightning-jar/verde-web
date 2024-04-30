export const glossaryPageQuery = `
query glossaryPages {
  glossaryPage(where: {id: "clvlcq9dq0rsg08iu7b16fz3k"}) {
    id
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
export default glossaryPageQuery;
