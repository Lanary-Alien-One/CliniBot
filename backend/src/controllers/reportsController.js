const gmbService = require('../services/gmbService');
const PdfService = require('../services/pdfService');

const generateWeeklyReport = async (req, res) => {
    try {
        const clinics = await gmbService.fetchClinics();

        // Calculate Stats
        const totalClinics = clinics.length;
        const averageRating = clinics.reduce((acc, c) => acc + c.rating, 0) / totalClinics;

        const statusBreakdown = {
            healthy: clinics.filter(c => c.status === 'Healthy').length,
            warning: clinics.filter(c => c.status === 'Warning').length,
            critical: clinics.filter(c => c.status === 'Critical').length
        };

        const sortedByRating = [...clinics].sort((a, b) => b.rating - a.rating);
        const topClinics = sortedByRating.slice(0, 5);
        const criticalClinics = clinics.filter(c => c.status === 'Critical');

        const reportData = {
            period: "Semana Actual",
            generated_at: new Date(),
            totalClinics,
            averageRating,
            statusBreakdown,
            topClinics,
            criticalClinics
        };

        // Check format request
        if (req.query.format === 'pdf') {
            const filename = `Reporte_Catalano_${new Date().toISOString().split('T')[0]}.pdf`;
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

            PdfService.buildWeeklyReport(reportData, res);
        } else {
            // Default to JSON for dashboard preview
            res.json(reportData);
        }

    } catch (error) {
        console.error("Error generating report:", error);
        res.status(500).json({ error: 'Failed to generate report' });
    }
};

module.exports = { generateWeeklyReport };
