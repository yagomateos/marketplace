import dbConnection from '../../base/db';

export const getProducts = async (category , label, limit) => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, u.username 
        FROM products p 
        LEFT JOIN product_categories c ON p.category_id = c.id 
        LEFT JOIN users u ON p.user_id = u.id ORDER BY p.id ASC limit ${limit};`);
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

export const getProductsByIds = async (productIds)=>{
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, u.username 
    FROM products p 
    LEFT JOIN product_categories c ON p.category_id = c.id 
    LEFT JOIN users u ON p.user_id = u.id 
    WHERE p.id IN (${productIds}) 
    ORDER BY p.id ASC;`);
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