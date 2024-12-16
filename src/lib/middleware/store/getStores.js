import dbConnection from '../../base/db';

export const getStoresByName = async (storeName) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select s.* , p.* , t.id as t_id , t.* from stores s left join products p on s.id = p.store_id left join testimonials t on p.id = t.product_id where s.store_name='${storeName}'`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no stores found');
        }
    } catch (error) {
        throw error;
    }
}

export const getStoresByUserId = async (userId) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT 
    s.store_name AS store_name, 
    s.id AS s_id, 
    s.logo as s_logo,
    s.delivery_dates,
    p.*, 
    (SELECT COUNT(*) FROM products p2 WHERE p2.store_id = s.id) AS product_count,
    (SELECT COUNT(*) FROM stores s2 WHERE s2.userid = s.userid) AS store_count
FROM stores s
LEFT JOIN products p ON s.id = p.store_id
WHERE s.userid = ${userId};;
`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no stores found');
        }
    } catch (error) {
        throw error;
    }
}


export const getStoresById = async (id) => {
    try {
        const db = await dbConnection();

        // Fetch store details with product count and store count
        const [storeResults] = await db.execute(`
            SELECT 
                s.*,
                p.*, 
                (SELECT COUNT(*) FROM products p2 WHERE p2.store_id = s.id) AS product_count,
                (SELECT COUNT(*) FROM stores s2 WHERE s2.userid = s.userid) AS store_count
            FROM stores s
            LEFT JOIN products p ON s.id = p.store_id
            WHERE s.id = ${id};
        `);

        if (storeResults.length > 0) {
            try {
                // Fetch testimonials
                const [testimonials] = await db.execute(`
                    SELECT t.* , p.* FROM testimonials t LEFT JOIN products p on p.id = t.product_id
                    WHERE t.product_id IN (
                        SELECT id FROM products WHERE store_id = ${id}
                    )
                `);

                // Fetch number of orders
                const [orderCountResult] = await db.execute(`
                    SELECT 
                        COUNT(DISTINCT order_id) AS order_count
                    FROM marketplace.order_items 
                    WHERE product_id IN (
                        SELECT id FROM marketplace.products WHERE store_id = ${id}
                    );
                `);

                await db.end();

                // Combine results
                const response = {
                    store: storeResults,
                    test: testimonials.length > 0 ? testimonials : [],
                    order_count: orderCountResult[0]?.order_count || 0 // Default to 0 if no orders found
                };

                return response;
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error('No stores found');
        }
    } catch (error) {
        throw error;
    }
};


export const getStoresInformation = async (userId) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT * from stores where userid = ${userId};;
`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no stores found');
        }
    } catch (error) {
        throw error;
    }
}

export const setDelDates = async (storeId, value) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`Update marketplace.stores set delivery_dates = '${value}' where id = ${storeId};`);
        await db.end();

        if (results.affectedRows > 0) {
            return true;
        } else {
            throw new Error('no stores found');
        }
    } catch (error) {
        throw error;
    }
}