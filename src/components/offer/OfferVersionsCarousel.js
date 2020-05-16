import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Section from '../layout/containers/Section';

// TODO: For each version, add a carousel item with x versions

const VersionsCarousel = ({ versions }) => {

    const versionsPerItem = 5;

    return (
        <Carousel>
            <Carousel.Item className="w-100 d-flex flex-row align-items-center justify-content-center">
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="w-100 d-flex flex-row align-items-center justify-content-center">
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <img src="" alt="" />
                    <p>Classe A</p>
                </div>
            </Carousel.Item>

        </Carousel>
    );
};

const OfferVersionsCarousel = () => {

    return (
        <Section className="bg-light text-dark">
            <Container>
                <Row>
                    <Col xs={12}>
                        <VersionsCarousel />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferVersionsCarousel;