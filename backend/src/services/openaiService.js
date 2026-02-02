const OpenAI = require('openai');
require('dotenv').config();

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'mock-key', // Fallback to avoid crash on init if key is missing
});

/**
 * Generates response options for a given review.
 * @param {string} reviewText - The text of the review.
 * @param {string} reviewerName - Name of the reviewer.
 * @param {number} rating - Rating given (1-5).
 * @returns {Promise<Object>} - Object containing response options.
 */
const generateResponseOptions = async (reviewText, reviewerName, rating) => {
    // If no API key is provided, return mock data
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
        console.warn('OPENAI_API_KEY is missing. Returning mock responses.');
        return generateMockResponses(reviewerName);
    }

    try {
        const systemPrompt = `Eres el asistente de IA para "Catalano Clínicas Odontológicas".
        
        Objetivo: Responder reseñas de Google de manera amigable, comprensiva y profesional, reforzando la marca.
        
        Instrucciones de Estilo:
        1. Tono: Amigable, instructivo, cercano y cálido. Sin tecnicismos complejos.
        2. Personalización: Usa SIEMPRE el nombre del usuario y menciona la clínica específica y ciudad si se conocen.
        3. Emojis: Usa emojis para transmitir calidez (ej. 😊, 🦷, 💙, ✨).
        4. Estructura:
           - Agradecimiento/Reconocimiento inicial con nombre.
           - Referencia a la experiencia (positiva o negativa).
           - Refuerzo de valores de Catalano.
           - Cierre cordial.
        5. Claims de Marca (Usar ocasionalmente, NO siempre): "Qué vivan los dientes", "Sonríe, lo pide tu cuerpo".
        
        Instrucciones específicas por sentimiento:
        - Positiva: Agradece, menciona tratamientos específicos si los hay (ej. blanqueamiento, ortodoncia).
        - Negativa: Empatía total, disculpa por la experiencia, ofrece contacto directo para solucionar.
        - Neutral: Agradece feedback, menciona mejora continua.

        IMPORTANTE: RESPONDE SIEMPRE EN ESPAÑOL.
        
        Output ONLY a JSON object with two fields: 
        "option1" (Una respuesta muy cálida y entusiasta, con emojis).
        "option2" (Una respuesta más profesional y directa, pero amable y con algún emoji).`;

        const userPrompt = `Reviewer: ${reviewerName}
        Rating: ${rating}/5
        Review: "${reviewText}"
        
        Generate two distinct response options in Spanish following the Catalano brand voice.`;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7,
        });

        const content = JSON.parse(completion.choices[0].message.content);
        return {
            options: [content.option1, content.option2]
        };

    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        // Fallback to mock if API fails
        return generateMockResponses(reviewerName);
    }
};

const generateMockResponses = (name) => {
    return {
        options: [
            `¡Muchas gracias, ${name}! 😊 En Catalano Clínicas Odontológicas nos alegra saber que tu experiencia fue positiva. ¡Sigue sonriendo con confianza! 🦷💙`,
            `Hola ${name}, sentimos mucho que tu experiencia no haya sido la mejor. 😔 Tomaremos nota para mejorar. Gracias por tu confianza. 💙`
        ]
    };
};

module.exports = { generateResponseOptions };
