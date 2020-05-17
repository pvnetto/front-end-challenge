import React from 'react';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import style from './ModelsCarousel.module.scss';

const ModelItem = ({ name, slug, profileImg, maxItems }) => (
    <Link to={slug} className={style.carouselItem} style={{ width: `${Math.round((1.0 / maxItems) * 100)}%` }}>
        <Img className="w-100" fluid={profileImg.childImageSharp.fluid} />
        <h5>{name}</h5>
    </Link>
);

const ModelsCarousel = ({ models, modelsPerItem = 5 }) => {

    const pages = Math.ceil(models.length / modelsPerItem);

    const isInPage = (itemIdx, pageCount) => {
        const pageStart = pageCount * modelsPerItem;
        const pageEnd = (pageCount + 1) * modelsPerItem;

        return itemIdx >= pageStart && itemIdx < pageEnd;
    };
    const range = n => [...Array(n).keys()];

    return (
        <Carousel fade className={style.carousel}
            nextIcon={
                <FontAwesomeIcon icon={faChevronRight} />
            }
            prevIcon={
                <FontAwesomeIcon icon={faChevronLeft} />
            }>
            {range(pages).map((pageCount) => (
                <Carousel.Item key={pageCount} className={`${style.wrapper} w-100 d-flex flex-row align-items-center justify-content-center bg-light`}>
                    {models.map((model, idx) => isInPage(idx, pageCount) ? <ModelItem key={idx} {...model} maxItems={modelsPerItem} /> : null)}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ModelsCarousel;