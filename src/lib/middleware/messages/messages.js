import dbConnection from '../../base/db';

export const getMessages = async (userId) => {

    try {
        const db = await dbConnection();
        const [results] = await db.execute(`
            SELECT 
                id, 
                CASE  
                    WHEN \`from\` = ${userId} THEN 'Sent'
                    WHEN \`to\` = ${userId} THEN 'Received'
                END AS message_type,
                CASE 
                    WHEN \`from\` = -1 THEN 1 
                    ELSE 0 
                END AS from_vendalia,
                message, -- Replace this with actual content column name if different
                \`from\` AS sender_id,
                \`to\` AS receiver_id,
                timestamp -- Adjust column name if necessary
            FROM 
                marketplace.messages
            WHERE 
                \`from\` = ${userId} OR \`to\` = ${userId};
        `);
        await db.end();

        if (results.length > 0) {
            return results;
        } else {
            throw new Error('no messages found');
        }
    } catch (error) {
        throw error;
    }



}

export const setMessages = async (receiverId, message, senderId) => {
    const db = await dbConnection(); // Initialize database connection

    try {
        // Use parameterized query to avoid SQL injection
        const [results] = await db.execute(
            `INSERT INTO marketplace.messages (\`from\`, \`to\`, \`message\`, \`timestamp\`) VALUES (?, ?, ?, now());`,
            [senderId, receiverId, message] // Bind values to the query
        );

        await db.end(); // Close the database connection

        // Check if rows were affected and return appropriate result
        if (results.affectedRows > 0) {
            return true;
        } else {
            throw new Error('Something went wrong: No rows were affected.');
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw error;
    }
};
