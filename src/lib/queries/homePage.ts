const homePageId = "clvjxxsh1tbvx07ka5g1tt213";
export const homePageQuery = `
query HomePage {
  homePage: homePage(where: {id: "clvjxxsh1tbvx07ka5g1tt213"}) {
    billboard {
      heading
      text
      cards(first: 50) {
        heading
        text
        link {
          label
          url
          rel
          title
          target
        }
      }
      background {
        id
        image {
          url
        }
        iframe {
          title
          url
        }
        overlay {
          styles
        }
      }
    }
    solutions {
      id
      heading
      subheading
      text {
        html
      }
      background {
        image {
           url
        }
        overlay {
          styles
        }
      }
      cards {
        heading
        text
        image {
          url
        }
        styles
      }
      cta {
        heading
        text
        link {
          label
          title
          url
        }
        styles
      }
    }
    messaging {
      name
      heading
      background {
        image {
          url
        }
        video {
          url
          type
        }
      }
      callout
      cards {
        heading
        text
      }
    }
    resources {
      heading
      subheading
      links {
        label
        title
        url
      }
    }
    blog {
      heading
      subheading
      link {
        label
        title
        url
      }
    }
  }
}
`;
export default homePageQuery;
