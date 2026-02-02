const gmbService = require('../services/gmbService');

const getClinics = async (req, res) => {
    try {
        const clinics = await gmbService.fetchClinics();
        res.json(clinics);
    } catch (error) {
        console.error('Error fetching clinics:', error);
        res.status(500).json({ error: 'Failed to fetch clinics' });
    }
};

const getStats = async (req, res) => {
    try {
        const clinics = await gmbService.fetchClinics();
        const total_reviews = clinics.reduce((acc, c) => acc + c.reviewCount, 0);
        const average_rating = (clinics.reduce((acc, c) => acc + c.rating, 0) / clinics.length).toFixed(1);
        const pending_responses = clinics.filter(c => c.status === 'Critical' || c.status === 'Warning').length * 2; // Simulation

        res.json({
            total_reviews,
            average_rating,
            pending_responses,
            sentiment_breakdown: { positive: 78, neutral: 15, negative: 7 } // Simulated fixed breakdown
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
};

const getClinicDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const clinic = await gmbService.fetchClinicById(id);
        if (!clinic) {
            return res.status(404).json({ error: 'Clinic not found' });
        }
        res.json(clinic);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clinic details' });
    }
};

module.exports = { getClinics, getStats, getClinicDetails };
