window.DARS = {
  id: 22,
  nomi: "Uzun — qisqa",
  salom: "Salom! Men Zukko. Bugun uzun va qisqa so'zlarini o'rganamiz. Qaysi yo'l uzun, qaysi biri qisqa?",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "📏", nom: "Uzun", izoh: "Uzun — juda katta, cho'zilgan narsa." },
        { rasm: "➖", nom: "Qisqa", izoh: "Qisqa — kichik, kaltagina narsa." },
        { rasm: "🐍", nom: "Ilon uzun", izoh: "Ilon uzun bo'ladi." },
        { rasm: "🐛", nom: "Qurt qisqa", izoh: "Qurtcha qisqa bo'ladi." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Qisqadan boshlab, uzunga qarab bosing!",
      toplam: [
        { rasm: "➖", nom: "Qisqa" },
        { rasm: "📐", nom: "O'rtacha" },
        { rasm: "📏", nom: "Uzun" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🐍🐛",
          savol: "Ilon va qurt — qaysi biri uzunroq?",
          togri: "🐍",
          variantlar: [
            { belgi: "🐍", nom: "Ilon uzun" },
            { belgi: "🐛", nom: "Qurt qisqa" },
            { belgi: "🐜", nom: "Chumoli" }
          ]
        },
        {
          rasm: "🚶🚗",
          savol: "Kim tezroq yetib boradi?",
          togri: "🚗",
          variantlar: [
            { belgi: "🚶", nom: "Piyoda sekin" },
            { belgi: "🚗", nom: "Mashina tez" },
            { belgi: "🐢", nom: "Toshbaqa sekin" }
          ]
        },
        {
          rasm: "📏➖",
          savol: "Qaysi biri qisqa?",
          togri: "➖",
          variantlar: [
            { belgi: "📏", nom: "Uzun" },
            { belgi: "➖", nom: "Qisqa" },
            { belgi: "📐", nom: "O'rtacha" }
          ]
        },
        {
          rasm: "🛤️",
          savol: "Qisqa yo'ldan yursak nima bo'ladi?",
          togri: "⏱️",
          variantlar: [
            { belgi: "⏱️", nom: "Tez yetamiz" },
            { belgi: "🐌", nom: "Sekin qolamiz" },
            { belgi: "😴", nom: "Uxlaymiz" }
          ]
        }
      ]
    }
  ]
};
