'use server'

import {getUserById , getUserByEmail} from '../../middleware/user'

export const GetUserInfo = async (userId)=>{
    try {
        const userInfo = getUserById(userId)
        if(userInfo){
            console.log(userInfo)
           return userInfo;
        }else{
            throw new Error('no user found')
        }
    } catch (error) {
        throw error;
    }
}

export const getUserInfoByEmail = async (email)=>{
    try {
        const userInfo = getUserByEmail(email)
        if(userInfo){
            console.log(userInfo)
           return userInfo;
        }else{
            throw new Error('no user found')
        }
    } catch (error) {
        throw error;
    }
}