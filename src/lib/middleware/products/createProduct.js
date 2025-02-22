import dbConnection from '../../base/db';

export const createProduct = async (productData) => {
    try {
        const db = await dbConnection();

        // Insert the product
        const [insertResults] = await db.execute(
            `INSERT INTO products (category_id, name, description, variable, main_image_url, regular_price, sale_price, discount, availability, user_id, product_type, who_did_it, what_product, date_of_made, quantity, SKU, material, main_color, second_color, festivity, tags, materials, store_id , gallery_images) 
            VALUES ('${productData.category_id}', '${productData.name}', '${productData.description}', '${productData.variable}', '${productData.main_image_url}', '${productData.regular_price}', '${productData.sale_price}', '${productData.discount}', '${productData.availability}', '${productData.user_id}', '${productData.product_type}', '${productData.who_did_it}', '${productData.what_product}', '${productData.date_of_made}', '${productData.quantity}', '${productData.SKU}', '${productData.material}', '${productData.main_color}', '${productData.second_color}', '${productData.festivity}', '${productData.tags}', '${productData.materials}', '${productData.store_id}' , '${productData.galleryImages}');`
        );

        // Update the user type
        const [updateResults] = await db.execute(
            `UPDATE marketplace.users SET usertype = 'seller' WHERE id = '${productData.user_id}';`
        );

        // Close the database connection
        await db.end();

        // Check if both queries were successful
        if (
            insertResults.affectedRows > 0 &&
            updateResults.affectedRows > 0
        ) {
            return true;
        } else {
            throw new Error('Something went wrong with one of the queries.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
