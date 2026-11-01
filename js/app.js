// Contenido ilustrativo para revisar el diseño. Sustituir nombres, fotos y precios
// con el surtido confirmado por la dueña antes de presentar precios al público.
const catalog = [
  { id: "mexicanos-surtidos", name: "Dulces mexicanos surtidos", group: "mexicanos", family: "Típicos mexicanos", presentation: "Bolsa de 1 kilo", retail: 180, wholesale: 155, minWholesale: 6, image: "images/item-tamarindo.svg", description: "Una mezcla colorida de sabores tradicionales para compartir.", tags: "mexicanos surtidos tamarindo chile" },
  { id: "gomitas", name: "Gomitas surtidas", group: "sonrics", family: "Sonric’s", presentation: "Bolsa de 1 kilo", retail: 145, wholesale: 125, minWholesale: 6, image: "images/item-gomitas.svg", description: "Gomitas de distintas formas y sabores para cualquier antojo.", tags: "gomitas ositos dulces" },
  { id: "paletas", name: "Paletas de caramelo", group: "sonrics", family: "Sonric’s", presentation: "Bolsa con 50 piezas", retail: 120, wholesale: 100, minWholesale: 6, image: "images/item-paletas.svg", description: "Paletas coloridas, ideales para compartir o armar una mesa de dulces.", tags: "paletas caramelo" },
  { id: "caramelos", name: "Caramelos surtidos", group: "sonrics", family: "Sonric’s", presentation: "Bolsa de 1 kilo", retail: 135, wholesale: 115, minWholesale: 6, image: "images/item-chocolates.svg", description: "Caramelos surtidos en una presentación práctica para reuniones.", tags: "caramelos surtidos" },
  { id: "chocolates", name: "Chocolates y confitados", group: "sonrics", family: "Sonric’s", presentation: "Bolsa de 1 kilo", retail: 190, wholesale: 165, minWholesale: 6, image: "images/item-chocolates.svg", description: "Pequeños bocados de chocolate para alegrar la tarde.", tags: "chocolate confitado" },
  { id: "malvaviscos", name: "Malvaviscos surtidos", group: "sonrics", family: "Sonric’s", presentation: "Bolsa de 1 kilo", retail: 115, wholesale: 95, minWholesale: 6, image: "images/item-gomitas.svg", description: "Malvaviscos suaves para fiestas, postres y mesas de dulces.", tags: "bombones malvavisco" },
  { id: "enchilados", name: "Gomitas enchiladas", group: "mexicanos", family: "Dulces con chile", presentation: "Bolsa de 1 kilo", retail: 155, wholesale: 135, minWholesale: 6, image: "images/item-tamarindo.svg", description: "El toque acidito y picosito que muchos buscan.", tags: "enchilados chile gomitas" },
  { id: "tamarindo", name: "Pulpa de tamarindo", group: "mexicanos", family: "Típicos mexicanos", presentation: "Bolsa de 1 kilo", retail: 160, wholesale: 138, minWholesale: 6, image: "images/item-tamarindo.svg", description: "Un clásico mexicano con sabor dulce, ácido y picosito.", tags: "tamarindo pulpa" },
  { id: "paletas-tamarindo", name: "Paletas de tamarindo", group: "mexicanos", family: "Típicos mexicanos", presentation: "Bolsa con 30 piezas", retail: 110, wholesale: 92, minWholesale: 6, image: "images/item-paletas.svg", description: "Paletas con un sabor tradicional que combina fruta y chile.", tags: "paleta tamarindo" },
  { id: "dulce-fruta", name: "Dulces de fruta", group: "sonrics", family: "Sonric’s", presentation: "Bolsa de 1 kilo", retail: 140, wholesale: 120, minWholesale: 6, image: "images/item-paletas.svg", description: "Dulces frutales para llevar un poco de color a cada momento.", tags: "fruta dulce" },
  { id: "obleas", name: "Obleas tradicionales", group: "mexicanos", family: "Típicos mexicanos", presentation: "Paquete con 12 piezas", retail: 85, wholesale: 70, minWholesale: 6, image: "images/item-obleas.svg", description: "Obleas ligeras, perfectas para acompañar una tarde de antojo.", tags: "oblea" },
  { id: "cocadas", name: "Cocadas", group: "mexicanos", family: "Típicos mexicanos", presentation: "Paquete con 12 piezas", retail: 95, wholesale: 78, minWholesale: 6, image: "images/item-obleas.svg", description: "Dulce tradicional de coco en porciones para compartir.", tags: "cocada coco" },
  { id: "alegrias", name: "Alegrías de amaranto", group: "mexicanos", family: "Típicos mexicanos", presentation: "Paquete con 10 piezas", retail: 90, wholesale: 74, minWholesale: 6, image: "images/item-alegrias.svg", description: "Amaranto y miel en una receta mexicana de siempre.", tags: "alegria amaranto miel" },
  { id: "palanquetas", name: "Palanquetas de cacahuate", group: "mexicanos", family: "Típicos mexicanos", presentation: "Paquete con 10 piezas", retail: 100, wholesale: 82, minWholesale: 6, image: "images/item-alegrias.svg", description: "Cacahuate tostado y caramelo en un dulce crujiente.", tags: "palanqueta cacahuate" },
  { id: "mazapanes", name: "Mazapanes", group: "mexicanos", family: "Típicos mexicanos", presentation: "Caja con 20 piezas", retail: 105, wholesale: 88, minWholesale: 6, image: "images/item-chocolates.svg", description: "Un clásico de cacahuate para disfrutar o regalar.", tags: "mazapan cacahuate" },
  { id: "jamoncillos", name: "Jamoncillos", group: "mexicanos", family: "Típicos mexicanos", presentation: "Paquete con 10 piezas", retail: 115, wholesale: 95, minWholesale: 6, image: "images/item-alegrias.svg", description: "Dulce suave de leche con sabor a tradición.", tags: "jamoncillo leche" },
  { id: "dulce-leche", name: "Dulces de leche", group: "mexicanos", family: "Típicos mexicanos", presentation: "Bolsa con 20 piezas", retail: 120, wholesale: 98, minWholesale: 6, image: "images/item-obleas.svg", description: "Pequeños dulces de leche para acompañar un café o compartir.", tags: "leche dulce" },
  { id: "chile-fruta", name: "Fruta con chile", group: "mexicanos", family: "Dulces con chile", presentation: "Bolsa de 500 gramos", retail: 95, wholesale: 78, minWholesale: 6, image: "images/item-tamarindo.svg", description: "Una mezcla de sabores frutales con un toque picosito.", tags: "fruta chile enchilada" },
  { id: "chicles", name: "Chicles surtidos", group: "sonrics", family: "Sonric’s", presentation: "Bolsa con 50 piezas", retail: 100, wholesale: 82, minWholesale: 6, image: "images/item-gomitas.svg", description: "Chicles de varios sabores para llevar y compartir.", tags: "chicle goma" },
  { id: "mix-fiesta", name: "Mix para mesa de dulces", group: "todos", family: "Surtido para fiesta", presentation: "Bolsa de 1 kilo", retail: 175, wholesale: 150, minWholesale: 6, image: "images/hero-dulces.svg", description: "Una mezcla de colores y texturas para darle vida a tu celebración.", tags: "fiesta mesa surtido" }
];

const photoPaths = {
  "mexicanos-surtidos": "images/productos/01-dulces-mexicanos-surtidos.jpg",
  gomitas: "images/productos/02-gomitas-surtidas.jpg",
  paletas: "images/productos/03-paletas-de-caramelo.jpg",
  caramelos: "images/productos/04-caramelos-surtidos.jpg",
  chocolates: "images/productos/05-chocolates-y-confitados.jpg",
  malvaviscos: "images/productos/06-malvaviscos-surtidos.jpg",
  enchilados: "images/productos/07-gomitas-enchiladas.jpg",
  tamarindo: "images/productos/08-pulpa-de-tamarindo.jpg",
  "paletas-tamarindo": "images/productos/09-paletas-de-tamarindo.jpg",
  "dulce-fruta": "images/productos/10-dulces-de-fruta.jpg",
  obleas: "images/productos/11-obleas-tradicionales.jpg",
  cocadas: "images/productos/12-cocadas.jpg",
  alegrias: "images/productos/13-alegrias-de-amaranto.jpg",
  palanquetas: "images/productos/14-palanquetas-de-cacahuate.jpg",
  mazapanes: "images/productos/15-mazapanes.jpg",
  jamoncillos: "images/productos/16-jamoncillos.jpg",
  "dulce-leche": "images/productos/17-dulces-de-leche.jpg",
  "chile-fruta": "images/productos/18-fruta-con-chile.jpg",
  chicles: "images/productos/19-chicles-surtidos.jpg",
  "mix-fiesta": "images/productos/20-mix-mesa-de-dulces.jpg"
};

const grid = document.querySelector("#catalogGrid");
const search = document.querySelector("#catalogSearch");
const emptyState = document.querySelector("#emptyState");
const productDialog = document.querySelector("#productDialog");
const cartDialog = document.querySelector("#cartDialog");
let activeFilter = "todos";
let selectedProduct = null;
let quantity = 1;
const cart = new Map();
const formatMoney = (value) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value);

function renderCatalog() {
  const query = search.value.trim().toLocaleLowerCase("es-MX");
  const results = catalog.filter((item) => {
    const matchesGroup = activeFilter === "todos" || item.group === activeFilter || item.group === "todos";
    const haystack = `${item.name} ${item.family} ${item.presentation} ${item.tags} ${item.description}`.toLocaleLowerCase("es-MX");
    return matchesGroup && haystack.includes(query);
  });
  grid.innerHTML = results.map((item) => `
    <article class="product-row">
      <img class="product-photo" src="${photoPaths[item.id]}" data-fallback="${item.image}" alt="Imagen de ejemplo: ${item.name.toLocaleLowerCase("es-MX")}" width="132" height="104" loading="lazy">
      <div class="product-info"><span class="product-family">${item.family}</span><h3>${item.name}</h3><p>Presentación: <strong>${item.presentation}</strong></p></div>
      <div class="product-price-pair"><div><span>Menudeo</span><strong>${formatMoney(item.retail)}</strong><small>por presentación</small></div><div><span>Mayoreo</span><strong>${formatMoney(item.wholesale)}</strong><small>desde ${item.minWholesale} presentaciones</small></div></div>
      <button class="row-add-button" type="button" data-detail="${item.id}">Agregar <span aria-hidden="true">＋</span></button>
      <span class="example-tag">EJEMPLO</span>
    </article>`).join("");
  emptyState.hidden = results.length > 0;
  applyImageFallbacks(grid);
}

function applyImageFallbacks(container) {
  container.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallback) {
        image.src = image.dataset.fallback;
        image.removeAttribute("data-fallback");
      }
    }, { once: true });
  });
}

function setFilter(button) {
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const selected = chip === button;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderCatalog();
}

document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => setFilter(button)));
search.addEventListener("input", renderCatalog);
document.querySelector("#clearSearch").addEventListener("click", () => {
  search.value = "";
  setFilter(document.querySelector('[data-filter="todos"]'));
});

function productPrice(item, count) {
  return count >= item.minWholesale ? item.wholesale : item.retail;
}

function updateProductDialog() {
  if (!selectedProduct) return;
  const wholesale = quantity >= selectedProduct.minWholesale;
  document.querySelector("#quantityValue").textContent = quantity;
  document.querySelector("#dialogTotal").textContent = formatMoney(productPrice(selectedProduct, quantity) * quantity);
  document.querySelector("#priceTierLabel").textContent = wholesale ? `Mayoreo de ejemplo · ${formatMoney(selectedProduct.wholesale)} por presentación` : `Menudeo de ejemplo · ${formatMoney(selectedProduct.retail)} por presentación`;
}

function openProduct(item) {
  selectedProduct = item;
  quantity = 1;
  document.querySelector("#dialogTitle").textContent = item.name;
  document.querySelector("#dialogCategory").textContent = item.family;
  document.querySelector("#dialogDescription").textContent = item.description;
  document.querySelector("#dialogPresentation").textContent = `Presentación: ${item.presentation}`;
  document.querySelector("#dialogRetail").textContent = `${formatMoney(item.retail)} / presentación`;
  document.querySelector("#dialogWholesale").textContent = `${formatMoney(item.wholesale)} / presentación`;
  document.querySelector("#dialogArt").innerHTML = `<img src="${photoPaths[item.id]}" data-fallback="${item.image}" alt="Imagen de ejemplo de ${item.name}" width="360" height="240">`;
  applyImageFallbacks(document.querySelector("#dialogArt"));
  updateProductDialog();
  productDialog.showModal();
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail]");
  if (button) openProduct(catalog.find((item) => item.id === button.dataset.detail));
});
document.querySelector("#dialogClose").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => { if (event.target === productDialog) productDialog.close(); });
document.querySelector("#quantityMinus").addEventListener("click", () => { quantity = Math.max(1, quantity - 1); updateProductDialog(); });
document.querySelector("#quantityPlus").addEventListener("click", () => { quantity += 1; updateProductDialog(); });

function renderCart() {
  const entries = [...cart.values()];
  const totalUnits = entries.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector("#cartCount").textContent = totalUnits;
  document.querySelector("#cartEmpty").hidden = entries.length > 0;
  document.querySelector("#cartItems").innerHTML = entries.map((entry) => {
    const unitPrice = productPrice(entry.product, entry.quantity);
    return `<article class="cart-item"><img src="${photoPaths[entry.product.id]}" data-fallback="${entry.product.image}" alt=""><div><strong>${entry.product.name}</strong><span>${entry.quantity} × ${formatMoney(unitPrice)} · ${entry.product.presentation}</span></div><button type="button" data-remove="${entry.product.id}" aria-label="Quitar ${entry.product.name}">×</button></article>`;
  }).join("");
  applyImageFallbacks(document.querySelector("#cartItems"));
  const total = entries.reduce((sum, entry) => sum + productPrice(entry.product, entry.quantity) * entry.quantity, 0);
  document.querySelector("#cartTotal").textContent = formatMoney(total);
}

document.querySelector("#addToCart").addEventListener("click", () => {
  if (!selectedProduct) return;
  const existing = cart.get(selectedProduct.id);
  cart.set(selectedProduct.id, { product: selectedProduct, quantity: quantity + (existing?.quantity || 0) });
  renderCart();
  productDialog.close();
  const button = document.querySelector("#cartOpen");
  button.classList.add("cart-added");
  window.setTimeout(() => button.classList.remove("cart-added"), 700);
});

document.querySelector("#cartOpen").addEventListener("click", () => { renderCart(); cartDialog.showModal(); });
document.querySelector("#cartClose").addEventListener("click", () => cartDialog.close());
cartDialog.addEventListener("click", (event) => { if (event.target === cartDialog) cartDialog.close(); });
document.querySelector("#cartItems").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  cart.delete(removeButton.dataset.remove);
  renderCart();
});

document.querySelectorAll("[data-jump-filter]").forEach((link) => {
  link.addEventListener("click", () => {
    const filterButton = document.querySelector(`[data-filter="${link.dataset.jumpFilter}"]`);
    if (filterButton) window.setTimeout(() => filterButton.click(), 120);
  });
});

const menuToggle = document.querySelector("#menuToggle");
const mobileNav = document.querySelector("#mobileNav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}));

const soundToggle = document.querySelector("#soundToggle");
const candyAudio = document.querySelector("#candyAudio");
candyAudio.volume = 0.24;
function syncSoundButton(playing) {
  soundToggle.setAttribute("aria-pressed", String(playing));
  soundToggle.setAttribute("aria-label", playing ? "Silenciar música" : "Activar música");
  soundToggle.querySelector(".sound-label").textContent = playing ? "Silenciar música" : "Activar música";
}
soundToggle.addEventListener("click", async () => {
  const enabled = soundToggle.getAttribute("aria-pressed") !== "true";
  if (enabled) {
    try { candyAudio.currentTime = 0; await candyAudio.play(); syncSoundButton(true); }
    catch { syncSoundButton(false); }
  } else { candyAudio.pause(); candyAudio.currentTime = 0; syncSoundButton(false); }
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderCatalog();
renderCart();
candyAudio.play().then(() => syncSoundButton(true)).catch(() => syncSoundButton(false));
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
}
