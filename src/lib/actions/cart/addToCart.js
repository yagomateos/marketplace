'use server'

import {addToCart} from '../../middleware/cart/addToCart'

export const addToCartFunc = async (cartInfo) => {
    try {
        const cartUpdated = await addToCart(cartInfo)
        return cartUpdated;
    } catch (error) {
        throw error;
    }
}
