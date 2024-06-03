'use server'
import { getFeaturedCategories } from '../../middleware/products/categories';

export async function getfeaturedCategories(limit) {
    try {
        const featuredCategories = await getFeaturedCategories(limit);

        return featuredCategories;
    } catch (error) {
        throw error;
    }
}
