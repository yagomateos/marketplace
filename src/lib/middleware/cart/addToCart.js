import dbConnection from '../../base/db'
export const addToCart = async (cartInfo) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`INSERT INTO cart (item_id, user_id, quantity, date_time)
SELECT '${cartInfo.product_id}', '${cartInfo.user_id}', '${cartInfo.quantity}', now()
WHERE (SELECT quantity FROM products WHERE id = '${cartInfo.product_id}') >= (
    SELECT IFNULL(SUM(quantity), 0) + ${cartInfo.quantity}
    FROM cart
    WHERE item_id = '${cartInfo.product_id}'
);`);
        await db.end();
        if (results.affectedRows > 0) {
            return results.insertId;
        } else {
            throw new Error('cart not updated')
        }
    } catch (error) {
        throw error;
    }
}