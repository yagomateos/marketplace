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
    WHERE c.id = ${catID} OR c.parent_category = ${catID}
    ORDER BY p.id ASC;`);
        await db.end();

        if (results.length > 0) {
            return { categgoryBased: true, results: results };
        } else {
            try {
                const db = await dbConnection();
                const [newResults] = await db.execute(`SELECT p.*, c.category_name, s.store_name , s.id as store_id
                FROM products p 
                LEFT JOIN product_categories c ON p.category_id = c.id 
                LEFT JOIN stores s ON p.store_id = s.id
                ORDER BY p.id ASC;`);
                await db.end();

                if (newResults.length > 0) {
                    return { categgoryBased: false, results: newResults }
                } else {
                    throw new Error('no products found');
                }
            } catch (error) {
                throw error;
            }

        }
    } catch (error) {
        throw error;
    }
}

export const getProductImgs = async (prodId)=>{
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT * from product_images where product_id = ${prodId}`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no images found');
        }
    } catch (error) {
        throw error;
    }
}

export const getProductsByUser = async (userId) => {
    try {
        const db = await dbConnection();
        // change this later
        const [results] = await db.execute(`SELECT p.*, c.category_name, s.store_name , s.id as store_id
    FROM products p 
    LEFT JOIN product_categories c ON p.category_id = c.id 
    LEFT JOIN stores s ON p.store_id = s.id 
    WHERE p.user_id = '${userId}' 
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