window.DARS = {
  id: 33,
  nomi: "Samarali natija",
  salom: "Salom, qahramonim! Men Zukko. Bu bizning oxirgi darsimiz! Ishni to'g'ri va oxirigacha qilishni o'rganamiz. Yashasin!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "✔️", nom: "To'g'ri", izoh: "Ishni to'g'ri bajarsak, natija chiroyli bo'ladi." },
        { rasm: "⏰", nom: "O'z vaqtida", izoh: "Ishni o'z vaqtida qilsak, kechikmaymiz." },
        { rasm: "🏁", nom: "Oxirigacha", izoh: "Boshlagan ishni oxirigacha yetkazamiz." },
        { rasm: "👍", nom: "Foydali", izoh: "Ish foydali bo'lsa, hammaga yordam beradi." }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🏁", matn: "Boshlagan ishni oxirigacha qilish yaxshi.", javob: true, izoh: "Rost! Ishni tugatish kerak." },
        { rasm: "⏰", matn: "Darsga kechikish yaxshi.", javob: false, izoh: "Yolg'on! O'z vaqtida kelish kerak." },
        { rasm: "✔️", matn: "Ishni to'g'ri bajarish muhim.", javob: true, izoh: "Rost! To'g'ri ishlash muhim." },
        { rasm: "🧹", matn: "O'z ishingni tozalab qo'yish yaxshi.", javob: true, izoh: "Rost! Tartib yaxshi odat." }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        { rasm: "🏠", savol: "Uyning qismi qaysi?", togri: "🚪",
          variantlar: [ { belgi: "🚪", nom: "Eshik" }, { belgi: "🐟", nom: "Baliq" }, { belgi: "🍌", nom: "Banan" } ] },
        { rasm: "🔄", savol: "Issiqning aksi nima?", togri: "❄️",
          variantlar: [ { belgi: "❄️", nom: "Sovuq" }, { belgi: "🔥", nom: "Issiq" }, { belgi: "☀️", nom: "Quyosh" } ] },
        { rasm: "🧮", savol: "Matematikaga nima kerak?", togri: "📐",
          variantlar: [ { belgi: "📐", nom: "Chizg'ich" }, { belgi: "🍦", nom: "Muzqaymoq" }, { belgi: "🎈", nom: "Sharcha" } ] },
        { rasm: "❓", savol: "Qaysi gap rost?", togri: "🐦",
          variantlar: [ { belgi: "🐦", nom: "Qush uchadi" }, { belgi: "🐘", nom: "Fil uchadi" }, { belgi: "🪨", nom: "Tosh suzadi" } ] }
      ]
    }
  ]
};
