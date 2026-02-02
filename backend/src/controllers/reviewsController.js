const { generateResponseOptions } = require('../services/openaiService');

const gmbService = require('../services/gmbService');

const getReviews = async (req, res) => {
    try {
        const reviews = await gmbService.fetchReviews();
        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
};

const generateResponse = async (req, res) => {
    const { reviewId, reviewText, reviewerName, rating } = req.body;

    // Default values for testing if body is missing details (e.g. initial integration)
    const text = reviewText || "Servicio aceptable pero mejorable tiempos de espera.";
    const name = reviewerName || "Paciente";
    const stars = rating || 3;

    try {
        const responseOptions = await generateResponseOptions(text, name, stars);
        res.json(responseOptions);
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Failed to generate AI response" });
    }
};

const updateReviewStatus = async (req, res) => {
    const { reviewId } = req.params;
    const { status, final_response } = req.body;
    // In real app, update DB
    res.json({ success: true, id: reviewId, status, final_response });
};

module.exports = { getReviews, generateResponse, updateReviewStatus };
