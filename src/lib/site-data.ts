export const PHONE = "8308830854";
export const TEL = `tel:+91${PHONE}`;
export const waLink = (msg = "Namaste, I would like to enquire about Shri Vishwarekha Ayurveda.") =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`;

export type Product = { name: string; uses: string };
export type Category = { title: string; subtitle: string; items: Product[] };

// Uses are general traditional Ayurvedic descriptions — not cure claims. To be approved by the doctors.
export const productCategories: Category[] = [
  {
    title: "Ghrit",
    subtitle: "Medicated Ghee",
    items: [
      { name: "Mahatiktak Ghrit", uses: "Traditionally used to support healthy skin and balance Pitta dosha." },
      { name: "Maha Mayur Ghrit", uses: "Classically used to support the head, neck and sense organs." },
      { name: "Panchatikta Ghrit", uses: "Traditionally used to support skin, joints and blood purification." },
      { name: "Aja Ghrit", uses: "Classically used to support strength and respiratory wellbeing." },
      { name: "Bastand Ghrit", uses: "Traditionally used to support male reproductive wellness." },
      { name: "Kalyanak Ghrit", uses: "Classically used to support mind, memory and emotional balance." },
      { name: "Dadimadi Ghrit", uses: "Traditionally used to support digestion and healthy blood levels." },
      { name: "Phala Ghrit", uses: "Classically used to support female reproductive health." },
    ],
  },
  {
    title: "Tail",
    subtitle: "Medicated Oils",
    items: [
      { name: "Dashmool Tail", uses: "Traditionally used for massage to calm Vata and ease body stiffness." },
      { name: "Dhanvantara Tail", uses: "Classically used for nourishing massage and post-natal care." },
      { name: "Sahacharadi Tail", uses: "Traditionally used to support the lower limbs and nerves." },
      { name: "Punarnavadi Tail", uses: "Classically used to support healthy fluid balance in the body." },
      { name: "Mutrakrichchhahara Tail", uses: "Traditionally used to support urinary wellness." },
      { name: "Prameha Mihir Tail", uses: "Classically used as external support in metabolic care." },
      { name: "Kesharanjan Tail", uses: "Traditionally used to nourish hair and scalp." },
      { name: "Karkatak Tail", uses: "Classically used in external therapies under guidance." },
      { name: "Majja Tail", uses: "Traditionally used to nourish bones and tissues." },
      { name: "Mahanarayan Tail", uses: "Classically used for massage to support joints and muscles." },
      { name: "Bala Tail", uses: "Traditionally used to support strength and nerve health." },
      { name: "Vatsakadi Tail", uses: "Traditionally used as support in skin disorders such as psoriasis." },
      { name: "Brahmi Tail", uses: "With Jatamansi and Ashwagandha — traditionally used to calm the mind and support sleep." },
    ],
  },
  {
    title: "Kalpa",
    subtitle: "Herbal Preparations",
    items: [
      { name: "Shatavari Kalpa", uses: "Traditionally used to support women's health and vitality." },
      { name: "Durva Kalpa", uses: "Classically used for its cooling, soothing properties." },
      { name: "Brihat Haridrakhand", uses: "Traditionally used to support skin health and seasonal wellness." },
      { name: "Yashti Kashmari Kalpa", uses: "Classically used to support throat and digestive comfort." },
    ],
  },
  {
    title: "Herbal Cosmetics",
    subtitle: "Handmade by Dr. Tanvi Randive",
    items: [
      { name: "Aloe Vera Soap", uses: "A gentle daily cleanser traditionally valued for a refreshing, soothing feel. Individual skin response may vary." },
      { name: "Charcoal Soap", uses: "A cleansing soap designed to help lift everyday dirt and excess surface oil." },
      { name: "Ubtan Soap", uses: "Inspired by traditional ubtan, for cleansing and a fresh, polished skin feel." },
      { name: "Multani Soap", uses: "Inspired by Multani mitti, commonly used in skincare routines for oily-feeling skin." },
      { name: "Rose Skin Toner", uses: "A refreshing toner for a light, fresh-feeling skincare routine." },
      { name: "Aloe Vera Skin Toner", uses: "A refreshing toner designed to leave skin feeling comfortable and hydrated." },
      { name: "Ubtan", uses: "A traditional herbal skincare blend used as part of a cleansing and grooming routine." },
      { name: "Rose Gel", uses: "A lightweight gel for a refreshing, soothing-feeling skincare routine." },
      { name: "Aloe Vera Gel", uses: "A lightweight gel traditionally used to soothe and moisturize the skin." },
      { name: "Rose Soap", uses: "Natural herbal soap with rose — gentle daily cleansing with a soft fragrance." },
      { name: "Cucumber Soap", uses: "Natural herbal soap with cucumber — cooling, refreshing daily cleansing." },
    ],
  },
];

export const branches = [
  { name: "Rajarampuri, Kolhapur", hours: "Monday–Saturday · 5:00 PM–7:30 PM", address: "S-202, Padmaja Apartment, 2nd Floor, Near Monte Carlo Showroom, 1st Lane, Rajarampuri, Kolhapur", map: "https://share.google/x664ufst2wGjzKAB8" },
  { name: "Dudhali, Kolhapur", hours: "Monday–Saturday · 10:30 AM–1:30 PM", address: "Plot No. 91, 1st Floor, Opp. Ingale Sonography, Hari Mandir Road, Dhudhali, Rankala, Kolhapur", map: "https://share.google/TYr7TTXvVJOhXL7ug" },
  { name: "Pune", hours: "Second Sunday of every month · 12:00 PM–5:00 PM", address: "Aruneet Polyclinic, J. M. Road, Near Chh. Sambhaji Maharaj Garden, Pune", map: "https://maps.app.goo.gl/ArW6dBjHaHiouB6q7?g_st=aw" },
  { name: "Mumbai", hours: "Fourth Sunday of every month · 11:00 AM–4:00 PM", address: "Park Polyclinic, Near Shivasena Bhavan, Shivaji Park, Dadar West, Mumbai", map: "https://share.google/xlRk8f1fIasOlwcHH" },
];
