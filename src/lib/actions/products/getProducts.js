'use server'

import { getProducts , getProductsByIds } from '../../middleware/products/getProducts.js';


export const gtProducts = async (category, label, limit) => {
    try {
        const products = await getProducts(category, label, limit);
        return products;
    } catch (error) {
        throw error;
    }
}

export const gtProductsByIds = async (productIds = null) => {
    try {
        const products = await getProductsByIds(productIds);
        return products;
    } catch (error) {
        throw error;
    } 
}


