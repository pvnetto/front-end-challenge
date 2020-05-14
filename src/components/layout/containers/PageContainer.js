import React from 'react';

import style from './PageContainer.module.scss';


const PageContainer = ({ className, children }) => {
    return (
        <div className={`${className ? className : ''} ${style.sectionContainer}`}>
            {children}
        </div>
    );
};

export default PageContainer;