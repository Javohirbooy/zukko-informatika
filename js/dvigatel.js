/* ============ ZUKKO — umumiy o'yin dvigateli ============
   window.DARS ma'lumotini o'qiydi, ikonlar (ikon/ikonMatn) va uch tilli
   tarjima (T) bilan butun dars oqimini quradi.
   O'yin turlari: organamiz, moslash, viktorina, ortiqcha, tartib, rostyolgon
============================================================ */
(function () {
  const DARS = window.DARS;
  if (!DARS) {
    document.getElementById("ekranlar").innerHTML =
      "<div class='ekran korinadi'><h2>Dars topilmadi</h2></div>";
    return;
  }

  const ekranlarEl = document.getElementById("ekranlar");
  const nuqtalarEl = document.getElementById("nuqtalar");
  const asosiyOvozTugma = document.getElementById("asosiy-ovoz");

  let xatolar = 0;
  const ketma = [{ tur: "salom" }, ...DARS.bosqichlar, { tur: "natija" }];
  let joriy = 0;

  ketma.forEach(() => {
    const n = document.createElement("div");
    n.className = "nuqta";
    nuqtalarEl.appendChild(n);
  });
  function nuqtalarniYangila() {
    [...nuqtalarEl.children].forEach((n, i) => {
      n.className = "nuqta" + (i < joriy ? " tugadi" : i === joriy ? " faol" : "");
    });
  }

  const ekranObyektlari = ketma.map(bosqich => {
    const sec = document.createElement("section");
    sec.className = "ekran";
    ekranlarEl.appendChild(sec);
    return { bosqich, sec, ovozMatn: "" };
  });

  function keyingi() { joriy++; korsat(joriy); }

  function korsat(i) {
    joriy = i;
    ekranObyektlari.forEach((e, idx) => e.sec.classList.toggle("korinadi", idx === i));
    nuqtalarniYangila();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const eo = ekranObyektlari[i];
    quruvchilar[eo.bosqich.tur](eo.sec, eo.bosqich, eo);
  }

  // Til almashtirilганда joriy ekranni qayta chizamiz
  window.addEventListener("zukko-til-ozgardi", () => korsat(joriy));

  // Ortga qaytish (bir qadam orqaga)
  window.addEventListener("zukko-orqaga", () => { if (joriy > 0) { Tovush.chertish(); korsat(joriy - 1); } });

  // Lottie jonli ikonlarni avtomatik ishga tushirish/tozalash
  const lottieKuzatuvchi = new MutationObserver(muts => {
    muts.forEach(m => {
      m.addedNodes.forEach(n => {
        if (n.nodeType !== 1) return;
        if (n.classList && n.classList.contains("lt")) _lottieInit(n);
        n.querySelectorAll && n.querySelectorAll(".lt").forEach(_lottieInit);
      });
      m.removedNodes.forEach(n => {
        if (n.nodeType !== 1) return;
        if (n.classList && n.classList.contains("lt")) _lottieKill(n);
        n.querySelectorAll && n.querySelectorAll(".lt").forEach(_lottieKill);
      });
    });
  });
  lottieKuzatuvchi.observe(ekranlarEl, { childList: true, subtree: true });

  asosiyOvozTugma.addEventListener("click", () => {
    const eo = ekranObyektlari[joriy];
    if (eo && eo.ovozMatn) Ovoz.gapir(eo.ovozMatn, asosiyOvozTugma);
  });

  /* ---------- Yordamchilar ---------- */
  function korsatmaHtml(matn) {
    return `<div class="korsatma"><span>${ikonMatn(matn)}</span></div>`;
  }
  function fikrEl(sec) {
    const f = document.createElement("div");
    f.className = "fikr";
    sec.appendChild(f);
    return f;
  }
  function fikrYoz(f, matn, yaxshimi) {
    f.innerHTML = ikonMatn(matn);
    f.className = "fikr " + (yaxshimi ? "yaxshi" : "yomon");
  }
  // Tez-tez ishlatiladigan fikrlar (tarjima + emoji)
  const F_TOGRI = () => T("To'g'ri!") + " 🎉";
  const F_OYLA = () => T("Yana o'ylab ko'r!") + " 🤔";

  /* ============================================================
     QURUVCHILAR
  ============================================================ */
  const quruvchilar = {

    /* ---------- SALOM ---------- */
    salom(sec, b, eo) {
      eo.ovozMatn = T(DARS.salom);
      sec.innerHTML = `
        <div class="maskot-qator">
          <div class="maskot-katta">${jonliIkon("🤖")}</div>
          <div class="nutq-puffagi">${ikonMatn(T(DARS.salom))}</div>
        </div>
        <h2>${ikonMatn(darsSarlavha(DARS.id, DARS.nomi))}</h2>`;
      const tugma = document.createElement("button");
      tugma.className = "katta-tugma";
      tugma.innerHTML = T("Boshlaymiz!") + " " + ikon("🚀");
      tugma.addEventListener("click", () => { Tovush.chertish(); keyingi(); });
      sec.appendChild(tugma);
      Ovoz.gapir(T(DARS.salom), asosiyOvozTugma);
    },

    /* ---------- O'RGANAMIZ ---------- */
    organamiz(sec, b, eo) {
      eo.ovozMatn = T(b.korsatma || "Har bir kartochkani bosing va tinglang!");
      sec.innerHTML = `
        <h2>${ikon("🎓")} ${T(b.sarlavha || "O'rganamiz")}</h2>
        ${korsatmaHtml(eo.ovozMatn)}
        <div class="sezgi-izoh" id="oi-izoh">${ikonMatn(T("Kartochkani bosing") + " 👇")}</div>
        <div class="sezgi-panjara" id="oi-panjara"></div>`;
      const panjara = sec.querySelector("#oi-panjara");
      const izoh = sec.querySelector("#oi-izoh");
      const ochilgan = new Set();

      const tugma = document.createElement("button");
      tugma.className = "katta-tugma";
      tugma.innerHTML = T("Davom etamiz") + " ➜";
      tugma.disabled = true;

      b.kartalar.forEach((k, idx) => {
        const karta = document.createElement("button");
        karta.className = "sezgi-karta";
        karta.innerHTML = `<span class="rasm">${jonliIkon(k.rasm)}</span><span class="nom">${ikonMatn(T(k.nom))}</span>`;
        karta.addEventListener("click", () => {
          Tovush.chertish();
          izoh.innerHTML = ikonMatn(T(k.izoh));
          Ovoz.gapir(T(k.nom) + ". " + T(k.izoh));
          karta.classList.add("ochilgan");
          ochilgan.add(idx);
          if (ochilgan.size === b.kartalar.length) tugma.disabled = false;
        });
        panjara.appendChild(karta);
      });

      tugma.addEventListener("click", () => { Tovush.chertish(); keyingi(); });
      sec.appendChild(tugma);
      Ovoz.gapir(eo.ovozMatn, asosiyOvozTugma);
    },

    /* ---------- MOSLASH (bosish yoki sudrash) ---------- */
    moslash(sec, b, eo) {
      eo.ovozMatn = T(b.korsatma || "Buyumni sezadigan a'zoga sudrab tashla yoki bosib belgila!");
      sec.innerHTML = `
        <h2>${ikon("🎮")} ${T(b.sarlavha || "Moslashtir!")}</h2>
        ${korsatmaHtml(eo.ovozMatn)}
        <div class="moslash-maydon">
          <div class="buyumlar-qator" id="ms-chap"></div>
          <div class="moslash-oq">${ikon("⬇️")}</div>
          <div class="azolar-qator" id="ms-ong"></div>
        </div>`;
      const chapEl = sec.querySelector("#ms-chap");
      const ongEl = sec.querySelector("#ms-ong");
      const fikr = fikrEl(sec);
      let tanlangan = null;
      let topilgan = 0;
      let endiSudraldi = false;

      function natijaBer(buyumEl, azoEl) {
        if (buyumEl.dataset.id === azoEl.dataset.id) {
          Tovush.togri();
          buyumEl.classList.remove("tanlangan");
          buyumEl.classList.add("topildi");
          azoEl.classList.add("topildi-azo");
          fikrYoz(fikr, T("To'g'ri! Barakalla!") + " 🎉", true);
          tanlangan = null;
          topilgan++;
          if (topilgan === b.juftlar.length) setTimeout(keyingi, 850);
        } else {
          Tovush.xato();
          xatolar++;
          azoEl.classList.add("silkinish");
          setTimeout(() => azoEl.classList.remove("silkinish"), 450);
          fikrYoz(fikr, F_OYLA(), false);
        }
      }

      aralashtir(b.juftlar.map((j, i) => ({ ...j, id: i }))).forEach(j => {
        const el = document.createElement("button");
        el.className = "buyum";
        el.dataset.id = j.id;
        el.innerHTML = `${jonliIkon(j.chap)}<span class="yozuv">${ikonMatn(T(j.chapNom || ""))}</span>`;
        el.addEventListener("pointerdown", e => {
          if (el.classList.contains("topildi")) return;
          const startX = e.clientX, startY = e.clientY;
          let sudralmoqda = false, klon = null;
          const move = ev => {
            const dx = ev.clientX - startX, dy = ev.clientY - startY;
            if (!sudralmoqda && Math.hypot(dx, dy) > 8) {
              sudralmoqda = true;
              chapEl.querySelectorAll(".buyum").forEach(x => x.classList.remove("tanlangan"));
              el.classList.add("tanlangan", "sudralmoqda");
              klon = el.cloneNode(true);
              klon.classList.add("sudrash-klon");
              klon.classList.remove("sudralmoqda");
              klon.style.width = el.offsetWidth + "px";
              klon.style.height = el.offsetHeight + "px";
              document.body.appendChild(klon);
            }
            if (sudralmoqda && klon) {
              klon.style.left = ev.clientX + "px";
              klon.style.top = ev.clientY + "px";
              const t = document.elementFromPoint(ev.clientX, ev.clientY);
              const azo = t && t.closest ? t.closest(".azo") : null;
              ongEl.querySelectorAll(".azo").forEach(x => x.classList.toggle("ustida", x === azo));
            }
          };
          const up = ev => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
            ongEl.querySelectorAll(".azo").forEach(x => x.classList.remove("ustida"));
            if (sudralmoqda) {
              if (klon) klon.remove();
              el.classList.remove("sudralmoqda");
              endiSudraldi = true;
              setTimeout(() => (endiSudraldi = false), 120);
              const t = document.elementFromPoint(ev.clientX, ev.clientY);
              const azo = t && t.closest ? t.closest(".azo") : null;
              if (azo) natijaBer(el, azo);
              else el.classList.remove("tanlangan");
            } else {
              // BOSISH: shu buyumni belgilaymiz
              Tovush.chertish();
              chapEl.querySelectorAll(".buyum").forEach(x => x.classList.remove("tanlangan"));
              el.classList.add("tanlangan");
              tanlangan = el;
              if (j.chapNom) Ovoz.gapir(T(j.chapNom));
            }
          };
          window.addEventListener("pointermove", move);
          window.addEventListener("pointerup", up);
        });
        chapEl.appendChild(el);
      });

      aralashtir(b.juftlar.map((j, i) => ({ ...j, id: i }))).forEach(j => {
        const el = document.createElement("button");
        el.className = "azo";
        el.dataset.id = j.id;
        el.innerHTML = `${jonliIkon(j.ong)}<span class="yozuv">${ikonMatn(T(j.ongNom || ""))}</span>`;
        el.addEventListener("click", () => {
          if (endiSudraldi) return; // sudrashdan keyingi soxta bosishni e'tiborsiz qoldiramiz
          if (!tanlangan) {
            fikrYoz(fikr, T("Avval yuqoridan birini tanla!") + " 👆", false);
            Ovoz.gapir(T("Avval yuqoridan birini tanla!"));
            return;
          }
          natijaBer(tanlangan, el);
        });
        ongEl.appendChild(el);
      });
    },

    /* ---------- VIKTORINA ---------- */
    viktorina(sec, b, eo) {
      let idx = 0;
      sec.innerHTML = `
        <h2>${ikon("🎮")} ${T(b.sarlavha || "Topag'onlik!")}</h2>
        <div class="korsatma"><span class="korsatma-hisob" id="vk-hisob"></span></div>
        <div class="savol-rasm" id="vk-rasm"></div>
        <div class="savol-matn" id="vk-matn"></div>
        <div class="javoblar" id="vk-javoblar"></div>`;
      const hisob = sec.querySelector("#vk-hisob");
      const rasmEl = sec.querySelector("#vk-rasm");
      const matnEl = sec.querySelector("#vk-matn");
      const javoblarEl = sec.querySelector("#vk-javoblar");
      const fikr = fikrEl(sec);

      function korsatSavol() {
        const s = b.savollar[idx];
        eo.ovozMatn = T(s.savol);
        hisob.textContent = `${idx + 1} / ${b.savollar.length}`;
        rasmEl.innerHTML = s.rasm ? jonliIkon(s.rasm) : "";
        matnEl.innerHTML = ikonMatn(T(s.savol));
        fikr.textContent = "";
        javoblarEl.innerHTML = "";
        Ovoz.gapir(T(s.savol));
        aralashtir(s.variantlar).forEach(v => {
          const t = document.createElement("button");
          t.className = "javob-tugma";
          t.innerHTML = `${jonliIkon(v.belgi)}<span class="yozuv">${ikonMatn(T(v.nom || ""))}</span>`;
          t.addEventListener("click", () => {
            if (t.dataset.blok) return;
            if (v.belgi === s.togri) {
              Tovush.togri();
              t.classList.add("togri");
              fikrYoz(fikr, F_TOGRI(), true);
              javoblarEl.querySelectorAll(".javob-tugma").forEach(x => (x.dataset.blok = "1"));
              idx++;
              setTimeout(() => { idx < b.savollar.length ? korsatSavol() : keyingi(); }, 950);
            } else {
              Tovush.xato();
              xatolar++;
              t.classList.add("xato", "silkinish");
              setTimeout(() => t.classList.remove("silkinish"), 450);
              fikrYoz(fikr, F_OYLA(), false);
            }
          });
          javoblarEl.appendChild(t);
        });
      }
      korsatSavol();
    },

    /* ---------- ORTIQCHASINI TOP ---------- */
    ortiqcha(sec, b, eo) {
      let idx = 0;
      sec.innerHTML = `
        <h2>${ikon("🎮")} ${T(b.sarlavha || "Ortiqchasini top!")}</h2>
        <div class="korsatma"><span id="or-savol"></span></div>
        <div class="ortiqcha-panjara" id="or-panjara"></div>`;
      const savolEl = sec.querySelector("#or-savol");
      const panjara = sec.querySelector("#or-panjara");
      const fikr = fikrEl(sec);

      function korsatTur() {
        const t = b.turlar[idx];
        eo.ovozMatn = T(t.savol);
        savolEl.innerHTML = ikonMatn(T(t.savol));
        fikr.textContent = "";
        panjara.innerHTML = "";
        Ovoz.gapir(T(t.savol));
        aralashtir(t.kartalar).forEach(k => {
          const karta = document.createElement("button");
          karta.className = "ortiqcha-karta";
          karta.innerHTML = jonliIkon(k);
          karta.addEventListener("click", () => {
            if (karta.dataset.blok) return;
            if (k === t.ortiqcha) {
              Tovush.togri();
              karta.classList.add("togri");
              const izoh = T("To'g'ri!") + " " + T(t.izoh);
              fikrYoz(fikr, izoh, true);
              Ovoz.gapir(izoh);
              panjara.querySelectorAll(".ortiqcha-karta").forEach(x => (x.dataset.blok = "1"));
              idx++;
              setTimeout(() => { idx < b.turlar.length ? korsatTur() : keyingi(); }, 1700);
            } else {
              Tovush.xato();
              xatolar++;
              karta.classList.add("xato", "silkinish");
              setTimeout(() => karta.classList.remove("silkinish", "xato"), 600);
              fikrYoz(fikr, F_OYLA(), false);
            }
          });
          panjara.appendChild(karta);
        });
      }
      korsatTur();
    },

    /* ---------- TARTIB (ketma-ketlik) ---------- */
    tartib(sec, b, eo) {
      eo.ovozMatn = T(b.korsatma || "Rasmlarni to'g'ri tartibda bos!");
      sec.innerHTML = `
        <h2>${ikon("🎮")} ${T(b.sarlavha || "Ketma-ketlikni tuz!")}</h2>
        ${korsatmaHtml(eo.ovozMatn)}
        <div class="tartib-nishon" id="tr-nishon"></div>
        <div class="tartib-manba" id="tr-manba"></div>`;
      const nishon = sec.querySelector("#tr-nishon");
      const manba = sec.querySelector("#tr-manba");
      const fikr = fikrEl(sec);
      let keyingiTartib = 0;

      b.toplam.forEach((_, i) => {
        const slot = document.createElement("div");
        slot.className = "tartib-slot";
        slot.innerHTML = `<span class="tartib-tartibraqam">${i + 1}</span>`;
        slot.dataset.pos = i;
        nishon.appendChild(slot);
      });

      aralashtir(b.toplam.map((t, i) => ({ ...t, tartib: i }))).forEach(t => {
        const karta = document.createElement("button");
        karta.className = "tartib-karta";
        karta.dataset.tartib = t.tartib;
        karta.innerHTML = `${jonliIkon(t.rasm)}<span class="yozuv">${ikonMatn(T(t.nom || ""))}</span>`;
        karta.addEventListener("click", () => {
          if (karta.classList.contains("ishlatilgan")) return;
          if (Number(karta.dataset.tartib) === keyingiTartib) {
            Tovush.togri();
            const slot = nishon.querySelector(`.tartib-slot[data-pos="${keyingiTartib}"]`);
            slot.classList.add("toldi");
            slot.innerHTML = `${jonliIkon(t.rasm)}<span class="yozuv">${ikonMatn(T(t.nom || ""))}</span>`;
            karta.classList.add("ishlatilgan");
            keyingiTartib++;
            fikrYoz(fikr, T("To'g'ri!") + " 👍", true);
            if (keyingiTartib === b.toplam.length) {
              fikrYoz(fikr, T("Ajoyib! Ketma-ketlik tayyor!") + " 🎉", true);
              setTimeout(keyingi, 1100);
            }
          } else {
            Tovush.xato();
            xatolar++;
            karta.classList.add("silkinish");
            setTimeout(() => karta.classList.remove("silkinish"), 450);
            fikrYoz(fikr, T("Bu hali emas, boshqasini o'yla!") + " 🤔", false);
          }
        });
        manba.appendChild(karta);
      });
    },

    /* ---------- ROST va YOLG'ON ---------- */
    rostyolgon(sec, b, eo) {
      let idx = 0;
      sec.innerHTML = `
        <h2>${ikon("🎮")} ${T(b.sarlavha || "Rost yoki Yolg'on?")}</h2>
        <div class="korsatma"><span class="korsatma-hisob" id="ry-hisob"></span></div>
        <div class="ry-rasm" id="ry-rasm"></div>
        <div class="ry-gap" id="ry-gap"></div>
        <div class="ry-tugmalar">
          <button class="ry-tugma ry-rost" id="ry-rost">${ikon("✅")} ${T("Rost")}</button>
          <button class="ry-tugma ry-yolgon" id="ry-yolgon">${ikon("❌")} ${T("Yolg'on")}</button>
        </div>`;
      const hisob = sec.querySelector("#ry-hisob");
      const rasmEl = sec.querySelector("#ry-rasm");
      const gapEl = sec.querySelector("#ry-gap");
      const rostT = sec.querySelector("#ry-rost");
      const yolgonT = sec.querySelector("#ry-yolgon");
      const fikr = fikrEl(sec);

      function korsatGap() {
        const g = b.gaplar[idx];
        eo.ovozMatn = T(g.matn);
        hisob.textContent = `${idx + 1} / ${b.gaplar.length}`;
        rasmEl.innerHTML = g.rasm ? jonliIkon(g.rasm) : "";
        gapEl.innerHTML = ikonMatn(T(g.matn));
        fikr.textContent = "";
        [rostT, yolgonT].forEach(t => t.classList.remove("bloklangan", "tanlangan-togri", "tanlangan-xato"));
        Ovoz.gapir(T(g.matn));
      }

      function javobBer(tanlanganJavob, tugma) {
        const g = b.gaplar[idx];
        if (tanlanganJavob === g.javob) {
          Tovush.togri();
          tugma.classList.add("tanlangan-togri");
          rostT.classList.add("bloklangan");
          yolgonT.classList.add("bloklangan");
          const izoh = g.izoh ? T("To'g'ri!") + " " + T(g.izoh) : F_TOGRI();
          fikrYoz(fikr, izoh, true);
          if (g.izoh) Ovoz.gapir(izoh);
          idx++;
          setTimeout(() => { idx < b.gaplar.length ? korsatGap() : keyingi(); }, g.izoh ? 1700 : 1000);
        } else {
          Tovush.xato();
          xatolar++;
          tugma.classList.add("tanlangan-xato", "silkinish");
          setTimeout(() => tugma.classList.remove("silkinish"), 450);
          fikrYoz(fikr, F_OYLA(), false);
        }
      }
      rostT.addEventListener("click", () => { if (!rostT.classList.contains("bloklangan")) javobBer(true, rostT); });
      yolgonT.addEventListener("click", () => { if (!yolgonT.classList.contains("bloklangan")) javobBer(false, yolgonT); });
      korsatGap();
    },

    /* ---------- NATIJA ---------- */
    natija(sec, b, eo) {
      const yulduzSoni = xatolar <= 1 ? 3 : xatolar <= 3 ? 2 : 1;
      Yulduzlar.saqla(DARS.id, yulduzSoni);
      const matnUz = {
        3: "Ajoyib! Sen haqiqiy bilimdon ekansan!",
        2: "Juda yaxshi! Yana o'ynasang, 3 yulduz olasan!",
        1: "Yaxshi harakat! Yana mashq qilib ko'ramizmi?"
      };
      const belgi = { 3: " 🌟", 2: " 💪", 1: " 😊" };
      const matn = T(matnUz[yulduzSoni]);
      eo.ovozMatn = T("Barakalla!") + " " + matn;
      sec.innerHTML = `
        <div class="medal">${jonliIkon("🏅")}</div>
        <h2>${T("Barakalla!")}</h2>
        <div class="natija-yulduzlar" id="nt-yulduzlar">
          <span class="yulduz">${yulduzIkon(true)}</span>
          <span class="yulduz">${yulduzIkon(true)}</span>
          <span class="yulduz">${yulduzIkon(true)}</span>
        </div>
        <div class="natija-matn">${ikonMatn(matn + belgi[yulduzSoni])}</div>
        <div class="tugma-qator">
          <button class="katta-tugma" id="nt-qayta">${T("Yana o'ynayman")} ${ikon("🔁")}</button>
          <a class="katta-tugma ikkinchi" href="index.html" style="text-decoration:none;display:inline-flex;align-items:center;gap:8px;">${T("Bosh sahifa")} ${ikon("🏠")}</a>
        </div>`;

      const yulduzlar = sec.querySelectorAll("#nt-yulduzlar .yulduz");
      for (let i = 0; i < yulduzSoni; i++) {
        setTimeout(() => { yulduzlar[i].classList.add("yondi"); Tovush.chertish(); }, 400 + i * 500);
      }
      Tovush.golib();
      konfetiYogdir();
      setTimeout(() => Ovoz.gapir(eo.ovozMatn), 600);

      sec.querySelector("#nt-qayta").addEventListener("click", () => {
        Tovush.chertish();
        xatolar = 0;
        korsat(1);
      });
    }
  };

  korsat(0);
})();
