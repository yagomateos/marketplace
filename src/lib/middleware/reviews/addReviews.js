import dbConnection from '../../base/db';

export const addReviews = async (reviewTitle, review, starCount, userId, productId) => {
    try {
        const db = await dbConnection();
        const [reviewAdded] = await db.execute(`INSERT INTO testimonials (product_id, user_name, title, review, star, user_image, created_at) VALUES ('${productId}', (select username from users where id=${userId}), '${reviewTitle}', '${review}', '${starCount}', (select identity_url from users where id=${userId}) , now());`);
        if (reviewAdded.affectedRows > 0) {
            return reviewAdded.insertId;
        }else{
            throw new error('not_added')
        }
    } catch (error) {
        throw error;
    }
}