import React from 'react';
import styles from '../style.module.scss';
//global utils
import { renderStarsRating } from '../../../utils/utils';


const ProductCard = ({ data, customWidth, style }) => {
    return (
        <div className={styles.productCard} style={{ width: customWidth || 'auto', ...style }}>
            <div className={styles.productImage} style={{ height: customWidth ? 200 - (Math.abs(customWidth - 200)) : 200 }}>
                <img alt='product' src={data.image} />
            </div>
            <p className={styles.idk}>Match Skin Type</p>
            <div className={styles.productRating}>
                <p>{data.rating}</p>
                {renderStarsRating(data.rating)}
                <p style={{ marginLeft: 8 }}>({data.ratingQty})</p>
            </div>
            <div className={styles.productInfo}>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>{data.type}</p>
            </div>
        </div>
    );
}

export default ProductCard;