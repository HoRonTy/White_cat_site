import React from 'react'

const ContactsPage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        Контакты
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* Telegram */}
        <div style={contactCardStyle}>
          <div style={contactIconStyle}>📱</div>
          <h3 style={contactTitleStyle}>Telegram</h3>
          <a 
            href="https://t.me/belykot_shop" 
            target="_blank" 
            rel="noopener noreferrer"
            style={contactLinkStyle}
          >
            @belykot_shop
          </a>
          <p style={contactDescStyle}>Оперативный ответ в рабочее время</p>
        </div>

        {/* Телефон */}
        <div style={contactCardStyle}>
          <div style={contactIconStyle}>📞</div>
          <h3 style={contactTitleStyle}>Телефон</h3>
          <a href="tel:+79991234567" style={contactLinkStyle}>
            +7 (999) 123-45-67
          </a>
          <p style={contactDescStyle}>Ежедневно с 10:00 до 20:00</p>
        </div>

        {/* Email */}
        <div style={contactCardStyle}>
          <div style={contactIconStyle}>📧</div>
          <h3 style={contactTitleStyle}>Email</h3>
          <a href="mailto:info@belykot.ru" style={contactLinkStyle}>
            info@belykot.ru
          </a>
          <p style={contactDescStyle}>Ответим в течение 24 часов</p>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        marginTop: '40px'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '30px', textAlign: 'center' }}>
          Напишите нам
        </h2>
        
        <form style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Ваше имя"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="Ваш email"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              placeholder="Ваше сообщение"
              rows="5"
              style={{...inputStyle, resize: 'vertical'}}
            ></textarea>
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault()
              alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.')
            }}
          >
            Отправить сообщение
          </button>
        </form>
      </div>

      {/* Реквизиты */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '5px 0', color: '#666' }}>
          ИП Иванова Анна Сергеевна
        </p>
        <p style={{ margin: '5px 0', color: '#666' }}>
          ИНН 123456789012
        </p>
        <p style={{ margin: '5px 0', color: '#666' }}>
          ОГРНИП 123456789012345
        </p>
      </div>
    </div>
  )
}

const contactCardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '15px',
  textAlign: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s'
}

const contactIconStyle = {
  fontSize: '3rem',
  marginBottom: '15px'
}

const contactTitleStyle = {
  fontSize: '1.3rem',
  color: '#2c3e50',
  marginBottom: '10px'
}

const contactLinkStyle = {
  fontSize: '1.2rem',
  color: '#e8b4b4',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '10px'
}

const contactDescStyle = {
  color: '#666',
  fontSize: '0.9rem',
  margin: 0
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  outline: 'none',
  boxSizing: 'border-box'
}

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#e8b4b4',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
}

export default ContactsPage
