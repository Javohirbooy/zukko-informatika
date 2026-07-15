window.DARS = {
  id: 31,
  nomi: "Rost va yolg'on",
  salom: "Salom! Men Zukko. Bugun rost va yolg'onni ajratamiz. Qaysi gap to'g'ri, qaysi biri noto'g'ri?",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "✅", nom: "Rost", izoh: "Rost — bu haqiqat, to'g'ri gap." },
        { rasm: "❌", nom: "Yolg'on", izoh: "Yolg'on — bu noto'g'ri, haqiqat emas." },
        { rasm: "🤔", nom: "O'ylash", izoh: "Gap rostmi yoki yolg'onmi, o'ylab ko'ramiz." }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🌞", matn: "Quyosh kunduzi porlaydi.", javob: true, izoh: "Rost, quyosh kunduzi chiqadi!" },
        { rasm: "🐘", matn: "Fil juda kichkina hayvon.", javob: false, izoh: "Yolg'on, fil juda katta!" },
        { rasm: "❄️", matn: "Qishda qor yog'adi.", javob: true, izoh: "Rost, qishda sovuq va qor bo'ladi!" },
        { rasm: "🐟", matn: "Baliq suvda suzadi.", javob: true, izoh: "Rost, baliqlar suvda yashaydi!" },
        { rasm: "🍋", matn: "Limon juda shirin.", javob: false, izoh: "Yolg'on, limon nordon!" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        { rasm: "❓", savol: "Qaysi gap rost?", togri: "🐦",
          variantlar: [ { belgi: "🐦", nom: "Qush qanoti bor" }, { belgi: "🐟", nom: "Baliq yuradi" }, { belgi: "🌳", nom: "Daraxt uchadi" } ] },
        { rasm: "❓", savol: "Qaysi gap rost?", togri: "🍯",
          variantlar: [ { belgi: "🍯", nom: "Asal shirin" }, { belgi: "🧊", nom: "Muz issiq" }, { belgi: "🌙", nom: "Oy kunduzi porlaydi" } ] },
        { rasm: "❓", savol: "Qaysi gap rost?", togri: "🐢",
          variantlar: [ { belgi: "🐢", nom: "Toshbaqa sekin yuradi" }, { belgi: "🐇", nom: "Quyon sekin" }, { belgi: "🐆", nom: "Yaguar sekin" } ] }
      ]
    }
  ]
};
