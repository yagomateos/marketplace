'use server'

import { createStore } from '../../middleware/store/CreateStore'

export const createStr = async (storeDta) => {
    console.log(storeDta)
    const storeData = {
        userId: storeDta.userId,
        storeName: storeDta.storeName,
        street: storeDta.billingInfo.billingAddStreet,
        floor: storeDta.billingInfo.billingFloor,
        city: storeDta.billingInfo.billingCity,
        postal: storeDta.billingInfo.billingPostal,
        phone: storeDta.billingInfo.billingPhone
    }

    try {
        const storeCreated = await createStore(storeData)
        console.log('hgutta')
        console.log(storeCreated)
        console.log(storeCreated.insertId)
        const storeId = storeCreated.insertId;
        return storeId;
    } catch (error) {
        throw error;
    }


}
