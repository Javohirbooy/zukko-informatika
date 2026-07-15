// Dars 7 — Bizning his-tuyg'ularimiz
window.DARS = {
  id: 7,
  nomi: "Bizning his-tuyg'ularimiz",
  salom: "Salom! Men Zukko. Terimiz bilan issiq, sovuq, yumshoq va qattiqni qanday sezishimizni o'rganamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "✋", nom: "Qo'l", izoh: "Qo'l va teri bilan buyumlarni ushlab sezamiz." },
        { rasm: "🔥", nom: "Issiq", izoh: "Olov va choy issiq bo'ladi." },
        { rasm: "❄️", nom: "Sovuq", izoh: "Muz va qor sovuq bo'ladi." },
        { rasm: "🧸", nom: "Yumshoq", izoh: "O'yinchoq ayiq yumshoq va mayin." },
        { rasm: "🪨", nom: "Qattiq", izoh: "Tosh qattiq bo'ladi." }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🧊",
          savol: "Muzga tegsangiz nimani his qilasiz?",
          togri: "❄️",
          variantlar: [
            { belgi: "🔥", nom: "Issiq" },
            { belgi: "❄️", nom: "Sovuq" },
            { belgi: "🧸", nom: "Yumshoq" }
          ]
        },
        {
          rasm: "🔥",
          savol: "Olovga yaqinlashsangiz nimani his qilasiz?",
          togri: "🔥",
          variantlar: [
            { belgi: "❄️", nom: "Sovuq" },
            { belgi: "🔥", nom: "Issiq" },
            { belgi: "🪨", nom: "Qattiq" }
          ]
        },
        {
          rasm: "🧸",
          savol: "O'yinchoq ayiq qanday seziladi?",
          togri: "🧸",
          variantlar: [
            { belgi: "🪨", nom: "Qattiq" },
            { belgi: "🧸", nom: "Yumshoq" },
            { belgi: "🔥", nom: "Issiq" }
          ]
        }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi biri sovuq emas?",
          kartalar: ["❄️", "🧊", "🔥", "⛄"],
          ortiqcha: "🔥",
          izoh: "Olov issiq, qolganlari sovuq!"
        },
        {
          savol: "Qaysi biri yumshoq emas?",
          kartalar: ["🧸", "🪨", "☁️", "🛏️"],
          ortiqcha: "🪨",
          izoh: "Tosh qattiq, qolganlari yumshoq!"
        }
      ]
    }
  ]
};
