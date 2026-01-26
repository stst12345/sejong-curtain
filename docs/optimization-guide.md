# 이미지 최적화 가이드

세종커튼 웹사이트의 성능 향상을 위한 이미지 최적화 권장사항입니다.

---

## 📊 현재 상태

현재 웹사이트는 6개의 이미지 파일을 사용하고 있습니다:

- `hero_main.png` - 1.03 MB (히어로 섹션 배경)
- `20251009180200.png` - 532 KB (제품 1)
- `20251127164048.png` - 404 KB (제품 2)
- `20251127164118.png` - 86 KB (제품 3)
- `20250923144509.png` - 670 KB (미사용)
- `KakaoTalk_20240814_144503703_02.jpg` - 241 KB (미사용)

**총 이미지 용량**: 약 2.9 MB

---

## 🎯 최적화 목표

1. **로딩 속도 개선**: 이미지 용량 50% 이상 감소
2. **포맷 현대화**: WebP 포맷으로 변환
3. **반응형 최적화**: 다양한 화면 크기에 맞는 이미지 제공
4. **Lazy Loading**: 필요할 때만 이미지 로드

---

## 🛠️ 최적화 방법

### 1. WebP 포맷 변환

#### 온라인 도구
- **Squoosh** (https://squoosh.app/)
  - 구글에서 만든 무료 이미지 압축 도구
  - 품질 조절 가능
  - 다양한 포맷 지원

#### 명령줄 도구
```bash
# Windows (Chocolatey로 설치)
choco install webp

# 변환 예시
cwebp -q 80 hero_main.png -o hero_main.webp
```

#### 권장 품질 설정
- 히어로 이미지: 80-85
- 제품 이미지: 75-80

---

### 2. 반응형 이미지 구현

#### srcset 사용 예시

```jsx
<img 
  src="/assets/images/hero_main_800.webp"
  srcSet="
    /assets/images/hero_main_400.webp 400w,
    /assets/images/hero_main_800.webp 800w,
    /assets/images/hero_main_1200.webp 1200w,
    /assets/images/hero_main_1920.webp 1920w
  "
  sizes="100vw"
  alt="세종커튼 메인 이미지"
/>
```

#### picture 요소 사용

```jsx
<picture>
  <source 
    type="image/webp" 
    srcSet="/assets/images/product1.webp" 
  />
  <source 
    type="image/png" 
    srcSet="/assets/images/product1.png" 
  />
  <img 
    src="/assets/images/product1.png" 
    alt="프리미엄 커튼"
  />
</picture>
```

---

### 3. Lazy Loading 구현

#### 네이티브 Lazy Loading

```jsx
<img 
  src={productImage1} 
  alt="프리미엄 커튼 시공 사례" 
  loading="lazy"
/>
```

#### React Lazy Load 라이브러리

```bash
npm install react-lazy-load-image-component
```

```jsx
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

<LazyLoadImage
  src={productImage1}
  alt="프리미엄 커튼 시공 사례"
  effect="blur"
  width="100%"
  height="auto"
/>
```

---

### 4. 히어로 이미지 최적화

히어로 섹션은 background-image로 사용 중이므로:

#### CSS 최적화

```css
.hero {
  background-image: 
    linear-gradient(rgba(78, 52, 46, 0.3), rgba(78, 52, 46, 0.5)),
    url('/assets/images/hero_main_800.webp');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: 
      linear-gradient(rgba(78, 52, 46, 0.3), rgba(78, 52, 46, 0.5)),
      url('/assets/images/hero_main_1920.webp');
  }
}
```

---

## 📋 실행 계획

### 단계 1: 이미지 압축 및 변환

1. Squoosh.app에서 모든 이미지를 WebP로 변환
2. 원본 품질 80%로 설정
3. 파일명은 동일하게 유지하되 확장자만 `.webp`로 변경

### 단계 2: 다양한 크기 생성

각 이미지에 대해:
- 400px 너비 (모바일)
- 800px 너비 (태블릿)
- 1200px 너비 (데스크톱)

### 단계 3: 코드 수정

1. `App.jsx`의 이미지 import를 WebP로 변경
2. `srcset` 속성 추가
3. `loading="lazy"` 속성 추가

### 단계 4: 테스트

1. 개발 서버에서 테스트
2. Chrome DevTools > Network 탭에서 용량 확인
3. Lighthouse로 성능 점수 측정

---

## 📊 예상 개선 효과

| 항목 | 현재 | 최적화 후 | 개선율 |
|------|------|-----------|--------|
| 총 이미지 용량 | ~2.9 MB | ~1.2 MB | 59% ↓ |
| 초기 로딩 시간 | ~3초 | ~1.5초 | 50% ↓ |
| Lighthouse 점수 | 75 | 90+ | 20% ↑ |

---

## 🔍 성능 측정 도구

### Lighthouse (Chrome DevTools)
```
1. F12 > Lighthouse 탭
2. "Generate report" 클릭
3. Performance 점수 확인
```

### WebPageTest
- https://www.webpagetest.org/
- 실제 사용자 경험 시뮬레이션

### GTmetrix
- https://gtmetrix.com/
- 상세한 성능 분석 제공

---

## ⚠️ 주의사항

1. **WebP 호환성**: 구형 브라우저 대비 PNG/JPG fallback 필요
2. **원본 보관**: 항상 원본 이미지는 별도 보관
3. **점진적 적용**: 한 번에 모든 이미지를 변경하지 말고 단계적으로 테스트

---

## 🚀 향후 개선 사항

1. **CDN 사용**: Cloudflare Images 등 활용
2. **자동 최적화**: Vite 플러그인으로 빌드 시 자동 압축
3. **Next.js Image 컴포넌트**: 차세대 프레임워크 마이그레이션 시 고려

---

이 가이드는 향후 성능 개선 작업 시 참고용으로 활용하시기 바랍니다.
