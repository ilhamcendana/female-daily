import { AiFillStar } from 'react-icons/ai';
import color_palette from '../styles/color_palette.module.scss';

export const renderStarsRating = (rating) => {
    let bucket = [1, 2, 3, 4, 5];
    return bucket.map(star => <AiFillStar color={star <= rating ? color_palette.primary : color_palette.milkshakeOreo} key={star} />)
}