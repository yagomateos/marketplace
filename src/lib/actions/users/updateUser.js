'use server'
import { updateUser, updatePassword, updateEmail, updateCommunication, updatePartial, updateAddress, updateUserNotifications, updateUserEmailVerificationSt, updatePasswordByEmail } from '../../middleware/user';
import UploadImg from '../../utils/uploadImg'

export async function updateUserFunc(userData) {
    const userDta = {
        reason: userData.reason,
        options: userData.options,
        firstName: userData.userInfo.billingFirstName,
        last_name: userData.userInfo.billingSecondName,
        birthday: userData.userInfo.dob,
        address_number: userData.userInfo.addressNu,
        street: userData.userInfo.addressState,
        floor: userData.userInfo.addressFloor,
        city: userData.userInfo.addressCity,
        postal_code: userData.userInfo.postalCode,
        phone_number: userData.userInfo.phoneNumber,
        additional_places: userData.userInfo.additionalPlace ? userData.userInfo.additionalPlace : "skipped",
        additional_place_date: userData.userInfo.additionalPlaceTime ? userData.userInfo.additionalPlaceTime : '1970-01-01',
        bank_name: userData.userInfo.bankName,
        IBAN: userData.userInfo.iban,
        SWIFT: userData.userInfo.swift,
        identity_type: userData.identityInfo.idType,
        identity_url: userData.identityInfo.fileUrl,
        person_type: userData.userInfo.personType,
        id: userData.uerId,
    }

    console.log(userData)
    try {
        const userUpdated = await updateUser(userDta);
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

export const updateUserPartial = async (userData, imgFormDta) => {

    try {
        const imageUploaded = await UploadImg(imgFormDta)
        console.log(imageUploaded)
        if (imageUploaded) {
            userData.identityUrl = imageUploaded;
            try {
                const userUpdated = await updatePartial(userData)
                return userUpdated;
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error('image upload failed')
        }
    } catch (error) {
        throw error;
    }

}


export const updatePasswordFunc = async (userId, password, newPassword) => {
    try {
        const passwordUpdated = await updatePassword(userId, password, newPassword);
        return passwordUpdated;
    } catch (error) {
        throw error;
    }
}

export const updatePasswordByEmailFunc = async (email, password) => {
    try {
        const passwordUpdated = await updatePasswordByEmail(email, password);
        return passwordUpdated;
    } catch (error) {
        throw error;
    }
}


export const updateEmailFunc = async (userId, emailAddress, password) => {
    try {
        const emailUpdated = await updateEmail(userId, emailAddress, password);
        return emailUpdated;
    } catch (error) {
        throw error;
    }
}

export const updateCommunicationFunc = async (userId, mail, phone) => {

    const mailAllowed = mail ? 1 : 0;
    const PhoneAllowed = phone ? 1 : 0;

    try {
        const communicationUpdated = await updateCommunication(userId, mailAllowed, PhoneAllowed);
        return communicationUpdated;
    } catch (error) {
        throw error;
    }
}

export const updateAddressFunc = async (userId, addressNumber, street, addressLine2, city, postalCode, phoneNumber) => {
    try {
        const userUpdated = await (updateAddress(userId, addressNumber, street, addressLine2, city, postalCode, phoneNumber));
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

export const updateUserNotificationsFunc = async (notificationSettings) => {
    try {
        const userUpdated = await updateUserNotifications(notificationSettings.userId, notificationSettings.receiveMessage, notificationSettings.sentMessage, notificationSettings.followMe, notificationSettings.adsexpire, notificationSettings.newsSubs, notificationSettings.feedbackSubs, notificationSettings.cuponsSubs, notificationSettings.forums, notificationSettings.defence, notificationSettings.mySellerActivity, notificationSettings.sellerNews, notificationSettings.storeTips, notificationSettings.patternTips, notificationSettings.sellerPlusNews);
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

export const updateUserEmailVerification = async (userEmail) =>{
    try {
        const userUpdated = await updateUserEmailVerificationSt(userEmail);
        return userUpdated;
    } catch (error) {
        throw error;
    }
}