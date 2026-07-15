/* ============ ZUKKO — umumiy vositalar: ovoz, tovush, yulduzlar ============ */

/* ---------- Til (uz / ru / en) ---------- */
window.TARJIMA = window.TARJIMA || {};
const Til = {
  KALIT: "zukko_til",
  joriy() { return localStorage.getItem(this.KALIT) || "uz"; },
  belgila(til) { localStorage.setItem(this.KALIT, til); }
};

// Interfeys (tizim) matnlari tarjimasi
const SYS = {
  "O'rganamiz": { ru: "Изучаем", en: "Let's learn" },
  "Moslashtir!": { ru: "Подбери пару!", en: "Match them!" },
  "Topag'onlik!": { ru: "Викторина!", en: "Quiz time!" },
  "Ortiqchasini top!": { ru: "Найди лишнее!", en: "Find the odd one!" },
  "Ketma-ketlikni tuz!": { ru: "Составь по порядку!", en: "Put in order!" },
  "Rost yoki Yolg'on?": { ru: "Правда или Ложь?", en: "True or False?" },
  "Boshlaymiz!": { ru: "Начнём!", en: "Let's start!" },
  "Davom etamiz": { ru: "Продолжаем", en: "Continue" },
  "Yana o'ynayman": { ru: "Играть ещё", en: "Play again" },
  "Bosh sahifa": { ru: "Главная", en: "Home" },
  "Rost": { ru: "Правда", en: "True" },
  "Yolg'on": { ru: "Ложь", en: "False" },
  "Barakalla!": { ru: "Молодец!", en: "Well done!" },
  "To'g'ri!": { ru: "Правильно!", en: "Correct!" },
  "To'g'ri! Barakalla!": { ru: "Правильно! Молодец!", en: "Correct! Well done!" },
  "Yana o'ylab ko'r!": { ru: "Подумай ещё!", en: "Try again!" },
  "Bu hali emas, boshqasini o'yla!": { ru: "Пока не то, подумай ещё!", en: "Not yet, try another!" },
  "Ajoyib! Ketma-ketlik tayyor!": { ru: "Отлично! Последовательность готова!", en: "Great! The sequence is ready!" },
  "Avval yuqoridan birini tanla!": { ru: "Сначала выбери одну сверху!", en: "First pick one above!" },
  "Har bir kartochkani bosing va tinglang!": { ru: "Нажми на каждую карточку и послушай!", en: "Tap each card and listen!" },
  "Kartochkani bosing": { ru: "Нажми на карточку", en: "Tap a card" },
  "Avval yuqoridan birini bos, keyin uning juftini bos!": { ru: "Сначала нажми одну сверху, потом её пару!", en: "Tap one above, then its match!" },
  "Rasmlarni to'g'ri tartibda bos!": { ru: "Нажимай картинки по порядку!", en: "Tap the pictures in order!" },
  "Ajoyib! Sen haqiqiy bilimdon ekansan!": { ru: "Отлично! Ты настоящий умница!", en: "Amazing! You are a real expert!" },
  "Juda yaxshi! Yana o'ynasang, 3 yulduz olasan!": { ru: "Очень хорошо! Сыграй ещё и получишь 3 звезды!", en: "Very good! Play again to earn 3 stars!" },
  "Yaxshi harakat! Yana mashq qilib ko'ramizmi?": { ru: "Хорошая попытка! Потренируемся ещё?", en: "Good try! Shall we practice more?" },
  // Bosh sahifa
  "Zukko bilan Informatika": { ru: "Информатика с Zukko", en: "Informatics with Zukko" },
  "1-sinf · O'ynab o'rganamiz!": { ru: "1 класс · Учимся играя!", en: "Grade 1 · Learn by playing!" },
  "1-bob. Biz olamni qanday qabul qilamiz?": { ru: "Глава 1. Как мы воспринимаем мир?", en: "Chapter 1. How do we perceive the world?" },
  "2-bob. Ketma-ketlik": { ru: "Глава 2. Последовательность", en: "Chapter 2. Sequence" },
  "3-bob. Tomonlar va yo'nalishlar": { ru: "Глава 3. Стороны и направления", en: "Chapter 3. Sides and directions" },
  "4-bob. Samaradorlik": { ru: "Глава 4. Эффективность", en: "Chapter 4. Efficiency" },
  "Tez kunda": { ru: "Скоро", en: "Coming soon" },
  "dars": { ru: "урок", en: "lesson" },
  "kun": { ru: "дн.", en: "days" },
  "Sertifikat": { ru: "Сертификат", en: "Certificate" },
  "Ismingni yoz": { ru: "Впиши имя", en: "Enter your name" },
  "Ismingni kirit:": { ru: "Введи своё имя:", en: "Enter your name:" },
  "Avatar tanla:": { ru: "Выбери аватар:", en: "Choose an avatar:" },
  "Saqlash": { ru: "Сохранить", en: "Save" },
  "Mening yutuqlarim": { ru: "Мои достижения", en: "My achievements" },
  "Zukko o'quvchisi": { ru: "Ученик Zukko", en: "Zukko learner" },
  "Tabriklaymiz!": { ru: "Поздравляем!", en: "Congratulations!" },
  "ushbu darslikni muvaffaqiyatli tamomladi": { ru: "успешно прошёл(ла) этот курс", en: "has successfully completed this course" },
  "Chop etish": { ru: "Печать", en: "Print" },
  "Bosh sahifaga qaytish": { ru: "На главную", en: "Back to home" },
  "Yig'ilgan yulduzlar": { ru: "Собрано звёзд", en: "Stars earned" },
  "Buyumni sezadigan a'zoga sudrab tashla yoki bosib belgila!": { ru: "Перетащи предмет к нужному органу или нажми!", en: "Drag the item to the right organ, or tap!" },
  "Profilim": { ru: "Мой профиль", en: "My profile" }
};

// Tarjima funksiyasi: joriy tilga o'giradi (topilmasa — o'zbekcha)
function T(s) {
  if (s == null) return s;
  const til = Til.joriy();
  if (til === "uz") return s;
  const e = SYS[s] || window.TARJIMA[s];
  return (e && e[til]) || s;
}

// "N-dars: Nomi" ko'rinishidagi sarlavha
function darsSarlavha(id, nomi) {
  return `${id}-${T("dars")}: ${T(nomi)}`;
}

/* ---------- Sozlama: ovozni o'chirish ---------- */
const Sozlama = {
  KALIT: "zukko_jim",
  jimmi() { return localStorage.getItem(this.KALIT) === "1"; },
  belgila(jim) { localStorage.setItem(this.KALIT, jim ? "1" : "0"); }
};

/* ---------- Ovozli o'qish (audio fayl yoki Web Speech API) ---------- */
function matnKalit(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

const Ovoz = {
  ovozlar: [],
  joriyAudio: null,

  ishgaTushir() {
    if (!("speechSynthesis" in window)) return;
    const tanla = () => { this.ovozlar = speechSynthesis.getVoices() || []; };
    tanla();
    speechSynthesis.onvoiceschanged = tanla;
  },

  _ovozTanla(til) {
    const v = this.ovozlar;
    if (til === "ru") return v.find(x => x.lang.toLowerCase().startsWith("ru")) || null;
    if (til === "en") return v.find(x => x.lang.toLowerCase().startsWith("en")) || null;
    // uz: o'zbek -> turk (lotin o'qilishi yaqin) -> birinchi
    return v.find(x => x.lang.toLowerCase().startsWith("uz")) ||
           v.find(x => x.lang.toLowerCase().startsWith("tr")) || null;
  },

  toxtat() {
    if (this.joriyAudio) { this.joriyAudio.pause(); this.joriyAudio = null; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  },

  gapir(matn, tugmaElement) {
    if (Sozlama.jimmi() || !matn) return;
    this.toxtat();
    const til = Til.joriy();
    const belgi = tugmaElement;
    const boshla = () => belgi && belgi.classList.add("gapiryapti");
    const tugat = () => belgi && belgi.classList.remove("gapiryapti");

    // O'zbekcha uchun oldindan yozilgan audio bo'lsa — o'shani ijro etamiz (tabiiy talaffuz)
    if (til === "uz" && window.UZ_AUDIO && window.UZ_AUDIO[matn]) {
      const a = new Audio("audio/uz/" + window.UZ_AUDIO[matn]);
      this.joriyAudio = a;
      boshla();
      a.onended = tugat;
      a.onerror = () => { tugat(); this._tts(matn, til, belgi); }; // fayl bo'lmasa — TTS
      a.play().catch(() => { tugat(); this._tts(matn, til, belgi); });
      return;
    }
    this._tts(matn, til, belgi);
  },

  _tts(matn, til, belgi) {
    if (!("speechSynthesis" in window)) return;
    const nutq = new SpeechSynthesisUtterance(matn);
    const ov = this._ovozTanla(til);
    if (ov) nutq.voice = ov;
    nutq.lang = til === "ru" ? "ru-RU" : til === "en" ? "en-US" : "uz-UZ";
    nutq.rate = 0.85;
    nutq.pitch = 1.1;
    if (belgi) {
      belgi.classList.add("gapiryapti");
      nutq.onend = () => belgi.classList.remove("gapiryapti");
      nutq.onerror = () => belgi.classList.remove("gapiryapti");
    }
    speechSynthesis.speak(nutq);
  }
};
Ovoz.ishgaTushir();

/* ---------- Boshqaruv paneli: til tanlash + ovozni o'chirish ---------- */
function boshqaruvHtml() {
  const t = Til.joriy();
  const tugma = x => `<button class="til-btn ${x === t ? "faol" : ""}" data-til="${x}">${x.toUpperCase()}</button>`;
  return `
    <div class="til-tanla">${["uz", "ru", "en"].map(tugma).join("")}</div>
    <button class="mute-tugma musiqa-tugma ${Musiqa.yoqilganmi() ? "faol" : ""}" id="musiqa-tugma" title="Musiqa">${ikon("🎵")}</button>
    <button class="mute-tugma" id="mute-tugma" title="Ovoz">${Sozlama.jimmi() ? ikon("🔕") : ikon("🔔")}</button>`;
}
function boshqaruvBogla(root, tilOzgardi) {
  root.querySelectorAll(".til-btn").forEach(b => {
    b.addEventListener("click", () => {
      if (b.dataset.til === Til.joriy()) return;
      Til.belgila(b.dataset.til);
      root.querySelectorAll(".til-btn").forEach(x => x.classList.toggle("faol", x === b));
      Ovoz.toxtat();
      if (typeof tilOzgardi === "function") tilOzgardi();
    });
  });
  const m = root.querySelector("#mute-tugma");
  if (m) m.addEventListener("click", () => {
    const jim = !Sozlama.jimmi();
    Sozlama.belgila(jim);
    if (jim) Ovoz.toxtat();
    m.innerHTML = jim ? ikon("🔕") : ikon("🔔");
  });
  const mu = root.querySelector("#musiqa-tugma");
  if (mu) mu.addEventListener("click", () => {
    const y = !Musiqa.yoqilganmi();
    Musiqa.belgila(y);
    mu.classList.toggle("faol", y);
  });
}

/* ---------- Tovush effektlari (WebAudio — tashqi fayllarsiz) ---------- */
const Tovush = {
  ctx: null,

  _kontekst() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },

  _nota(chastota, boshlanish, davomiylik, turi = "sine", balandlik = 0.25) {
    const ctx = this._kontekst();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = turi;
    osc.frequency.value = chastota;
    gain.gain.setValueAtTime(balandlik, ctx.currentTime + boshlanish);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + boshlanish + davomiylik);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + boshlanish);
    osc.stop(ctx.currentTime + boshlanish + davomiylik);
  },

  togri() {
    // quvnoq ikki nota
    this._nota(660, 0, 0.15);
    this._nota(880, 0.12, 0.25);
  },

  xato() {
    this._nota(220, 0, 0.25, "square", 0.12);
  },

  golib() {
    // kichik fanfara
    [523, 659, 784, 1047].forEach((f, i) => this._nota(f, i * 0.15, 0.3));
  },

  chertish() {
    this._nota(500, 0, 0.06, "triangle", 0.15);
  }
};

/* ---------- Yulduzlar ombori (localStorage) ---------- */
const Yulduzlar = {
  KALIT: "zukko_yulduzlar",

  hammasi() {
    try {
      return JSON.parse(localStorage.getItem(this.KALIT)) || {};
    } catch {
      return {};
    }
  },

  ol(darsId) {
    return this.hammasi()[darsId] || 0;
  },

  saqla(darsId, son) {
    const h = this.hammasi();
    h[darsId] = Math.max(h[darsId] || 0, son); // eng yaxshi natija saqlanadi
    localStorage.setItem(this.KALIT, JSON.stringify(h));
  }
};

/* ---------- Konfeti ---------- */
function konfetiYogdir(soni = 80) {
  const ranglar = ["#ffc93c", "#34c77b", "#4f6df5", "#ff6b6b", "#ff8fab", "#7c5cff"];
  for (let i = 0; i < soni; i++) {
    const p = document.createElement("div");
    p.className = "konfeti-parcha";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = ranglar[Math.floor(Math.random() * ranglar.length)];
    p.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    p.style.animationDelay = Math.random() * 0.8 + "s";
    p.style.width = p.style.height = 8 + Math.random() * 8 + "px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5500);
  }
}

/* ---------- Massivni aralashtirish ---------- */
function aralashtir(massiv) {
  const m = [...massiv];
  for (let i = m.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [m[i], m[j]] = [m[j], m[i]];
  }
  return m;
}

/* ============ IKONLAR — emojilarni bir xil SVG ikonlarga aylantirish ============
   Emojilar Twemoji SVG fayllariga almashtiriladi (icons/ papkasi). Bu barcha
   qurilmalarda bir xil, tiniq va professional ko'rinish beradi. */

// Emoji -> Twemoji fayl kodi (masalan "❄️" -> "2744", "1️⃣" -> "31-20e3")
function twKod(emoji) {
  const zwjBor = emoji.indexOf("‍") >= 0;
  const s = zwjBor ? emoji : emoji.replace(/️/g, "");
  const r = [];
  let c = 0, p = 0, i = 0;
  while (i < s.length) {
    c = s.charCodeAt(i++);
    if (p) { r.push((0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16)); p = 0; }
    else if (0xd800 <= c && c <= 0xdbff) p = c;
    else r.push(c.toString(16));
  }
  return r.join("-");
}

// Bitta emojini <img> ikonga aylantiradi (statik)
function ikon(emoji) {
  return `<img class="ik" src="icons/${twKod(emoji)}.svg" alt="" draggable="false">`;
}

// Jonli (Lottie) ikon — animatsiyasi bo'lsa harakatlanadi, bo'lmasa statik qoladi
function jonliIkon(emoji) {
  const k = twKod(emoji);
  if (window.ANIM_SET && window.ANIM_SET.has(k)) {
    return `<span class="ik lt" data-k="${k}"></span>`;
  }
  return `<img class="ik" src="icons/${k}.svg" alt="" draggable="false">`;
}
function _lottieInit(el) {
  if (!window.lottie || el._anim || !el.dataset.k) return;
  try {
    el._anim = lottie.loadAnimation({
      container: el, renderer: "svg", loop: true, autoplay: true,
      path: "anim/" + el.dataset.k + ".json"
    });
  } catch (e) {}
}
function _lottieKill(el) {
  if (el._anim) { try { el._anim.destroy(); } catch (e) {} el._anim = null; }
}
function jonlilashtir(root) {
  if (root && root.querySelectorAll) root.querySelectorAll(".lt").forEach(_lottieInit);
}

// Matn ichidagi barcha emojilarni ikonga almashtiradi (matnning qolgani saqlanadi)
function ikonMatn(matn) {
  if (matn == null) return "";
  const re = /([#*0-9]️?⃣)|(\p{Extended_Pictographic}️?(?:‍\p{Extended_Pictographic}️?)*)/gu;
  return String(matn).replace(re, m => ikon(m));
}

// Yulduz reytingi uchun maxsus SVG (Twemoji'da oddiy ★ yo'q)
function yulduzIkon(toliq) {
  return `<svg class="yz ${toliq ? "yz-full" : "yz-empty"}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.26 6.6.53-5.02 4.32 1.53 6.39L12 16.9 6 20.5l1.53-6.39L2.5 9.79l6.6-.53z"/></svg>`;
}
function yulduzQator(nechta, jami = 3) {
  let s = "";
  for (let i = 0; i < jami; i++) s += yulduzIkon(i < nechta);
  return s;
}

/* ============ Bola profili ============ */
const Profil = {
  KALIT: "zukko_profil",
  AVATARLAR: ["🦁", "🐯", "🐼", "🐰", "🦊", "🐵", "🐸", "🐨", "🦄", "🐷", "🐧", "🐙"],
  ol() {
    try { return JSON.parse(localStorage.getItem(this.KALIT)) || { ism: "", avatar: "🦁" }; }
    catch { return { ism: "", avatar: "🦁" }; }
  },
  saqla(p) { localStorage.setItem(this.KALIT, JSON.stringify(p)); }
};

/* ============ Ketma-ket kunlar (streak) ============ */
const Kunlar = {
  KALIT: "zukko_kunlar",
  _bugun() { const d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); },
  holat() {
    try { return JSON.parse(localStorage.getItem(this.KALIT)) || { oxirgi: "", ketma: 0 }; }
    catch { return { oxirgi: "", ketma: 0 }; }
  },
  yangila() {
    const h = this.holat(), bugun = this._bugun();
    if (h.oxirgi === bugun) return h.ketma || 1;
    const k = new Date(); k.setDate(k.getDate() - 1);
    const kecha = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate();
    h.ketma = (h.oxirgi === kecha) ? (h.ketma + 1) : 1;
    h.oxirgi = bugun;
    localStorage.setItem(this.KALIT, JSON.stringify(h));
    return h.ketma;
  }
};

/* ============ Bob medali (yulduzlarga qarab) ============ */
function bobMedali(darsIdlar) {
  const y = darsIdlar.map(id => Yulduzlar.ol(id));
  if (y.some(v => v === 0)) return null; // bob hali tugallanmagan
  const min = Math.min(...y);
  return min >= 3 ? "oltin" : min >= 2 ? "kumush" : "bronza";
}

/* ============ Fon musiqasi (WebAudio — faylsiz, yumshoq halqa) ============ */
const Musiqa = {
  KALIT: "zukko_musiqa",
  ctx: null, timer: null, pos: 0,
  yoqilganmi() { return localStorage.getItem(this.KALIT) === "1"; }, // standart: o'chiq
  belgila(y) {
    localStorage.setItem(this.KALIT, y ? "1" : "0");
    if (y) this.boshla(); else this.toxtat();
  },
  _nota(freq) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator(), g = this.ctx.createGain();
    osc.type = "sine"; osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    osc.connect(g).connect(this.ctx.destination);
    osc.start(t); osc.stop(t + 0.66);
  },
  boshla() {
    if (this.timer) return;
    try { this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    if (this.ctx.state === "suspended") this.ctx.resume();
    const M = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 440, 493.88, 523.25, 659.25, null, 392,
               523.25, 659.25, 783.99, 880, 783.99, 659.25, 440, null, 523.25, null];
    this.timer = setInterval(() => { const f = M[this.pos % M.length]; if (f) this._nota(f); this.pos++; }, 430);
  },
  toxtat() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
};
// Birinchi bosishда (brauzer qoidasi) — yoqilgan bo'lsa musiqani boshlaymiz
if (typeof window !== "undefined") {
  window.addEventListener("pointerdown", function _mus() { if (Musiqa.yoqilganmi()) Musiqa.boshla(); }, { once: true });
}
