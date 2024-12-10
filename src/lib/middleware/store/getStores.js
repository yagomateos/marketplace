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