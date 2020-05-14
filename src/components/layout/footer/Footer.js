import React from 'react';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SocialIcons from '../../misc/socials/SocialIcons';
import style from './Footer.module.scss';

const Footer = () => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         autoforceLogoWhite: file (
    //             relativePath: {eq: "logos/logo_autoforce_white.png"}
    //         ) {
    //             childImageSharp {
    //                 fluid(maxWidth: 200) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `);

    return (
        <footer className={style.footer}>
            <Container>

                <Row>
                    <Col xs={3}>
                        {/* <Img className={style.logo} fluid={data.autoforceLogoWhite.childImageSharp.fluid} /> */}
                    </Col>
                    <Col xs={6} className="d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="m-0"><small>Copyright © 2019 AutoForce - Todos os direitos reservados. </small></p>
                        <div className="d-flex">
                            <Link>Visitar Site</Link>
                            <Link>Contato</Link>
                            <Link>Política de Privacidade</Link>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <SocialIcons />
                    </Col>
                </Row>

                <Row>
                    <Col className="mx-auto" xs={3}>
                        {/* <Img className={style.logo} fluid={data.autoforceLogoWhite.childImageSharp.fluid} /> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;