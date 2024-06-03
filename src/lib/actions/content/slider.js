'use server'

import {getSlider} from '../../middleware/content/getContent'

export const GetSlider = async () => {
    try {
        const slider = await getSlider()
        return slider;
    } catch (error) {
        throw error;
    }
}
