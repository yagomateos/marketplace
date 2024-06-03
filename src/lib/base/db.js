// src/lib/db.js
import mysql from "mysql2/promise";

const dbConnection = async () => {
    return mysql.createConnection({
        host: process.env.SERVER_IP,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    });
};

export default dbConnection;
