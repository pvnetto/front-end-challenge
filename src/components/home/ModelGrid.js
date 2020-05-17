import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import SEO from "../misc/seo";
import Section from '../layout/containers/Section';

import style from './ModelGrid.module.scss';

const ModelGrid = ({ models }) => {
    return (
        <Section className={style.section} >
            <Container>
                <Row>
                    {models.map((model, idx) => (
                        <Col lg={3} md={4} xs={12}>
                            <Link className={`${style.item} d-flex flex-column align-items-center`} to={model.slug}>
                                <Img className="w-100" fluid={model.profileImg.childImageSharp.fluid} />
                                <h5 className={style.title}>{model.name}</h5>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Section>
    );
};

export default ModelGrid;