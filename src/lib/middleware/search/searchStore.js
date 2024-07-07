import dbConnection from '../../base/db';

export const searchStore = async (query) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from stores where store_name = '${query}'`);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no Stores found');
        }
    } catch (error) {
        throw error;
    }
}