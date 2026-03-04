import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)'
      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        fontSize: '4rem',
        textAlign: 'center',
        marginBottom: '15px'
      }}>
        {product.image}
      </div>
      <h3 style={{
        margin: '10px 0',
        fontSize: '1.2rem',
        color: '#333',
        textAlign: 'center'
      }}>
        {product.title}
      </h3>
      {product.description && (
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          margin: '5px 0',
          textAlign: 'center'
        }}>
          {product.description}
        </p>
      )}
      <p style={{
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        margin: '15px 0 5px'
      }}>
        {product.price} ₽
      </p>
    </div>
  )
}

export default ProductCard
