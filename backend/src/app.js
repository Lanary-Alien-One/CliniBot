const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'CliniBot API is running', timestamp: new Date() });
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

module.exports = app;
