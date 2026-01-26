import { useState } from 'react';
import './App.css';
import heroImage from './assets/images/hero_main.png';
import productImage1 from './assets/images/20251009180200.png';
import productImage2 from './assets/images/20251127164048.png';
import productImage3 from './assets/images/20251127164118.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const quoteLink = "https://map.naver.com/p/entry/place/11846135?lng=129.2140740&lat=35.8442971&placePath=/ticket?bookingRedirectUrl=https://m.booking.naver.com/booking/5/bizes/242730&theme=place&entry=pll&lang=ko&entry=pll&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511271643&locale=ko&svcName=map_pcv5&area=pll&c=15.00,0,0,0,dh";
  const productLink = "https://blog.naver.com/fly9496";

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <h1>세종커튼</h1>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>홈</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>소개</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>제품</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>문의하기</a>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h2>실패 없는 커튼 선택,<br />경주 세종커튼이 당신의 휴식을 디자인합니다.</h2>
          <p>전문가가 직접 방문하여 조명과 가구에 딱 맞는 컬러를 찾아드립니다.<br />이제 고민하지 마세요.</p>
          <div className="hero-buttons">
            <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">30초 만에 무료 방문 견적 신청하기</a>
            <a href={productLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">시공 사례 더보기</a>
          </div>
        </div>
      </header>

      {/* Why Sejong Section (Previously About) */}
      <section id="about" className="section feature-section">
        <div className="container">
          <div className="section-header">
            <h2>왜 세종커튼인가?</h2>
            <p>고객님의 불편함을 해결해 드립니다.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>전문가 방문 서비스</h3>
              <p>직접 매장에 오실 필요 없습니다.<br />집에서 편안하게 상담받으세요.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>투명한 가격</h3>
              <p>바가지 걱정 없는 정직한 견적,<br />예산에 맞는 최적의 제안.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>확실한 A/S</h3>
              <p>시공 후에도 끝까지 책임집니다.<br />믿고 맡길 수 있는 세종커튼.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2>공간을 바꾸는 마법</h2>
            <p>다양한 스타일의 커튼과 블라인드를 만나보세요.</p>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={productImage1} alt="프리미엄 커튼" />
              </div>
              <div className="product-info">
                <h3>프리미엄 커튼</h3>
                <p>호텔 같은 아늑함, 당신의 침실을 완성합니다.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src={productImage2} alt="맞춤 블라인드" />
              </div>
              <div className="product-info">
                <h3>맞춤 블라인드</h3>
                <p>세련된 빛 조절, 실용성과 디자인을 한 번에.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src={productImage3} alt="스마트 전동" />
              </div>
              <div className="product-info">
                <h3>스마트 전동 시스템</h3>
                <p>리모컨 하나로 여는 편리한 아침.</p>
              </div>
            </div>
          </div>
          <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={productLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>더 많은 시공 사례 보기</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>문의 & 오시는 길</h2>
            <p>언제든지 편하게 연락주세요.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <a href="tel:0547493037" className="info-item action-item">
                <span className="info-icon">📞</span>
                <div>
                  <h3>전화 문의 (클릭)</h3>
                  <p>054-749-3037</p>
                </div>
              </a>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h3>주소</h3>
                  <p>경주시 화랑로 122</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h3>영업 시간</h3>
                  <p>평일 10:00 - 19:00 (주말 예약제)</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-bg"></div>
                <div className="map-overlay">
                  <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="map-link">
                    <span className="map-icon">🗺️</span>
                    <span className="map-title">지도 보기</span>
                    <span className="map-desc">네이버 지도로 위치 확인하기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 세종커튼. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
