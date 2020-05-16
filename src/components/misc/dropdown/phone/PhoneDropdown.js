import React, { useState, Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import { faPhoneAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';

import { phoneFormatter } from '../../../helpers/formatters';

import style from './PhoneDropdown.module.scss';


const UnitPhone = ({ name, phones, divider }) => {

    const [isOpen, setOpen] = useState(false);

    const isDropdownActive = () => isOpen ? style.active : '';

    return (
        <>
            <div className={`${style.item} ${isDropdownActive()}`} onClick={() => setOpen(!isOpen)}>
                <p><strong>{name}</strong></p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={`${style.itemDropdown} ${isDropdownActive()} bg-light`}>
                {phones.map((phone, idx) => {
                    const phoneNumber = phoneFormatter(phone.number);
                    const phoneHasDivider = idx !== phones.length - 1;
                    return (
                        <Fragment key={idx}>
                            <a href="">
                                <p><strong>{phone.title}: </strong>{phoneNumber}</p> <FontAwesomeIcon icon={faPhoneAlt} />
                            </a>
                            {phoneHasDivider && <hr />}
                        </Fragment>
                    )
                })}
            </div>

            {divider && <Dropdown.Divider className="m-0" />}
        </>
    );
}

const PhoneDropdown = ({ alignRight, variant }) => {
    const data = useStaticQuery(graphql`
        query UnitsData {
            allUnit {
                edges {
                    node {
                        name
                        phones {
                            number
                            title
                        }
                    }
                }
            }
        }
    `);

    const units = data.allUnit.edges.map(item => item.node);
    const [expanded, setExpanded] = useState(false);

    return (
        <Dropdown onToggle={setExpanded} className={`${style.dropdown}`}>
            <Dropdown.Toggle className={`${style.dropdownToggler} mr-3`} variant={variant} id="phone-dropdown">
                <strong>
                    <FontAwesomeIcon style={{ maxWidth: '30px' }} icon={faPhoneAlt} />
                    <span className="mx-2">Telefones</span>
                    <FontAwesomeIcon style={{ maxWidth: '7px' }} icon={faChevronDown} />
                </strong>
            </Dropdown.Toggle>

            <Dropdown.Menu alignRight={alignRight} className={`${style.dropdownMenu} position-absolute p-0`}>
                {units.map((unit, idx) => {
                    const hasDivider = idx !== units.length - 1;
                    return <UnitPhone key={idx} {...unit} divider={hasDivider} />
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

PhoneDropdown.defaultProps = {
    variant: 'outline-dark',
    alignRight: true
}

export default PhoneDropdown;