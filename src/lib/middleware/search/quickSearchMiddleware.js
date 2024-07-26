import dbConnection from '../../base/db';

export const QuickSearchMiddleware = async (query) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from product_categories where category_name LIKE '%${query}%' `);
        const [prodResult] = await db.execute(`select * from products where name LIKE '%${query}%' `);
        await db.end();

        if (results.length > 0 || prodResult.length>0) {
            return [results , prodResult];
        } else {
            // try products
            throw new Error('no results found');
        }
    } catch (error) {
        throw error;
    }
}