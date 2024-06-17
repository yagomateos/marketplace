import dbConnection from '../../base/db';

export const getSearchProducts = async (query) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT p.*, c.category_name, u.username 
        FROM products p 
        LEFT JOIN product_categories c ON p.category_id = c.id 
        LEFT JOIN users u ON p.user_id = u.id WHERE p.name LIKE '%${query}%' `);
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