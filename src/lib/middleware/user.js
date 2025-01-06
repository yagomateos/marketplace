
import dbConnection from '../base/db'

export const findUser = async (email, password = null) => {
    try {
        const db = await dbConnection();
        let sql = `SELECT * FROM users where email_address='${email}' and password='${password}'`
        if (password==null) {
            sql = `SELECT * FROM users where email_address='${email}'`
        } 

        const [results] = await db.execute(sql);
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

export const createNew = async (username, email, password, userType, userImage=null) => {
    try {
        const db = await dbConnection();
        let sql = `INSERT INTO marketplace.users (username, password, email_address, usertype, accesslevel) VALUES ('${username}', '${password}', '${email}', '${userType}', '4');`
        
        if(userImage){
            sql = `INSERT INTO marketplace.users (username, password, email_address, usertype, accesslevel , identity_url) VALUES ('${username}', '${password}', '${email}', '${userType}', '4' , '${userImage}');`
        }
        
        const [results] = await db.execute(sql);
        await db.end();
        console.log(results);
        if (results.affectedRows && results.affectedRows > 0) {
            return results.insertId
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
            `UPDATE marketplace.users  SET reason = '${userData.reason}',  need_help_with = '${userData.options}', first_name = '${userData.firstName}',  last_name = '${userData.last_name}', birthday = '${userData.birthday}', address_number = '${userData.address_number}', street = '${userData.street}', floor = '${userData.floor}', city = '${userData.city}', postal_code = '${userData.postal_code}', phone_number = '${userData.phone_number}', additional_places = '${userData.additional_places}', additional_place_date = '${userData.additional_place_date}', bank_name = '${userData.bank_name}', IBAN = '${userData.IBAN}', SWIFT = '${userData.SWIFT}' ,identity_type = '${userData.identity_type}' ,person_type = '${userData.person_type}' WHERE  (id = ${userData.id});`);
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

export const updatePartial = async (userData) => {
    try {
        const db = await dbConnection();
        const [results] = await db.execute(
            `UPDATE marketplace.users 
             SET 
                birthday = '${userData.birthDay}', 
                city = '${userData.city}', 
                identity_url = '${userData.identityUrl}', 
                gender = '${userData.gender}', 
                bio = '${userData.bio}', 
                favourite_materials = '${userData.favorite_materials}', 
                include_in_store = '${userData.incl_store}', 
                include_in_favourite_articles = '${userData.incl_articals}', 
                include_in_favourite_stores = '${userData.incl_fav_stor}' 
             WHERE id = '${userData.id}';`
        );

        if (results.affectedRows && results.affectedRows > 0) {
            return true
        } else {
            throw new Error('something went wrong');
        }
    } catch (error) {
        throw error;
    }
}

export const updatePassword = async (userId, password, newPassword) => {
    try {
        const db = await dbConnection();
        const [result] = await db.execute(`UPDATE marketplace.users SET password = '${newPassword}' WHERE id = '${userId}' and password='${password}';`)
        if (result.affectedRows && result.affectedRows > 0) {
            return true
        } else {
            throw new Error('old password wrong');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updatePasswordByEmail = async (email, password) => {
    try {
        const db = await dbConnection();
        const [result] = await db.execute(`UPDATE marketplace.users SET password = '${password}' WHERE email_address = '${email}';`)
        console.log(`UPDATE marketplace.users SET password = '${password}' WHERE email_address = '${email}';`)
        if (result.affectedRows && result.affectedRows > 0) {
            return true
        } else {

            throw new Error('old password wrong');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const getUserById = async (userId) => {
    try {
        const db = await dbConnection();
        const result = await db.execute(`Select * from marketplace.users  WHERE id = '${userId}';`)
        if (result.length > 0) {
            return result[0]
        } else {
            throw new Error('no user found');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const getUserByEmail = async (email) => {
    try {
        const db = await dbConnection();
        const result = await db.execute(`Select * from marketplace.users  WHERE email_address = '${email}';`)
        if (result.length > 0) {
            return result[0]
        } else {
            throw new Error('no user found');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateEmail = async (userId, emailAddress, password) => {
    try {
        const db = await dbConnection();

        // First, check if the new email address already exists in the database
        const [existingEmailCheck] = await db.execute(`SELECT COUNT(*) as count FROM marketplace.users WHERE email_address = ?`, [emailAddress]);

        if (existingEmailCheck[0].count > 0) {
            throw new Error('Email address already exists');
        }

        // Proceed with updating the email address if it's not already in use
        const [result] = await db.execute(`UPDATE marketplace.users SET email_address = ? WHERE id = ? AND password = ?`, [emailAddress, userId, password]);

        if (result.affectedRows && result.affectedRows > 0) {
            return true;
        } else {
            throw new Error('Password incorrect or no matching user found');
        }

    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateCommunication = async (userId, mail, phone) => {
    try {
        const db = await dbConnection();
        const [result] = await db.execute(`UPDATE marketplace.users SET grant_mail_notification = '${mail}', grant_phone_contact = '${phone}' WHERE (id = '${userId}');`)
        if (result.affectedRows && result.affectedRows > 0) {
            return true
        } else {
            throw new Error('something went wrong');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateAddress = async (userId, addressNumber, street, addressLine2, city, postalCode, phoneNumber) => {
    try {
        const db = await dbConnection();
        const [result] = await db.execute(`UPDATE marketplace.users SET address_number = '${addressNumber}', street = '${street}', floor = '${addressLine2}', city = '${city}', postal_code = '${postalCode}', phone_number = '${phoneNumber}' WHERE (id = '${userId}');`)
        if (result.affectedRows && result.affectedRows > 0) {
            return true
        } else {
            throw new Error('something went wrong');
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateUserNotifications = async (
    userId,
    receiveMessage,
    sentMessage,
    followMe,
    adsExpire,
    newsSubs,
    feedbackSubs,
    cuponsSubs,
    forums,
    defence,
    mySellerActivity,
    sellerNews,
    storeTips,
    patternTips,
    sellerPlusNews
) => {
    try {
        const db = await dbConnection();

        // Check if the user_id exists in the notifications table
        const [notificationExists] = await db.execute(
            `SELECT 1 FROM notifications WHERE user_id = ? LIMIT 1`,
            [userId]
        );

        if (notificationExists.length > 0) {
            // Update the notifications table if user_id exists
            await db.execute(
                `UPDATE notifications 
                 SET receive_message = ?, send_message = ?, follow_me = ?, ads_expire = ? 
                 WHERE user_id = ?`,
                [receiveMessage, sentMessage, followMe, adsExpire, userId]
            );
        } else {
            // Insert into the notifications table if user_id does not exist
            await db.execute(
                `INSERT INTO notifications (user_id, receive_message, send_message, follow_me, ads_expire)
                 VALUES (?, ?, ?, ?, ?)`,
                [userId, receiveMessage, sentMessage, followMe, adsExpire]
            );
        }

        // Check if the user_id exists in the subscriptions table
        const [subscriptionExists] = await db.execute(
            `SELECT 1 FROM subscriptions WHERE user_id = ? LIMIT 1`,
            [userId]
        );

        if (subscriptionExists.length > 0) {
            // Update the subscriptions table if user_id exists
            await db.execute(
                `UPDATE subscriptions 
                 SET news_subs = ?, feedback_subs = ?, cupons_subs = ?, forums = ?, defence = ?, 
                     my_seller_activity = ?, seller_news = ?, store_tips = ?, pattern_tips = ?, 
                     seller_plus_news = ? 
                 WHERE user_id = ?`,
                [
                    newsSubs, feedbackSubs, cuponsSubs, forums, defence,
                    mySellerActivity, sellerNews, storeTips, patternTips, sellerPlusNews, userId
                ]
            );
        } else {
            // Insert into the subscriptions table if user_id does not exist
            await db.execute(
                `INSERT INTO subscriptions (user_id, news_subs, feedback_subs, cupons_subs, forums, defence, 
                                            my_seller_activity, seller_news, store_tips, pattern_tips, seller_plus_news)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    userId, newsSubs, feedbackSubs, cuponsSubs, forums, defence,
                    mySellerActivity, sellerNews, storeTips, patternTips, sellerPlusNews
                ]
            );
        }

        return true;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const updateUserEmailVerificationSt = async (email) => {
    try {
        const db = await dbConnection();
        const [updatedUser] = await db.execute(`UPDATE marketplace.users 
            SET confirmed = '1' 
            WHERE email_address = '${email}';`)

        await db.end();

        if (updatedUser.affectedRows && updatedUser.affectedRows > 0) {
            return true;
        } else {
            return new Error('email not updated!')
        }

    } catch (error) {
        console.log(error)
    }

}