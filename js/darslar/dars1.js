/* 1-dars: Bizning sezgi a'zolarimiz */
window.DARS = {
  id: 1,
  nomi: "Bizning sezgi a'zolarimiz",
  salom: "Salom, do'stim! Men Zukko! Bugun biz sezgi a'zolarimiz bilan tanishamiz. Ular bizga olamni bilishga yordam beradi!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "👁️", nom: "Ko'z", izoh: "Ko'z bilan rang, shakl va o'lchamni ko'ramiz." },
        { rasm: "👂", nom: "Quloq", izoh: "Quloq bilan tovushlarni eshitamiz." },
        { rasm: "👃", nom: "Burun", izoh: "Burun bilan hidlarni sezamiz." },
        { rasm: "👅", nom: "Til", izoh: "Til bilan shirin, nordon, sho'r va achchiq ta'mlarni bilamiz." },
        { rasm: "✋", nom: "Qo'l (teri)", izoh: "Teri bilan issiq, sovuq, yumshoq va qattiqni sezamiz." }
      ]
    },
    {
      tur: "moslash",
      sarlavha: "Moslashtir!",
      korsatma: "Avval buyumni bos, keyin uni sezadigan a'zoni bos!",
      juftlar: [
        { chap: "🌈", chapNom: "Kamalak", ong: "👁️", ongNom: "Ko'z" },
        { chap: "🎵", chapNom: "Musiqa", ong: "👂", ongNom: "Quloq" },
        { chap: "🌸", chapNom: "Gul", ong: "👃", ongNom: "Burun" },
        { chap: "🍋", chapNom: "Limon", ong: "👅", ongNom: "Til" },
        { chap: "🧊", chapNom: "Muz", ong: "✋", ongNom: "Qo'l" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        { rasm: "🌸", savol: "Gulning hidini qaysi a'zo bilan sezamiz?", togri: "👃",
          variantlar: [{ belgi: "👁️", nom: "Ko'z" }, { belgi: "👃", nom: "Burun" }, { belgi: "👅", nom: "Til" }] },
        { rasm: "🎶", savol: "Qo'shiqni qaysi a'zo bilan eshitamiz?", togri: "👂",
          variantlar: [{ belgi: "👂", nom: "Quloq" }, { belgi: "✋", nom: "Qo'l" }, { belgi: "👁️", nom: "Ko'z" }] },
        { rasm: "🍋", savol: "Limon nordonligini qaysi a'zo bilan bilamiz?", togri: "👅",
          variantlar: [{ belgi: "👃", nom: "Burun" }, { belgi: "👅", nom: "Til" }, { belgi: "👂", nom: "Quloq" }] },
        { rasm: "🌈", savol: "Kamalak ranglarini qaysi a'zo bilan ko'ramiz?", togri: "👁️",
          variantlar: [{ belgi: "👁️", nom: "Ko'z" }, { belgi: "👂", nom: "Quloq" }, { belgi: "✋", nom: "Qo'l" }] },
        { rasm: "🧊", savol: "Muzning sovuqligini qaysi a'zo bilan sezamiz?", togri: "✋",
          variantlar: [{ belgi: "👅", nom: "Til" }, { belgi: "👁️", nom: "Ko'z" }, { belgi: "✋", nom: "Qo'l" }] }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        { savol: "Qaysi biri sezgi a'zosi emas?", kartalar: ["👁️", "👂", "👃", "🍎"], ortiqcha: "🍎", izoh: "Olma — sezgi a'zosi emas, u meva!" },
        { savol: "Qaysi biri tovush chiqarmaydi?", kartalar: ["🎸", "🥁", "🌸", "🎺"], ortiqcha: "🌸", izoh: "Gul tovush chiqarmaydi, uni hidlaymiz!" },
        { savol: "Qaysi birining ta'mini bilib bo'lmaydi?", kartalar: ["🍋", "🍯", "🔔", "🍫"], ortiqcha: "🔔", izoh: "Qo'ng'iroqni yemaymiz, uni eshitamiz!" }
      ]
    }
  ]
};
