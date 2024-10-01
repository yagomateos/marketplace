'use server'
import { getStoresByName, getStoresByUserId } from '../../middleware/store/getStores'

export const getStrByName = async (storeName) => {
    try {
        const stores = await getStoresByName(storeName)
        console.log(stores)
        return stores;
    } catch (error) {
        throw error
    }
}

export const getStrByUserId = async (userId) => {
    try {
        const stores = await getStoresByUserId(userId)
        console.log(stores)
        return stores;
    } catch (error) {
        throw error
    }
}

