import React from 'react';
import styles from '../style.module.scss';

//global utils
import { renderStarsRating } from '../../../utils/utils';


const ReviewCard = ({ data }) => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.topSection}>
                <div>
                    <img alt='product' src={data.product.image} />
                </div>
                <div>
                    <p>{data.product.name}</p>
                    <p>{data.product.desc}</p>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div>
                    <div>
                        {renderStarsRating(data.star)}
                    </div>
                    <p>2 hours ago</p>
                </div>
                <div>
                    <p>{data.comment}... <span>Read More</span></p>
                </div>
            </div>
            <div className={styles.author}>
                <div>
                    <img alt='author' src='https://placeimg.com/640/480/people' />
                </div>
                <p>{data.user}</p>
                <p>{data.profile[1]}, {data.profile[3]}</p>
            </div>
        </div>
    );
}

export default ReviewCard;