const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const path = require('path');
// Attempt to load from default location (CWD) first, then specific path
require('dotenv').config();
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

console.log("DB Config Check:", {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    passwordType: typeof process.env.DB_PASSWORD,
    passwordLength: process.env.DB_PASSWORD ? process.env.DB_PASSWORD.length : 0
});

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const createAdmin = async () => {
    try {
        const email = 'admin@catalano.es';
        const password = 'admin'; // In production this should be strong
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user exists
        const checkRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (checkRes.rows.length > 0) {
            console.log('Admin user already exists.');
            // Optional: Update password if needed
            // await pool.query('UPDATE users SET password_hash = $1 WHERE email = $2', [hashedPassword, email]);
        } else {
            await pool.query(
                'INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3)',
                [email, hashedPassword, 'admin']
            );
            console.log(`Admin user created: ${email}`);
        }
    } catch (err) {
        console.error('Error creating admin user:', err);
    } finally {
        await pool.end();
    }
};

createAdmin();
