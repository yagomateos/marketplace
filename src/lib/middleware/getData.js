import dbConnection from '../base/db'

export const getData = async () => {
    try {
        const db = await dbConnection();
        
        const [results] = await db.execute('SELECT * FROM `users`');
        await db.end();
        return results;
    } catch (error) {
        console.error('Database connection error:', error.message);
        throw error;
    }
}

