'use server'
import { getStoresByName } from '../../middleware/store/getStores'

export const getStrByName = async (storeName) => {
    try {
        const stores = await getStoresByName(storeName)
        console.log(stores)
        return stores;
    } catch (error) {
        throw error
    }
}