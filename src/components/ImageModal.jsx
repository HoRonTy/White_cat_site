import React, { useEffect } from 'react'

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  useEffect(() => {
    // Блокируем прокрутку body когда модальное окно открыто
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Закрытие по клавише Escape
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      style={overlayStyle}
      onClick={onClose}
    >
      <div 
        style={modalContentStyle}
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на изображение
      >
        {/* Кнопка закрытия */}
        <button 
          style={closeButtonStyle}
          onClick={onClose}
        >
          ×
        </button>

        {/* Изображение */}
        <img 
          src={imageSrc} 
          alt={imageAlt}
          style={modalImageStyle}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://via.placeholder.com/800x800?text=Фото+не+загрузилось'
          }}
        />

        {/* Подпись */}
        <p style={imageCaptionStyle}>
          {imageAlt} - нажмите ESC чтобы закрыть
        </p>
      </div>
    </div>
  )
}

// Стили для модального окна
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  animation: 'fadeIn 0.3s ease',
  padding: '20px'
}

const modalContentStyle = {
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '10px',
  boxShadow: '0 5px 30px rgba(0,0,0,0.3)',
  animation: 'zoomIn 0.3s ease'
}

const closeButtonStyle = {
  position: 'absolute',
  top: '-40px',
  right: '-40px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: 'none',
  fontSize: '30px',
  lineHeight: '40px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#333',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  zIndex: 1001
}

const modalImageStyle = {
  maxWidth: '100%',
  maxHeight: '80vh',
  display: 'block',
  margin: '0 auto',
  borderRadius: '8px'
}

const imageCaptionStyle = {
  textAlign: 'center',
  marginTop: '10px',
  color: '#666',
  fontSize: '0.9rem'
}

// Добавляем анимации в глобальные стили
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`
document.head.appendChild(style)

export default ImageModal
