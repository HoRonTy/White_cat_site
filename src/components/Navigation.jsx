import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: isActive(path) ? '#e8b4b4' : '#2c3e50',
    fontSize: '1.1rem',
    fontWeight: isActive(path) ? 'bold' : 'normal',
    padding: '5px 10px',
    transition: 'color 0.3s'
  })

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '20px auto 0',
      padding: '15px 20px',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      {/* Левое меню - категории товаров */}
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/brelki" style={linkStyle('/brelki')}>Брелки</Link>
        <Link to="/kovriki" style={linkStyle('/kovriki')}>Коврики</Link>
        <Link to="/sumki" style={linkStyle('/sumki')}>Сумки</Link>
      </div>

      {/* Правое меню - информация */}
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/about" style={linkStyle('/about')}>О нас</Link>
        <Link to="/contacts" style={linkStyle('/contacts')}>Контакты</Link>
      </div>
    </nav>
  )
}

export default Navigation
