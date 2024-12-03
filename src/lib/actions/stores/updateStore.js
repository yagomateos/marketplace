'use server'

import { updateStoreHistory, updateStoreInfo } from "../../middleware/store/updateStore"
import { UploadMultipleImgs } from "../../utils/uploadImg"

export async function updateImagesFunc(images) {
    try {
        const uploadedImages = await UploadMultipleImgs(images)
        // const updated = await updateProduct(productData);
        return uploadedImages;
    } catch (error) {
        throw error;

    }
}

export const updateStoreInfoFunc = async (userId, storedata) => {

    try {
        const userInfoUpdated = await updateStoreInfo(userId, storedata)
        return userInfoUpdated;
    } catch (error) {
        throw error
    }
}

export const updateStoreHistoryFunc = async (userId, dta) => {
    try {
        const storeHistryUpdated = await updateStoreHistory(userId, dta)
        return storeHistryUpdated;
    } catch (error) {
        throw error
    }
}