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