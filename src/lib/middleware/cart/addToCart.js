import dbConnection from '../../base/db';

export const addToCart = async (cartInfo) => {
    try {
        const db = await dbConnection();

        // Check if the item already exists in the cart for the user
        const [existingCartItem] = await db.execute(
            `SELECT id, quantity FROM cart WHERE item_id = ? AND user_id = ?`,
            [cartInfo.product_id, cartInfo.user_id]
        );

        if (existingCartItem.length > 0) {
            // If the item exists, update the quantity
            const newQuantity = parseInt(existingCartItem[0].quantity) + parseInt(cartInfo.quantity);

            // Ensure the new quantity doesn't exceed the available quantity in products
            const [availableQuantity] = await db.execute(
                `SELECT quantity FROM products WHERE id = ?`,
                [cartInfo.product_id]
            );

            console.log(availableQuantity[0])
            console.log(newQuantity)

            if (availableQuantity[0].quantity >= newQuantity) {
                const [updateResults] = await db.execute(
                    `UPDATE cart SET quantity = ?, date_time = now() WHERE id = ?`,
                    [newQuantity, existingCartItem[0].id]
                );
                await db.end();

                if (updateResults.affectedRows > 0) {
                    return existingCartItem[0].id;
                } else {
                    throw new Error('Cart item not updated');
                }
            } else {
                throw new Error('Insufficient stock');
            }
        } else {
            // If the item does not exist, insert a new row
            const [results] = await db.execute(
                `INSERT INTO cart (item_id, user_id, quantity, date_time)
                SELECT ?, ?, ?, now()
                WHERE (SELECT quantity FROM products WHERE id = ?) >= ?`,
                [cartInfo.product_id, cartInfo.user_id, cartInfo.quantity, cartInfo.product_id, cartInfo.quantity]
            );
            await db.end();

            if (results.affectedRows > 0) {
                return results.insertId;
            } else {
                throw new Error('Cart not updated');
            }
        }
    } catch (error) {
        throw error;
    }
};
