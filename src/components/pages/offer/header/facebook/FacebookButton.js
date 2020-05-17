import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import style from './FacebookButton.module.scss';

const FacebookButton = ({ title, value, className = '' }) => {
    return (
        <div className={`${className} d-flex align-items-center`}>
            <Button className={style.facebookBtn} variant="facebook"><FontAwesomeIcon icon={faFacebookSquare} /> {title}</Button>
            <div className={`${style.count} scrolloff`}>{value}</div>
        </div>
    );
};

export default FacebookButton;