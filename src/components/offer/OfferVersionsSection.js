import React, { useState } from 'react';
import Section from '../layout/containers/Section';
import { Row, Col, Container } from 'react-bootstrap';

import style from './OfferVersionsSection.module.scss';
import BackgroundImage from '../misc/BackgroundImage';

const StatsText = ({ title, value }) => (
    <div className="d-flex flex-row align-items-center justify-content-between">
        <p className="mr-4">{title}:</p>
        <p>{value}</p>
    </div>
);

const OfferVersionsSection = () => {

    const [currentVersion, setCurrentVersion] = useState();

    return (
        <Section>
            {/* <BackgroundImage /> */}
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="d-flex flex-column">
                            <h4>Versões</h4>
                            <div>

                            </div>
                        </div>
                    </Col>

                    <Col xs={8}>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-between align-items-center">
                                <img src="" alt="" />
                                <div className="p-4">
                                    <h4>Informações Gerais</h4>
                                    <div className={`${style.statsList} d-flex flex-column w-100`}>
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <h4>Itens de série</h4>
                                <div>
                                    <div>Ar condicionado</div>
                                    <div>AirBag</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferVersionsSection;