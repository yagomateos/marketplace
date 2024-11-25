import dbConnection from '../../base/db';

export const deleteFromCart = async (userId , item_id) => {
    try {
        const db = await dbConnection();
        let sql = `DELETE from cart where Id = ${item_id} and user_id = ${userId}`;

        if (item_id == -1) {
            sql = `DELETE from cart where user_id = ${userId}`;
        }

        const [results] = await db.execute(sql);
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