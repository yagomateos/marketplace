import dbConnection from '../../base/db';

export const deactivateProduct = async (product_id) => {

    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `UPDATE products SET status = 'deactivate' WHERE id = ${product_id};`
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

export const deleteProduct = async (product_id) => {

    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `DELETE FROM products WHERE id = ${product_id};`
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

export const updateProduct = async(productData )=>{
    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `UPDATE products SET name = '${productData.name}', regular_price = '${productData.price}', quantity = '${productData.quantity}', SKU = '${productData.sku}', material = '${productData.material}', main_color = '${productData.main_color}', second_color = '${productData.saecond_color}', festivity = '${productData.festivity}', tags = '${productData.tags}', materials = '${productData.materials}' WHERE (id = '${productData.id}');`
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
