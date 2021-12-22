import React from 'react';
import styles from '../style.module.scss';

const ArticleCard = ({data}) => {
    return (
        <div className={styles.articleCard}>
            <div>
                <img alt='article' src={data.image} />
            </div>
            <h3>{data.title}</h3>
            <p>{data.author} | {data.published_at}</p>
        </div>
    );
}

export default ArticleCard;