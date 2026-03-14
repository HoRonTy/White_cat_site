// Добавьте в начало файла (после импортов)
const style = document.createElement('style')
style.textContent = `
  @media (max-width: 768px) {
    .hero-section {
      padding: 40px 15px !important;
    }
    .hero-title {
      font-size: 2rem !important;
    }
    .hero-text {
      font-size: 1rem !important;
    }
    .categories-container {
      gap: 15px !important;
    }
    .category-card {
      width: 150px !important;
      padding: 20px !important;
    }
    .products-grid {
      grid-template-columns: 1fr !important;
    }
  }
`
document.head.appendChild(style)
