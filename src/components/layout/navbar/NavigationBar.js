import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, NavDropdown } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import style from './NavigationBar.module.scss';
import PhoneDropdown from '../../misc/dropdown/phone/PhoneDropdown';

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
        <Navbar id="navbar" className={`${style.navbar} d-md-flex d-none flex-column p-0`} variant="light">
            <Container className={`d-flex align-items-center justify-content-between py-4 px-0 h-100`}>

                <Navbar.Brand style={{ width: 150, height: 30, background: 'red' }} href="/">
                    {/* <Img className={style.navbarLogo} fluid={data.autoforceLogo.childImageSharp.fluid} /> */}
                </Navbar.Brand>


                <Nav className="d-flex align-items-center">
                    <NavDropdown title="Nossos Veículos" id="services-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/">Serviços</Nav.Link>
                    <NavDropdown title="Vendas Diretas" id="direct-sales-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <PhoneDropdown variant="outline-dark">Telefones</PhoneDropdown>

                <Navbar.Brand style={{ width: 150, height: 30, background: 'red' }} href="/">
                    {/* <Img className={style.navbarLogo} fluid={data.autoforceLogo.childImageSharp.fluid} /> */}
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;