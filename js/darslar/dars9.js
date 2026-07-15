// Dars 9 — Bizning dunyoqarashimiz
window.DARS = {
  id: 9,
  nomi: "Bizning dunyoqarashimiz",
  salom: "Salom, aziz do'stim! Men Zukko. Endi beshta sezgimizni birga takrorlaymiz. Biz olamni sezgilarimiz bilan qabul qilamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "👁️", nom: "Ko'z", izoh: "Ko'z bilan rang, shakl va harakatni ko'ramiz." },
        { rasm: "👂", nom: "Quloq", izoh: "Quloq bilan tovushlarni eshitamiz." },
        { rasm: "👃", nom: "Burun", izoh: "Burun bilan hidlarni sezamiz." },
        { rasm: "👅", nom: "Til", izoh: "Til bilan ta'mni sezamiz." },
        { rasm: "✋", nom: "Teri", izoh: "Teri bilan issiq, sovuq va yumshoqni sezamiz." }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🌈",
          savol: "Kamalak rangini qaysi a'zo bilan ko'ramiz?",
          togri: "👁️",
          variantlar: [
            { belgi: "👁️", nom: "Ko'z" },
            { belgi: "👂", nom: "Quloq" },
            { belgi: "👅", nom: "Til" }
          ]
        },
        {
          rasm: "🎵",
          savol: "Musiqani qaysi a'zo bilan eshitamiz?",
          togri: "👂",
          variantlar: [
            { belgi: "👃", nom: "Burun" },
            { belgi: "👂", nom: "Quloq" },
            { belgi: "✋", nom: "Qo'l" }
          ]
        },
        {
          rasm: "🌹",
          savol: "Gulning hidini qaysi a'zo bilan sezamiz?",
          togri: "👃",
          variantlar: [
            { belgi: "👁️", nom: "Ko'z" },
            { belgi: "👃", nom: "Burun" },
            { belgi: "👅", nom: "Til" }
          ]
        },
        {
          rasm: "🍯",
          savol: "Asalning shirin ta'mini qaysi a'zo sezadi?",
          togri: "👅",
          variantlar: [
            { belgi: "👅", nom: "Til" },
            { belgi: "👂", nom: "Quloq" },
            { belgi: "👃", nom: "Burun" }
          ]
        },
        {
          rasm: "🧊",
          savol: "Muzning sovuqligini qaysi a'zo sezadi?",
          togri: "✋",
          variantlar: [
            { belgi: "👁️", nom: "Ko'z" },
            { belgi: "✋", nom: "Teri" },
            { belgi: "👂", nom: "Quloq" }
          ]
        }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "👁️", matn: "Ranglarni ko'z bilan ko'ramiz.", javob: true, izoh: "To'g'ri! Ko'z ranglarni ko'radi." },
        { rasm: "👂", matn: "Hidni quloq bilan sezamiz.", javob: false, izoh: "Yo'q! Hidni burun bilan sezamiz." },
        { rasm: "👅", matn: "Ta'mni til bilan sezamiz.", javob: true, izoh: "To'g'ri! Til ta'mni sezadi." },
        { rasm: "✋", matn: "Issiq va sovuqni teri bilan sezamiz.", javob: true, izoh: "To'g'ri! Teri issiq va sovuqni sezadi." },
        { rasm: "👃", matn: "Tovushni burun bilan eshitamiz.", javob: false, izoh: "Yo'q! Tovushni quloq bilan eshitamiz." }
      ]
    }
  ]
};
