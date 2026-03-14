import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ mobileMenuOpen }) => {
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
    transition: 'color 0.3s',
    display: 'block'
  })

  return (
    <nav style={{
      ...navStyle,
      display: window.innerWidth <= 768 ? (mobileMenuOpen ? 'block' : 'none') : 'flex'
    }}>
      {/* Левое меню */}
      <div style={navSectionStyle}>
        <Link to="/brelki" style={linkStyle('/brelki')}>Брелки</Link>
        <Link to="/kovriki" style={linkStyle('/kovriki')}>Коврики</Link>
        <Link to="/sumki" style={linkStyle('/sumki')}>Сумки</Link>
      </div>

      {/* Правое меню */}
      <div style={navSectionStyle}>
        <Link to="/about" style={linkStyle('/about')}>О нас</Link>
        <Link to="/contacts" style={linkStyle('/contacts')}>Контакты</Link>
      </div>
    </nav>
  )
}

const navStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '20px auto 0',
  padding: '15px 20px',
  borderTop: '1px solid #f0f0f0',
  borderBottom: '1px solid #f0f0f0',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '10px',
    margin: '10px auto',
    textAlign: 'center'
  }
}

const navSectionStyle = {
  display: 'flex',
  gap: '30px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '10px'
  }
}

export default Navigation
