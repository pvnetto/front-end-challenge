import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from '../../misc/BackgroundImage';
import Section from '../../layout/containers/Section';
import OfferConversionForm from '../../forms/OfferConversionForm';

import style from './OfferHeader.module.scss';
import FacebookButton from './facebook';

const OfferHeader = ({ name, price, versions, description, bannerImg }) => {

    const data = useStaticQuery(graphql`
        query {
            headerBg: file(
                relativePath: { eq: "header_bg.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

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
        <Section className={`${style.section} position-relative`}>
            <header className={style.header} >
                <BackgroundImage fluid={data.headerBg.childImageSharp.fluid} />
                <BackgroundImage fluid={data.colorBg.childImageSharp.fluid} className={style.overlay} />
                <Container className="my-auto">
                    <Row>
                        <Col md={4} xs={12}>
                            <OfferConversionForm versions={versions} />
                        </Col>
                        <Col className="d-flex flex-column" md={8} xs={12}>
                            <div>
                                <div className={style.modelInfo}>
                                    <h1 className={style.modelText}>
                                        <strong>{name}</strong>
                                    </h1>

                                    <h3 className={style.versionText}>
                                        <strong>{versions && versions.length > 0 ? versions[0].name : ''}</strong>
                                    </h3>

                                    <h4 className="m-0">
                                        <strong>{description}</strong>
                                    </h4>
                                </div>

                                <div className={style.priceInfo}>
                                    <h4 className="mb-0"><strong>De R$ <span>{price}</span></strong></h4>

                                    <div className="d-flex flex-row align-items-end">
                                        <h3><strong>Por R$ </strong></h3>
                                        <h2><strong>{price}</strong></h2>
                                    </div>
                                </div>

                                <p><small>*Consulte as Condições Comerciais</small></p>
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-center mt-auto">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p className="mb-1"><small>Gostou? Então compartilhe.</small></p>
                                    <div className="d-flex mb-4">
                                        <FacebookButton className="mr-3" title="Share" value="378k" />
                                        <FacebookButton title="Like" value="229k" />
                                    </div>

                                    <p><small>*Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes.
                                        Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme
                                        todas as informações com um de nossos vendedores..</small></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </Section>
    );
};

export default OfferHeader;