"use strict";
// Escala Marketing Digital — interacciones del sitio
// Compilar con: tsc  (genera main.js)
const SCROLL_SHRINK_AT = 40;
function initHeader() {
    const header = document.querySelector(".header");
    if (!header)
        return;
    const onScroll = () => {
        header.classList.toggle("small", window.scrollY > SCROLL_SHRINK_AT);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}
function initMobileMenu() {
    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    if (!btn || !nav)
        return;
    const setOpen = (open) => {
        nav.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
        btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    };
    btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape")
            setOpen(false);
    });
}
function initReveal() {
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("in"));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    els.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 80}ms`;
        io.observe(el);
    });
}
const PROYECTOS = [
    { id: 1, cliente: "Jicapaleta", giro: "Snacks de jícama saludables", instagram: "jicapaleta", estilo: "redes", imagen: "jicapaleta.jpg", paquete: "Silver", queHicimos: "Creación de branding y logotipo (servicio adicional), apertura de redes sociales, sesión fotográfica en laboratorio especializado, publicaciones estáticas y publicidad pautada.", resultado: "Proyecto terminado con el cliente 100% satisfecho. Después del proyecto, la marca decidió no continuar con su operación." },
    { id: 2, cliente: "Coolevent", giro: "Renta de enfriadores para eventos", instagram: "coolevent_mid", estilo: "video", imagen: "coolevent.jpg", paquete: "Gold", queHicimos: "Creación de branding, logotipo e identidad de marca, manejo de redes sociales, comunicación visual, pauta segmentada, análisis de métricas, posicionamiento de marca y sesiones fotográficas en eventos (servicio adicional).", resultado: "Una marca limpia, elegante y posicionada, con operación continua y atención constante de leads." },
    { id: 3, cliente: "Armor Gym", giro: "Gimnasio · franquicia yucateca", instagram: "armorgymoficial", estilo: "foto", imagen: "armorgym.jpg", paquete: "Silver", queHicimos: "Manejo de redes sociales: publicaciones, historias y diseño del feed con una marca digital minimalista.", resultado: "Publicaciones siempre activas que mantienen a la comunidad del gimnasio y una marca reconocida." },
];
const ICONO_FLECHA = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
function mockup(cat) {
    switch (cat) {
        case "redes":
            return `<div class="mock mock-feed">${"<i></i>".repeat(9)}</div>`;
        case "foto":
            return '<div class="mock mock-photo"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg></div>';
        case "video":
            return '<div class="mock mock-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></div>';
        case "diseno":
            return '<div class="mock mock-design"><b></b><b></b><b></b></div>';
    }
}
function media(p) {
    return p.imagen
        ? `<img class="mock" src="${p.imagen}" alt="Publicación de Instagram de ${p.cliente}" loading="lazy">`
        : mockup(p.estilo);
}
function renderPortafolio(lista) {
    const cont = document.getElementById("works");
    if (!cont)
        return;
    cont.innerHTML = lista
        .map((p) => `
      <button class="work" data-id="${p.id}" aria-label="Ver proyecto ${p.cliente}, ${p.giro}">
        <div class="work-media bg-${p.estilo}">
          ${media(p)}
          <span class="tag">@${p.instagram}</span>
          <span class="view">${ICONO_FLECHA}</span>
        </div>
        <div class="work-info"><h3>${p.cliente}</h3><span>${p.giro}</span></div>
      </button>`)
        .join("");
}
function initModal() {
    var _a;
    const modal = document.getElementById("workModal");
    const cont = document.getElementById("works");
    if (!modal || !cont)
        return;
    const set = (id, txt) => {
        const el = document.getElementById(id);
        if (el)
            el.textContent = txt;
    };
    let origen = null;
    const abrir = (p) => {
        const m = document.getElementById("modalMedia");
        if (m) {
            m.className = `modal-media bg-${p.estilo}`;
            m.innerHTML = media(p);
        }
        set("modalCat", `@${p.instagram}`);
        set("modalTitle", p.cliente);
        set("modalGiro", p.giro);
        set("modalPack", p.paquete);
        set("modalDid", p.queHicimos);
        set("modalRes", p.resultado);
        const ig = document.getElementById("modalIg");
        if (ig) {
            ig.href = `https://www.instagram.com/${p.instagram}/`;
            ig.setAttribute("aria-label", `Ver ${p.cliente} en Instagram`);
        }
        if (typeof modal.showModal === "function")
            modal.showModal();
        else
            modal.setAttribute("open", "");
    };
    const cerrar = () => {
        if (typeof modal.close === "function")
            modal.close();
        else
            modal.removeAttribute("open");
    };
    cont.addEventListener("click", (e) => {
        const card = e.target.closest(".work");
        if (!card)
            return;
        const p = PROYECTOS.find((x) => x.id === Number(card.dataset.id));
        if (p) {
            origen = card;
            abrir(p);
        }
    });
    (_a = document.getElementById("modalClose")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", cerrar);
    modal.addEventListener("click", (e) => {
        if (e.target === modal)
            cerrar(); // clic en el fondo
    });
    modal.addEventListener("close", () => origen === null || origen === void 0 ? void 0 : origen.focus());
}
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initMobileMenu();
    renderPortafolio(PROYECTOS);
    initModal();
    initReveal();
});
