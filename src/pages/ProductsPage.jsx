import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../data/productsData'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
  const { category } = useParams()

  const products = getProductsByCategory(category)

  const getCategoryTitle = () => {
    switch(category) {
      case 'brelki': return 'Брелки'
      case 'kovriki': return 'Коврики'
      case 'sumki': return 'Сумки'
      default: return 'Товары'
    }
  }

  return (
    <div>
      <div style={{
        backgroundColor: '#f9e9e9',
        padding: '40px 20px',
        marginBottom: '40px',
        textAlign: 'center',
        borderRadius: '0 0 30px 30px'
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

      {products.length > 0 ? (
        <div style={productsGridStyle}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            В этой категории пока нет товаров
          </p>
        </div>
      )}
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
