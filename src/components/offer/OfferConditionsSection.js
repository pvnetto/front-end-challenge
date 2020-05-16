import React from 'react';
import Section from '../layout/containers/Section';
import { Row, Col, Container } from 'react-bootstrap';

import style from './OfferConditionsSection.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from '../misc/BackgroundImage';

const ConditionItem = ({ title, condition, description }) => (
    <>
        <h3>{title}</h3>
        <h1 className={style.condition}>{condition}</h1>
        <p className={style.description}>{description}</p>
    </>
);


const OfferConditionsSection = () => {

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
                    <Col md={4} xs={12}>
                        <ConditionItem title={"Imperdível"} condition={"Taxa Zero %"} description={"Always first off the line. Instant torque delivers full power in a heartbeat."} />
                    </Col>

                    <Col md={4} xs={12}>
                        <ConditionItem title={"O carro mais"} condition={"Seguro"} description={"Always first off the line. Instant torque."} />
                    </Col>

                    <Col md={4} xs={12}>
                        <ConditionItem title={"Bonus de até"} condition={"R$ 3 mil"} description={"Always first off the line. Instant torque delivers full power in a heartbeat."} />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferConditionsSection;