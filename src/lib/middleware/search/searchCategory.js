import dbConnection from '../../base/db';

export const searchCategory = async (query) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from product_categories where category_name Like '%${query}%'`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no Categories found');
        }
    } catch (error) {
        throw error;
    }
}