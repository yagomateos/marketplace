import dbConnection from '../../base/db';

export const createOrder = async (userId, cartItems, singleCheckout = false, qty = 0) => {
    let db;

    try {
        db = await dbConnection();
        const placeholders = cartItems.map(item => item.id).map(() => '?').join(',');

        // Begin transaction
        await db.query('BEGIN');

        // Insert into orders table
        const orderInsertQuery = `
            INSERT INTO marketplace.orders (user_id, date_time)
            VALUES (?, NOW())
        `;
        const [orderResult] = await db.execute(orderInsertQuery, [userId]);
        console.log('Order Insert Result:', orderResult);

        const orderId = orderResult.insertId;
        if (!orderId) {
            throw new Error('Failed to insert order');
        }
        console.log('Order ID:', orderId);

        // Select items from cart
        let cartItemsResult = []
        if (!singleCheckout) {
            const cartSelectQuery = `
            SELECT * FROM marketplace.cart
            WHERE user_id = ? AND id IN (${placeholders})
        `;
            const [cartItemsRst] = await db.query(cartSelectQuery, [userId, ...cartItems]);
            cartItemsResult = cartItemsRst

        } else {
            cartItemsResult = [{ item_id: cartItems[0], quantity: qty }]
        }


        if (!cartItemsResult.length) {
            throw new Error('No matching cart items found');
        }
        console.log('Cart Items:', cartItemsResult);

        // Insert into order_items
        const orderItemsInsertQuery = `
            INSERT INTO marketplace.order_items (order_id, product_id, qty)
            VALUES (?, ?, ?)
        `;
        for (const item of cartItemsResult) {
            await db.query(orderItemsInsertQuery, [orderId, item.item_id, item.quantity]);
        }

        if (!singleCheckout) {
            // Delete the cart items
            const deleteCartItemsQuery = `
            DELETE FROM marketplace.cart
            WHERE user_id = ? AND id IN (${placeholders})
        `;
            await db.query(deleteCartItemsQuery, [userId, ...cartItems]);
            console.log('Deleted cart items for user:', userId);
        }
        // Commit transaction
        await db.query('COMMIT');

        return { success: true, orderId };
    } catch (error) {
        if (db) {
            await db.query('ROLLBACK');
        }
        console.error('Error:', error.message);
        throw error;
    }
};
