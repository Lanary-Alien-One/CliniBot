const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
require('dotenv').config();

// Mock User for MVP/Demo
const MOCK_ADMIN = {
    id: 1,
    email: 'admin@catalano.es',
    password: 'admin', // In a real app this would be hashed
    role: 'admin'
};

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'secret_key_dev',
        { expiresIn: '24h' }
    );
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Mock Validation
        if (email !== MOCK_ADMIN.email || password !== MOCK_ADMIN.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(MOCK_ADMIN);

        res.json({
            token,
            user: {
                id: MOCK_ADMIN.id,
                email: MOCK_ADMIN.email,
                role: MOCK_ADMIN.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};

module.exports = { login };
