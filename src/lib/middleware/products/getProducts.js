import dbConnection from '../../base/db';

export const getProducts = async (category, label, limit) => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name,  s.store_name , s.id as store_id 
        FROM products p 
        LEFT JOIN product_categories c ON p.category_id = c.id 
        LEFT JOIN stores s ON p.store_id = s.id ORDER BY p.id ASC limit ${limit};`);
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

export const getProductsByIds = async (productIds) => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, s.store_name , s.id as store_id
    FROM products p 
    LEFT JOIN product_categories c ON p.category_id = c.id 
    LEFT JOIN stores s ON p.store_id = s.id 
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

export const getProductsByCategory = async (catID) => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, s.store_name , s.id as store_id
    FROM products p 
    LEFT JOIN product_categories c ON p.category_id = c.id 
    LEFT JOIN stores s ON p.store_id = s.id
    WHERE c.id = ${catID}
    ORDER BY p.id ASC;`);
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