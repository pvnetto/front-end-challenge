import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import style from './SocialIcons.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const iconDict = {
    instagram: {
        icon: faInstagram,
        hoverColor: '#DD336F'
    },
    twitter: {
        icon: faTwitter,
        hoverColor: '#1DA1F2'
    },
    facebook: {
        icon: faFacebookF,
        hoverColor: '#4367B2'
    },
    linkedin: {
        icon: faLinkedin,
        hoverColor: '#0277B5'
    },
    youtube: {
        icon: faYoutube,
        hoverColor: '#FF0402'
    },
}

const SocialIcons = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        name
                        url
                    }
                }
            }
        }
    `);

    const socials = data.site.siteMetadata.social;

    return (
        <div className={style.socialContainer}>
            {socials.map((socialItem, idx) => {
                const socialIcon = iconDict[socialItem.name];
                if (socialIcon) return (
                    <a key={idx} style={{ backgroundColor: socialIcon.hoverColor }} className={style.socialIcon} href={socialItem.url}>
                        <FontAwesomeIcon className="my-auto" icon={socialIcon.icon} />
                    </a>
                );
                else return null;
            })}
        </div>
    );
};

export default SocialIcons;