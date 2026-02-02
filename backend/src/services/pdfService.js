const PDFDocument = require('pdfkit');

class PdfService {
    static buildWeeklyReport(data, stream) {
        const doc = new PDFDocument({ margin: 50 });

        doc.pipe(stream);

        // Header
        doc.fontSize(20).text('Catalano Dental - Informe Semanal de Red', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(`Fecha de generación: ${new Date().toLocaleDateString('es-ES')}`, { align: 'center', color: 'gray' });
        doc.moveDown(2);

        // 1. Resumen General
        doc.fontSize(16).text('1. Resumen de Estado', { underline: true });
        doc.moveDown();

        doc.fontSize(12).text(`Total de Sedes: ${data.totalClinics}`);
        doc.text(`Valoración Media Global: ${data.averageRating.toFixed(2)} / 5.0`);
        doc.moveDown();

        // Status Breakdown
        doc.text('Distribución por Estado:', { underline: true });
        doc.text(`• Saludable (Healthy): ${data.statusBreakdown.healthy} sedes`, { indent: 20 });
        doc.text(`• Atención (Warning): ${data.statusBreakdown.warning} sedes`, { indent: 20 });
        doc.text(`• Crítico (Critical): ${data.statusBreakdown.critical} sedes`, { indent: 20 });
        doc.moveDown(2);

        // 2. Rankings
        doc.fontSize(16).text('2. Top 5 Clínicas (Mejor Valoradas)', { underline: true });
        doc.moveDown();

        data.topClinics.forEach((clinic, index) => {
            doc.fontSize(12).text(`${index + 1}. ${clinic.name} - ${clinic.rating} ★ (${clinic.region})`);
        });
        doc.moveDown(2);

        // 3. Alertas / Actions Required
        doc.fontSize(16).text('3. Acción Requerida (Estado Crítico)', { underline: true, color: 'red' });
        doc.moveDown();

        if (data.criticalClinics.length === 0) {
            doc.fontSize(12).text('¡Todas las clínicas están operando correctamente! No hay alertas críticas.', { color: 'green' });
        } else {
            data.criticalClinics.forEach((clinic) => {
                doc.fontSize(12).fillColor('red').text(`• ${clinic.name} (${clinic.region})`);
                doc.fontSize(10).fillColor('gray').text(`  Motivo: Baja valoración (${clinic.rating}) y volumen de reseñas recientes.`, { indent: 20 });
                doc.moveDown(0.5);
            });
        }

        // Footer
        doc.fillColor('black');
        doc.moveDown(4);
        doc.fontSize(10).text('Generado automáticamente por CliniBot AI System.', { align: 'center', color: 'gray' });

        doc.end();
    }
}

module.exports = PdfService;
