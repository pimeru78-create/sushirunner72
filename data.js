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
      { id: "r19", name: "Темпура с мидиями", weight: "250 г", price: 490, desc: "Рис, нори, мидии, сыр, темпура, соус", img: "images/tempura-mussels.jpg" },
      { id: "r20", name: "Канада лайт", weight: "300 г", price: 700, desc: "С угрём", img: "images/canada-light-eel.jpg" },
      { id: "r21", name: "Запечённая калифорния", weight: "350 г", price: 590, desc: "С крабом", img: "images/baked-california-crab.jpg" },
      { id: "r22", name: "Лава темпура", weight: "420 г", price: 570, desc: "С креветками", img: "images/lava-tempura-shrimp.jpg" }
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
    category: "Сеты",
    items: [
      { id: "s1", name: "Сет Меркурий", weight: "2200 г", price: 2750, desc: "Темпура с лососем, темпура с курицей, темпура с креветками, запечённый с угрём, запечённый с крабом, запечённая мидия", img: "images/set-merkuriy.jpg" },
      { id: "s2", name: "Сет маки", weight: "700 г", price: 999, desc: "Унаги маки, сяки маки, эби маки, капа маки", img: "images/set-maki.jpg" },
      { id: "s3", name: "Сет тар-тар", weight: "1 кг", price: 1700, desc: "Ролл тар-тар с креветками, ролл тар-тар с лососем, ролл тар-тар с угрём", img: "images/set-tartar.jpg" },
      { id: "s4", name: "Сет любимая", weight: "1200 г", price: 1999, desc: "Филка, калифорния с креветкой, лава с лососем, сяки маки с творожной шапочкой", img: "images/set-lyubimaya.jpg" },
      { id: "s5", name: "Сет офис", weight: "2 кг", price: 2950, desc: "Канада с угрём, филка, калифорния с лососем, запечённый с креветками, лава с лососем, карамельная филка", img: "images/set-ofis.jpg" },
      { id: "s6", name: "Сет вечерний", weight: "1350 г", price: 1850, desc: "Филка, запечённый с угрём, лава темпура, эби маки с творожной шапочкой", img: "images/set-vecherniy.jpg" },
      { id: "s7", name: "Сет вкусный", weight: "1200 г", price: 1800, desc: "Запечённая калифорния с крабом, филка, сяки маки, крем ролл с угрём", img: "images/set-vkusniy.jpg" },
      { id: "s8", name: "Сет Апрельский", weight: "1250 г", price: 1850, desc: "Филка, калифорния с креветкой, темпура с курицей, запечённый с лососем", img: "images/set-aprelskiy.jpg" },
      { id: "s9", name: "Сет на четверых", weight: "2 кг", price: 3000, desc: "Калифорния с лососем, лава с лососем, Филадельфия Лайт, темпура с курицей, эби маки, запечённый с угрём", img: "images/set-na-chetveryh.jpg" },
      { id: "s10", name: "Сет на двоих", weight: "650 г", price: 999, desc: "Филка, эби маки, ролл с кунжутом и лососем", img: "images/set-na-dvoih.jpg" },
      { id: "s11", name: "Сет Надежда", weight: "1 кг", price: 1499, desc: "Филка, чука чука, лава с лососем, капа маки", img: "images/set-nadezhda.jpg" }
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
      { id: "f1", name: "Сет Фришка", weight: "450 г", price: 690, desc: "Луковые кольца, наггетсы, картофель фри", img: "images/set-frishka.jpg" },
      { id: "f4", name: "Жареный сэндвич", weight: "230 г", price: 250, desc: "С крабом", img: "images/sandwich-crab.jpg" },
      { id: "f5", name: "Твистер", weight: "250 г", price: 290, desc: "С куриными стрипсами, помидор, лист салата, творожный сыр, спайси соус", img: "images/twister.jpg" }
    ]
  }
];
