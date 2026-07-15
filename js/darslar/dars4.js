// Dars 4 — Biz nimalarni eshitamiz?
window.DARS = {
  id: 4,
  nomi: "Biz nimalarni eshitamiz?",
  salom: "Salom, do'stim! Men Zukko. Quloqlarimiz bilan qanday tovushlarni eshitishimizni o'rganamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "👂", nom: "Quloq", izoh: "Quloq bilan barcha tovushlarni eshitamiz." },
        { rasm: "🔊", nom: "Baland tovush", izoh: "Baland tovush kuchli eshitiladi." },
        { rasm: "🔉", nom: "Past tovush", izoh: "Past tovush sekin eshitiladi." },
        { rasm: "🎵", nom: "Musiqa", izoh: "Yoqimli musiqani quloq bilan tinglaymiz." },
        { rasm: "🐦", nom: "Qush ovozi", izoh: "Qushlarning sayrashini eshitamiz." }
      ]
    },
    {
      tur: "moslash",
      sarlavha: "Moslashtir!",
      korsatma: "Avval yuqoridan birini bos, keyin uning juftini bos!",
      juftlar: [
        { chap: "🐱", chapNom: "Mushuk", ong: "🎵", ongNom: "Miyov" },
        { chap: "🐶", chapNom: "Kuchuk", ong: "🔊", ongNom: "Vov-vov" },
        { chap: "🐦", chapNom: "Qush", ong: "🎶", ongNom: "Chirq-chirq" },
        { chap: "🦁", chapNom: "Sher", ong: "📢", ongNom: "Boldiragan" }
      ]
    },
    {
      tur: "viktorina",
      sarlavha: "Topag'onlik!",
      savollar: [
        {
          rasm: "🦁",
          savol: "Sher qanday tovush chiqaradi?",
          togri: "🔊",
          variantlar: [
            { belgi: "🔊", nom: "Baland" },
            { belgi: "🔉", nom: "Past" },
            { belgi: "🔇", nom: "Ovozsiz" }
          ]
        },
        {
          rasm: "🐁",
          savol: "Sichqoncha qanday tovush chiqaradi?",
          togri: "🔉",
          variantlar: [
            { belgi: "🔊", nom: "Baland" },
            { belgi: "🔉", nom: "Past" },
            { belgi: "📢", nom: "Juda baland" }
          ]
        },
        {
          rasm: "👂",
          savol: "Tovushni qaysi a'zo bilan eshitamiz?",
          togri: "👂",
          variantlar: [
            { belgi: "👁️", nom: "Ko'z" },
            { belgi: "👂", nom: "Quloq" },
            { belgi: "👃", nom: "Burun" }
          ]
        }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi biri tovush chiqarmaydi?",
          kartalar: ["🥁", "🎸", "🌸", "🎺"],
          ortiqcha: "🌸",
          izoh: "Gul tovush chiqarmaydi!"
        },
        {
          savol: "Qaysi birini eshita olmaymiz?",
          kartalar: ["🔔", "🐕", "🖼️", "🎵"],
          ortiqcha: "🖼️",
          izoh: "Rasm ovoz chiqarmaydi, uni faqat ko'ramiz!"
        }
      ]
    }
  ]
};
