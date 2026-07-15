window.DARS = {
  id: 30,
  nomi: "Tasdiq — inkor",
  salom: "Salom, do'stim! Men Zukko. Bugun \"ha\" va \"yo'q\" so'zlarini o'rganamiz. Tasdiq va inkor!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "✅", nom: "Tasdiq", izoh: "Tasdiq — bu \"ha\", to'g'ri degani." },
        { rasm: "❌", nom: "Inkor", izoh: "Inkor — bu \"yo'q\", noto'g'ri degani." },
        { rasm: "👍", nom: "Ha", izoh: "Ha desak, biz roziligimizni bildiramiz." },
        { rasm: "👎", nom: "Yo'q", izoh: "Yo'q desak, biz rad etamiz." }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🍎", matn: "Olma — meva.", javob: true, izoh: "To'g'ri, olma mevadir!" },
        { rasm: "🐦", matn: "Qush uchadi.", javob: true, izoh: "Ha, qushlar ucha oladi!" },
        { rasm: "🐟", matn: "Baliq osmonda yashaydi.", javob: false, izoh: "Yo'q, baliq suvda yashaydi!" },
        { rasm: "🌙", matn: "Oy kechasi chiqadi.", javob: true, izoh: "To'g'ri, oy tunda ko'rinadi!" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        { rasm: "❓", savol: "Qaysi gap to'g'ri (tasdiq)?", togri: "🐶",
          variantlar: [ { belgi: "🐶", nom: "It vovullaydi" }, { belgi: "🐱", nom: "Mushuk uchadi" }, { belgi: "🐟", nom: "Baliq yuguradi" } ] },
        { rasm: "❓", savol: "Qaysi gap to'g'ri (tasdiq)?", togri: "☀️",
          variantlar: [ { belgi: "☀️", nom: "Quyosh yorug'lik beradi" }, { belgi: "🧊", nom: "Muz issiq" }, { belgi: "🪨", nom: "Tosh yumshoq" } ] },
        { rasm: "❓", savol: "Qaysi gap to'g'ri (tasdiq)?", togri: "🐝",
          variantlar: [ { belgi: "🐝", nom: "Asalari asal yig'adi" }, { belgi: "🐘", nom: "Fil mitti" }, { belgi: "🍋", nom: "Limon shirin" } ] }
      ]
    }
  ]
};
