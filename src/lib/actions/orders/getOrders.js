'use server'

import { getOrder } from '../../middleware/orders/getOrder'

export const getOrdersFunc = async (userId) => {
    try {
        const orderCreated = await getOrder(userId);
        return orderCreated;
    } catch (error) {
        throw error;
    }
}