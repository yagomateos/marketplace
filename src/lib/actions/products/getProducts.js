'use server'

import { getProducts } from '../../middleware/products/getProducts.js';


export const gtProducts = async (category, label, limit) => {
    try {
        const products = await getProducts(category, label, limit);
        return products;
    } catch (error) {
        throw error;
    }
}


