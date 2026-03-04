// Здесь будут храниться все данные о товарах
const productsData = {
  brelki: [
    { 
      id: 'brelok-stranger-things',
      title: 'Брелок Stranger Things', 
      price: 90, 
      category: 'Брелки', 
      categoryLink: 'brelki',
      mainImage: '/images/brelki/Stranger-Things-main.jpg', // путь к главному фото
      images: [ // дополнительные фото для галереи
        '/images/brelki/Stranger-Things-main.jpg',
        '/images/brelki/Stranger-Things-1.jpg'
      ],
      description: 'Милый вязаный котик станет отличным подарком или украшением для ваших ключей. Ручная работа, высококачественная пряжа.',
      characteristics: {
        material: 'Хлопок 100%',
        size: '10 см',
        color: 'Рыжий',
        weight: '30 г'
      }
    },
    { 
      id: 'brelok-kotik',
      title: 'Брелок "Котик"', 
      price: 500, 
      category: 'Брелки', 
      categoryLink: 'brelki',
      mainImage: '/images/brelki/kotik-main.jpg', // путь к главному фото
      images: [ // дополнительные фото для галереи
        '/images/brelki/kotik-1.jpg',
        '/images/brelki/kotik-2.jpg',
        '/images/brelki/kotik-3.jpg'
      ],
      description: 'Милый вязаный котик станет отличным подарком или украшением для ваших ключей. Ручная работа, высококачественная пряжа.',
      characteristics: {
        material: 'Хлопок 100%',
        size: '10 см',
        color: 'Рыжий',
        weight: '30 г'
      }
    },
    { 
      id: 'brelok-sovenok',
      title: 'Брелок "Совенок"', 
      price: 550, 
      category: 'Брелки',
      categoryLink: 'brelki',
      mainImage: '/images/brelki/sovenok-main.jpg',
      images: [
        '/images/brelki/sovenok-1.jpg',
        '/images/brelki/sovenok-2.jpg'
      ],
      description: 'Мудрый совенок с большими глазами. Отличный подарок для детей и взрослых.',
      characteristics: {
        material: 'Хлопок + синтепон',
        size: '8 см',
        color: 'Коричневый',
        weight: '25 г'
      }
    },
    { 
      id: 'brelok-cvetochek',
      title: 'Брелок "Цветочек"', 
      price: 450, 
      category: 'Брелки',
      categoryLink: 'brelki',
      mainImage: '/images/brelki/cvetochek-main.jpg',
      images: [
        '/images/brelki/cvetochek-1.jpg',
        '/images/brelki/cvetochek-2.jpg'
      ],
      description: 'Нежный цветок, который никогда не завянет. Доступен в разных цветах.',
      characteristics: {
        material: 'Ирис',
        size: '7 см',
        color: 'Розовый',
        weight: '20 г'
      }
    },
    { 
      id: 'brelok-serdce',
      title: 'Брелок "Сердечко"', 
      price: 400, 
      category: 'Брелки',
      categoryLink: 'brelki',
      mainImage: '/images/brelki/serdce-main.jpg',
      images: [
        '/images/brelki/serdce-1.jpg',
        '/images/brelki/serdce-2.jpg'
      ],
      description: 'Романтичный подарок для любимых. Можно сделать в любом цвете.',
      characteristics: {
        material: 'Хлопок',
        size: '6 см',
        color: 'Красный',
        weight: '18 г'
      }
    },
    { 
      id: 'brelok-mishka',
      title: 'Брелок "Мишка"', 
      price: 600, 
      category: 'Брелки',
      categoryLink: 'brelki',
      mainImage: '/images/brelki/mishka-main.jpg',
      images: [
        '/images/brelki/mishka-1.jpg',
        '/images/brelki/mishka-2.jpg'
      ],
      description: 'Плюшевый мишка поднимет настроение и будет напоминать о вас.',
      characteristics: {
        material: 'Плюшевая пряжа',
        size: '12 см',
        color: 'Бежевый',
        weight: '40 г'
      }
    },
    { 
      id: 'brelok-zayka',
      title: 'Брелок "Зайка"', 
      price: 550, 
      category: 'Брелки',
      categoryLink: 'brelki',
      mainImage: '/images/brelki/zayka-main.jpg',
      images: [
        '/images/brelki/zayka-1.jpg',
        '/images/brelki/zayka-2.jpg'
      ],
      description: 'Пушистый зайка с длинными ушками. Очень мягкий и приятный на ощупь.',
      characteristics: {
        material: 'Плюшевая пряжа',
        size: '11 см',
        color: 'Белый',
        weight: '35 г'
      }
    }
  ],
  
  kovriki: [
    { 
      id: 'kovrik-romashka',
      title: 'Круглый коврик "Ромашка"', 
      price: 2500, 
      category: 'Коврики',
      categoryLink: 'kovriki',
      mainImage: '/images/kovriki/romashka-main.jpg',
      images: [
        '/images/kovriki/romashka-1.jpg',
        '/images/kovriki/romashka-2.jpg'
      ],
      description: 'Мягкий круглый коврик в форме ромашки. Отлично впишется в любой интерьер.',
      characteristics: {
        material: 'Трикотажная пряжа',
        size: '80 см',
        color: 'Белый с желтым',
        care: 'Деликатная стирка'
      }
    },
    { 
      id: 'kovrik-myatnyy',
      title: 'Овальный коврик "Мятный"', 
      price: 3200, 
      category: 'Коврики',
      categoryLink: 'kovriki',
      mainImage: '/images/kovriki/myatnyy-main.jpg',
      images: [
        '/images/kovriki/myatnyy-1.jpg',
        '/images/kovriki/myatnyy-2.jpg'
      ],
      description: 'Нежный мятный цвет и необычная текстура сделают вашу комнату уютнее.',
      characteristics: {
        material: 'Трикотажная пряжа',
        size: '60x100 см',
        color: 'Мятный',
        care: 'Деликатная стирка'
      }
    },
    { 
      id: 'kovrik-oblachko',
      title: 'Детский коврик "Облачко"', 
      price: 2800, 
      category: 'Коврики',
      categoryLink: 'kovriki',
      mainImage: '/images/kovriki/oblachko-main.jpg',
      images: [
        '/images/kovriki/oblachko-1.jpg',
        '/images/kovriki/oblachko-2.jpg'
      ],
      description: 'Мягкий коврик для детской комнаты в форме облачка.',
      characteristics: {
        material: 'Хлопок',
        size: '70x50 см',
        color: 'Голубой',
        care: 'Деликатная стирка'
      }
    },
    { 
      id: 'kovrik-raduga',
      title: 'Коврик "Радуга"', 
      price: 3000, 
      category: 'Коврики',
      categoryLink: 'kovriki',
      mainImage: '/images/kovriki/raduga-main.jpg',
      images: [
        '/images/kovriki/raduga-1.jpg',
        '/images/kovriki/raduga-2.jpg'
      ],
      description: 'Разноцветный коврик, который поднимет настроение с утра.',
      characteristics: {
        material: 'Трикотажная пряжа',
        size: '90 см',
        color: 'Разноцветный',
        care: 'Деликатная стирка'
      }
    },
    { 
      id: 'kovrik-zvezda',
      title: 'Коврик "Звездочка"', 
      price: 2700, 
      category: 'Коврики',
      categoryLink: 'kovriki',
      mainImage: '/images/kovriki/zvezda-main.jpg',
      images: [
        '/images/kovriki/zvezda-1.jpg',
        '/images/kovriki/zvezda-2.jpg'
      ],
      description: 'Коврик в форме звезды - необычное решение для вашего интерьера.',
      characteristics: {
        material: 'Трикотажная пряжа',
        size: '70 см',
        color: 'Желтый',
        care: 'Деликатная стирка'
      }
    }
  ],
  
  sumki: [
    { 
      id: 'sumka-shop morskaya',
      title: 'Сумка-шоппер "Морская"', 
      price: 3500, 
      category: 'Сумки',
      categoryLink: 'sumki',
      mainImage: '/images/sumki/morskaya-main.jpg',
      images: [
        '/images/sumki/morskaya-1.jpg',
        '/images/sumki/morskaya-2.jpg',
        '/images/sumki/morskaya-3.jpg'
      ],
      description: 'Вместительная сумка для покупок в морском стиле. Очень прочная и удобная.',
      characteristics: {
        material: 'Хлопок',
        size: '40x35 см',
        color: 'Сине-белый',
        capacity: 'до 10 кг'
      }
    },
    { 
      id: 'klatch-vecherniy',
      title: 'Клатч "Вечерний"', 
      price: 2200, 
      category: 'Сумки',
      categoryLink: 'sumki',
      mainImage: '/images/sumki/vecherniy-main.jpg',
      images: [
        '/images/sumki/vecherniy-1.jpg',
        '/images/sumki/vecherniy-2.jpg'
      ],
      description: 'Элегантный клатч для особых случаев. Украшен нежным кружевом.',
      characteristics: {
        material: 'Хлопок + кружево',
        size: '25x15 см',
        color: 'Бежевый',
        closure: 'Магнитная кнопка'
      }
    },
    { 
      id: 'ryukzak-uyut',
      title: 'Рюкзак "Уют"', 
      price: 4200, 
      category: 'Сумки',
      categoryLink: 'sumki',
      mainImage: '/images/sumki/uyut-main.jpg',
      images: [
        '/images/sumki/uyut-1.jpg',
        '/images/sumki/uyut-2.jpg',
        '/images/sumki/uyut-3.jpg'
      ],
      description: 'Удобный рюкзак для повседневной носки. Много карманов, мягкие лямки.',
      characteristics: {
        material: 'Трикотажная пряжа',
        size: '30x40 см',
        color: 'Коричневый',
        capacity: 'до 8 кг'
      }
    },
    { 
      id: 'avoska-vintage',
      title: 'Авоська "Винтаж"', 
      price: 1800, 
      category: 'Сумки',
      categoryLink: 'sumki',
      mainImage: '/images/sumki/vintage-main.jpg',
      images: [
        '/images/sumki/vintage-1.jpg',
        '/images/sumki/vintage-2.jpg'
      ],
      description: 'Стильная авоська в ретро-стиле. Легкая и компактная.',
      characteristics: {
        material: 'Хлопок',
        size: '35x40 см',
        color: 'Белый',
        capacity: 'до 5 кг'
      }
    },
    { 
      id: 'sumka-cherez-plecho',
      title: 'Сумка через плечо', 
      price: 2900, 
      category: 'Сумки',
      categoryLink: 'sumki',
      mainImage: '/images/sumki/plecho-main.jpg',
      images: [
        '/images/sumki/plecho-1.jpg',
        '/images/sumki/plecho-2.jpg'
      ],
      description: 'Повседневная сумка через плечо. Удобная и вместительная.',
      characteristics: {
        material: 'Хлопок',
        size: '28x25 см',
        color: 'Зеленый',
        strap: 'Регулируемый'
      }
    }
  ]
}

// Функция для получения всех товаров в одном массиве
export const getAllProducts = () => {
  return [
    ...productsData.brelki,
    ...productsData.kovriki,
    ...productsData.sumki
  ]
}

// Функция для получения товара по ID
export const getProductById = (id) => {
  const allProducts = getAllProducts()
  return allProducts.find(product => product.id === id)
}

// Функция для получения товаров по категории
export const getProductsByCategory = (category) => {
  return productsData[category] || []
}

export default productsData
