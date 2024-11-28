import dbConnection from '../../base/db';

export const updateOrder = async (what, orderId) => {

    try {
        const db = await dbConnection();
        if (what == 'status') {
            const [results] = await db.execute(`update marketplace.orders set status = 'completed' where id = ${orderId}`);
            await db.end();
            if (results.affectedRows && results.affectedRows > 0) {
                return true
            } else {
                throw new Error('something went wrong');
            }
        }

    } catch (error) {

        throw error;
    }
};
