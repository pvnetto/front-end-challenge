import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from '../misc/BackgroundImage';
import style from './OfferHeader.module.scss';
import Section from '../layout/containers/Section';
import OfferConversionForm from '../forms/OfferConversionForm';

const OfferHeader = ({ name, versions, description, bannerImg }) => {

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
        }
    `);

    return (
        <Section className="position-relative">
            <header className={style.header} >
                <BackgroundImage fluid={data.headerBg.childImageSharp.fluid} />
                <Container className="my-auto">
                    <Row>
                        <Col md={4} xs={12}>
                            <OfferConversionForm />
                        </Col>
                        <Col className="d-flex flex-column" md={8} xs={12}>
                            <div className="d-flex flex-column">
                                <h1>{name}</h1>
                                <h3>{versions && versions.length > 0 ? versions[0].name : ''}</h3>

                                <p>{description}</p>

                                <p>De</p>
                                <p>Por</p>
                                <p><small>*Consulte as Condições Comerciais</small></p>
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-center mt-auto">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p><strong>Gostou? Então compartilhe.</strong></p>
                                    <p>
                                        <Button>Share</Button>
                                        <Button>Like</Button>
                                    </p>

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