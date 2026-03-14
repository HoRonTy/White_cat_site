import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import Navigation from './components/Navigation'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              fontSize: 'clamp(2rem, 8vw, 3.5rem)', // Адаптивный размер шрифта
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
            fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
            color: '#e8b4b4',
            marginTop: '8px',
            fontStyle: 'italic'
          }}>
            уютные вязаные изделия с душой
          </p>
        </div>

        {/* Кнопка мобильного меню */}
        <button 
          style={mobileMenuButtonStyle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
        </button>

        {/* Навигация */}
        <Navigation mobileMenuOpen={mobileMenuOpen} />
      </header>

      {/* Основной контент */}
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      {/* Подвал */}
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={footerColumnStyle}>
            <h3 style={footerTitleStyle}>Белый кот</h3>
            <p style={footerTextStyle}>
              Вязаные изделия ручной работы с душой и любовью
            </p>
          </div>
          <div style={footerColumnStyle}>
            <h3 style={footerTitleStyle}>Категории</h3>
            <ul style={footerListStyle}>
              <li><Link to="/brelki" style={footerLinkStyle}>Брелки</Link></li>
              <li><Link to="/kovriki" style={footerLinkStyle}>Коврики</Link></li>
              <li><Link to="/sumki" style={footerLinkStyle}>Сумки</Link></li>
            </ul>
          </div>
          <div style={footerColumnStyle}>
            <h3 style={footerTitleStyle}>Контакты</h3>
            <ul style={footerListStyle}>
              <li style={footerTextStyle}>📱 @belykot_shop</li>
              <li style={footerTextStyle}>📞 +7 (999) 123-45-67</li>
              <li style={footerTextStyle}>📧 info@belykot.ru</li>
            </ul>
          </div>
        </div>
        <div style={footerBottomStyle}>
          <p>© 2024 Белый кот - вязаные изделия ручной работы</p>
        </div>
      </footer>
    </div>
  )
}

// Стили с адаптивностью
const mainStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    padding: '0 15px'
  }
}

const mobileMenuButtonStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '15px',
  margin: '10px auto',
  '@media (max-width: 768px)': {
    display: 'block'
  }
}

const hamburgerLineStyle = {
  width: '25px',
  height: '3px',
  backgroundColor: '#2c3e50',
  margin: '5px 0',
  transition: '0.3s'
}

const footerStyle = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '40px 0 20px',
  marginTop: '60px'
}

const footerContentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    gap: '20px'
  }
}

const footerColumnStyle = {
  '@media (max-width: 768px)': {
    textAlign: 'center'
  }
}

const footerTitleStyle = {
  color: '#e8b4b4',
  marginBottom: '15px',
  fontSize: '1.2rem'
}

const footerTextStyle = {
  color: '#ccc',
  lineHeight: '1.6',
  margin: '5px 0'
}

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
}

const footerLinkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  transition: 'color 0.3s',
  ':hover': {
    color: '#e8b4b4'
  }
}

const footerBottomStyle = {
  textAlign: 'center',
  paddingTop: '30px',
  marginTop: '30px',
  borderTop: '1px solid #405d73',
  color: '#99aab7',
  fontSize: '0.9rem'
}

export default App
