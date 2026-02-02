const express = require('express');
const router = express.Router();
const clinicsController = require('../controllers/clinicsController');
const reviewsController = require('../controllers/reviewsController');
const reportsController = require('../controllers/reportsController');
const authRoutes = require('./auth');
const verifyToken = require('../middleware/authMiddleware');

router.use('/auth', authRoutes);

// Protected Routes (example integration, partially protected if needed)
// For now, we keep everything public for dev, or verifyToken can be added to specific routes.
// router.use('/clinics', verifyToken);

// Clinics
router.get('/clinics', clinicsController.getClinics);
router.get('/clinics/stats', clinicsController.getStats);
router.get('/clinics/:id', clinicsController.getClinicDetails);

// Reviews
router.get('/reviews', reviewsController.getReviews);
router.post('/reviews/generate', reviewsController.generateResponse);
router.put('/reviews/:reviewId', reviewsController.updateReviewStatus);

// Reports
router.get('/reports/weekly', reportsController.generateWeeklyReport);

// Auth (Mock)
router.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@clinibot.com' && password === 'admin') {
        res.json({ token: 'mock-jwt-token', user: { email, role: 'admin' } });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;
