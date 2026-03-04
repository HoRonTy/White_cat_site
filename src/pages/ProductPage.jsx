import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/productsData'

const ProductPage = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState(null)

  if (!product) {
    return (
      <div style={notFoundStyle}>
        <h2>Товар не найден</h2>
        <Link to="/" style={backLinkStyle}>Вернуться на главную</Link>
      </div>
    )
  }

  // Используем главное изображение или заглушку, если фото нет
  const mainImage = product.mainImage || '/images/placeholder.jpg'
  const images = product.images?.length > 0 ? product.images : [mainImage]

  return (
    <div style={pageStyle}>
      {/* Хлебные крошки */}
      <div style={breadcrumbsStyle}>
        <Link to="/" style={breadcrumbLinkStyle}>Главная</Link>
        <span style={breadcrumbSeparator}> / </span>
        <Link to={`/${product.categoryLink}`} style={breadcrumbLinkStyle}>
          {product.category}
        </Link>
        <span style={breadcrumbSeparator}> / </span>
        <span style={breadcrumbCurrentStyle}>{product.title}</span>
      </div>

      <div style={productContainerStyle}>
        {/* Левая колонка - изображения */}
        <div style={imageColumnStyle}>
          {/* Главное изображение */}
          <div style={mainImageContainerStyle}>
            <img 
              src={selectedImage || mainImage} 
              alt={product.title}
              style={mainImageStyle}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://via.placeholder.com/400x400?text=Фото+скоро+будет'
              }}
            />
          </div>

          {/* Миниатюры для галереи */}
          {images.length > 1 && (
            <div style={thumbnailsContainerStyle}>
              {images.map((img, index) => (
                <div 
                  key={index}
                  style={{
                    ...thumbnailStyle,
                    border: selectedImage === img ? '3px solid #e8b4b4' : '1px solid #ddd'
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} - фото ${index + 1}`}
                    style={thumbnailImageStyle}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://via.placeholder.com/60x60?text=Фото'
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Правая колонка - информация о товаре */}
        <div style={infoColumnStyle}>
          <h1 style={titleStyle}>{product.title}</h1>
          
          <div style={priceStyle}>{product.price} ₽</div>
          
          <div style={categoryTagStyle}>
            Категория: {product.category}
          </div>

          <div style={descriptionSectionStyle}>
            <h3 style={sectionTitleStyle}>Описание</h3>
            <p style={descriptionStyle}>{product.description}</p>
          </div>

          {product.characteristics && (
            <div style={characteristicsSectionStyle}>
              <h3 style={sectionTitleStyle}>Характеристики</h3>
              <table style={characteristicsTableStyle}>
                <tbody>
                  {Object.entries(product.characteristics).map(([key, value]) => (
                    <tr key={key}>
                      <td style={characteristicsKeyStyle}>
                        {getCharacteristicName(key)}:
                      </td>
                      <td style={characteristicsValueStyle}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Кнопка заказа */}
          <button 
            style={orderButtonStyle}
            onClick={() => {
              // Здесь можно добавить логику для заказа
              alert(`Товар "${product.title}" добавлен в корзину (демо-режим)`)
            }}
          >
            Заказать
          </button>

          <div style={contactInfoStyle}>
            <p>По вопросам заказа:</p>
            <p>📱 Telegram: @belykot_shop</p>
            <p>📞 +7 (999) 123-45-67</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Вспомогательная функция для русских названий характеристик
const getCharacteristicName = (key) => {
  const names = {
    material: 'Материал',
    size: 'Размер',
    color: 'Цвет',
    weight: 'Вес',
    care: 'Уход',
    capacity: 'Вместимость',
    closure: 'Застежка',
    strap: 'Ремень'
  }
  return names[key] || key
}

// Стили
const pageStyle = {
  padding: '40px 20px',
  maxWidth: '1200px',
  margin: '0 auto'
}

const breadcrumbsStyle = {
  marginBottom: '30px',
  fontSize: '0.95rem'
}

const breadcrumbLinkStyle = {
  color: '#e8b4b4',
  textDecoration: 'none'
}

const breadcrumbSeparator = {
  color: '#999',
  margin: '0 8px'
}

const breadcrumbCurrentStyle = {
  color: '#666'
}

const productContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '50px',
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '40px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
}

const imageColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

const mainImageContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '15px',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
  border: '1px solid #eee'
}

const mainImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

const thumbnailsContainerStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap'
}

const thumbnailStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  border: '1px solid #ddd',
  transition: 'opacity 0.2s'
}

const thumbnailImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

const infoColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

const titleStyle = {
  fontSize: '2rem',
  color: '#2c3e50',
  margin: 0
}

const priceStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#e8b4b4'
}

const categoryTagStyle = {
  color: '#666',
  fontSize: '1rem',
  padding: '5px 10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  display: 'inline-block',
  width: 'fit-content'
}

const descriptionSectionStyle = {
  marginTop: '10px'
}

const sectionTitleStyle = {
  fontSize: '1.3rem',
  color: '#333',
  marginBottom: '10px'
}

const descriptionStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#444',
  margin: 0
}

const characteristicsSectionStyle = {
  marginTop: '10px'
}

const characteristicsTableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
}

const characteristicsKeyStyle = {
  padding: '8px 10px 8px 0',
  color: '#666',
  width: '120px'
}

const characteristicsValueStyle = {
  padding: '8px 0',
  color: '#333',
  fontWeight: '500'
}

const orderButtonStyle = {
  backgroundColor: '#e8b4b4',
  color: 'white',
  border: 'none',
  padding: '15px 30px',
  fontSize: '1.2rem',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  marginTop: '20px',
  width: '100%'
}

const contactInfoStyle = {
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  fontSize: '0.95rem',
  color: '#666'
}

const notFoundStyle = {
  textAlign: 'center',
  padding: '100px 20px'
}

const backLinkStyle = {
  color: '#e8b4b4',
  textDecoration: 'none',
  fontSize: '1.1rem'
}

export default ProductPage
