import React from 'react';
import styles from '../style.module.scss';

//global components
import Button from '../../../components/Button';
import ProductCard from '../../../components/Card/ProductCard';

const sampleProducts = [
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/food'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Phito Pigment Liquid Serum Foundation',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/food'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/food'
    }
]

const BannerPink = () => {
    return (
        <div className={styles.bannerPink}>
            <img alt='girl' className={styles.imgOrnament} src='/images/girl.png' />

            <div className={styles.infoLeft}>
                <h3>Looking for products that are just simply perfect for you?</h3>
                <p>Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
                <Button>See My Matches</Button>
            </div>

            <div className={styles.sampleProduct}>
                {sampleProducts.map((item, i) => <ProductCard key={i} data={item} style={{ marginRight: 28 }} />)}
            </div>
        </div>
    );
}

export default BannerPink;