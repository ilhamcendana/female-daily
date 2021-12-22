import React from 'react';
import styles from './style.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

//global components
import Button from '../Button';

const TitleSection = ({ title, subtitle, showSeeMoreButton }) => {
    return (
        <div className={styles.title}>
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            {showSeeMoreButton && <Button variant='ghost' righticon={<IoIosArrowForward />}>See more</Button>}
        </div>
    );
}

export default TitleSection;