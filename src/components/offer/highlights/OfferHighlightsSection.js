import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';

import BackgroundImage from '../../misc/BackgroundImage';
import Section from '../../layout/containers/Section';

import style from './OfferHighlightsSection.module.scss';

const HighlightItem = ({ title, condition, description }) => (
    <Col className={style.item} md={4} xs={12}>
        <h3 className={style.title}>{title}</h3>
        <h1 className={style.condition}>{condition}</h1>
        <p className={style.description}>{description}</p>
    </ Col>
);


const OfferHighlightsSection = () => {

    const data = useStaticQuery(graphql`
        query {
            colorBg: file(
                relativePath: { eq: "color_bg.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Section className={`${style.section} text-center position-relative`}>
            <BackgroundImage fluid={data.colorBg.childImageSharp.fluid} />
            <Container>
                <Row>
                    <HighlightItem title={"Imperdível"} condition={"Taxa Zero %"} description={"Always first off the line. Instant torque delivers full power in a heartbeat."} />
                    <HighlightItem title={"O carro mais"} condition={"Seguro"} description={"Always first off the line. Instant torque."} />
                    <HighlightItem title={"Bonus de até"} condition={"R$ 3 mil"} description={"Always first off the line. Instant torque delivers full power in a heartbeat."} />
                </Row>
            </Container>
        </Section>
    );
};

export default OfferHighlightsSection;