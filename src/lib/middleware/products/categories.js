import dbConnection from '../../base/db';

export const getFeaturedCategories = async (limit) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from product_categories where featured=1 order by id asc limit ${limit}`);
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