import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/misc/seo";
import OfferHeader from "../components/offer/OfferHeader";
import OfferConditionsSection from "../components/offer/OfferConditionsSection";
import OfferVersionsSection from "../components/offer/OfferVersionsSection";
import OfferVersionsCarousel from "../components/offer/OfferVersionsCarousel";

const IndexPage = () => (
  <Layout>
    <OfferHeader />
    <OfferConditionsSection />
    <OfferVersionsSection />
    <OfferVersionsCarousel />
  </Layout>
);

export default IndexPage;
