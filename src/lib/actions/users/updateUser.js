'use server'
import { updateUser } from '../../middleware/user';

export async function updateUserFunc(userData) {
    console.log(userData.uerId, userData.userInfo)
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
        additional_places: userData.userInfo.additionalPlace?userData.userInfo.additionalPlace:"skipped",
        additional_place_date: userData.userInfo.additionalPlaceTime?userData.userInfo.additionalPlaceTime : '1970-01-01',
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
