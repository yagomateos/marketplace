'use server'

import { deactivateProduct, deleteProduct, updateProduct } from "../../middleware/products/updateProduct"
import { UploadMultipleImgs } from "../../utils/uploadImg";

export async function deactivateProductFunc(product_id){
    try {
        const deactivated = await deactivateProduct(product_id);
        return deactivated;
    } catch (error) {
        throw error;
        
    }
}


export async function deleteProductFunc(product_id){
    try {
        const deleted = await deleteProduct(product_id);
        return deleted;
    } catch (error) {
        throw error;
        
    }
}

export async function updarteProductFunc(productData , productImages){
    try {
        const uploadedImages = await UploadMultipleImgs(productImages)
        // const updated = await updateProduct(productData);
        return uploadedImages;
    } catch (error) {
        throw error;
        
    }
}