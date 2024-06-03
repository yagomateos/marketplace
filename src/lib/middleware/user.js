import { error } from 'console';
import dbConnection from '../base/db'

export const findUser = async (email, password) => {
    try {
        const db = await dbConnection();

        const [results] = await db.execute(`SELECT * FROM users where email_address='${email}' and password='${password}'`);
        await db.end();
        if (results.length > 0) {
            // console.log(results[0])
            return results[0];
        } else {
            return false;
        }
    } catch (error) {
        console.error('Database connection error:', error.message);
        throw error;
    }
}

export const createNew = async (username, email, password, userType) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(`INSERT INTO marketplace.users (username, password, email_address, usertype, accesslevel) VALUES ('${username}', '${password}', '${email}', '${userType}', '4');`);
        await db.end();
        console.log(results);
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