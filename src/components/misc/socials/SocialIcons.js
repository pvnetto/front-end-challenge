import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import style from './SocialIcons.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const iconDict = {
    instagram: {
        icon: faInstagram,
        iconClass: 'fa-instagram'
    },
    twitter: {
        icon: faTwitter,
        iconClass: 'fa-twitter'
    },
    facebook: {
        icon: faFacebookF,
        iconClass: 'fa-facebook'
    },
    linkedin: {
        icon: faLinkedin,
        iconClass: 'fa-linkedin'
    },
    youtube: {
        icon: faYoutube,
        iconClass: 'fa-youtube-play'
    },
}

const SocialIcons = ({ className = '' }) => {
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
        <div className={`${className} ${style.socialContainer}`}>
            {socials.map((socialItem, idx) => {
                const socialIcon = iconDict[socialItem.name];
                if (socialIcon) return (
                    <a key={idx} className={`${style.socialIcon} ${socialIcon.iconClass}`} href={socialItem.url}>
                        <FontAwesomeIcon className="my-auto" icon={socialIcon.icon} />
                    </a>
                );
                else return null;
            })}
        </div>
    );
};

export default SocialIcons;