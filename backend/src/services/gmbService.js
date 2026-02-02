const clinicsData = [
    // CIUDAD REAL
    { id: 'alcazar-sanjuan', name: 'Catalano Alcázar de San Juan', address: 'Avda de la Pradera, s/n, 13600', region: 'Ciudad Real', phone: '926 54 42 87', rating: 4.8, reviewCount: 342, status: 'Healthy' },
    { id: 'argamasilla', name: 'Catalano Argamasilla de Alba', address: 'Plaza de España, 8, 13710', region: 'Ciudad Real', phone: '926 53 71 92', rating: 4.5, reviewCount: 120, status: 'Warning' },
    { id: 'campo-criptana', name: 'Catalano Campo de Criptana', address: 'Calle Castillo, 15, 13610', region: 'Ciudad Real', phone: '926 56 25 07', rating: 4.9, reviewCount: 215, status: 'Healthy' },
    { id: 'ciudad-real', name: 'Catalano Ciudad Real', address: 'Calle Alarcos, 14, 13001', region: 'Ciudad Real', phone: '926 60 00 01', rating: 4.2, reviewCount: 560, status: 'Warning' },
    { id: 'daimiel', name: 'Catalano Daimiel', address: 'Calle Juan Romero, 14, 13250', region: 'Ciudad Real', phone: '926 85 59 76', rating: 4.7, reviewCount: 189, status: 'Healthy' },
    { id: 'herencia', name: 'Catalano Herencia', address: 'Calle Huertos, 28, 13640', region: 'Ciudad Real', phone: '926 57 15 93', rating: 4.6, reviewCount: 145, status: 'Healthy' },
    { id: 'la-solana', name: 'Catalano La Solana', address: 'Calle Encomienda, 26, 13240', region: 'Ciudad Real', phone: '926 63 52 68', rating: 3.9, reviewCount: 98, status: 'Critical' },
    { id: 'manzanares', name: 'Catalano Manzanares', address: 'Calle Vid, 1, 13200', region: 'Ciudad Real', phone: '926 44 20 66', rating: 4.8, reviewCount: 310, status: 'Healthy' },
    { id: 'membrilla', name: 'Catalano Membrilla', address: 'Avda Constitución, 48, 13230', region: 'Ciudad Real', phone: '926 63 75 93', rating: 4.5, reviewCount: 112, status: 'Healthy' },
    { id: 'pedro-munoz', name: 'Catalano Pedro Muñoz', address: 'Calle General Prim, 3, 13620', region: 'Ciudad Real', phone: '926 56 95 11', rating: 4.7, reviewCount: 156, status: 'Healthy' },
    { id: 'puertollano', name: 'Catalano Puertollano', address: 'Paseo de San Gregorio, 11, 13500', region: 'Ciudad Real', phone: '926 35 52 98', rating: 4.1, reviewCount: 289, status: 'Warning' },
    { id: 'socuellamos', name: 'Catalano Socuéllamos', address: 'Paseo de la Concordia, 2, 13630', region: 'Ciudad Real', phone: '926 60 58 00', rating: 4.9, reviewCount: 201, status: 'Healthy' },
    { id: 'tomelloso', name: 'Catalano Tomelloso', address: 'Calle Don Víctor Peñasco, 41, 13700', region: 'Ciudad Real', phone: '926 50 23 86', rating: 4.6, reviewCount: 412, status: 'Healthy' },
    { id: 'valdepenas', name: 'Catalano Valdepeñas', address: 'Calle del Seis de Junio, 82, 13300', region: 'Ciudad Real', phone: '926 31 27 23', rating: 4.4, reviewCount: 345, status: 'Healthy' },
    { id: 'villarrubia', name: 'Catalano Villarrubia de los Ojos', address: 'Plaza de la Constitución, 11, 13670', region: 'Ciudad Real', phone: '926 60 55 00', rating: 4.8, reviewCount: 167, status: 'Healthy' },

    // TOLEDO
    { id: 'consuegra', name: 'Catalano Consuegra', address: 'Calle del Carmen, 11, 45700', region: 'Toledo', phone: '925 48 07 73', rating: 4.7, reviewCount: 134, status: 'Healthy' },
    { id: 'illescas', name: 'Catalano Illescas', address: 'Calle Puerta del Sol, 17, 45200', region: 'Toledo', phone: '925 36 30 06', rating: 3.8, reviewCount: 210, status: 'Critical' },
    { id: 'los-yebenes', name: 'Catalano Los Yébenes', address: 'Calle Cortijo, 30, 45470', region: 'Toledo', phone: '925 32 11 07', rating: 4.9, reviewCount: 98, status: 'Healthy' },
    { id: 'madridejos', name: 'Catalano Madridejos', address: 'Calle Real, 8, 45710', region: 'Toledo', phone: '925 46 01 70', rating: 4.6, reviewCount: 156, status: 'Healthy' },
    { id: 'mora', name: 'Catalano Mora', address: 'Calle Ciudad de Martos, 7, 45400', region: 'Toledo', phone: '925 34 01 90', rating: 5.0, reviewCount: 89, status: 'Healthy' },
    { id: 'nambroca', name: 'Catalano Nambroca', address: 'Plaza Reloj, 8, 45190', region: 'Toledo', phone: '925 60 93 00', rating: 4.4, reviewCount: 112, status: 'Healthy' },
    { id: 'ocana', name: 'Catalano Ocaña', address: 'Calle Santa Clara, 1, 45300', region: 'Toledo', phone: '925 12 17 11', rating: 4.1, reviewCount: 234, status: 'Warning' },
    { id: 'olias', name: 'Catalano Olías del Rey', address: 'Travesía Alamillo, 9, 45280', region: 'Toledo', phone: '925 49 14 05', rating: 4.7, reviewCount: 145, status: 'Healthy' },
    { id: 'quintanar', name: 'Catalano Quintanar de la Orden', address: 'Príncipe, 1, 45800', region: 'Toledo', phone: '925 70 25 41', rating: 4.3, reviewCount: 178, status: 'Healthy' },
    { id: 'sonseca', name: 'Catalano Sonseca', address: 'Avenida de Europa, 26, 45100', region: 'Toledo', phone: '925 38 38 54', rating: 4.8, reviewCount: 198, status: 'Healthy' },
    { id: 'talavera', name: 'Catalano Talavera de la Reina', address: 'San Francisco, 29, 45600', region: 'Toledo', phone: '925 24 64 99', rating: 4.0, reviewCount: 456, status: 'Warning' },
    { id: 'toledo', name: 'Catalano Toledo', address: 'Avenida de Portugal, 22, 45008', region: 'Toledo', phone: '925 50 44 11', rating: 4.5, reviewCount: 678, status: 'Healthy' },
    { id: 'villafranca', name: 'Catalano Villafranca de los Caballeros', address: 'Calle Angosta, 37, 45730', region: 'Toledo', phone: '926 55 82 92', rating: 4.9, reviewCount: 87, status: 'Healthy' },
    { id: 'yuncos', name: 'Catalano Yuncos', address: 'Avenida Doctor Fleming, 23, 45210', region: 'Toledo', phone: '925 53 75 23', rating: 3.5, reviewCount: 134, status: 'Critical' },

    // ALBACETE
    { id: 'albacete', name: 'Catalano Albacete', address: 'Plaza Gabriel Lodares, 4, 02003', region: 'Albacete', phone: '967 17 74 32', rating: 4.6, reviewCount: 512, status: 'Healthy' },
    { id: 'la-roda', name: 'Catalano La Roda', address: 'Calle Plaza Mayor, 7, 02630', region: 'Albacete', phone: '967 44 30 98', rating: 4.8, reviewCount: 234, status: 'Healthy' },

    // MADRID
    { id: 'alcala', name: 'Catalano Alcalá de Henares', address: 'Pº de los Curas, 1, 28803', region: 'Madrid', phone: '910 32 74 79', rating: 4.7, reviewCount: 890, status: 'Healthy' },
    { id: 'aranjuez', name: 'Catalano Aranjuez', address: 'Calle del Foso, 56, 28300', region: 'Madrid', phone: '918 01 10 08', rating: 4.2, reviewCount: 345, status: 'Warning' },
    { id: 'fuenlabrada', name: 'Catalano Fuenlabrada', address: 'Calle de Portugal, 37, 28943', region: 'Madrid', phone: '914 96 03 51', rating: 4.5, reviewCount: 670, status: 'Healthy' },
    { id: 'torrejon', name: 'Catalano Torrejón de Ardoz', address: 'Avda. de la Constitución, 27, 28850', region: 'Madrid', phone: '910 22 21 41', rating: 4.3, reviewCount: 412, status: 'Healthy' }
];

const fetchClinics = async () => {
    // Simulating API delay
    return new Promise(resolve => {
        setTimeout(() => {
            // Enhance data with dynamic stats for Rankings
            const enhancedData = clinicsData.map(clinic => ({
                ...clinic,
                positiveSentiment: Math.round((clinic.rating / 5) * 100) - Math.floor(Math.random() * 5), // Rough correlation
                trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'flat' : 'down'
            }));
            resolve(enhancedData.sort((a, b) => b.rating - a.rating)); // Return sorted by rating
        }, 500);
    });
};

const fetchReviews = async (clinicId) => {
    // Generate realistic reviews based on clinic status
    const clinic = clinicsData.find(c => c.id === clinicId);
    if (!clinic) return [];

    const reviews = [];
    const count = 5; // Return 5 recent reviews

    const sentiments = {
        'Healthy': { stars: [4, 5], text: ['Excelente servicio', 'Muy profesionales', 'Trato inmejorable', 'Volveré sin duda', 'Todo perfecto'] },
        'Warning': { stars: [2, 3, 4, 5], text: ['Buen trato pero mucha espera', 'Correcto', 'Podrían mejorar la puntualidad', 'Contento con el doctor', 'Instalaciones algo antiguas'] },
        'Critical': { stars: [1, 2], text: ['Pésima atención', 'No me han solucionado nada', 'Muy caro para lo que ofrecen', 'Espera interminable', 'No lo recomiendo'] }
    };

    const type = sentiments[clinic.status] || sentiments['Healthy'];

    for (let i = 0; i < count; i++) {
        const rating = type.stars[Math.floor(Math.random() * type.stars.length)];
        const text = type.text[Math.floor(Math.random() * type.text.length)];

        reviews.push({
            id: `rev-${clinicId}-${i}`,
            reviewerName: `Usuario ${Math.floor(Math.random() * 1000)}`,
            rating: rating,
            comment: text,
            date: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
            clinicName: clinic.name
        });
    }

    return new Promise(resolve => {
        setTimeout(() => resolve(reviews), 600);
    });
};

const fetchClinicById = async (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const clinic = clinicsData.find(c => c.id === id);
            if (!clinic) return resolve(null);

            // Enrich with detailed detail-view specific data (mocked for UI)
            const extendedData = {
                ...clinic,
                response_time: "4h 15m",
                response_time_trend: Math.floor(Math.random() * 30) + 15,
                positive_sentiment: 92,
                sentiment_trend: "+0.5 este mes",
                evolution: [
                    { label: "Oct 1-15", value: 4.6 },
                    { label: "Oct 16-31", value: 4.7 },
                    { label: "Nov 1-15", value: 4.5 },
                    { label: "Nov 16-30", value: 4.8 },
                    { label: "Dic 1-15", value: 4.9 },
                    { label: "Dic 16-31", value: 4.8 }
                ],
                topics: [
                    { name: "Atención", count: 45, sentiment: "positive" },
                    { name: "Limpieza", count: 32, sentiment: "positive" },
                    { name: "Espera", count: 18, sentiment: "warning" },
                    { name: "Instalaciones", count: 12, sentiment: "positive" },
                    { name: "Precio", count: 8, sentiment: "neutral" }
                ],
                treatments: [
                    { name: "Limpieza Dental", score: 98 },
                    { name: "Implantes", score: 94 },
                    { name: "Ortodoncia", score: 89 },
                    { name: "Endodoncia", score: 76 }
                ]
            };
            resolve(extendedData);
        }, 300);
    });
};

module.exports = {
    fetchClinics,
    fetchReviews,
    fetchClinicById
};
