import React from 'react'

// Компонент карточки товара
const ProductCard = ({ image, title, price, category }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      backgroundColor: 'white'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9rem',
        color: '#999'
      }}>
        {/* Здесь будет изображение товара */}
        Фото {title}
      </div>
      <h3 style={{ margin: '8px 0', fontSize: '1.2rem', color: '#333' }}>{title}</h3>
      <p style={{ margin: '4px 0', color: '#666', fontSize: '0.9rem' }}>{category}</p>
      <p style={{ margin: '8px 0', fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50' }}>{price} ₽</p>
    </div>
  )
}

// Компонент категории
const CategorySection = ({ title, products }) => {
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{
        fontSize: '2rem',
        color: '#333',
        borderBottom: '3px solid #e8b4b4',
        paddingBottom: '8px',
        marginBottom: '24px',
        display: 'inline-block'
      }}>
        {title}
      </h2>
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

function App() {
  // Данные для демонстрации
  const rugs = [
    { title: 'Круглый коврик "Ромашка"', price: 2500, category: 'Коврик' },
    { title: 'Овальный коврик "Мятный"', price: 3200, category: 'Коврик' },
    { title: 'Детский коврик "Облачко"', price: 2800, category: 'Коврик' },
  ]

  const bags = [
    { title: 'Сумка-шоппер "Морская"', price: 3500, category: 'Сумка' },
    { title: 'Клатч "Вечерний"', price: 2200, category: 'Сумка' },
    { title: 'Рюкзак "Уют"', price: 4200, category: 'Сумка' },
  ]

  const additionalProducts = [
    { title: 'Плед "Домашний"', price: 4500, category: 'Плед' },
    { title: 'Игрушка "Зайка"', price: 1500, category: 'Игрушка' },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#faf9f8',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Шапка сайта */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '20px 0',
        marginBottom: '40px',
        borderBottom: '2px solid #e8b4b4'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            margin: 0,
            color: '#2c3e50',
            letterSpacing: '2px',
            fontWeight: '300',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Белый кот
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#e8b4b4',
            marginTop: '8px',
            fontStyle: 'italic'
          }}>
            уютные вязаные изделия с душой
          </p>
        </div>
      </header>

      {/* Основной контент */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <CategorySection title="Коврики" products={rugs} />
        <CategorySection title="Сумки и аксессуары" products={bags} />
        
        {/* Дополнительная категория */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#333',
            borderBottom: '3px solid #e8b4b4',
            paddingBottom: '8px',
            marginBottom: '24px',
            display: 'inline-block'
          }}>
            Также в наличии
          </h2>
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {additionalProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '30px 0',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '5px 0' }}>© 2024 Белый кот - вязаные изделия ручной работы</p>
          <p style={{ margin: '5px 0', color: '#e8b4b4' }}>Свяжитесь с нами: example@email.com | +7 (999) 123-45-67</p>
        </div>
      </footer>
    </div>
  )
}

export default App
