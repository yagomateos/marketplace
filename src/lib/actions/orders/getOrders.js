'use server'

import { getOrder , getOrderStatus } from '../../middleware/orders/getOrder'

export const getOrdersFunc = async (userId) => {
    try {
        const orderCreated = await getOrder(userId);
        return orderCreated;
    } catch (error) {
        throw error;
    }
}

export const getOrderStat = async(orderId) =>{
    try {
        const orderDta = await getOrderStatus(orderId)
        return orderDta;
    } catch (error) {
        throw error;
    }
}