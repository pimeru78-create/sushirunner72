// Меню Sushi Runner — данные и фото взяты из Telegram-канала @SushiRunnerr72

const MENU = [
  {
    category: "Роллы",
    items: [
      { id: "r2", name: "Ролл Бонито", weight: "—", price: 550, desc: "Лосось, огурец, стружка тунца, творожный сыр", img: "images/bonito.jpg" },
      { id: "r3", name: "Эби лайт", weight: "250 г", price: 590, desc: "Лосось, творожный сыр, икра масаго, огурец, тигровая креветка, кисло-сладкий соус", img: "images/ebi-light.jpg" },
      { id: "r7", name: "Филка", weight: "250 г", price: 500, desc: "Лосось, рис, творожный сыр", img: "images/filka.jpg" },
      { id: "r8", name: "Филадельфия Лайт", weight: "330 г", price: 850, desc: "Лосось, огурец, творожный сыр", img: "images/philadelphia-light.jpg" },
      { id: "r9", name: "Запечённый с лососем", weight: "380 г", price: 550, desc: "Рис, нори, лосось, творожный сыр, соус, кунжут", img: "images/baked-salmon.jpg" },
      { id: "r10", name: "Запечённый с угрём", weight: "380 г", price: 600, desc: "Рис, нори, угорь, творожный сыр, соус, кунжут", img: "images/baked-eel.jpg" },
      { id: "r11", name: "Запечённый с мидиями", weight: "380 г", price: 500, desc: "Рис, нори, мидии, творожный сыр, соус, кунжут", img: "images/baked-mussels.jpg" },
      { id: "r12", name: "Запечённый с крабом", weight: "380 г", price: 550, desc: "Рис, нори, краб, творожный сыр, соус, кунжут", img: "images/baked-crab.jpg" },
      { id: "r13", name: "Запечённый с курицей", weight: "380 г", price: 500, desc: "Рис, нори, курица, творожный сыр, соус, кунжут", img: "images/baked-chicken.jpg" },
      { id: "r14", name: "Запечённый с креветкой", weight: "380 г", price: 550, desc: "Рис, нори, креветка, творожный сыр, соус, кунжут", img: "images/baked-shrimp.jpg" },
      { id: "r15", name: "Темпура с курицей", weight: "250 г", price: 450, desc: "Рис, нори, курица, сыр, темпура, соус", img: "images/tempura-chicken.jpg" },
      { id: "r16", name: "Темпура с лососем", weight: "250 г", price: 500, desc: "Рис, нори, лосось, сыр, темпура, соус", img: "images/tempura-salmon.jpg" },
      { id: "r17", name: "Темпура с крабом", weight: "250 г", price: 450, desc: "Рис, нори, краб, сыр, темпура, соус", img: "images/tempura-crab.jpg" },
      { id: "r18", name: "Темпура с угрём", weight: "250 г", price: 590, desc: "Рис, нори, угорь, сыр, темпура, соус", img: "images/tempura-eel.jpg" },
      { id: "r19", name: "Темпура с мидиями", weight: "250 г", price: 490, desc: "Рис, нори, мидии, сыр, темпура, соус", img: "images/tempura-mussels.jpg" }
    ]
  },
  {
    category: "Поке и вок",
    items: [
      { id: "po1", name: "Поке с лососем", weight: "300 г", price: 600, desc: "Свежий лосось, огурец, чука, апельсин, авокадо, рис, икра тобико, ореховый соус", img: "images/poke-salmon.jpg" },
      { id: "po2", name: "Поке с креветками", weight: "300 г", price: 600, desc: "Тигровые креветки, огурец, чука, авокадо, рис, апельсин, икра тобико, соус кисло-сладкий", img: "images/poke-shrimp.jpg" },
      { id: "wo1", name: "Вок с креветками и овощами", weight: "350 г", price: 550, desc: "Лук, морковь, цукини, болгарский перец, соус терияки, соус кисло-сладкий", img: "images/wok-shrimp-veg.jpg" },
      { id: "wo2", name: "Вок с курицей и овощами", weight: "350 г", price: 500, desc: "Морковь, лук, болгарский перец, цукини, соус терияки, соус кисло-сладкий", img: "images/wok-chicken-veg.jpg" }
    ]
  },
  {
    category: "Пицца",
    items: [
      { id: "p1", name: "Пицца «Мясная»", weight: "—", price: 1500, desc: "Томатный соус, фарш говядина, помидоры, красный лук, болгарский перец, моцарелла", img: "images/meat-pizza.jpg" }
    ]
  },
  {
    category: "Супы и закуски",
    items: [
      { id: "f4", name: "Жаренный сэндвич с лососем", weight: "230 г", price: 250, desc: "Лосось, темпура, соус", img: "images/sandwich-salmon.jpg" },
      { id: "f5", name: "Твистер", weight: "250 г", price: 290, desc: "Куриные стрипсы, помидор, лист салата, творожный сыр, спайси соус", img: "images/twister.jpg" }
    ]
  }
];
