'use server'

import {getCart} from '../../middleware/cart/getCart'

export const getCartFunc = async (userId) => {
    try {
        const cartInfo = await getCart(userId)
        return cartInfo;
    } catch (error) {
        throw error;
    }
}
