'use server'
import { getStoresByName, getStoresByUserId, getStoresInformation } from '../../middleware/store/getStores'

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

export const getStoresInformationFunc = async (userId)=>{
    try {
        const stores = await getStoresInformation(userId)
        return stores;
    } catch (error) {
        throw error
    }
}

