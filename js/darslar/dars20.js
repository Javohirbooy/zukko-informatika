window.DARS = {
  id: 20,
  nomi: "Uzoq — yaqin",
  salom: "Salom! Men Zukko. Bugun uzoq va yaqin so'zlarini o'rganamiz. Nima yaqin, nima uzoq?",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🔭", nom: "Uzoq", izoh: "Uzoq — juda naridagi joy. Yulduzlar uzoqda." },
        { rasm: "👀", nom: "Yaqin", izoh: "Yaqin — yonimizdagi joy. Ko'zga yaqin ko'rinadi." },
        { rasm: "🌟", nom: "Yulduz uzoqda", izoh: "Yulduzlar osmonda, juda uzoqda." },
        { rasm: "🖐️", nom: "Qo'l yaqin", izoh: "Qo'limiz o'zimizga juda yaqin." }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🌙",
          savol: "Qaysi biri bizdan juda uzoqda?",
          togri: "🌙",
          variantlar: [
            { belgi: "🌙", nom: "Oy uzoqda" },
            { belgi: "🖐️", nom: "Qo'l yaqin" },
            { belgi: "👟", nom: "Oyoq kiyim yaqin" }
          ]
        },
        {
          rasm: "👃",
          savol: "Qaysi biri bizga eng yaqin?",
          togri: "👃",
          variantlar: [
            { belgi: "☀️", nom: "Quyosh uzoqda" },
            { belgi: "👃", nom: "Burun yaqin" },
            { belgi: "⭐", nom: "Yulduz uzoqda" }
          ]
        },
        {
          rasm: "🏠",
          savol: "Yulduz va uy — qaysi biri uzoqroq?",
          togri: "⭐",
          variantlar: [
            { belgi: "🏠", nom: "Uy yaqin" },
            { belgi: "⭐", nom: "Yulduz uzoq" },
            { belgi: "🌳", nom: "Daraxt yaqin" }
          ]
        },
        {
          rasm: "📖",
          savol: "Qo'limizdagi kitob bizga qanday?",
          togri: "🤏",
          variantlar: [
            { belgi: "🔭", nom: "Uzoq" },
            { belgi: "🤏", nom: "Yaqin" },
            { belgi: "🚀", nom: "Juda uzoq" }
          ]
        }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "☀️", matn: "Quyosh bizga juda yaqin.", javob: false, izoh: "Yolg'on! Quyosh juda uzoqda." },
        { rasm: "🖐️", matn: "Bizning qo'limiz o'zimizga yaqin.", javob: true, izoh: "Rost! Qo'l juda yaqin." },
        { rasm: "⭐", matn: "Yulduzlar osmonda uzoqda.", javob: true, izoh: "Rost! Yulduzlar juda uzoqda." },
        { rasm: "👟", matn: "Oyog'imizdagi poyabzal uzoqda.", javob: false, izoh: "Yolg'on! Poyabzal bizga yaqin." }
      ]
    }
  ]
};
