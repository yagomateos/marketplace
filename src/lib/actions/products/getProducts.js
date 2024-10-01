'use server'

import { getProducts, getProductsByIds, getProductsByCategory , getProductImgs , getProductsByUser } from '../../middleware/products/getProducts.js';



export const gtProducts = async (category, label, limit) => {
    try {
        const products = await getProducts(category, label, limit);
        return products;
    } catch (error) {
        throw error;
    }
}

export const gtProductsByIds = async (productIds = null) => {
    try {
        const products = await getProductsByIds(productIds);
        return products;
    } catch (error) {
        throw error;
    }
}

export const getProductsByCategoryID = async (catID = null) => {
    try {
        const products = getProductsByCategory(catID)
        return products;
    } catch (error) {
        throw error;
    }
}

export const getProductsByUserID = async (userId = null) => {
    try {
        const products = getProductsByUser(userId)
        return products;
    } catch (error) {
        throw error;
    }
}

export const getProductImages = async (productId) => {
    try {
        const productImgs = getProductImgs(productId)
        return productImgs;
    } catch (error) {
        throw error;
    }
}

