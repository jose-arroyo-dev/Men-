const imageAssets = {
  "steak-category": { src: "/images/steak-category-929df68ca5af.webp", width: 900, height: 506 },
  "steak-ribeye": { src: "/images/steak-ribeye-2de044ad2c61.webp", width: 900, height: 601 },
  "steak-filet": { src: "/images/steak-filet-c9ccccb58391.webp", width: 900, height: 600 },
  "fish-salmon": { src: "/images/fish-salmon-0b076b475f81.webp", width: 900, height: 1350 },
  "fish-catch": { src: "/images/fish-catch-0513b4734d9f.webp", width: 900, height: 600 },
  "fish-shrimp": { src: "/images/fish-shrimp-704dd81697c3.webp", width: 900, height: 601 },
  "pasta-mushroom": { src: "/images/pasta-mushroom-a97523c43e04.webp", width: 900, height: 601 },
  "pasta-alfredo": { src: "/images/pasta-alfredo-7a8c5e1d37b2.webp", width: 900, height: 561 },
  "berry-lemonade": { src: "/images/berry-lemonade-8d1a07cbdea7.webp", width: 900, height: 1350 },
  "house-mojito": { src: "/images/house-mojito-8e5db0e670c0.webp", width: 900, height: 600 },
  "fruit-water": { src: "/images/fruit-water-cfb8fee60b1c.webp", width: 900, height: 1107 },
  "chocolate-cake": { src: "/images/chocolate-cake-874a6d3a5e8f.webp", width: 900, height: 662 },
  "berry-cheesecake": { src: "/images/berry-cheesecake-5d3ce0ca2010.webp", width: 900, height: 600 },
  "tiramisu": { src: "/images/tiramisu-1d2080226a17.webp", width: 900, height: 1200 },
};

function image(name, alt = "", priority = false) {
  const asset = imageAssets[name];
  const priorityAttributes = priority ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return `<img src="${asset.src}" width="${asset.width}" height="${asset.height}" alt="${safeText(alt)}" ${priorityAttributes} decoding="async" />`;
}

const menu = [
  {
    id: "carnes",
    title: "Carnes",
    count: 99,
    image: "steak-category",
    description: "Cortes seleccionados, cocinados al punto perfecto.",
    dishes: [
      {
        name: "Ribeye a las brasas",
        price: 500,
        rating: 4.9,
        popular: true,
        image: "steak-ribeye",
        description: "Ribeye a la parrilla con mantequilla de hierbas y vegetales de temporada.",
      },
      {
        name: "Filete de res",
        price: 450,
        rating: 4.8,
        popular: true,
        image: "steak-filet",
        description: "Corte tierno con reducción de vino tinto y puré de papa cremoso.",
      },
    ],
  },
  {
    id: "pescados",
    title: "Pescados",
    count: 106,
    image: "fish-salmon",
    description: "Sabores frescos del mar, preparados al momento.",
    dishes: [
      {
        name: "Salmón a la plancha",
        price: 420,
        rating: 4.8,
        popular: true,
        image: "fish-salmon",
        description: "Salmón sellado con salsa de cítricos, hierbas frescas y vegetales.",
      },
      {
        name: "Pesca del día",
        price: 460,
        rating: 4.7,
        popular: true,
        image: "fish-catch",
        description: "Filete fresco del día con mantequilla de limón y ensalada verde.",
      },
      {
        name: "Camarones al ajillo",
        price: 390,
        rating: 4.6,
        popular: false,
        image: "fish-shrimp",
        description: "Camarones salteados al ajo con arroz aromático y un toque de chile.",
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    count: 24,
    image: "pasta-mushroom",
    description: "Pasta fresca y salsas hechas en nuestra cocina.",
    dishes: [
      {
        name: "Pasta con hongos",
        price: 380,
        rating: 4.8,
        popular: true,
        image: "pasta-mushroom",
        description: "Pasta fresca con hongos, parmesano y un toque de albahaca.",
      },
      {
        name: "Fettuccine Alfredo",
        price: 360,
        rating: 4.6,
        popular: false,
        image: "pasta-alfredo",
        description: "Fettuccine hecho en casa con salsa cremosa y parmesano añejo.",
      },
      {
        name: "Pasta de la casa",
        price: 380,
        rating: 4.7,
        popular: false,
        image: "pasta-mushroom",
        description: "Pasta fresca con hongos, parmesano y un toque de albahaca.",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    count: 18,
    image: "berry-lemonade",
    description: "Bebidas refrescantes y coctelería de la casa.",
    dishes: [
      {
        name: "Limonada de frutos rojos",
        price: 95,
        rating: 4.8,
        popular: true,
        image: "berry-lemonade",
        description: "Limonada natural con frutos rojos frescos y un toque de menta.",
      },
      {
        name: "Mojito de la casa",
        price: 140,
        rating: 4.7,
        popular: true,
        image: "house-mojito",
        description: "Ron, limón, hierbabuena fresca y hielo frappé.",
      },
      {
        name: "Agua fresca",
        price: 65,
        rating: 4.5,
        popular: false,
        image: "fruit-water",
        description: "Agua fresca preparada al día con fruta de temporada.",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    count: 12,
    image: "chocolate-cake",
    description: "Un dulce final, preparado con cariño en casa.",
    dishes: [
      {
        name: "Pastel de chocolate",
        price: 130,
        rating: 4.9,
        popular: true,
        image: "chocolate-cake",
        description: "Bizcocho húmedo de chocolate con ganache y frutos rojos.",
      },
      {
        name: "Cheesecake de frutos rojos",
        price: 145,
        rating: 4.8,
        popular: true,
        image: "berry-cheesecake",
        description: "Cheesecake cremoso con coulis de frutos rojos de temporada.",
      },
      {
        name: "Tiramisú",
        price: 125,
        rating: 4.6,
        popular: false,
        image: "tiramisu",
        description: "Clásico tiramisú italiano con café espresso y cacao.",
      },
    ],
  },
];

const app = document.querySelector("#app");
const filterDialog = document.querySelector("#filter-dialog");
const filterForm = document.querySelector("#filter-form");
const sortSelect = document.querySelector("#sort-select");
const popularOnly = document.querySelector("#popular-only");
const state = { categoryId: null, query: "", sort: "popular", popularOnly: false };

const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.4"></circle><path d="m16.2 16.2 5 5"></path></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 4v5m0 4v7M12 4v9m0 4v3m7-16v3m0 4v9"></path><circle cx="5" cy="11" r="2"></circle><circle cx="12" cy="15" r="2"></circle><circle cx="19" cy="9" r="2"></circle></svg>',
  home: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"></path></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2-4.5-4.4 6.3-.9z"></path></svg>',
};

function safeText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function formatPrice(price) {
  return `$${price}`;
}

function categoryCard(category) {
  return `
    <button class="category-card" type="button" data-category="${category.id}" aria-label="Ver ${category.title}">
      ${image(category.image, "", category.id === menu[0].id)}
      <span class="category-card-copy">
        <strong>${category.title}</strong><span>(${category.count})</span>
      </span>
    </button>
  `;
}

function productCard(category, dish) {
  return `
    <button class="category-card" type="button" data-category="${category.id}" aria-label="Ver ${safeText(dish.name)} en ${category.title}">
      ${image(dish.image)}
      <span class="category-card-copy">
        <strong>${safeText(dish.name)}</strong><span>${formatPrice(dish.price)}</span>
      </span>
    </button>
  `;
}

function homeView() {
  const query = state.query.trim().toLocaleLowerCase("es");
  const mainCategories = menu.slice(0, 3).filter((category) =>
    !query || category.title.toLocaleLowerCase("es").includes(query) ||
      category.dishes.some((dish) => `${dish.name} ${dish.description}`.toLocaleLowerCase("es").includes(query)),
  );
  const sections = [
    {
      title: "Platillos principales",
      id: "principales",
      cards: mainCategories.map(categoryCard).join(""),
      count: mainCategories.length,
    },
    ...menu.slice(3).map((category) => {
      const dishes = category.dishes.filter((dish) =>
        !query || category.title.toLocaleLowerCase("es").includes(query) ||
          `${dish.name} ${dish.description}`.toLocaleLowerCase("es").includes(query),
      );
      return {
        title: category.title,
        id: category.id,
        cards: dishes.map((dish) => productCard(category, dish)).join(""),
        count: dishes.length,
      };
    }),
  ].filter((section) => section.count > 0).map((section) => `
      <section class="menu-section" aria-labelledby="section-${section.id}">
        <div class="section-heading">
          <h2 id="section-${section.id}">${section.title}</h2>
          <span>${section.count} ${section.count === 1 ? "opción" : "opciones"}</span>
        </div>
        <div class="carousel" aria-label="${section.title}, desliza para ver más">
          ${section.cards}
        </div>
      </section>
    `).join("");

  app.innerHTML = `
    <header class="home-header">
      <h1 class="home-title">Menú</h1>
      <div class="search-row">
        <label class="search-box">
          ${icons.search}
          <input id="menu-search" type="search" placeholder="Busca platillos o categorías" value="${safeText(state.query)}" autocomplete="off" aria-label="Buscar platillos o categorías" />
        </label>
        <button class="icon-button" type="button" data-open-filters aria-label="Abrir filtros">${icons.filter}</button>
      </div>
    </header>
    <div class="home-content">
      ${sections || '<div class="empty-state"><strong>No encontramos resultados</strong>Prueba con otro nombre o categoría.</div>'}
    </div>
  `;

  app.querySelector("#menu-search").addEventListener("input", (event) => {
    const position = event.target.selectionStart;
    state.query = event.target.value;
    homeView();
    const input = app.querySelector("#menu-search");
    input.focus();
    input.setSelectionRange(position, position);
  });
}

function sortDishes(dishes) {
  const sorted = [...dishes];
  if (state.sort === "price-low") return sorted.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") return sorted.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") return sorted.sort((a, b) => b.rating - a.rating);
  return sorted.sort((a, b) => Number(b.popular) - Number(a.popular));
}

function dishCard(dish, priority = false) {
  return `
    <article class="dish-card">
      <div class="dish-image-wrap">
        ${image(dish.image, dish.name, priority)}
        ${dish.popular ? '<span class="badge">Popular</span>' : ""}
        <span class="rating">${icons.star}${dish.rating.toFixed(1)}</span>
      </div>
      <div class="dish-copy">
        <div class="dish-title-row">
          <h2>${safeText(dish.name)}</h2>
          <span class="dish-price">${formatPrice(dish.price)}</span>
        </div>
        <p>${safeText(dish.description)}</p>
      </div>
    </article>
  `;
}

function detailView(category) {
  let dishes = category.dishes;
  const query = state.query.trim().toLocaleLowerCase("es");
  if (query) {
    dishes = dishes.filter((dish) =>
      `${dish.name} ${dish.description}`.toLocaleLowerCase("es").includes(query),
    );
  }
  if (state.popularOnly) dishes = dishes.filter((dish) => dish.popular);
  dishes = sortDishes(dishes);

  app.innerHTML = `
    <header class="detail-header">
      <h1>${category.title}</h1>
      <button class="icon-button" type="button" data-open-filters aria-label="Filtrar y ordenar">${icons.filter}</button>
    </header>
    <section class="detail-content">
      <p class="detail-intro">${category.description}</p>
      <div class="dish-list">
        ${dishes.length
          ? dishes.map((dish, index) => dishCard(dish, index === 0)).join("")
          : '<div class="empty-state"><strong>No hay platillos para mostrar</strong>Prueba cambiando los filtros.</div>'}
      </div>
    </section>
    <button class="icon-button home-button home-button-floating" type="button" data-home aria-label="Volver al menú principal">${icons.home}</button>
  `;
}

function render() {
  const category = menu.find((item) => item.id === state.categoryId);
  if (category) detailView(category);
  else homeView();
}

app.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.categoryId = categoryButton.dataset.category;
    state.query = "";
    state.sort = "popular";
    state.popularOnly = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (event.target.closest("[data-home]")) {
    state.categoryId = null;
    state.query = "";
    state.sort = "popular";
    state.popularOnly = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (event.target.closest("[data-open-filters]")) {
    sortSelect.value = state.sort;
    popularOnly.checked = state.popularOnly;
    filterDialog.showModal();
  }
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.sort = sortSelect.value;
  state.popularOnly = popularOnly.checked;
  filterDialog.close();
  render();
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  state.sort = "popular";
  state.popularOnly = false;
  sortSelect.value = state.sort;
  popularOnly.checked = false;
  if (state.categoryId) render();
});

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("No se pudo registrar el service worker:", error);
    });
  });
}
