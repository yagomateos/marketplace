'use server'
import { createProduct } from '../../middleware/products/createProduct';

export async function createNewProduct(productDta) {

    

    const thumbnailUrl = 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg';

    const productData = {
        store_id : productDta.storeId,
        category_id: productDta.firstPart[0],
        name : productDta.secondPart[0],
        description : productDta.secondPart[2],
        variable : 0,
        main_image_url : thumbnailUrl,
        regular_price : productDta.secondPart[3],
        sale_price : productDta.secondPart[3],
        discount : 0,
        availability : 1,
        user_id : productDta.userId,
        product_type : productDta.firstPart[2],
        who_did_it : productDta.firstPart[3],
        what_product : productDta.firstPart[4],
        date_of_made : productDta.firstPart[1],
        quantity : productDta.secondPart[4],
        SKU : productDta.secondPart[5],
        material : productDta.secondPart[6],
        main_color : productDta.secondPart[7],
        second_color : productDta.secondPart[8],
        festivity : productDta.secondPart[9],
        tags : productDta.secondPart[10]?productDta.secondPart[10].join(','):'',
        materials : productDta.secondPart[11]?productDta.secondPart[11].join(','):'',
    }

    console.log(productData)

    try {
        const newProduct = await createProduct(productData);

        return newProduct;
    } catch (error) {
        throw error;
    }
}
