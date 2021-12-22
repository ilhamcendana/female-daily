import React from 'react';
import styles from '../style.module.scss';

//global utils
import { renderStarsRating } from '../../../utils/utils';

const EditorCard = ({ data }) => {
    return (
        <div className={styles.editorCard}>
            <div className={styles.editorProfile}>
                <div>
                    <img src='https://placeimg.com/640/480/people' alt='editors profile' />
                </div>
                <div>
                    <p>{data.editor.slice(0, 1).toUpperCase()}{data.editor.slice(1, data.editor.length)}</p>
                    <p>{data.role}</p>
                </div>
            </div>

            <div className={styles.productImage}>
                <img src='https://placeimg.com/640/480/nature' alt='product' />
            </div>

            <div className={styles.productRating}>
                <p>{data.product.rating}</p>
                <div>                    
                    {renderStarsRating(Math.round(data.product.rating))}
                </div>
                <p>(7)</p>
            </div>
            <div className={styles.productName}>
                <p>{data.product.name}</p>
                <p>{data.product.description}</p>
            </div>
        </div>
    );
}

export default EditorCard;