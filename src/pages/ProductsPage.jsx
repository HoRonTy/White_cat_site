import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
  const { category } = useParams()

  // Данные для разных категорий
  const productsData = {
    brelki: [
      { id: 1, title: 'Брелок "Котик"', price: 500, category: 'Брелки', image: '🐱', description: 'Милый вязаный котик' },
      { id: 2, title: 'Брелок "Совенок"', price: 550, category: 'Брелки', image: '🦉', description: 'Мудрый совенок' },
      { id: 3, title: 'Брелок "Цветочек"', price: 450, category: 'Брелки', image: '🌸', description: 'Нежный цветок' },
      { id: 4, title: 'Брелок "Сердечко"', price: 400, category: 'Брелки', image: '❤️', description: 'Валентинка' },
      { id: 5, title: 'Брелок "Мишка"', price: 600, category: 'Брелки', image: '🧸', description: 'Плюшевый мишка' },
      { id: 6, title: 'Брелок "Зайка"', price: 550, category: 'Брелки', image: '🐰', description: 'Пушистый зайка' },
    ],
    kovriki: [
      { id: 7, title: 'Круглый коврик "Ромашка"', price: 2500, category: 'Коврики', image: '🌸', description: 'Мягкий круглый коврик' },
      { id: 8, title: 'Овальный коврик "Мятный"', price: 3200, category: 'Коврики', image: '🍃', description: 'Овальный коврик' },
      { id: 9, title: 'Детский коврик "Облачко"', price: 2800, category: 'Коврики', image: '☁️', description: 'Мягкий коврик для детей' },
      { id: 10, title: 'Коврик "Радуга"', price: 3000, category: 'Коврики', image: '🌈', description: 'Разноцветный коврик' },
      { id: 11, title: 'Коврик "Звездочка"', price: 2700, category: 'Коврики', image: '⭐', description: 'Коврик в форме звезды' },
    ],
    sumki: [
      { id: 12, title: 'Сумка-шоппер "Морская"', price: 3500, category: 'Сумки', image: '🌊', description: 'Вместительная сумка' },
      { id: 13, title: 'Клатч "Вечерний"', price: 2200, category: 'Сумки', image: '✨', description: 'Элегантный клатч' },
      { id: 14, title: 'Рюкзак "Уют"', price: 4200, category: 'Сумки', image: '🎒', description: 'Удобный рюкзак' },
      { id: 15, title: 'Авоська "Винтаж"', price: 1800, category: 'Сумки', image: '🛍️', description: 'Стильная авоська' },
      { id: 16, title: 'Сумка через плечо', price: 2900, category: 'Сумки', image: '👜', description: 'Повседневная сумка' },
    ]
  }

  const getCategoryTitle = () => {
    switch(category) {
      case 'brelki': return 'Брелки'
      case 'kovriki': return 'Коврики'
      case 'sumki': return 'Сумки'
      default: return 'Товары'
    }
  }

  const products = productsData[category] || []

  return (
    <div>
      <div style={{
        backgroundColor: '#f9e9e9',
        padding: '40px 20px',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '10px'
        }}>
          {getCategoryTitle()}
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          {products.length} изделий ручной работы
        </p>
      </div>

      <div style={productsGridStyle}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto'
}

export default ProductsPage
