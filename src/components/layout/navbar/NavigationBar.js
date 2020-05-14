import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const NavigationBar = ({ onExpand, expanded }) => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         autoforceLogo: file(
    //             relativePath: { eq: "logos/logo_autoforce.png" }
    //         ) {
    //             childImageSharp {
    //                 fluid(maxWidth: 260) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }

    //         autoforceLogoWhite: file(
    //             relativePath: { eq: "logos/logo_autoforce_white.png" }
    //         ) {
    //             childImageSharp {
    //                 fluid(maxWidth: 260) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `);

    return (
        <Navbar id="navbar" className={`d-md-flex d-none flex-column p-0`} variant="light">
            <Container className={`d-flex align-items-center justify-content-center px-4 h-100`}>

                <Navbar.Brand href="/">
                    {/* <Img className={style.navbarLogo} fluid={data.autoforceLogo.childImageSharp.fluid} /> */}
                </Navbar.Brand>


                <Nav className="mx-auto d-flex align-items-center">
                    <Nav.Link href="/">Nossos Veículos</Nav.Link>
                    <Nav.Link href="/">Serviços</Nav.Link>
                    <Nav.Link href="/">Vendas Diretas </Nav.Link>
                </Nav>

                <Button variant="outline-light">Telefones</Button>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;