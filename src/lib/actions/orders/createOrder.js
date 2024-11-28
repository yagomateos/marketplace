'use server'

import { createOrder } from '../../middleware/orders/createOrder'

export const createOrderFunc = async (userId, cartItems , singleCheckout , qty) => {
    try {
        const orderCreated = await createOrder(userId, cartItems , singleCheckout , qty);
        return orderCreated;
    } catch (error) {
        throw error;
    }
}