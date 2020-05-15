import React from 'react';

import style from './Section.module.scss';

const Section = ({ className = '', children }) => {
    return (
        <section className={`${style.section} ${className}`}>
            {children}
        </section>
    );
};

export default Section;