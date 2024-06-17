import dbConnection from '../../base/db';

export const QuickSearchMiddleware = async (query) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from product_categories where category_name LIKE '%${query}%' `);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no featured categories found');
        }
    } catch (error) {
        throw error;
    }
}