'use server'

import { getFeaturedProducts } from '../../middleware/products/featuredProducts';

export const FeaturedProductsAction = async () => {
    try {
        const featuredProducts = await getFeaturedProducts();
        // console.log(featuredProducts)
        return featuredProducts;
    } catch (error) {
        throw error;
    }
}
