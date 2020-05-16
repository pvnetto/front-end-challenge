import { graphql } from "gatsby";

// https://www.gatsbyjs.org/docs/graphql-concepts/#fragments
export const fullModelFragment = graphql`
    fragment FullModel on Model {
        name
        brand
        description
        slug
        versions {
            name
            price
            profileImg {
                childImageSharp {
                    fluid(maxWidth: 360) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stats {
                COMFORT
                CONNECTIVITY
                SAFETY
                SPECS
            }
        }
        profileImg {
            childImageSharp {
                fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bannerImg {
            childImageSharp {
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;