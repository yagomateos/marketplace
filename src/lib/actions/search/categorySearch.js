'use server'

import { searchCategory } from '../../middleware/search/searchCategory'


export const categorySearchFunc = async (query) => {
    try {
        const products = await searchCategory(query);
        return products;
    } catch (error) {
        throw error;
    }
}