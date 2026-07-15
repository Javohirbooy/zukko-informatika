window.DARS = {
  id: 23,
  nomi: "Xavfsiz hudud",
  salom: "Salom, do'stim! Men Zukko. Bugun xavfsizlik qoidalarini o'rganamiz. Qayerda xavfsiz, qayerda xavfli?",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🚦", nom: "Svetofor", izoh: "Svetofor yo'lni xavfsiz kesishga yordam beradi." },
        { rasm: "🦺", nom: "Xavfsizlik jileti", izoh: "Jilet bizni ko'rinadigan qiladi, xavfsiz saqlaydi." },
        { rasm: "🚸", nom: "Piyodalar yo'li", izoh: "Bu belgi bolalar o'tadigan xavfsiz joy." },
        { rasm: "✋", nom: "To'xta", izoh: "Xavf bo'lsa to'xtaymiz va qaraymiz." }
      ]
    },
    {
      tur: "rostyolgon",
      sarlavha: "Rost yoki Yolg'on?",
      gaplar: [
        { rasm: "🟢", matn: "Yashil chiroqda yo'ldan o'tamiz.", javob: true, izoh: "Rost! Yashil chiroqda o'tish xavfsiz." },
        { rasm: "🔴", matn: "Qizil chiroqda yo'ldan yuguramiz.", javob: false, izoh: "Yolg'on! Qizil chiroqda to'xtaymiz." },
        { rasm: "🚸", matn: "Yo'lni piyodalar o'tish joyidan kechamiz.", javob: true, izoh: "Rost! Piyodalar yo'li xavfsiz joy." },
        { rasm: "🔥", matn: "Olov bilan o'ynash xavfsiz.", javob: false, izoh: "Yolg'on! Olov juda xavfli, o'ynamaymiz." },
        { rasm: "✋", matn: "Yo'lga chiqishdan oldin ikki tomonga qaraymiz.", javob: true, izoh: "Rost! Avval qaraymiz, keyin o'tamiz." }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi holat xavfli?",
          kartalar: ["🚦", "🦺", "🔥", "🚸"],
          ortiqcha: "🔥",
          izoh: "Olov xavfli! Svetofor, jilet, piyoda yo'li — bular xavfsiz."
        },
        {
          savol: "Qaysi biri xavfsizlik yordamchisi emas?",
          kartalar: ["🚦", "🦺", "👮", "🍬"],
          ortiqcha: "🍬",
          izoh: "Konfet xavfsizlik yordamchisi emas! Svetofor, jilet, politsiyachi yordam beradi."
        }
      ]
    }
  ]
};
