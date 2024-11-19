import dbConnection from '../../../base/db'

export const getNotices = async ()=>{
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`SELECT * FROM marketplace.user_notices;`);
        await db.end();
        if (results.length > 0) {
            return results
        } else {
            // throw new Error('cart empty')
        }
    } catch (error) {
        throw error;
    }
}