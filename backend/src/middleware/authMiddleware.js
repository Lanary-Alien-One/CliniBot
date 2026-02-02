const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        // Bearer <token>
        const bearer = token.split(' ');
        const bearerToken = bearer[1];

        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET || 'secret_key_dev');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = verifyToken;
