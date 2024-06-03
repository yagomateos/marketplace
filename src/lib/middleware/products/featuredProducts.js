import dbConnection from '../../base/db';

export const getFeaturedProducts = async () => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, u.username 
        FROM products p 
        LEFT JOIN product_categories c ON p.category_id = c.id 
        LEFT JOIN users u ON p.user_id = u.id;`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no featured products found');
        }
    } catch (error) {
        throw error;
    }
}