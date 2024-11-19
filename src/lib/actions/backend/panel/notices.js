'use server'

import {getNotices} from '../../../middleware/backend/panel/notices'


export const getNoticesFunc = async ()=>{
    try {
        const notices = await getNotices()
        return notices;
    } catch (error) {
        throw error;
    }
}