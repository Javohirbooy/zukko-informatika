// Dars 2 — Biz nimalarni ko'ramiz?
window.DARS = {
  id: 2,
  nomi: "Biz nimalarni ko'ramiz?",
  salom: "Salom, do'stim! Men Zukko. Bugun ko'zlarimiz bilan nimalarni ko'rishimizni birga o'rganamiz!",
  bosqichlar: [
    {
      tur: "organamiz",
      sarlavha: "O'rganamiz",
      korsatma: "Har bir kartochkani bosing va tinglang!",
      kartalar: [
        { rasm: "🌈", nom: "Rang", izoh: "Ko'zimiz bilan ranglarni ko'ramiz." },
        { rasm: "🔺", nom: "Shakl", izoh: "Buyumlarning shaklini ko'zimiz ko'radi." },
        { rasm: "📏", nom: "O'lcham", izoh: "Kattami yoki kichikmi — ko'zimiz bilan bilamiz." },
        { rasm: "🏃", nom: "Harakat", izoh: "Kim yugurayotganini ko'zimiz ko'radi." },
        { rasm: "💡", nom: "Yorug'lik", izoh: "Yorug'lik va qorong'ulikni ko'zimiz sezadi." }
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
            { belgi: "👃", nom: "Burun" }
          ]
        },
        {
          rasm: "🔺",
          savol: "Buyumning shaklini qaysi a'zo ko'radi?",
          togri: "👁️",
          variantlar: [
            { belgi: "👅", nom: "Til" },
            { belgi: "👁️", nom: "Ko'z" },
            { belgi: "✋", nom: "Qo'l" }
          ]
        },
        {
          rasm: "💡",
          savol: "Yorug'likni qaysi a'zo bilan sezamiz?",
          togri: "👁️",
          variantlar: [
            { belgi: "👂", nom: "Quloq" },
            { belgi: "👃", nom: "Burun" },
            { belgi: "👁️", nom: "Ko'z" }
          ]
        }
      ]
    },
    {
      tur: "ortiqcha",
      sarlavha: "Ortiqchasini top!",
      turlar: [
        {
          savol: "Qaysi birini ko'zimiz bilan ko'ra olmaymiz?",
          kartalar: ["🌈", "🌸", "🎵", "🔺"],
          ortiqcha: "🎵",
          izoh: "Tovushni ko'ra olmaymiz, uni quloq bilan eshitamiz!"
        },
        {
          savol: "Qaysi birini ko'z bilan emas, boshqa a'zo bilan sezamiz?",
          kartalar: ["🍦", "💡", "📺", "🏃"],
          ortiqcha: "🍦",
          izoh: "Muzqaymoq ta'mini til bilan tatib bilamiz!"
        }
      ]
    }
  ]
};
