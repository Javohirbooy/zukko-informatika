window.DARS = {
  id: 11,
  nomi: "Oldin — keyin",
  salom: "Salom! Bu Zukko. Ba'zi narsalar oldin, ba'zilari keyin bo'ladi. Kel, fasllar bilan o'rganamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "⏮️", nom: "Oldin", izoh: "Oldin — bu birinchi bo'lgan narsa." },
        { rasm: "⏭️", nom: "Keyin", izoh: "Keyin — bu undan so'ng bo'ladigan narsa." },
        { rasm: "🌸", nom: "Bahor", izoh: "Bahordan keyin yoz keladi." },
        { rasm: "🍂", nom: "Kuz", izoh: "Kuzdan oldin yoz bo'ladi." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Fasllarni tartib bilan bosing. Bahordan boshlang!",
      toplam: [
        { rasm: "🌸", nom: "Bahor" },
        { rasm: "☀️", nom: "Yoz" },
        { rasm: "🍂", nom: "Kuz" },
        { rasm: "❄️", nom: "Qish" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🌸",
          savol: "Bahordan keyin qaysi fasl keladi?",
          togri: "☀️",
          variantlar: [
            { belgi: "☀️", nom: "Yoz" },
            { belgi: "🍂", nom: "Kuz" },
            { belgi: "❄️", nom: "Qish" }
          ]
        },
        {
          rasm: "🍂",
          savol: "Kuzdan oldin qaysi fasl bo'ladi?",
          togri: "☀️",
          variantlar: [
            { belgi: "❄️", nom: "Qish" },
            { belgi: "☀️", nom: "Yoz" },
            { belgi: "🌸", nom: "Bahor" }
          ]
        },
        {
          rasm: "❄️",
          savol: "Qishdan keyin qaysi fasl keladi?",
          togri: "🌸",
          variantlar: [
            { belgi: "🌸", nom: "Bahor" },
            { belgi: "🍂", nom: "Kuz" },
            { belgi: "☀️", nom: "Yoz" }
          ]
        }
      ]
    }
  ]
};
