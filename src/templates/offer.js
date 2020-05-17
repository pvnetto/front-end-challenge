import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/misc/seo";
import OfferHeader from "../components/pages/offer/header";
import OfferHighlightsSection from "../components/pages/offer/highlights";
import OfferVersionsSection from "../components/pages/offer/versions";
import OfferRecommendedSection from "../components/pages/offer/recommended";

const OfferPage = ({ data }) => {

  const { model } = data;
  const models = data.allModel.edges.map(model => model.node);

  return (
    <Layout>
      <SEO title={`${model.brand} ${model.name}`} />
      <OfferHeader {...model} />
      <OfferHighlightsSection />
      <OfferVersionsSection {...model} />
      <OfferRecommendedSection models={models} />
    </Layout>
  );
};

export default OfferPage;
export const query = graphql`
    query OfferModel($id: String!) {
        model(id: {eq: $id}) {
            ...FullModel
        }

        allModel {
          edges {
            node {
              name
              slug
              profileImg {
                childImageSharp {
                  fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
    }
`;