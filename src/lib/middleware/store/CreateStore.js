import dbConnection from '../../base/db';

export const createStore = async (storeData) => {
    console.log(storeData)
    try {
        const db = await dbConnection();

        // Insert into billing_address table
        const [billingResults] = await db.execute(`
            INSERT INTO billing_address (user_id, street, floor, city, postal_code, phone_number)
            VALUES ('${storeData.userId}', '${storeData.street}', '${storeData.floor}', '${storeData.city}', '${storeData.postal}', '${storeData.phone}'); 
        `);

        const billingId = billingResults.insertId;

        // Insert into store table
        const [storeResults] = await db.execute(`
            INSERT INTO stores (userid, store_name, lang, currency, payment_methods, identity_verification_url, billing_id)
            VALUES ('${storeData.userId}', '${storeData.storeName}', 'spanish', 'euro', 1, '', ${billingId});
        `);

        await db.end();

        if (storeResults.affectedRows > 0) {
            return storeResults;
        } else {
            throw new Error('Failed to insert into store table');
        }

    } catch (error) {
        console.error(error);
        throw new Error('Error creating store');
    }
};
