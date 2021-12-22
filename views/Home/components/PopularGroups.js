import React from 'react';
import styles from '../style.module.scss';

//global components
import TitleSection from '../../../components/TitleSection';
import GroupTalkCard from '../../../components/Card/GroupTalkCard';


const popularGroupsData = [
    {
        image: 'https://placeimg.com/640/480/people',
        title: 'Embrace the Curl',
        messages: 'May our curls pop and never stop',
    },
    {
        image: 'https://placeimg.com/640/480/people',
        title: 'Embrace the Curl',
        messages: 'May our curls pop and never stop',
    },
    {
        image: 'https://placeimg.com/640/480/people',
        title: 'Embrace the Curl',
        messages: 'May our curls pop and never stop',
    },
    {
        image: 'https://placeimg.com/640/480/people',
        title: 'Embrace the Curl',
        messages: 'May our curls pop and never stop',
    }
]

const PopularGroups = () => {
    return (
        <div className={styles.popularGroups}>
            <TitleSection title='Popular Groups' subtitle='Where the beauty TALK are' showSeeMoreButton />

            <div className={styles.groupsContainer}>
                {popularGroupsData.map((item, i) => <GroupTalkCard key={i} data={item} />)}
            </div>
        </div>
    );
}

export default PopularGroups;