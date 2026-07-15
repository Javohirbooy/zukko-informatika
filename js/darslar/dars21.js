window.DARS = {
  id: 21,
  nomi: "Yo'l va yo'nalish",
  salom: "Salom, do'stim! Men Zukko. Bugun yo'nalishlarni o'rganamiz. O'qlar yo'l ko'rsatadi!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "⬆️", nom: "Yuqoriga", izoh: "Yuqoriga — oldinga, tepa tomon yuramiz." },
        { rasm: "⬇️", nom: "Pastga", izoh: "Pastga — quyi tomon yuramiz." },
        { rasm: "⬅️", nom: "Chapga", izoh: "Chapga — chap tomonga buriladi." },
        { rasm: "➡️", nom: "O'ngga", izoh: "O'ngga — o'ng tomonga buriladi." }
      ]
    },
    {
      tur: "tartib",
      sarlavha: "Ketma-ketlikni tuz!",
      korsatma: "Uydan maktabga yo'lni tartib bilan bos!",
      toplam: [
        { rasm: "🏠", nom: "Uy" },
        { rasm: "➡️", nom: "O'ngga bur" },
        { rasm: "⬆️", nom: "Yuqoriga yur" },
        { rasm: "🏫", nom: "Maktab" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🚗➡️",
          savol: "Mashina qaysi tomonga burildi?",
          togri: "➡️",
          variantlar: [
            { belgi: "⬅️", nom: "Chapga" },
            { belgi: "➡️", nom: "O'ngga" },
            { belgi: "⬆️", nom: "Yuqoriga" }
          ]
        },
        {
          rasm: "⬆️",
          savol: "Bu o'q qayerga yur deydi?",
          togri: "⬆️",
          variantlar: [
            { belgi: "⬆️", nom: "Yuqoriga" },
            { belgi: "⬇️", nom: "Pastga" },
            { belgi: "➡️", nom: "O'ngga" }
          ]
        },
        {
          rasm: "🚶⬅️",
          savol: "Bola qaysi tomonga yurdi?",
          togri: "⬅️",
          variantlar: [
            { belgi: "➡️", nom: "O'ngga" },
            { belgi: "⬅️", nom: "Chapga" },
            { belgi: "⬇️", nom: "Pastga" }
          ]
        },
        {
          rasm: "🚦",
          savol: "Yo'lni to'g'ri kesib o'tish uchun avval qayerga qaraymiz?",
          togri: "⬅️",
          variantlar: [
            { belgi: "⬅️", nom: "Chapga qaraymiz" },
            { belgi: "⬆️", nom: "Tepaga" },
            { belgi: "⬇️", nom: "Pastga" }
          ]
        }
      ]
    }
  ]
};
