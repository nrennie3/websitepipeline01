export const FEATURED_ITEMS_QUERY = /* GraphQL */ `
  query FeaturedItems {
    menuItems(where: { metaQuery: { metaArray: [{ key: "is_featured", value: "1" }] } }) {
      nodes {
        slug
        title
        content
        featuredImage { node { sourceUrl } }
        price
        isFeatured
        menuCategories { nodes { slug name } }
      }
    }
  }
`;

export const ALL_MENU_ITEMS_QUERY = /* GraphQL */ `
  query AllMenuItems {
    menuItems(first: 100) {
      nodes {
        slug
        title
        content
        featuredImage { node { sourceUrl } }
        price
        isFeatured
        menuCategories { nodes { slug name } }
      }
    }
  }
`;
