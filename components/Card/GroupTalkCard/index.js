import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import styles from '../style.module.scss';

const GroupTalkCard = ({ data }) => {
    return (
        <div className={styles.groupTalkCard}>
            <div>
                <img alt='group talk' src={data.image} />
            </div>
            <div>
                <p>{data.title}</p>
            </div>
            <div>
                <div>
                    <CgProfile size={20} />
                    <AiOutlineUnorderedList size={20} />
                    <BiMessageSquareDetail size={20} />
                </div>
                <p>{data.messages}</p>
            </div>
        </div>
    );
}

export default GroupTalkCard;