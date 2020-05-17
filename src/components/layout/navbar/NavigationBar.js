import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, NavDropdown } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import style from './NavigationBar.module.scss';
import PhoneDropdown from '../../misc/dropdown/phone/PhoneDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = ({ onExpand, expanded }) => {

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

            brandLogo: file(
                relativePath: { eq: "logos/logo_brand_toyota.png" }
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            allModel {
                edges {
                    node {
                        name
                        slug
                        profileImg {
                            childImageSharp {
                                fixed(width: 60) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const NavTitle = (title) => (
        <div className={style.dropdownTitle}>
            <p className="m-0">{title}</p>
            <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
        </div>
    );

    const models = data.allModel.edges.map(model => model.node);

    return (
        <Navbar id="navbar" variant="primary" className={`${style.navbar} position-absolute d-md-flex d-none flex-column p-0`}>
            <Container className={`${style.navbarContainer} d-flex align-items-center justify-content-between py-4 px-0 h-100`}>

                <Navbar.Brand href="/">
                    <Img className="d-flex" fixed={data.groupLogo.childImageSharp.fixed} />
                </Navbar.Brand>


                <Nav className="d-flex align-items-center">
                    <NavDropdown className={style.modelDropdown} title={NavTitle(" Nossos Veículos ")} id="models-dropdown">
                        <div className={style.modelDropdownScroll}>
                            {models.map((model, idx) => (
                                <NavDropdown.Item key={idx} href={model.slug}>
                                    <p className="m-0 mr-3">{model.name}</p>
                                    <Img fixed={model.profileImg.childImageSharp.fixed} />
                                </NavDropdown.Item>
                            ))}
                        </div>
                    </NavDropdown>

                    <Nav.Link href="/">Serviços</Nav.Link>
                    <NavDropdown className={style.navDropdown} title={NavTitle(" Vendas Diretas ")} id="direct-sales-dropdown">
                        <NavDropdown.Item href="/">Empresas</NavDropdown.Item>
                        <NavDropdown.Item href="/">Frotistas</NavDropdown.Item>
                        <NavDropdown.Item href="/">Governo</NavDropdown.Item>
                        <NavDropdown.Item href="/">PCD</NavDropdown.Item>
                        <NavDropdown.Item href="/">Produtor Rural</NavDropdown.Item>
                        <NavDropdown.Item href="/">Taxista</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <PhoneDropdown variant="outline-light">Telefones</PhoneDropdown>

                <Navbar.Brand href="/">
                    <Img className="d-flex" fixed={data.brandLogo.childImageSharp.fixed} />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;