import React from 'react';
import styles from '../style.module.scss';

//global components
import AdsCampaign from '../../../components/AdsCampaign';
import TitleSection from '../../../components/TitleSection';
import Carousel from '../../../components/Caraousel';
import ReviewCard from '../../../components/Card/ReviewCard';
import { useSelector } from 'react-redux';


const LatestReview = () => {

    const data = useSelector(state => state.reducerHomeContent.homeContent[`latest review`]);

    return (
        <div className={styles.latestReview}>
            <div className={styles.reviews}>
                <TitleSection title='Latest Reviews' subtitle='So you can make better purchase decision' showSeeMoreButton />
                <Carousel
                    render={(item, i) => <ReviewCard data={item} key={i} />}
                    data={data ? data : []}
                    howManyItemsEachPage={2}
                    style={{ marginTop: 24 }}
                    indicatorStyle={{ marginTop: 80 }}
                />
            </div>
            <div>
                <AdsCampaign width={300} height={250} label='MR 2' />
            </div>
        </div>
    );
}

export default LatestReview;