import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        {/* Изображение товара */}
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginBottom: '15px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={product.mainImage || '/images/placeholder.jpg'}
            alt={product.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/200x200?text=Фото+скоро+будет'
              e.target.style.objectFit = 'contain'
              e.target.style.padding = '20px'
            }}
          />
        </div>

        <h3 style={{
          margin: '10px 0 5px',
          fontSize: '1.2rem',
          color: '#333',
          flex: 1
        }}>
          {product.title}
        </h3>

        <p style={{
          color: '#e8b4b4',
          fontSize: '1.1rem',
          margin: '5px 0',
          fontWeight: 'bold'
        }}>
          {product.price} ₽
        </p>

        <p style={{
          color: '#999',
          fontSize: '0.9rem',
          margin: '5px 0 0'
        }}>
          {product.category}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
