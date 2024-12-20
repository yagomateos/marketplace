'use server'
import {addReviews} from '../../middleware/reviews/addReviews'

export const addReviewsFunc = async (reviewTitle, review, starCount, userId, productId)=>{
    try {
        const reviewAdded = await addReviews(reviewTitle, review, starCount, userId, productId)
        return reviewAdded;
    } catch (error) {
        throw error;
    }
}