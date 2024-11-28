import dbConnection from '../../base/db'
export const getCart = async (userId , itemId=null) => {
    try {
        const db = await dbConnection();
        let sql = `SELECT c.* , c.quantity as cartQuantity , p.* , s.* FROM cart c left join products p on p.id = c.item_id left join stores s on s.id=p.store_id where c.user_id = ${userId} `

        if(itemId!=null){
            sql = `SELECT c.* , c.quantity as cartQuantity , p.* , s.* FROM cart c left join products p on p.id = c.item_id left join stores s on s.id=p.store_id where c.user_id = ${userId} and c.item_id = ${itemId} `
        }

        const [results] = await db.execute(sql);
        await db.end();
        if (results.length > 0) {
            return results
        } else {
            // throw new Error('cart empty')
        }
    } catch (error) {
        throw error;
    }
}