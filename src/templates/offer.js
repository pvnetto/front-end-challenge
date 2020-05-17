import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/misc/seo";
import OfferHeader from "../components/offer/header";
import OfferConditionsSection from "../components/offer/OfferConditionsSection";
import OfferVersionsSection from "../components/offer/versions";
import OfferRecommendedSection from "../components/offer/recommended";

const OfferPage = ({ data }) => {

  const { model } = data;
  const models = data.allModel.edges.map(model => model.node);

  return (
    <Layout>
      <SEO title={`${model.brand} ${model.name}`} />
      <OfferHeader {...model} />
      <OfferConditionsSection />
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