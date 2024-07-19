import dbConnection from '../../base/db'
export const getCart = async (userId) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT c.* , c.quantity as cartQuantity , p.* , s.* FROM cart c left join products p on p.id = c.item_id left join stores s on s.id=p.store_id where c.user_id = ${userId} `);
        await db.end();
        if (results.length > 0) {
            return results
        } else {
            throw new Error('cart empty')
        }
    } catch (error) {
        throw error;
    }
}