import React from 'react';
import Img from 'gatsby-image';

import cssStyle from './BackgroundImage.module.scss';

const BackgroundImage = ({ fluid, className = '', style = {} }) => {
    return (
        <Img className={`${cssStyle.bg} position-absolute`} style={style} fluid={fluid} />
    );
};

export default BackgroundImage;