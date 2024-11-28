'use server'

import {getCart} from '../../middleware/cart/getCart'

export const getCartFunc = async (userId , itemId=null) => {
    try {
        const cartInfo = await getCart(userId , itemId)
        return cartInfo;
    } catch (error) {
        throw error;
    }
}
