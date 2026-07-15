// Dars 3 — Rang va shakl
window.DARS = {
  id: 3,
  nomi: "Rang va shakl",
  salom: "Salom! Men Zukko. Bugun ranglar va shakllar dunyosiga sayohat qilamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🔴", nom: "Qizil", izoh: "Qizil rang — olma va pomidor rangi." },
        { rasm: "🔵", nom: "Ko'k", izoh: "Ko'k rang — osmon va dengiz rangi." },
        { rasm: "🟡", nom: "Sariq", izoh: "Sariq rang — quyosh va limon rangi." },
        { rasm: "🟢", nom: "Yashil", izoh: "Yashil rang — o't va barg rangi." },
        { rasm: "⚪", nom: "Doira", izoh: "Doira — dumaloq shakl, to'p kabi." },
        { rasm: "🟦", nom: "Kvadrat", izoh: "Kvadratning to'rt tomoni teng." },
        { rasm: "🔺", nom: "Uchburchak", izoh: "Uchburchakning uchta burchagi bor." }
      ]
    },
    {
      tur: "moslash",
      sarlavha: "Moslashtir!",
      korsatma: "Avval yuqoridan birini bos, keyin uning juftini bos!",
      juftlar: [
        { chap: "🍊", chapNom: "Apelsin", ong: "⚪", ongNom: "Doira" },
        { chap: "📺", chapNom: "Televizor", ong: "🟦", ongNom: "Kvadrat" },
        { chap: "🍕", chapNom: "Pitsa bo'lagi", ong: "🔺", ongNom: "Uchburchak" },
        { chap: "🍎", chapNom: "Qizil olma", ong: "🔴", ongNom: "Qizil rang" }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi rang boshqalardan farq qiladi?",
          kartalar: ["🔴", "🔴", "🔵", "🔴"],
          ortiqcha: "🔵",
          izoh: "Ko'k rang ortiqcha, qolganlari qizil!"
        },
        {
          savol: "Qaysi shakl dumaloq emas?",
          kartalar: ["⚪", "⚪", "🔺", "⚪"],
          ortiqcha: "🔺",
          izoh: "Uchburchak dumaloq emas, qolganlari doira!"
        }
      ]
    }
  ]
};
