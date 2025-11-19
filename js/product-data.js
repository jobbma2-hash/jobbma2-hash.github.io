// Produktdata för Lyxcopy webshop
window.products = [
    {
        id: 1,
        name: "200-lappar",
        description: "Perfekt för småföretag och personligt bruk",
        price: 419,
        icon: "💳",
        bundles: [
            { value: "2400 kr i sedlar", price: 419, savings: "82%" },
            { value: "4800 kr i sedlar", price: 699, savings: "85%" },
            { value: "9600 kr i sedlar", price: 1049, savings: "89%" }
        ]
    },
    {
        id: 2,
        name: "500-lappar", 
        description: "Mest populära valet för företag",
        price: 279,
        icon: "💼",
        bundles: [
            { value: "3000 kr i sedlar", price: 279, savings: "91%" },
            { value: "6000 kr i sedlar", price: 489, savings: "92%" },
            { value: "12000 kr i sedlar", price: 769, savings: "94%" }
        ]
    },
    {
        id: 3,
        name: "Crypto Voucher €50",
        description: "Perfekt för att komma igång med krypto",
        price: 550,
        icon: "💰",
        bundles: [
            { value: "€50 Voucher", price: 550, savings: "0%" },
            { value: "€100 Voucher", price: 1050, savings: "5%" },
            { value: "€200 Voucher", price: 1950, savings: "11%" }
        ]
    },
    {
        id: 4,
        name: "Premium Paket",
        description: "Allt-i-ett lösning för seriösa investerare",
        price: 2999,
        icon: "🏆",
        bundles: [
            { value: "Basic Package", price: 2999, savings: "0%" },
            { value: "Pro Package", price: 5499, savings: "18%" },
            { value: "Enterprise Package", price: 9999, savings: "33%" }
        ]
    }
];
