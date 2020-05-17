import React from "react";
import Img from 'gatsby-image';
import { Link, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/misc/seo";
import Section from '../components/layout/containers/Section';
import ModelGrid from "../components/pages/home/ModelGrid";

const IndexPage = ({ data }) => {
    const models = data.allModel.edges.map(model => model.node);

    return (
        <Layout>
            <SEO title="Home" />
            <ModelGrid models={models} />
        </Layout>
    )
};

export default IndexPage;
export const query = graphql`
    query {
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