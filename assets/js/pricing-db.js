/* ==========================================================================
   AL-KHAT AL-MUDI | PRICING & LOCATION DATABASE
   ========================================================================== */

const SYSTEM_DB = {
    // 1. WORLD MAP LOCATIONS (Coordinates optimized for standard SVG map)
    "locations": [
        // MIDDLE EAST
        { id: "jo", name: "Amman (HQ)", top: "42%", left: "57%", phone: "+962 78 077 0085", active: true },
        { id: "ae", name: "Dubai", top: "46%", left: "63%", phone: "+971 50 123 4567" },
        { id: "sa", name: "Riyadh", top: "46%", left: "60%", phone: "+966 11 444 5555" },
        { id: "eg", name: "Cairo", top: "44%", left: "55%", phone: "+20 2 2345 6789" },
        { id: "tr", name: "Istanbul", top: "36%", left: "56%", phone: "+90 212 333 4444" },

        // EUROPE
        { id: "uk", name: "London", top: "27%", left: "48%", phone: "+44 20 7946 0123" },
        { id: "fr", name: "Paris", top: "30%", left: "49%", phone: "+33 1 44 55 66 77" },
        { id: "de", name: "Berlin", top: "28%", left: "51%", phone: "+49 30 123456" },
        { id: "ru", name: "Moscow", top: "25%", left: "58%", phone: "+7 495 123-45-67" },
        { id: "nl", name: "Amsterdam", top: "28%", left: "50%", phone: "+31 20 123 4567" },

        // AMERICAS
        { id: "us_ny", name: "New York", top: "33%", left: "28%", phone: "+1 212 555 0199" },
        { id: "us_ca", name: "Los Angeles", top: "36%", left: "15%", phone: "+1 310 555 0100" },
        { id: "br", name: "Brasilia", top: "70%", left: "32%", phone: "+55 61 3333 4444" },

        // ASIA & OTHERS
        { id: "cn", name: "Beijing", top: "34%", left: "78%", phone: "+86 10 1234 5678" },
        { id: "jp", name: "Tokyo", top: "35%", left: "85%", phone: "+81 3 1234 5678" },
        { id: "in", name: "New Delhi", top: "45%", left: "70%", phone: "+91 11 2222 3333" },
        { id: "au", name: "Sydney", top: "80%", left: "88%", phone: "+61 2 9999 8888" }
    ],

    // 2. TRANSLATION RATES
    "rates": {
        "base_per_page": 10.00, 
        "urgency_multiplier": 1.5,
        "currency": "JOD"
    },

    // 3. DOCUMENT TYPES
    "documents": [
        { id: "general", label: "General Text / Letter", price_mod: 1.0 },
        { id: "birth_cert", label: "Birth Certificate", price_mod: 1.2 },
        { id: "marriage_cert", label: "Marriage Contract", price_mod: 1.2 },
        { id: "transcript", label: "University Transcript", price_mod: 1.5 },
        { id: "medical", label: "Medical Report", price_mod: 1.8 },
        { id: "legal_contract", label: "Legal Contract (Per Page)", price_mod: 2.0 },
        { id: "passport", label: "Passport / ID Card", price_mod: 1.0 }
    ]
};