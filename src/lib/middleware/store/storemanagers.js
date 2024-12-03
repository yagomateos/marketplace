import dbConnection from '../../base/db';

export const createStoreManagers = async (userId, storeData, image) => {
    console.log(storeData)
    try {
        const db = await dbConnection();

        // Insert into billing_address table
        const [managersUpdated] = await db.execute(`INSERT INTO marketplace.store_managers (store_id, name, bio, image)
VALUES ((SELECT id FROM marketplace.stores WHERE userid = '${userId}'), '${storeData.name}', '${storeData.bio}', '${image}');`);


        if (managersUpdated.affectedRows > 0) {
            return managersUpdated.insertId;
        } else {
            throw new Error('Failed to insert into store table');
        }

    } catch (error) {
        console.error(error);
        throw new Error('Error creating store');
    }
};


export const getStoremanagers = async (uid) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT * FROM marketplace.store_managers where store_id = (select id from marketplace.stores where userid = ${uid});`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no store managers found');
        }
    } catch (error) {
        throw error;
    }

}

export const deleteMember = async (id) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`DELETE FROM marketplace.store_managers where id = ${id}`);
        await db.end();
        if (results.affectedRows > 0) {
            return true
        } else {
            throw new Error('cant find the store manager')
        }
    } catch (error) {
        throw error;
    }
}
