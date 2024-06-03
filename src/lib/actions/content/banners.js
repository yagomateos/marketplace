'use server';
import { getBanners } from '../../middleware/content/getContent'

export async function Banners(location) {
    try {
        const banners = await getBanners(location)
        return banners;
    } catch (error) {
        throw error;
    }
}
