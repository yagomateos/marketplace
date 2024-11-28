'use server'

import { updateOrder } from '../../middleware/orders/updateOrders'

export const updateOrderFunc = async (what, orderId) => {
    try {
        const orderUpdated = await updateOrder(what, orderId);
        return orderUpdated;
    } catch (error) {
        throw error;
    }
}