import React from 'react';
import styles from '../style.module.scss';

//global components
import TitleSection from '../../../components/TitleSection';

const TopBrands = () => {
    return (
        <div className={styles.topBrands}>
            <TitleSection title='Top Brands' subtitle='We all know and love' showSeeMoreButton />

            <div className={styles.brandsContainer}>
                {[1, 2, 3, 4, 5, 6].map((item) => <div key={item}><img alt='brand' src='/images/nivea.png' /></div>)}
            </div>

            <div className={styles.text}>
                <h3>Female Daily - Find everything you want to know about beauty on Female Daily</h3>
                <p>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!
                    <br /> We are here to be your friendly solution to all things beauty, inside and out!</p>
            </div>
        </div>
    );
}

export default TopBrands;