import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import ProductsPage from './pages/ProductsPage'
import Navigation from './components/Navigation'
import ProductPage from './pages/ProductPage'

function App() {
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
        padding: '20px 0 0',
        borderBottom: '2px solid #e8b4b4'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          </Link>
          <p style={{
            fontSize: '1.1rem',
            color: '#e8b4b4',
            marginTop: '8px',
            fontStyle: 'italic'
          }}>
            уютные вязаные изделия с душой
          </p>
        </div>
        <Navigation />
      </header>

      {/* Основной контент */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Новый маршрут */}
        </Routes>
      </main>

      {/* Подвал */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 0 20px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div>
            <h3 style={{ color: '#e8b4b4', marginBottom: '15px' }}>Белый кот</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Вязаные изделия ручной работы с душой и любовью
            </p>
          </div>
          <div>
            <h3 style={{ color: '#e8b4b4', marginBottom: '15px' }}>Категории</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/brelki" style={{ color: '#ccc', textDecoration: 'none' }}>Брелки</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/kovriki" style={{ color: '#ccc', textDecoration: 'none' }}>Коврики</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/sumki" style={{ color: '#ccc', textDecoration: 'none' }}>Сумки</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#e8b4b4', marginBottom: '15px' }}>Контакты</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#ccc' }}>📱 @belykot_shop</li>
              <li style={{ marginBottom: '10px', color: '#ccc' }}>📞 +7 (999) 123-45-67</li>
              <li style={{ marginBottom: '10px', color: '#ccc' }}>📧 info@belykot.ru</li>
            </ul>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '30px',
          marginTop: '30px',
          borderTop: '1px solid #405d73',
          color: '#99aab7'
        }}>
          <p>© 2024 Белый кот - вязаные изделия ручной работы</p>
        </div>
      </footer>
    </div>
  )
}

export default App
