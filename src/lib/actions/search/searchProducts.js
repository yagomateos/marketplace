'use server'

import {getSearchProducts} from '../../middleware/search/getSearchProduct'

export const searchProducts = async (query) => {
    try {
        const products = await getSearchProducts(query);
        return products;
    } catch (error) {
        throw error;
    }
}