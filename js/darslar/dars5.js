// Dars 5 — Bular qanday hid taratadi?
window.DARS = {
  id: 5,
  nomi: "Bular qanday hid taratadi?",
  salom: "Salom! Men Zukko. Burnimiz bilan qanday hidlarni sezishimizni birga o'rganamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "👃", nom: "Burun", izoh: "Burun bilan hidlarni sezamiz." },
        { rasm: "🌹", nom: "Atirgul", izoh: "Atirgul yoqimli hid taratadi." },
        { rasm: "🍞", nom: "Non", izoh: "Yangi non mazali hid taratadi." },
        { rasm: "🧄", nom: "Sarimsoq", izoh: "Sarimsoq o'tkir hid taratadi." },
        { rasm: "🗑️", nom: "Axlat", izoh: "Axlat yoqimsiz hid taratadi." }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🌹", matn: "Atirgul yoqimli hid taratadi.", javob: true, izoh: "To'g'ri! Atirgul juda yoqimli hidlaydi." },
        { rasm: "👃", matn: "Hidni ko'zimiz bilan sezamiz.", javob: false, izoh: "Yo'q! Hidni burun bilan sezamiz." },
        { rasm: "🍋", matn: "Limon yangi va yoqimli hid taratadi.", javob: true, izoh: "To'g'ri! Limon xushbo'y hidlaydi." },
        { rasm: "🗑️", matn: "Axlat yoqimli hid taratadi.", javob: false, izoh: "Yo'q! Axlat yoqimsiz hid taratadi." }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi birining hidi yo'q?",
          kartalar: ["🌹", "🍞", "🪨", "🧄"],
          ortiqcha: "🪨",
          izoh: "Tosh hid taratmaydi!"
        },
        {
          savol: "Qaysi birini hidlamaymiz, balki eshitamiz?",
          kartalar: ["🌸", "🔔", "🍊", "🍮"],
          ortiqcha: "🔔",
          izoh: "Qo'ng'iroqni hidlamaymiz, uning ovozini eshitamiz!"
        }
      ]
    }
  ]
};
