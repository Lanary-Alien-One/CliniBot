require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool } = require('./config/db');

async function setupDb() {
    const schemaPath = path.join(__dirname, 'models', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    try {
        await pool.query(schemaSql);
        console.log('Database tables created successfully');

        // Seed an initial user if needed
        // await pool.query("INSERT INTO users (email, password_hash) VALUES ('admin@clinibot.com', 'hashedpassword') ON CONFLICT DO NOTHING");

        process.exit(0);
    } catch (err) {
        console.error('Error setting up database:', err);
        process.exit(1);
    }
}

setupDb();
