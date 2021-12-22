import React from 'react';
import styles from '../style.module.scss';
import { useSelector } from 'react-redux';

//global components
import ArticleCard from '../../../components/Card/ArticleCard';
import TitleSection from '../../../components/TitleSection';


const LatestArticle = () => {

    const data = useSelector(state => state.reducerHomeContent.homeContent[`latest articles`]);

    return (
        <div className={styles.latestArticle}>
            <TitleSection
                title='Latest Article'
                subtitle='So you can make better purchase decision'
                showSeeMoreButton />

            <div className={styles.articlesContainer}>
                {data?.map((item, i) => <ArticleCard data={item} key={i} />)}
            </div>
        </div>
    );
}

export default LatestArticle;