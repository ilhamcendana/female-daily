import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { setHomeContent } from '../../store/actions';

//local components
import EditorChoice from './components/EditorsChoice';
import BannerPink from './components/BannerPink';
import LatestArticle from './components/LatestArticle';
import AdsCampaign from '../../components/AdsCampaign';
import LatestReview from './components/LatestReview';
import PopularGroups from './components/PopularGroups';
import LatestVideo from './components/LatestVideo';
import TrendingWeekly from './components/TrendingWeekly';
import TopBrands from './components/TopBrands';



const Home = ({ data }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHomeContent(data))
    }, [])

    return (
        <div className={styles.home}>
            <AdsCampaign width={970} height={50} label='Top Frame' style={{ marginBottom: 24 }} />
            <AdsCampaign width={970} height={250} label='Billboard' />

            <EditorChoice />
            <BannerPink />
            <AdsCampaign width={970} height={250} label='Internal Campaign Only' style={{ margin: '40px auto' }} />
            <LatestArticle />
            <LatestReview />
            <PopularGroups />
            <LatestVideo />
            <TrendingWeekly />
            <TopBrands />
        </div>
    );
}

export default Home;