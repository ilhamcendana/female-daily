import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from './style.module.scss';

//global components
import Button from '../Button';

const Carousel = ({ render, data, howManyItemsEachPage, style, indicatorStyle }) => {
    const [currentIndexCarousel, currentIndexCarouselSet] = useState(0);
    const getCurrent = currentIndexCarousel === 0 ? currentIndexCarousel : currentIndexCarousel + currentIndexCarousel;
    const getDotted = Math.round(data.length / howManyItemsEachPage);

    const countDots = () => {
        let arrDots = [];
        for (let i = 1; i <= getDotted; i++) {
            arrDots.push(i)
        }
        return arrDots;
    }

    return (
        <div style={{ ...style }} className={styles.caraousel}>
            <div className={styles.articles}>
                {data.slice(getCurrent, howManyItemsEachPage + getCurrent).map((arg, index) => render && render(arg, index))}
            </div>

            <div style={{ ...indicatorStyle }} className={styles.navContainer}>
                <Button
                    onClick={() => currentIndexCarouselSet(prev => prev <= 0 ? (getDotted - 1) : prev - 1)}
                    variant='ghost'
                    lefticon={<IoIosArrowBack size={20} />}
                />
                <div className={styles.dotContainer}>
                    {countDots().map((item, i) => <div key={i} className={`${styles.dot} ${i === currentIndexCarousel ? styles.dotActive : styles.dotUnactive}`} />)}
                </div>
                <Button
                    onClick={() => currentIndexCarouselSet(prev => prev >= getDotted - 1 ? 0 : prev + 1)}
                    righticon={<IoIosArrowForward size={20} />}
                    variant='ghost' />

            </div>
        </div>
    );
}

export default Carousel;