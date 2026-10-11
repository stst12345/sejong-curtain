import { useState } from 'react';
import './App.css';
import heroImage from './assets/images/hero_main.png';
import productImage1 from './assets/images/20251009180200.png';
import productImage2 from './assets/images/20251127164048.png';
import productImage3 from './assets/images/20251127164118.png';

const faqs = [
  {
    id: "01",
    question: "경주 전지역 무료 방문 견적이 가능한가요?",
    answer: "네! 세종커튼은 경주시 전지역(황성동, 용강동, 충효동, 동천동, 성건동, 현곡면, 안강읍, 외동읍 등) 어디든 전문가가 직접 방문하는 무료 출장 실측 및 맞춤 견적 서비스를 제공합니다. 부담 없이 편하신 일정에 신청해 보세요."
  },
  {
    id: "02",
    question: "매장에 직접 방문하지 않아도 원단 샘플을 볼 수 있나요?",
    answer: "네, 방문 시 최신 인테리어 트렌드의 프리미엄 원단 샘플북과 블라인드 소재 샘플을 댁으로 직접 가져갑니다. 고객님 댁의 채광, 조명 색온도, 가구 및 벽지 톤에 맞춰 공간에서 가장 조화로운 질감과 컬러를 직접 비교해보실 수 있습니다."
  },
  {
    id: "03",
    question: "실측 견적 후 제작부터 시공까지 얼마나 걸리나요?",
    answer: "고객님 창문 규격에 맞춘 1:1 정밀 오더메이드로 제작됩니다. 통상 실측 후 3~5일 이내에 제작이 완료되며, 완벽한 주름과 흔들림 없는 안착을 위해 숙련된 전문 시공 기사가 방문하여 정교하게 시공합니다."
  },
  {
    id: "04",
    question: "기존에 설치되어 있던 노후 커튼이나 블라인드도 철거해 주시나요?",
    answer: "네! 새로운 커튼 및 블라인드 시공 시 기존에 걸려있던 낡은 커튼이나 블라인드는 현장에서 깔끔하고 안전하게 무상으로 철거해 드립니다."
  },
  {
    id: "05",
    question: "시공 후 A/S 및 사후 관리는 어떻게 되나요?",
    answer: "세종커튼은 경주 현지에서 오랫동안 신뢰를 쌓아온 전문 업체로 철저한 사후 보증제를 운영합니다. 사용 중 레일 걸림, 줄 손상 등 불편함이 생기면 언제든 신속하게 방문 점검 및 A/S를 진행해 드립니다."
  }
];

const processes = [
  {
    step: "01",
    enTitle: "CONSULTING",
    title: "무료 방문 실측 & 원단 컨설팅",
    desc: "전화나 네이버 예약으로 신청하시면 전문가가 샘플북을 지참하여 댁으로 방문, 공간의 채광과 조명에 맞춰 실측 및 상담을 진행합니다."
  },
  {
    step: "02",
    enTitle: "ORDER MADE",
    title: "1:1 맞춤 정밀 가공",
    desc: "오차 없는 정밀 재단과 형상기억 주름 고온 열처리 가공으로 세탁 후에도 흐트러짐 없는 완벽한 실루엣을 완성합니다."
  },
  {
    step: "03",
    enTitle: "INSTALLATION",
    title: "전문가 직접 책임 시공",
    desc: "숙련된 시공 전문가가 직접 방문하여 레이저 레벨기 수평 맞춤과 기존 노후 커튼 무상 철거까지 깔끔하게 마무리합니다."
  },
  {
    step: "04",
    enTitle: "WARRANTY",
    title: "경주 현지 확실한 A/S",
    desc: "시공 후에도 안심하고 오래 사용하실 수 있도록 신속하고 확실한 사후 관리 및 무상 품질 보증 서비스를 제공합니다."
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const quoteLink = "https://map.naver.com/p/entry/place/11846135?lng=129.2140740&lat=35.8442971&placePath=/ticket?bookingRedirectUrl=https://m.booking.naver.com/booking/5/bizes/242730&theme=place&entry=pll&lang=ko&entry=pll&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511271643&locale=ko&svcName=map_pcv5&area=pll&c=15.00,0,0,0,dh";
  const productLink = "https://blog.naver.com/fly9496";

  return (
    <div className="app">
      {/* Top Floating Utility Bar */}
      <div className="top-utility-bar">
        <div className="container utility-content">
          <div className="utility-left">
            <span className="location-pill">📍 경주 전지역 무료 출장 실측 (황성 · 용강 · 충효 · 동천 · 현곡 등)</span>
          </div>
          <div className="utility-right">
            <span className="tel-text">견적 문의: <strong>054-749-3037</strong></span>
            <span className="hours-text">평일 10:00 ~ 19:00</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="메인 네비게이션">
        <div className="container navbar-container">
          <div className="logo">
            <a href="#home" className="logo-link">
              <span className="logo-badge">PREMIUM CURTAIN & BLIND</span>
              <span className="logo-title">SEJONG CURTAIN <span>세종커튼</span></span>
            </a>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} role="menu">
            <a href="#home" onClick={() => setIsMenuOpen(false)} role="menuitem">홈</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} role="menuitem">브랜드 소개</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} role="menuitem">시공 컬렉션</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} role="menuitem">진행 프로세스</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} role="menuitem">자주 묻는 질문</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} role="menuitem">오시는 길</a>
          </div>

          <div className="nav-actions">
            <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
              <span>무료 견적 신청</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="메뉴 열기/닫기"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-subtag" data-aos="fade-down">
            <span className="subtag-line"></span>
            <span>경주 커튼 & 블라인드 맞춤 시공 전문 에이전시</span>
            <span className="subtag-line"></span>
          </div>

          <h1 className="hero-title">
            공간의 빛과 무드를 완성하는,<br />
            <strong>경주 세종커튼</strong>의 프리미엄 디자인
          </h1>

          <p className="hero-desc">
            복잡한 발품 없이 집에서 편안하게 만나는 <strong>경주 전지역 1:1 맞춤 무료 방문 실측</strong>.<br />
            고객님 댁의 조명과 가구, 라이프스타일에 가장 어울리는 최적의 원단과 실루엣을 찾아드립니다.
          </p>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-num">3,500+</span>
              <span className="stat-label">경주 누적 시공 건수</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">경주 전지역 무료 실측</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">A/S 보증</span>
              <span className="stat-label">경주 현지 책임 관리</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>30초 무료 방문 견적 예약하기</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href={productLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <span>최신 시공 갤러리 둘러보기</span>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>
          <div className="scroll-arrow"></div>
        </div>
      </header>

      {/* Brand Story / Why Section */}
      <section id="about" className="section brand-section">
        <div className="container">
          <div className="section-head-dual">
            <div className="head-left">
              <span className="section-badge">ABOUT SEJONG</span>
              <h2 className="section-title">
                경주에서 커튼을 고민할 때<br />
                세종커튼을 선택해야 하는 이유
              </h2>
            </div>
            <div className="head-right">
              <p>
                단순히 창문을 가리는 패브릭이 아닌, 공간의 품격과 일상의 휴식을 설계합니다.
                중간 유통 거품을 걷어낸 정직한 가격과 꼼꼼한 책임 시공으로 완성도 높은 공간을 약속드립니다.
              </p>
            </div>
          </div>

          <div className="brand-grid">
            <div className="brand-card">
              <div className="card-num">01</div>
              <div className="card-icon-wrap">🏠</div>
              <h3>경주 전지역 무료 출장 실측</h3>
              <p>바쁜 일상에 매장을 직접 찾아오실 필요가 없습니다. 트렌디한 원단 샘플북을 지참하여 고객 댁으로 직접 찾아가 조명과 가구 톤을 확인하며 무료 실측을 진행합니다.</p>
              <div className="card-tag">#무료출장 #공간맞춤컨설팅</div>
            </div>

            <div className="brand-card">
              <div className="card-num">02</div>
              <div className="card-icon-wrap">💎</div>
              <h3>거품 없는 공장직영 투명 견적</h3>
              <p>불필요한 유통 마진을 뺀 합리적이고 정직한 견적 시스템을 제공합니다. 품질 높은 원단과 부자재만을 엄선하여 고객 예산에 가장 효과적인 시공을 제안합니다.</p>
              <div className="card-tag">#정직한가격 #공장직영마진제거</div>
            </div>

            <div className="brand-card">
              <div className="card-num">03</div>
              <div className="card-icon-wrap">🛡️</div>
              <h3>경주 현지 업체의 신속한 책임 A/S</h3>
              <p>시공이 끝나면 연락이 닿지 않는 외지 업체와는 다릅니다. 경주 현지에 상주하는 전문팀이 레일 걸림, 줄 꼬임 등 사후 문제 발생 시 즉각 방문하여 확실하게 케어합니다.</p>
              <div className="card-tag">#경주현지상주 #철저한사후보증</div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Products / Portfolio Collection */}
      <section id="products" className="section portfolio-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-badge">SELECTED COLLECTION</span>
            <h2 className="section-title">공간의 가치를 높이는 맞춤 컬렉션</h2>
            <p className="section-subtitle">호텔식 감성의 차르르 쉬폰부터 모던 우드 블라인드, 스마트 IoT 전동 시스템까지</p>
          </div>

          <div className="portfolio-grid">
            {/* Card 1 */}
            <div className="portfolio-card">
              <div className="portfolio-img-box">
                <img src={productImage1} alt="경주 프리미엄 커튼 시공 사례 - 형상기억 암막커튼, 호텔식 쉬폰커튼" loading="lazy" />
                <span className="category-chip">CURTAIN COLLECTION</span>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-meta">
                  <span>CUSTOM MADE</span>
                  <span className="meta-dot">·</span>
                  <span>RESIDENTIAL & HOTEL</span>
                </div>
                <h3>호텔식 차르르 & 형상기억 암막 커튼</h3>
                <p>완벽한 드레이프를 유지하는 고온 형상기억 가공과 햇빛·냉난방 온도를 차단하는 100% 암막 원단으로 침실과 거실에 깊은 아늑함을 선사합니다.</p>
                <div className="portfolio-specs">
                  <span>#친환경항균원단</span>
                  <span>#호텔식도톰쉬폰</span>
                  <span>#완벽암막</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="portfolio-card">
              <div className="portfolio-img-box">
                <img src={productImage2} alt="경주 맞춤 블라인드 시공 사례 - 우드 블라인드, 콤비 블라인드" loading="lazy" />
                <span className="category-chip">BLIND COLLECTION</span>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-meta">
                  <span>CUSTOM MADE</span>
                  <span className="meta-dot">·</span>
                  <span>LIVING & OFFICE</span>
                </div>
                <h3>친환경 오동나무 우드 & 콤비 블라인드</h3>
                <p>천연 원목의 은은한 나뭇결로 고급스러운 인테리어를 연출하는 우드 블라인드와 세밀한 채광 조절 및 프라이버시 보호가 탁월한 콤비 블라인드입니다.</p>
                <div className="portfolio-specs">
                  <span>#천연오동나무</span>
                  <span>#UV자외선차단</span>
                  <span>#간편한빛조절</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="portfolio-card">
              <div className="portfolio-img-box">
                <img src={productImage3} alt="경주 스마트 전동 커튼 블라인드 시스템 시공" loading="lazy" />
                <span className="category-chip">SMART SYSTEM</span>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-meta">
                  <span>SMART HOME</span>
                  <span className="meta-dot">·</span>
                  <span>IOT AUTOMATION</span>
                </div>
                <h3>스마트 IoT 전동 모터 시스템</h3>
                <p>리모컨은 물론 스마트폰 앱 연동과 음성 인식을 통해 손끝 하나로 열고 닫는 차세대 시스템. 층고가 높거나 창이 넓은 주택·상가에 이상적입니다.</p>
                <div className="portfolio-specs">
                  <span>#저소음정숙모터</span>
                  <span>#스마트폰연동</span>
                  <span>#음성제어지원</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-footer">
            <a href={productLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>네이버 공식 블로그에서 최신 시공 후기 보기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Interior Step Process Section */}
      <section id="process" className="section process-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-badge">SYSTEM PROCESS</span>
            <h2 className="section-title">완벽한 마감을 위한 4단계 프로세스</h2>
            <p className="section-subtitle">상담부터 실측, 정밀 가공, 책임 시공 및 A/S까지 체계적으로 진행됩니다.</p>
          </div>

          <div className="process-grid">
            {processes.map((p, idx) => (
              <div key={idx} className="process-card">
                <div className="process-num-wrap">
                  <span className="process-num">{p.step}</span>
                  <span className="process-en">{p.enTitle}</span>
                </div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
                {idx < processes.length - 1 && <div className="process-arrow">➔</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO / GEO FAQ Section */}
      <section id="faq" className="section faq-section">
        <div className="container">
          <div className="faq-wrapper">
            <div className="faq-side">
              <span className="section-badge">CUSTOMER FAQ</span>
              <h2 className="section-title">자주 묻는 질문</h2>
              <p className="faq-lead-text">
                경주 커튼 & 블라인드 맞춤 시공에 대해 고객님들이 가장 궁금해하시는 점들을 친절히 정리했습니다.
              </p>
              <div className="faq-help-box">
                <h4>더 궁금한 점이 있으신가요?</h4>
                <p>전화 주시면 전문 상담원이 친절하게 안내해 드립니다.</p>
                <a href="tel:0547493037" className="faq-call-btn">
                  📞 054-749-3037 연결
                </a>
              </div>
            </div>

            <div className="faq-accordion-wrap">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
                    <button
                      className="faq-head"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-index">{faq.id}</span>
                      <span className="faq-title-text">{faq.question}</span>
                      <span className="faq-plus-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-box">
            <div className="contact-details">
              <span className="section-badge">LOCATION & VISIT</span>
              <h2>경주 세종커튼 쇼룸 & 고객센터</h2>
              <p className="contact-summary">
                언제든 편안하게 상담받으실 수 있도록 경주 전지역 무료 방문 실측 서비스를 진행하고 있습니다.
              </p>

              <div className="contact-items">
                <a href="tel:0547493037" className="c-item call-action">
                  <div className="c-icon">📞</div>
                  <div className="c-text">
                    <span className="c-label">전화 무료 상담 및 방문 견적 예약</span>
                    <strong className="c-val phone-highlight">054-749-3037</strong>
                    <span className="c-sub">터치 시 바로 통화로 연결됩니다.</span>
                  </div>
                </a>

                <div className="c-item">
                  <div className="c-icon">📍</div>
                  <div className="c-text">
                    <span className="c-label">매장 주소</span>
                    <strong className="c-val">경상북도 경주시 화랑로 122 (세종커튼)</strong>
                    <span className="c-sub">경주 시내 중심가 위치 / 매장 방문 상담 환영</span>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">⏰</div>
                  <div className="c-text">
                    <span className="c-label">운영 시간</span>
                    <strong className="c-val">평일 10:00 - 19:00</strong>
                    <span className="c-sub">주말 및 공휴일 방문 실측은 사전 예약제 운영</span>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">🚗</div>
                  <div className="c-text">
                    <span className="c-label">무료 출장 지원 지역</span>
                    <strong className="c-val">경주시 전지역 무료 방문 실측</strong>
                    <span className="c-sub">황성동 · 용강동 · 충효동 · 동천동 · 성건동 · 현곡 · 안강 · 외동 등</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map-card">
              <div className="map-inner">
                <div className="map-badge">NAVER PLACE</div>
                <h3>경주 세종커튼 네이버 지도 & 예약</h3>
                <p>정확한 길 찾기 및 네이버 간편 예약으로 30초 만에 무료 방문 실측을 예약하세요.</p>
                <div className="map-cta-group">
                  <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="btn-map-primary">
                    네이버 무료 방문 예약 ➔
                  </a>
                  <a href="https://map.naver.com/p/entry/place/11846135" target="_blank" rel="noopener noreferrer" className="btn-map-secondary">
                    네이버 지도 위치 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Quick Bar for Mobile */}
      <div className="floating-quick-bar">
        <a href="tel:0547493037" className="quick-btn quick-call">
          <span>📞 전화 상담</span>
        </a>
        <a href={quoteLink} target="_blank" rel="noopener noreferrer" className="quick-btn quick-booking">
          <span>🗓️ 30초 방문 견적 예약</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-box">
              <span className="footer-en-badge">PREMIUM CURTAIN & BLIND DESIGN</span>
              <h3>경주 세종커튼</h3>
              <p>경주 전지역 무료 방문 실측 · 맞춤 커튼 & 블라인드 전문 시공</p>
            </div>
            <div className="footer-links-box">
              <a href="#home">홈</a>
              <a href="#about">브랜드 소개</a>
              <a href="#products">시공 컬렉션</a>
              <a href="#process">프로세스</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">오시는 길</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-address">
              상호명: 세종커튼 | 소재지: 경상북도 경주시 화랑로 122 | 대표전화: 054-749-3037 | 서비스지역: 경주시 전지역 무료 방문 견적
            </p>
            <p className="footer-copy">&copy; {new Date().getFullYear()} SEJONG CURTAIN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
