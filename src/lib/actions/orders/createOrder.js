'use server'

import { createOrder } from '../../middleware/orders/createOrder'

export const createOrderFunc = async (userId, cartItems) => {
    try {
        const orderCreated = await createOrder(userId, cartItems);
        return orderCreated;
    } catch (error) {
        throw error;
    }
}