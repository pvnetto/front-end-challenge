import React, { useState, Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';
import Img from 'gatsby-image';

import Section from '../../../layout/containers/Section';
import BackgroundImage from '../../../misc/BackgroundImage';
import style from './OfferVersionsSection.module.scss';
import { splitItems } from './splitItems';

const StatsText = ({ spec }) => {
    const [title, value] = spec.split(':');

    return (
        <div className={style.statsItem}>
            <p className="mr-4"><small>{title}:</small></p>
            <p><small><span>{value}</span></small></p>
        </div>
    );
};

const TagList = ({ items }) => {

    const TagItem = ({ item }) => (
        <div className={style.tagItem}>
            <small>{item}</small>
        </div>
    );

    const [rowA, rowB] = splitItems(items);

    return (
        <div className={style.tagContainer}>
            <div className={style.tagRow}>
                {rowA.map((item, idx) => (
                    <TagItem key={idx} item={item} />
                ))}
            </div>
            <div className={style.tagRow}>
                {rowB.map((item, idx) => (
                    <TagItem key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

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

    const versionActiveClass = (version) => version.name === currentVersion.name ? style.active : '';

    return (
        <Section className={style.section}>
            <BackgroundImage fluid={data.statsBg.childImageSharp.fluid} />
            <Container>
                <Row>
                    <Col xs={3}>
                        <div className={`${style.versions} d-flex flex-column align-items-end`}>
                            <h3 className={style.title}>Versões</h3>
                            <div className={style.versionsList}>
                                {versions.map((version, idx) => (
                                    <Fragment key={idx}>
                                        <h5 onClick={() => setCurrentVersion(version)}
                                            className={`${style.versionsItem} ${versionActiveClass(version)}`}>{version.name}</h5>
                                        <hr />
                                    </ Fragment>
                                ))}
                            </div>
                        </div>
                    </Col>

                    <Col xs={9}>
                        <Row>
                            <Col xs={12} className={style.infoContainer}>
                                <Img className={style.profileImg} fluid={currentVersion.profileImg.childImageSharp.fluid} />
                                <div className={style.statsContainer}>
                                    <h3 className={style.title}>Informações Gerais</h3>
                                    <div className={`${style.statsList} d-flex flex-column w-100`}>
                                        {currentVersion.stats.SPECS.map((spec, idx) => (
                                            <StatsText key={idx} spec={spec} />
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <h3 className={style.title}>Itens de série</h3>
                                <TagList items={currentVersion.items} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferVersionsSection;