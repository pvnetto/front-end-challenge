import React from 'react';
import Img from 'gatsby-image';

import style from './BackgroundImage.module.scss';

const BackgroundImage = ({ fluid, className = '' }) => {
    return (
        <Img className={`${style.bg} ${className} position-absolute`} fluid={fluid} />
    );
};

export default BackgroundImage;