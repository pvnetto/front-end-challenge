import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Section from '../../layout/containers/Section';
import ModelsCarousel from './carousel/ModelsCarousel';

import style from './OfferRecommendedSection.module.scss';

const OfferRecommendedSection = ({ models }) => {

    return (
        <Section className={style.section}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className={style.header}>Conheça nossos carros</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ModelsCarousel models={models} />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferRecommendedSection;