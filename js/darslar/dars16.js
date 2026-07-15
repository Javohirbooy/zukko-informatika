window.DARS = {
  id: 16,
  nomi: "Bizning sog'lom turmush tarzimiz",
  salom: "Salom, do'stim! Zukko bu yerda. Sog'lom bo'lish uchun tishni yuvamiz, yaxshi ovqatlanamiz va sport qilamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🪥", nom: "Tish yuvish", izoh: "Har kuni tishni yuvamiz." },
        { rasm: "🥗", nom: "To'g'ri ovqat", izoh: "Meva va sabzavot yeymiz." },
        { rasm: "😴", nom: "Uyqu", izoh: "Yaxshi uxlash sog'liq uchun foydali." },
        { rasm: "🌳", nom: "Toza havo", izoh: "Ochiq havoda sayr qilamiz." },
        { rasm: "🏃", nom: "Sport", izoh: "Harakat qilish tanani baquvvat qiladi." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Ertalab nima qilamiz? Boshidan bosing!",
      toplam: [
        { rasm: "😴", nom: "Uyg'onish" },
        { rasm: "🪥", nom: "Tish yuvish" },
        { rasm: "🧼", nom: "Yuvinish" },
        { rasm: "🥗", nom: "Nonushta" },
        { rasm: "🏃", nom: "Mashq" }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🪥", matn: "Har kuni tishni yuvish kerak.", javob: true, izoh: "To'g'ri! Tishlar toza bo'ladi." },
        { rasm: "🍭", matn: "Ko'p shirinlik yeyish foydali.", javob: false, izoh: "Yo'q! Ko'p shirinlik zararli." },
        { rasm: "🥗", matn: "Meva va sabzavot foydali.", javob: true, izoh: "To'g'ri! Ular sog'liq beradi." },
        { rasm: "😴", matn: "Yaxshi uxlash kerak.", javob: true, izoh: "To'g'ri! Uyqu tanani tiklaydi." }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi biri sog'lom odat emas?",
          kartalar: ["🪥", "🥗", "🏃", "🍭"],
          ortiqcha: "🍭",
          izoh: "Ko'p shirinlik sog'lom odat emas!"
        },
        {
          savol: "Qaysi biri foydali emas?",
          kartalar: ["🌳", "😴", "🍟", "🚴"],
          ortiqcha: "🍟",
          izoh: "Zararli ovqat foydali emas!"
        }
      ]
    }
  ]
};
