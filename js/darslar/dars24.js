window.DARS = {
  id: 24,
  nomi: "Labirint",
  salom: "Salom! Men Zukko. Bugun labirintdan yo'l topamiz. O'qlarga qarab harakat qilamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🧩", nom: "Labirint", izoh: "Labirint — chalkash yo'llar. To'g'ri yo'lni topamiz." },
        { rasm: "⬆️", nom: "Yuqoriga yur", izoh: "Labirintda yuqoriga qadam qo'yamiz." },
        { rasm: "➡️", nom: "O'ngga yur", izoh: "Labirintda o'ngga buriladi." },
        { rasm: "🎯", nom: "Maqsad", izoh: "Maqsad — yetib boradigan oxirgi joy." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Labirintdan uyga yetish uchun qadamlarni tartibla!",
      toplam: [
        { rasm: "🐭", nom: "Sichqon boshladi" },
        { rasm: "⬆️", nom: "Yuqoriga" },
        { rasm: "➡️", nom: "O'ngga" },
        { rasm: "⬆️", nom: "Yana yuqoriga" },
        { rasm: "🧀", nom: "Pishloqqa yetdi" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🧩",
          savol: "Labirintda to'g'ri yo'lni topsak qayerga yetamiz?",
          togri: "🎯",
          variantlar: [
            { belgi: "🎯", nom: "Maqsadga" },
            { belgi: "🌧️", nom: "Yomg'irga" },
            { belgi: "😴", nom: "Uyquga" }
          ]
        },
        {
          rasm: "➡️➡️",
          savol: "Uyga yetish uchun necha marta o'ngga burilish kerak?",
          togri: "2️⃣",
          variantlar: [
            { belgi: "1️⃣", nom: "Bir marta" },
            { belgi: "2️⃣", nom: "Ikki marta" },
            { belgi: "5️⃣", nom: "Besh marta" }
          ]
        },
        {
          rasm: "⬆️",
          savol: "Labirintda bu o'q qayerga yur deydi?",
          togri: "⬆️",
          variantlar: [
            { belgi: "⬆️", nom: "Yuqoriga" },
            { belgi: "⬇️", nom: "Pastga" },
            { belgi: "⬅️", nom: "Chapga" }
          ]
        },
        {
          rasm: "🐭🧀",
          savol: "Sichqon labirintdan nima izlaydi?",
          togri: "🧀",
          variantlar: [
            { belgi: "🧀", nom: "Pishloq" },
            { belgi: "📚", nom: "Kitob" },
            { belgi: "⚽", nom: "To'p" }
          ]
        }
      ]
    }
  ]
};
