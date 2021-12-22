import React from 'react';
import styles from '../style.module.scss';
//global components
import TitleSection from '../../../components/TitleSection';


const LatestVideo = () => {
    return (
        <div className={styles.latestVideos}>
            <TitleSection title='Latest Videos' subtitle='Watch and learn, ladies' showSeeMoreButton />

            <div className={styles.frameContainer}>
                <div className={styles.frame1}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LUdS0VFOJc" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className={styles.frame2}>
                    <iframe width="100%" height="240px" src="https://www.youtube.com/embed/ScYWD7QcwCw" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="100%" height="240px" src="https://www.youtube.com/embed/FvbNZd-IxK4" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default LatestVideo;