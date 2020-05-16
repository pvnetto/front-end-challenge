import React from 'react';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SocialIcons from '../../misc/socials/SocialIcons';
import style from './Footer.module.scss';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            groupLogo: file(
                relativePath: { eq: "logos/logo_group.png" }
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            autoforceLogo: file (
                relativePath: {eq: "logos/logo_autoforce_white.png"}
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <footer className={style.footer}>
            <Container>
                <Row>
                    <Col xs={3}>
                        <Link to="/"><Img fixed={data.groupLogo.childImageSharp.fixed} /></Link>
                    </Col>
                    <Col xs={6} className={`${style.copyrightSection} d-flex flex-column align-items-center justify-content-center text-center`}>
                        <p className="m-0"><small>Copyright © 2019 AutoForce - Todos os direitos reservados. </small></p>
                        <div className="d-flex">
                            <Link><small>Visitar Site</small></Link>
                            <Link><small>Contato</small></Link>
                            <Link><small>Política de Privacidade</small></Link>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <SocialIcons />
                    </Col>
                </Row>

                <Row>
                    <Col className="mx-auto d-flex" xs={3}>
                        <a className="m-auto" href="https://www.autoforce.com">
                            <Img fixed={data.autoforceLogo.childImageSharp.fixed} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;