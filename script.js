// ====== НАСТРОЙКИ ======
const CONFIG = {
  maxPhone: "79504858786"
};

// ====== СОСТОЯНИЕ КОРЗИНЫ ======
const cart = {}; // id -> { item, qty }

function findItemById(id) {
  for (const cat of MENU) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

function addToCart(id) {
  const item = findItemById(id);
  if (!cart[id]) cart[id] = { item, qty: 0 };
  cart[id].qty += 1;
  renderCart();
  renderMenu();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
  renderMenu();
}

function cartTotal() {
  return Object.values(cart).reduce((sum, e) => sum + e.item.price * e.qty, 0);
}

function cartCount() {
  return Object.values(cart).reduce((sum, e) => sum + e.qty, 0);
}

// ====== РЕНДЕР МЕНЮ ======
function renderMenu() {
  const menuEl = document.getElementById("menu");
  const navEl = document.getElementById("categoryNav");
  menuEl.innerHTML = "";
  navEl.innerHTML = "";

  MENU.forEach((cat, idx) => {
    const anchorId = "cat-" + idx;

    const navLink = document.createElement("a");
    navLink.href = "#" + anchorId;
    navLink.textContent = cat.category;
    navEl.appendChild(navLink);

    const section = document.createElement("section");
    section.className = "menu-category";
    section.id = anchorId;

    const h2 = document.createElement("h2");
    h2.textContent = cat.category;
    section.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "menu-grid";

    cat.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "dish-card";

      const qty = cart[item.id] ? cart[item.id].qty : 0;
      const controlHtml = qty > 0
        ? `<div class="qty-control">
             <button data-action="dec" data-id="${item.id}">−</button>
             <span>${qty}</span>
             <button data-action="inc" data-id="${item.id}">+</button>
           </div>`
        : `<button class="add-btn" data-action="add" data-id="${item.id}">Добавить</button>`;

      const photoHtml = item.img
        ? `<img src="${item.img}" alt="${item.name}" loading="lazy">`
        : item.emoji;

      card.innerHTML = `
        <div class="dish-photo" style="background:${item.color || "#f3ede4"}">${photoHtml}</div>
        <div class="dish-body">
          <div class="dish-name">${item.name}</div>
          <div class="dish-weight">${item.weight}</div>
          <div class="dish-desc">${item.desc || ""}</div>
          <div class="dish-footer">
            <div class="dish-price">${item.price} ₽</div>
            ${controlHtml}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    menuEl.appendChild(section);
  });

  menuEl.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "add" || action === "inc") addToCart(id);
      if (action === "dec") changeQty(id, -1);
    });
  });
}

// ====== РЕНДЕР КОРЗИНЫ ======
function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");
  const summaryEl = document.getElementById("cartSummary");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");
  const mobileBtn = document.getElementById("mobileCartBtn");
  const mobileTotal = document.getElementById("mobileCartTotal");

  const entries = Object.values(cart);
  itemsEl.innerHTML = "";

  if (entries.length === 0) {
    emptyEl.style.display = "block";
    summaryEl.style.display = "none";
  } else {
    emptyEl.style.display = "none";
    summaryEl.style.display = "block";
    entries.forEach(({ item, qty }) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img class="cart-item__emoji" src="${item.img}" alt="${item.name}">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name} × ${qty}</div>
          <div class="cart-item__price">${item.price * qty} ₽</div>
        </div>
        <button class="cart-item__remove" data-id="${item.id}">Убрать</button>
      `;
      itemsEl.appendChild(row);
    });
    itemsEl.querySelectorAll(".cart-item__remove").forEach(btn => {
      btn.addEventListener("click", () => {
        delete cart[btn.dataset.id];
        renderCart();
        renderMenu();
      });
    });
  }

  const total = cartTotal();
  totalEl.textContent = total + " ₽";
  countEl.textContent = cartCount();
  mobileTotal.textContent = total + " ₽";
  mobileBtn.classList.toggle("visible", cartCount() > 0);
}

// ====== ОТКРЫТИЕ / ЗАКРЫТИЕ КОРЗИНЫ ======
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("cartOpenBtn").addEventListener("click", openCart);
document.getElementById("mobileCartBtn").addEventListener("click", openCart);
document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ====== ДОСТАВКА / САМОВЫВОЗ ======
const addressLabel = document.getElementById("addressLabel");
const addressInput = addressLabel.querySelector("input");
document.querySelectorAll('input[name="delivery"]').forEach(radio => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "pickup") {
      addressLabel.style.display = "none";
      addressInput.required = false;
    } else {
      addressLabel.style.display = "flex";
      addressInput.required = true;
    }
  });
});

// ====== ФОРМИРОВАНИЕ ТЕКСТА ЗАКАЗА ======
function buildOrderText() {
  const form = document.getElementById("orderForm");
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const deliveryType = form.delivery.value;
  const address = form.address.value.trim();
  const comment = form.comment.value.trim();
  const payment = form.payment.value;

  let text = "Новый заказ с сайта Суши Раннер\n\n";
  Object.values(cart).forEach(({ item, qty }) => {
    text += `• ${item.name} × ${qty} — ${item.price * qty} ₽\n`;
  });
  text += `\nИтого: ${cartTotal()} ₽\n\n`;
  text += `Имя: ${name}\n`;
  text += `Телефон: ${phone}\n`;
  text += deliveryType === "delivery" ? `Доставка по адресу: ${address}\n` : `Самовывоз\n`;
  text += `Оплата: ${payment === "card" ? "картой" : "наличными"}\n`;
  if (comment) text += `Комментарий: ${comment}\n`;

  return text;
}

function validateForm() {
  const form = document.getElementById("orderForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  if (cartCount() === 0) {
    alert("Корзина пуста — добавьте блюда из меню");
    return false;
  }
  return true;
}

document.querySelectorAll(".send-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!validateForm()) return;
    const text = buildOrderText();

    navigator.clipboard.writeText(text).then(() => {
      alert("Текст заказа скопирован. Откройте MAX и отправьте его в чат заведения.");
    }).catch(() => {
      alert("Не удалось скопировать автоматически. Текст заказа:\n\n" + text);
    });
  });
});

// ====== СТАРТ ======
renderMenu();
renderCart();
