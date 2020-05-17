import React, { useState } from 'react';
import Youtube from 'react-youtube';

import style from './BackgroundVideo.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from './BackgroundImage';

const BackgroundVideo = ({ videoURL }) => {

    const data = useStaticQuery(graphql`
        query {
            videoBg: file(
                relativePath: { eq: "bg_cover.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const [playerInstance, setPlayerInstance] = useState(null);
    const [isPlaying, setPlaying] = useState(false);

    let paramString = videoURL.substring(videoURL.indexOf('?'), videoURL.length).replace('?', '');
    let paramDict = paramString.split('&').reduce((acc, nextVal) => {
        const [name, value] = nextVal.split('=');
        acc[name] = value;
        return acc;
    }, {});

    return (
        <div className={`${style.container} d-md-flex d-none`}>
            <Youtube className={style.video}
                videoId={paramDict.v}
                onReady={(e) => setPlayerInstance(e.target)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                onEnd={() => setPlaying(false)}
                id={`bg-video`}
                opts={{
                    width: '100%', height: '100%', playerVars: {
                        autoplay: 1,
                        autohide: 1,
                        controls: 0,
                        mute: 1,
                        loop: true,
                        playlist: paramDict.v,
                    }
                }} />
            <div className={`${style.overlay} ${isPlaying ? style.hide : ''}`}></div>
            {playerInstance ? null : <BackgroundImage fluid={data.videoBg.childImageSharp.fluid} />}
        </div>
    );
}

export default BackgroundVideo