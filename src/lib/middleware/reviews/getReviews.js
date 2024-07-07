import dbConnection from '../../base/db';

export const getReviews = async (product_id) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT * from testimonials WHERE product_id = ${product_id} `);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no products found');
        }
    } catch (error) {
        throw error;
    }
}