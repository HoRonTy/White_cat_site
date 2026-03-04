import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const rugs = [
    { id: 1, title: 'Круглый коврик "Ромашка"', price: 2500, category: 'Коврики', image: '🧶' },
    { id: 2, title: 'Овальный коврик "Мятный"', price: 3200, category: 'Коврики', image: '🧶' },
    { id: 3, title: 'Детский коврик "Облачко"', price: 2800, category: 'Коврики', image: '🧶' },
  ]

  const bags = [
    { id: 4, title: 'Сумка-шоппер "Морская"', price: 3500, category: 'Сумки', image: '👜' },
    { id: 5, title: 'Клатч "Вечерний"', price: 2200, category: 'Сумки', image: '👛' },
    { id: 6, title: 'Рюкзак "Уют"', price: 4200, category: 'Сумки', image: '🎒' },
  ]

  const keychains = [
    { id: 7, title: 'Брелок "Котик"', price: 500, category: 'Брелки', image: '🐱' },
    { id: 8, title: 'Брелок "Совенок"', price: 550, category: 'Брелки', image: '🦉' },
    { id: 9, title: 'Брелок "Цветочек"', price: 450, category: 'Брелки', image: '🌸' },
  ]

  return (
    <div>
      {/* Герой секция */}
      <section style={{
        background: 'linear-gradient(135deg, #fdf8f5 0%, #f9e9e9 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '40px',
        borderRadius: '0 0 50px 50px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: '300'
        }}>
          Добро пожаловать в мир уюта!
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Ручная работа с любовью и душой. Каждое изделие уникально и создано дарить тепло
        </p>
      </section>

      {/* Популярные категории */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={sectionTitleStyle}>Популярные категории</h2>
        <div style={categoriesContainerStyle}>
          <Link to="/kovriki" style={categoryCardStyle}>
            <span style={categoryEmojiStyle}>🧵</span>
            <h3>Коврики</h3>
            <p>Уютные и мягкие</p>
          </Link>
          <Link to="/sumki" style={categoryCardStyle}>
            <span style={categoryEmojiStyle}>👜</span>
            <h3>Сумки</h3>
            <p>Стильные аксессуары</p>
          </Link>
          <Link to="/brelki" style={categoryCardStyle}>
            <span style={categoryEmojiStyle}>🔑</span>
            <h3>Брелки</h3>
            <p>Милые детали</p>
          </Link>
        </div>
      </section>

      {/* Новинки */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={sectionTitleStyle}>Новинки</h2>
        <div style={productsGridStyle}>
          {keychains.slice(0, 2).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {rugs.slice(0, 2).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

const sectionTitleStyle = {
  fontSize: '2rem',
  color: '#333',
  borderBottom: '3px solid #e8b4b4',
  paddingBottom: '8px',
  marginBottom: '30px',
  display: 'inline-block'
}

const categoriesContainerStyle = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const categoryCardStyle = {
  textDecoration: 'none',
  color: 'inherit',
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  textAlign: 'center',
  width: '200px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer'
}

const categoryEmojiStyle = {
  fontSize: '3rem',
  display: 'block',
  marginBottom: '15px'
}

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  justifyContent: 'center'
}

export default Home
