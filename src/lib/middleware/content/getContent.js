import dbConnection from '../../base/db'

export const getBanners = async (location) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from promotions where location = '${location}'`);
        await db.end();
        if (results.length > 0) {
            return results[0];
        } else {
            throw new Error('no banners found')
        }
    } catch (error) {
        throw error;
    }
}

export const getSlider = async () => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`select * from slider`);
        await db.end();
        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no slides found')
        }
    } catch (error) {
        throw error;
    }
}