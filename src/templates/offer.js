import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/misc/seo";
import OfferHeader from "../components/offer/OfferHeader";
import OfferConditionsSection from "../components/offer/OfferConditionsSection";
import OfferVersionsSection from "../components/offer/versions";
import OfferVersionsCarousel from "../components/offer/OfferVersionsCarousel";

const OfferPage = ({ data }) => {

  const { model } = data;

  return (
    <Layout>
      <SEO title={`${model.brand} ${model.name}`} />
      <OfferHeader {...model} />
      <OfferConditionsSection />
      <OfferVersionsSection {...model} />
      <OfferVersionsCarousel />
    </Layout>
  );
};

export default OfferPage;
export const query = graphql`
    query OfferModel($id: String!) {
        model(id: {eq: $id}) {
            ...FullModel
        }
    }
`;