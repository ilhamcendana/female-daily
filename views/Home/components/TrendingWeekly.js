import React from 'react';
import styles from '../style.module.scss';

//global components
import Carousel from '../../../components/Caraousel';
import ProductCard from '../../../components/Card/ProductCard';
import TitleSection from '../../../components/TitleSection';

const data = [
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
    },
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
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Phito Pigment Liquid Serum Foundation',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Phito Pigment Liquid Serum Foundation',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    },
    {
        name: 'VAL BY VALERIE THOMAS',
        description: 'Pure Pressed Blush',
        rating: 4.9,
        ratingQty: 7,
        type: 'Neutral Rose',
        image: 'https://placeimg.com/640/480/tech'
    }
]

const TrendingWeekly = () => {
    return (
        <div className={styles.trendingWeekly}>
            <TitleSection title='Trending This Week' subtitle='See our weekly most reviewed products' />

            <Carousel
                data={data}
                howManyItemsEachPage={6}
                render={(item, i) => <ProductCard customWidth={160} data={item} key={i} />}
                style={{ marginTop: 40 }}
                indicatorStyle={{ marginTop: 40 }}
            />
        </div>
    );
}

export default TrendingWeekly;