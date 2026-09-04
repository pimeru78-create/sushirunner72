// Меню Sushi Runner — данные и фото взяты из Telegram-канала @SushiRunnerr72

const MENU = [
  {
    category: "Роллы",
    items: [
      { id: "r2", name: "Ролл Бонито", weight: "—", price: 550, desc: "Лосось, огурец, стружка тунца, творожный сыр", img: "images/bonito.jpg" },
      { id: "r3", name: "Эби лайт", weight: "250 г", price: 590, desc: "Лосось, творожный сыр, икра масаго, огурец, тигровая креветка, кисло-сладкий соус", img: "images/ebi-light.jpg" },
      { id: "r7", name: "Филка", weight: "250 г", price: 500, desc: "", img: "images/filka.jpg" },
      { id: "r8", name: "Филадельфия Лайт", weight: "330 г", price: 850, desc: "", img: "images/philadelphia-light.jpg" },
      { id: "r9", name: "Запечённый с лососем", weight: "380 г", price: 550, desc: "", img: "images/baked-salmon.jpg" },
      { id: "r10", name: "Запечённый с угрём", weight: "380 г", price: 600, desc: "", img: "images/baked-eel.jpg" },
      { id: "r11", name: "Запечённый с мидиями", weight: "380 г", price: 500, desc: "", img: "images/baked-mussels.jpg" },
      { id: "r12", name: "Запечённый с крабом", weight: "380 г", price: 550, desc: "", img: "images/baked-crab.jpg" },
      { id: "r13", name: "Запечённый с курицей", weight: "380 г", price: 500, desc: "", img: "images/baked-chicken.jpg" },
      { id: "r14", name: "Запечённый с креветкой", weight: "380 г", price: 550, desc: "", img: "images/baked-shrimp.jpg" },
      { id: "r15", name: "Темпура с курицей", weight: "250 г", price: 450, desc: "", img: "images/tempura-chicken.jpg" },
      { id: "r16", name: "Темпура с лососем", weight: "250 г", price: 500, desc: "", img: "images/tempura-salmon.jpg" },
      { id: "r17", name: "Темпура с крабом", weight: "250 г", price: 450, desc: "", img: "images/tempura-crab.jpg" },
      { id: "r18", name: "Темпура с угрём", weight: "250 г", price: 590, desc: "", img: "images/tempura-eel.jpg" },
      { id: "r19", name: "Темпура с мидиями", weight: "250 г", price: 490, desc: "", img: "images/tempura-mussels.jpg" }
    ]
  },
  {
    category: "Поке и вок",
    items: [
      { id: "po1", name: "Поке с лососем", weight: "300 г", price: 600, desc: "Свежий лосось, огурец, чука, апельсин, авокадо, рис, икра тобико, ореховый соус", img: "images/poke-salmon.jpg" },
      { id: "po2", name: "Поке с креветками", weight: "300 г", price: 600, desc: "Тигровые креветки, огурец, чука, авокадо, рис, апельсин, икра тобико, соус кисло-сладкий", img: "images/poke-shrimp.jpg" },
      { id: "wo1", name: "Вок с креветками и овощами", weight: "350 г", price: 550, desc: "Лук, морковь, цукини, болгарский перец, соус терияки, соус кисло-сладкий", img: "images/wok-shrimp-veg.jpg" }
    ]
  },
  {
    category: "Сеты",
    items: [
      { id: "s2", name: "Сет Калифорния", weight: "750 г", price: 1500, desc: "Калифорния с лососем, калифорния с креветкой, калифорния с крабом", img: "images/set-california.jpg" },
      { id: "s4", name: "Сет тар-тар", weight: "1 кг", price: 1700, desc: "Ролл тар-тар с креветкой, ролл тар-тар с лососем, ролл тар-тар с угрём", img: "images/set-tartar.jpg" },
      { id: "s5", name: "Сет на четверых", weight: "2 кг", price: 3000, desc: "Калифорния с лососем, лава с лососем, Филадельфия Лайт, темпура с курицей, эби маки, запечённый с угрём", img: "images/set-na-chetveryh.jpg" },
      { id: "s6", name: "Сет любимая", weight: "1100 г", price: 1999, desc: "Филка, калифорния с креветкой, лава лосось, сяки маки лава", img: "images/set-lyubimaya.jpg" },
      { id: "s7", name: "Сет Апрельский", weight: "1250 г", price: 1850, desc: "Филка, калифорния с креветкой, темпура с курицей, запечённый с лососем", img: "images/set-aprelskiy.jpg" },
      { id: "s8", name: "Сет офис", weight: "2 кг", price: 2950, desc: "Канада с угрём, калифорния с лососем, филка, запечённый с креветками, лава с лососем, карамельная филка", img: "images/set-ofis.jpg" },
      { id: "s9", name: "Сет меркурий мини", weight: "1250 г", price: 1899, desc: "Темпура лосось, темпура креветка, запечённый с крабом, запечённый с курицей", img: "images/set-merkuriy-mini.jpg" },
      { id: "s10", name: "Сет на двоих", weight: "650 г", price: 999, desc: "Филка, эби маки, ролл с кунжутом и лососем", img: "images/set-na-dvoih.jpg" },
      { id: "s11", name: "Сет «Надя любит роллы»", weight: "1 кг", price: 1499, desc: "Лава с лососем, капа маки, филка, чука чука", img: "images/set-nadya.jpg" }
    ]
  },
  {
    category: "Пицца",
    items: [
      { id: "p1", name: "Пицца «Мясная»", weight: "—", price: 1500, desc: "Томатный соус, фарш говядина, помидоры, красный лук, болгарский перец, моцарелла", img: "images/meat-pizza.jpg" },
      { id: "p2", name: "Пицца «Четыре сыра»", weight: "—", price: 900, desc: "Моцарелла, сулугуни, дор блю, пармезан", img: "images/four-cheese.jpg" },
      { id: "p3", name: "Пицца «Пепперони»", weight: "1100 г", price: 1150, desc: "", img: "images/pepperoni-pizza.jpg" }
    ]
  },
  {
    category: "Супы и закуски",
    items: [
      { id: "f1", name: "Уха из лосося", weight: "400 г", price: 350, desc: "Лук, морковь", img: "images/uha.jpg" },
      { id: "f2", name: "Фритюрные штучки", weight: "800 г", price: 1000, desc: "", img: "images/fritjur.jpg" },
      { id: "f3", name: "Корн доги", weight: "280 г", price: 300, desc: "Куриная сосиска, спайси соус, сырный соус", img: "images/corndogs.jpg" },
      { id: "f4", name: "Жаренный сэндвич с лососем", weight: "230 г", price: 250, desc: "", img: "images/sandwich-salmon.jpg" },
      { id: "f5", name: "Твистер", weight: "250 г", price: 290, desc: "Куриные стрипсы, помидор, лист салата, творожный сыр, спайси соус", img: "images/twister.jpg" }
    ]
  }
];
