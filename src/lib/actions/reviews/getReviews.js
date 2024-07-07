'use server'

import { getReviews } from '../../middleware/reviews/getReviews'


export const getReviewsFunc = async (product_id) => {
    try {
        const reviews = await getReviews(product_id);
        return reviews;
    } catch (error) {
        throw error;
    }
}