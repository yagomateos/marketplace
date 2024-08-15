'use server'

import {getUserById} from '../../middleware/user'

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