'use server'

import { searchStore } from '../../middleware/search/searchStore'


export const searchStoreFunc = async (query) => {
    try {
        const products = await searchStore(query);
        return products;
    } catch (error) {
        throw error;
    }
}