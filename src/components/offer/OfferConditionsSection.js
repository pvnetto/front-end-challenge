import React from 'react';
import Section from '../layout/containers/Section';
import { Row, Col, Container } from 'react-bootstrap';

import style from './OfferConditionsSection.module.scss';

const ConditionItem = ({ title, condition, description }) => (
    <>
        <h4>{title}</h4>
        <h1>{condition}</h1>
        <p>{description}</p>
    </>
);

const OfferConditionsSection = () => {
    return (
        <Section className={`${style.section} text-center`}>
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