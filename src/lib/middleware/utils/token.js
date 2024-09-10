import dbConnection from '../../base/db';

export const saveToken = async (type, token, email) => {
    try {
        const db = await dbConnection();

        // Insert into tokens table
        const [tokenResult] = await db.execute(`
            INSERT INTO tokens (type, datetime, token)
            VALUES ('${type}', NOW(), '${token}');
        `);
        
        const tokenId = tokenResult.insertId;

        // Check if token was saved successfully
        if (tokenResult.affectedRows > 0) {
            // Update users table with token_id where email matches
            const [userUpdateResult] = await db.execute(`
                UPDATE users 
                SET token_id = ${tokenId}
                WHERE email_address = '${email}';
            `);

            await db.end();

            if (userUpdateResult.affectedRows > 0) {
                return tokenResult;
            } else {
                throw new Error('Error updating user with token_id');
            }
        } else {
            throw new Error('Token saving error');
        }
    } catch (error) {
        throw new Error('Token saving error');
    }
}

export const getTokenByemail = async (email) => {
    try {
        const db = await dbConnection();

        // Query to join users and tokens based on token_id
        const [result] = await db.execute(`
            SELECT tokens.token 
            FROM users 
            INNER JOIN tokens ON users.token_id = tokens.id
            WHERE users.email_address = '${email}';
        `);

        await db.end();

        if (result.length > 0) {
            return result[0].token;
        } else {
            throw new Error('Token not found for the given email');
        }
    } catch (error) {
        throw new Error('Error fetching token by email');
    }
}
