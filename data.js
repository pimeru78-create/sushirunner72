// Меню Sushi Runner — данные и фото взяты из Telegram-канала @SushiRunnerr72

const MENU = [
  {
    category: "Роллы",
    items: [
      { id: "r1", name: "Ролл чиканок", weight: "240 г", price: 500, desc: "Курица, огурец, творожный сыр, сливочный и спайси соус", img: "images/chikanok.jpg" },
      { id: "r2", name: "Ролл Бонито", weight: "—", price: 550, desc: "Лосось, огурец, стружка тунца, творожный сыр", img: "images/bonito.jpg" },
      { id: "r3", name: "Эби лайт", weight: "250 г", price: 590, desc: "Лосось, творожный сыр, икра масаго, огурец, тигровая креветка, кисло-сладкий соус", img: "images/ebi-light.jpg" },
      { id: "r4", name: "Ролл ассорти с креветкой и мидией", weight: "250 г", price: 530, desc: "Творожный сыр, лосось, огурец, спайси соус, кисло-сладкий соус", img: "images/assorti-shrimp-mussel.jpg" },
      { id: "r5", name: "Ролл хорека", weight: "320 г", price: 650, desc: "Творожный сыр, угорь, огурец, икра масаго", img: "images/horeka.jpg" },
      { id: "r6", name: "Бургер ролл", weight: "350 г", price: 490, desc: "Лосось, сыр творожный, лист салата, огурец, соус терияки, соус спайси", img: "images/burger-roll.jpg" }
    ]
  },
  {
    category: "Сеты",
    items: [
      { id: "s1", name: "Сет Маки", weight: "—", price: 900, desc: "Лосось, креветка, краб, огурец", img: "images/set-maki.jpg" },
      { id: "s2", name: "Сет Калифорния", weight: "750 г", price: 1500, desc: "Калифорния с лососем, калифорния с креветкой, калифорния с крабом", img: "images/set-california.jpg" },
      { id: "s3", name: "Сет Сингапур", weight: "1200 г", price: 2150, desc: "Калифорния с креветкой, ролл ассорти, запечённый с креветками, ролл хорека", img: "images/set-singapore.jpg" },
      { id: "s4", name: "Сет тар-тар", weight: "1 кг", price: 2000, desc: "Ролл тар-тар с креветкой, ролл тар-тар с лососем, ролл тар-тар с угрём", img: "images/set-tartar.jpg" },
      { id: "s5", name: "Сет на четверых", weight: "2 кг", price: 3000, desc: "Калифорния с лососем, лава с лососем, Филадельфия Лайт, темпура с курицей, эби маки, запечённый с угрём", img: "images/set-na-chetveryh.jpg" },
      { id: "s6", name: "Сет любимая", weight: "1100 г", price: 1999, desc: "Филка, калифорния с креветкой, лава лосось, сяки маки лава", img: "images/set-lyubimaya.jpg" },
      { id: "s7", name: "Сет Апрельский", weight: "1250 г", price: 1850, desc: "Филка, калифорния с креветкой, темпура с курицей, запечённый с лососем", img: "images/set-aprelskiy.jpg" },
      { id: "s8", name: "Сет офис", weight: "2 кг", price: 2950, desc: "Канада с угрём, калифорния с лососем, филка, запечённый с креветками, лава с лососем, карамельная филка", img: "images/set-ofis.jpg" },
      { id: "s9", name: "Сет меркурий мини", weight: "1250 г", price: 1899, desc: "Темпура лосось, темпура креветка, запечённый с крабом, запечённый с курицей", img: "images/set-merkuriy-mini.jpg" }
    ]
  },
  {
    category: "Пицца",
    items: [
      { id: "p1", name: "Пицца «Мясная»", weight: "—", price: 1500, desc: "Томатный соус, фарш говядина, помидоры, красный лук, болгарский перец, моцарелла", img: "images/meat-pizza.jpg" },
      { id: "p2", name: "Пицца «Четыре сыра»", weight: "—", price: 900, desc: "Моцарелла, сулугуни, дор блю, пармезан", img: "images/four-cheese.jpg" }
    ]
  },
  {
    category: "Супы и закуски",
    items: [
      { id: "f1", name: "Уха из лосося", weight: "400 г", price: 350, desc: "Лук, морковь", img: "images/uha.jpg" },
      { id: "f2", name: "Фритюрные штучки", weight: "800 г", price: 1000, desc: "", img: "images/fritjur.jpg" },
      { id: "f3", name: "Корн доги", weight: "280 г", price: 300, desc: "Куриная сосиска, спайси соус, сырный соус", img: "images/corndogs.jpg" },
      { id: "f4", name: "Жаренный сэндвич с лососем", weight: "180 г", price: 250, desc: "", img: "images/sandwich-salmon.jpg" }
    ]
  }
];
