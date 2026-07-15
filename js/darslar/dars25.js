window.DARS = {
  id: 25,
  nomi: "Maktabdan uyga qaytish yo'li",
  salom: "Salom, do'stim! Men Zukko. Bugun maktabdan uyga xavfsiz qaytishni o'rganamiz. Eng xavfsiz yo'lni tanlaymiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🏫", nom: "Maktab", izoh: "Maktab — o'qiydigan joyimiz. Uydan yo'l shu yerdan boshlanadi." },
        { rasm: "🚸", nom: "Xavfsiz o'tish", izoh: "Yo'lni piyodalar o'tish joyidan kechamiz." },
        { rasm: "🚦", nom: "Svetofor", izoh: "Yashil chiroqni kutamiz, keyin o'tamiz." },
        { rasm: "🏠", nom: "Uy", izoh: "Uy — xavfsiz yetib boradigan joyimiz." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Maktabdan uyga yo'lni tartib bilan bos!",
      toplam: [
        { rasm: "🏫", nom: "Maktab" },
        { rasm: "🚸", nom: "Piyoda yo'lida" },
        { rasm: "🚦", nom: "Svetoforda" },
        { rasm: "🏠", nom: "Uy" }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🚸", matn: "Yo'lni piyodalar o'tish joyidan kechamiz.", javob: true, izoh: "Rost! Bu eng xavfsiz joy." },
        { rasm: "🟢", matn: "Yashil chiroqda yo'ldan o'tamiz.", javob: true, izoh: "Rost! Yashil chiroq o'tishga ruxsat beradi." },
        { rasm: "🚗", matn: "Yo'lda mashinalar orasidan yuguramiz.", javob: false, izoh: "Yolg'on! Bu juda xavfli. Piyoda yo'lidan yuramiz." },
        { rasm: "🧑‍🤝‍🧑", matn: "Kichkina bolalar yo'lda kattalar bilan yuradi.", javob: true, izoh: "Rost! Kattalar bilan yurish xavfsiz." }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🛣️",
          savol: "Uyga qaysi yo'l xavfsizroq?",
          togri: "🚸",
          variantlar: [
            { belgi: "🚸", nom: "Piyoda yo'li" },
            { belgi: "🚗", nom: "Mashina yo'li" },
            { belgi: "🌊", nom: "Suv bo'yi" }
          ]
        },
        {
          rasm: "🚦",
          savol: "Yo'ldan qaysi chiroqda o'tamiz?",
          togri: "🟢",
          variantlar: [
            { belgi: "🔴", nom: "Qizil" },
            { belgi: "🟢", nom: "Yashil" },
            { belgi: "🟡", nom: "Sariq" }
          ]
        },
        {
          rasm: "🏫🏠",
          savol: "Ikki yo'ldan qaysi biri qisqaroq bo'lsa yaxshi?",
          togri: "➖",
          variantlar: [
            { belgi: "➖", nom: "Qisqa yo'l" },
            { belgi: "📏", nom: "Uzun yo'l" },
            { belgi: "🌀", nom: "Chalkash yo'l" }
          ]
        }
      ]
    }
  ]
};
