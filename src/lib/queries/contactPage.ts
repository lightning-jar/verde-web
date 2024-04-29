export const contactPageQuery = `
query ContactPage {
  contactPage(where: {id: "clvl7infv3mj707k2l2kt860q"}) {
    id
    header {
      headline
      text
    }
    cards {
      heading
      text
    }
    meta {
      title
      shortTitle
      description
      robotsFollow
      analyticsOn
    }
  }
}`;
export default contactPageQuery;
