import React from 'react'

const AboutPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        О нас
      </h1>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontSize: '5rem' }}>🧶</span>
        </div>

        <p style={paragraphStyle}>
          <strong>"Белый кот"</strong> — это уютная мастерская вязаных изделий, 
          где каждая вещь создается с любовью и теплом. Мы верим, что hand-made 
          делает мир добрее и уютнее.
        </p>

        <p style={paragraphStyle}>
          Наша история началась в 2020 году, когда основательница Анна решила 
          превратить свое хобби в дело жизни. Сейчас наша небольшая команда 
          создает уникальные изделия, которые дарят радость людям по всей стране.
        </p>

        <h2 style={{ color: '#2c3e50', margin: '30px 0 20px' }}>Почему выбирают нас:</h2>
        
        <ul style={listStyle}>
          <li style={listItemStyle}>✓ 100% ручная работа</li>
          <li style={listItemStyle}>✓ Только качественная пряжа</li>
          <li style={listItemStyle}>✓ Уникальный дизайн</li>
          <li style={listItemStyle}>✓ Индивидуальный подход</li>
          <li style={listItemStyle}>✓ Доставка по всей России</li>
        </ul>

        <div style={{
          backgroundColor: '#f9e9e9',
          borderRadius: '15px',
          padding: '25px',
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>
            "Вязание — это не просто ремесло, это способ передать тепло своих рук"
          </p>
          <p style={{ marginTop: '10px', color: '#666' }}>— Анна, основательница "Белого кота"</p>
        </div>
      </div>
    </div>
  )
}

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#444',
  marginBottom: '20px'
}

const listStyle = {
  listStyle: 'none',
  padding: 0
}

const listItemStyle = {
  padding: '10px 0',
  fontSize: '1.1rem',
  borderBottom: '1px solid #f0f0f0'
}

export default AboutPage
