import dbConnection from '../../base/db';

export const updateFromCart = async (item_id, newQty) => {
    try {
        const db = await dbConnection();

        // Check the current quantity in the product table
        const [productResults] = await db.execute(`SELECT quantity FROM products WHERE id = ?`, [item_id]);

        if (productResults.length === 0) {
            throw new Error('Item not found in the product table');
        }

        const productQuantity = productResults[0].quantity;

        console.log(productQuantity)
        console.log(newQty)

        if (productQuantity >= newQty) {
            // Update the quantity for the given item_id in the cart table
            const [cartResults] = await db.execute(`UPDATE cart SET quantity = ? WHERE item_id = ?`, [newQty, item_id]);

            await db.end();

            if (cartResults.affectedRows > 0) {
                return true;
            } else {
                throw new Error('Item not found in the cart');
            }
        } else {
            await db.end();
            throw new Error('Not enough quantity in the product table');
        }
    } catch (error) {
        throw error;
    }
}
