import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';
import Img from 'gatsby-image';

import Section from '../../layout/containers/Section';
import BackgroundImage from '../../misc/BackgroundImage';
import style from './OfferVersionsSection.module.scss';

const StatsText = ({ title, value }) => (
    <div className={style.statsItem}>
        <p className="mr-4"><small>{title}:</small></p>
        <p><small><span>{value}</span></small></p>
    </div>
);

const OfferVersionsSection = ({ versions }) => {

    const data = useStaticQuery(graphql`
        query {
            statsBg: file(
                relativePath: { eq: "stats_bg.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const [currentVersion, setCurrentVersion] = useState(versions[0]);

    return (
        <Section className="position-relative bg-dark">
            <BackgroundImage fluid={data.statsBg.childImageSharp.fluid} />
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="d-flex flex-column align-items-end">
                            <h4>Versões</h4>
                            <div className={style.versionsList}>
                                {versions.map(version => (
                                    <>
                                        <h5>{version.name}</h5>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Col>

                    <Col xs={8}>
                        <Row>
                            <Col xs={12} className={style.infoContainer}>
                                <Img className={style.profileImg} fluid={currentVersion.profileImg.childImageSharp.fluid} />
                                <div className={style.statsContainer}>
                                    <h3>Informações Gerais</h3>
                                    <div className={`${style.statsList} d-flex flex-column w-100`}>
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
                                        <StatsText title={"Cilindros/válvulas por cilindro"} value={"4/4"} />
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
                                <div className={style.tagContainer}>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>

                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
                                    <div className={style.tagItem}>Ar condicionado</div>
                                    <div className={style.tagItem}>AirBag</div>
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