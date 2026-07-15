window.DARS = {
  id: 15,
  nomi: "Tabiatdagi takrorlanish hodisalari",
  salom: "Salom! Men Zukko. Tabiatda ba'zi narsalar qayta-qayta takrorlanadi. Kunduz keladi, tun keladi, yana kunduz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🔁", nom: "Takrorlanish", izoh: "Ba'zi hodisalar qayta-qayta bo'ladi." },
        { rasm: "🌞", nom: "Kunduz", izoh: "Har kuni quyosh chiqadi." },
        { rasm: "🌙", nom: "Tun", izoh: "Har kechada oy chiqadi." },
        { rasm: "🌸", nom: "Fasllar", izoh: "Fasllar har yili takrorlanadi." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Kun qanday o'tadi? Ertalabdan boshlang!",
      toplam: [
        { rasm: "🌅", nom: "Tong" },
        { rasm: "☀️", nom: "Kunduz" },
        { rasm: "🌇", nom: "Kechqurun" },
        { rasm: "🌙", nom: "Tun" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🌙",
          savol: "Tundan keyin nima keladi?",
          togri: "🌅",
          variantlar: [
            { belgi: "🌅", nom: "Tong" },
            { belgi: "🌇", nom: "Kechqurun" },
            { belgi: "🌙", nom: "Yana tun" }
          ]
        },
        {
          rasm: "🔁",
          savol: "Qaysi biri har kuni takrorlanadi?",
          togri: "🌞",
          variantlar: [
            { belgi: "🎂", nom: "Tug'ilgan kun" },
            { belgi: "🌞", nom: "Quyosh chiqishi" },
            { belgi: "🎁", nom: "Sovg'a" }
          ]
        },
        {
          rasm: "🌸",
          savol: "Har yili nima takrorlanadi?",
          togri: "🍂",
          variantlar: [
            { belgi: "🍂", nom: "Fasllar" },
            { belgi: "🚗", nom: "Mashina" },
            { belgi: "📚", nom: "Kitob" }
          ]
        }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi biri takrorlanadigan tabiat hodisasi emas?",
          kartalar: ["🌞", "🌙", "🌸", "🚗"],
          ortiqcha: "🚗",
          izoh: "Mashina tabiat hodisasi emas!"
        },
        {
          savol: "Qaysi biri har kuni takrorlanmaydi?",
          kartalar: ["🌅", "🌇", "🎂", "🌙"],
          ortiqcha: "🎂",
          izoh: "Tug'ilgan kun har kuni bo'lmaydi!"
        }
      ]
    }
  ]
};
