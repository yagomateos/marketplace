import dbConnection from '../../base/db';

export const createProduct = async (productData) => {

    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `INSERT INTO products (category_id, name, description, variable, main_image_url, regular_price, sale_price, discount, availability, user_id, product_type, who_did_it, what_product, date_of_made, quantity, SKU, material, main_color, second_color, festivity, tags, materials , store_id) VALUES ('${productData.category_id}', '${productData.name}', '${productData.description}', '${productData.variable}', '${productData.main_image_url}', '${productData.regular_price}', '${productData.sale_price}', '${productData.discount}', '${productData.availability}', '${productData.user_id}', '${productData.product_type}', '${productData.who_did_it}', '${productData.what_product}', '${productData.date_of_made}', '${productData.quantity}', '${productData.SKU}', '${productData.material}', '${productData.main_color}', '${productData.second_color}', '${productData.festivity}', '${productData.tags}', '${productData.materials}' , '${productData.store_id}');`
        )
        await db.end();
        if (results.affectedRows && results.affectedRows > 0) {
            return true
        } else {
            throw new Error('something went wrong');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}