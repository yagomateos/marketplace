'use server'
import UploadImg from "../../utils/uploadImg"
import { createStoreManagers, deleteMember, getStoremanagers } from "../../middleware/store/storemanagers"

export const uploadImages = async (imgDta) => {

    try {
        const uploadedImage = await UploadImg(imgDta)
        return uploadedImage;
    } catch (error) {
        throw error;
    }
}

export const addStoreManagers = async (userid, storeDta, image) => {
    try {
        const membersUpdated = await createStoreManagers(userid, storeDta, image)
        return membersUpdated;
    } catch (error) {
        throw error;
    }
}

export const getStoremanagersFunc = async (userid) => {
    try {
        const strmanagers = await getStoremanagers(userid)
        return strmanagers;
    } catch (error) {
        throw error
    }
}

export const deleteMemberFunc = async (memberId) => {
    try {
        const memberDeleted = await deleteMember(memberId)
        return memberDeleted
    } catch (error) {
        throw error
    }
}