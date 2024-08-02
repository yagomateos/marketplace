import { error } from 'console';
import dbConnection from '../base/db'

export const findUser = async (email, password) => {
    try {
        const db = await dbConnection();

        console.log(`SELECT * FROM users where email_address='${email}' and password='${password}'`)

        const [results] = await db.execute(`SELECT * FROM users where email_address='${email}'`);
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

export const updateUser = async (userData) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `UPDATE marketplace.users  SET reason = '${userData.reason}',  need_help_with = '${userData.options}', first_name = '${userData.firstName}',  last_name = '${userData.last_name}', birthday = '${userData.birthday}', address_number = '${userData.address_number}', street = '${userData.street}', floor = '${userData.floor}', city = '${userData.city}', postal_code = '${userData.postal_code}', phone_number = '${userData.phone_number}', additional_places = '${userData.additional_places}', additional_place_date = '${userData.additional_place_date}', bank_name = '${userData.bank_name}', IBAN = '${userData.IBAN}', SWIFT = '${userData.SWIFT}' ,identity_type = '${userData.identity_type}',identity_url = '${userData.identity_url}',person_type = '${userData.person_type}' WHERE  (id = ${userData.id});`);
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