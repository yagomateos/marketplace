import dbConnection from '../../base/db';

export const deleteFromCart = async (item_id)=>{
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`DELETE from cart where Id = ${item_id}`);
        await db.end();
        if (results.affectedRows > 0) {
            return true
        } else {
            throw new Error('cant find the item')
        }
    } catch (error) {
        throw error;
    }
}