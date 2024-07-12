'use server'
import { getFeaturedCategories , getSubCategories } from '../../middleware/products/categories';

export async function getfeaturedCategories(limit) {
    try {
        const featuredCategories = await getFeaturedCategories(limit);

        return featuredCategories;
    } catch (error) {
        throw error;
    }
}

export async function getSubCats(parent = null) {
    try {
        const categories = await getSubCategories(parent);
        return categories;
    } catch (error) {
        throw error;
    }
}
