const centerLine = document.getElementById('centerLine');
const container  = document.getElementById('lyricsContainer');
const items       = Array.from(document.querySelectorAll('.lyric-item'));

const LINE_START = 0.15;
const LINE_END   = 0.85;

let activeIndex  = 0;
let targetIndex  = 0;
let isAnimating  = false;
let lbIndex      = -1;
let snapPos      = [];   // 각 item의 정확한 scroll 목표값 (pre-computed)

function winH()      { return window.innerHeight; }
function maxScroll() { return document.documentElement.scrollHeight - winH(); }

function getLineY() {
  const ms = maxScroll();
  if (ms <= 0) return winH() * LINE_START;
  return winH() * (LINE_START + (window.scrollY / ms) * (LINE_END - LINE_START));
}

// getBoundingClientRect 기반으로 정확한 snap 위치 사전 계산
function computeSnap() {
  const ms = maxScroll();
  if (ms <= 0) { snapPos = items.map(() => 0); return; }
  const h         = winH();
  const lineTop   = LINE_START * h;
  const lineRange = (LINE_END - LINE_START) * h;
  snapPos = items.map(item => {
    const docY = item.getBoundingClientRect().top + window.scrollY + item.offsetHeight / 2;
    return (docY - lineTop) / (1 + lineRange / ms);
  });
}

function goTo(index, instant = false) {
  index = Math.max(0, Math.min(index, items.length - 1));
  targetIndex = index;
  activeIndex = index;
  items.forEach((el, i) => el.classList.toggle('active', i === index));
  isAnimating = true;
  window.scrollTo({ top: snapPos[index] ?? 0, behavior: instant ? 'instant' : 'smooth' });
  setTimeout(() => { isAnimating = false; }, 500);
}

function onScroll() {
  centerLine.style.top = getLineY() + 'px';
}

function init() {
  const h = winH();
  const halfItem = (items[0]?.offsetHeight ?? 54) / 2;
  container.style.paddingTop    = Math.max(100, h * LINE_START - halfItem) + 'px';
  container.style.paddingBottom = Math.max(100, h * (1 - LINE_END) - halfItem) + 'px';
  centerLine.style.top = (h * LINE_START) + 'px';
  // 레이아웃 확정 후 snap 위치 재계산 → 현재 아이템으로 즉시 보정
  requestAnimationFrame(() => {
    computeSnap();
    window.scrollTo({ top: snapPos[activeIndex] ?? 0, behavior: 'instant' });
  });
}

items[0]?.classList.add('active');
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', init);
if (window.visualViewport) window.visualViewport.addEventListener('resize', init);
init();

// ── 휠: 한 번에 한 칸씩 이동 ─────────────────────────────────────
let wheelAccum = 0;
window.addEventListener('wheel', e => {
  e.preventDefault();
  if (isAnimating) { wheelAccum = 0; return; }
  wheelAccum += e.deltaY;
  if (Math.abs(wheelAccum) < 30) return;
  goTo(targetIndex + (wheelAccum > 0 ? 1 : -1));
  wheelAccum = 0;
}, { passive: false });

// ── 터치: 스와이프로 한 칸씩 이동 ───────────────────────────────
let touchStartY = 0;
let touchStartX = 0;
let touchMoved  = false;
window.addEventListener('touchstart', e => {
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
  touchMoved  = false;
}, { passive: true });
window.addEventListener('touchmove', e => {
  touchMoved = true;
  e.preventDefault();
}, { passive: false });
window.addEventListener('touchend', e => {
  if (lbIndex >= 0) return;
  const dy = touchStartY - e.changedTouches[0].clientY;
  if (touchMoved && Math.abs(dy) > 30) {
    goTo(targetIndex + (dy > 0 ? 1 : -1));
  } else if (!touchMoved) {
    goTo(activeIndex);
  }
}, { passive: true });

// ── 키보드 ────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (lbIndex >= 0) {
    if (e.key === 'Escape')         closeLightbox();
    else if (e.key === 'ArrowUp')   lightboxPrev();
    else if (e.key === 'ArrowDown') lightboxNext();
    return;
  }
  if (e.key === 'ArrowDown')      { e.preventDefault(); goTo(targetIndex + 1); }
  else if (e.key === 'ArrowUp')   { e.preventDefault(); goTo(targetIndex - 1); }
});

// ── 드래그 선택 방지 ─────────────────────────────────────────────
document.addEventListener('dragstart', e => e.preventDefault());

// ── Lightbox ──────────────────────────────────────────────────────
const lightbox        = document.getElementById('lightbox');
const lightboxImgWrap = document.getElementById('lightboxImgWrap');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

const captions = {
  '04': [
    `"불이 났다고 해서 가족한테 따로 연락하지는 않았어요. 왜 떨어져 사는지는 가정사라 말할 순 없고요··· ··· . 어쨌든 가족이 알아채지 못하게 이름은 절대 쓰지 말아주세요." (326호, 홍아무개, 59세)`,
    `이혜미, 『착취도시, 서울』, 글항아리(2020), p. 33.`,
  ],
  '10': [
    `"또 이사 갔어? 어 케이(K)시에 사는 거 아니었어? 택배 기산데요 왔는데 이사 가셨다고 해서요…. 매번 수첩을 펼쳐놓고 빼곡한 우편물 수령지를 새 주소로 바꿔 놓아도 예전 주소로 뭔가 배달되었다. 같은 사람에게 새 주소를 알릴 때마다 자괴감이 들었다. 연수는 그때마다 농담처럼 말했다. 내가 방랑벽이 있어서…."`,
    `장남수, 『파문』중 '집의 조건', 강(2022).`,
  ],
  '21': [
    `"우리는 살고 싶다. ··· 어차피 갈 곳이 없다."`,
    `미아리 성노동자 이주대책위원장, 2025.4.17 성북구청 앞에서 천막 농성 중<br>신윤하, 2025.04.18, 뉴스1`,
  ],
  '22': [
    `"불꽃 이후 올라가 보니 어떻게 할 수 없었다"`,
    `이가혁, 2023.01.20, [인터뷰] 구룡마을 주민 "불꽃 이후 올라가 보니 어떻게 할 수 없었다"</a>, JTBC 뉴스`,
  ],
  '23': [
    `"왜 40년 동안 개발이 안 됐냐면 남산 고도제한. 그것 때문에 개발이 안 됐던 거예요. 언덕 꼭대기는 6층밖에 못 지어요. 45층을 지어도 모자란 판에 6층밖에 못 지어요. 수익성이 안 나는 거에요." (서울역 쪽방촌대책위 김일원-가명)`,
    `조문영, 『동자동 사람들』, 글항아리(2023), p. 45.`,
  ],
  '27': [
    `"보증금 없이 일세로도 살 수 있는 쪽방은 동시에 거리 노숙을 막는 자원으로 활용되는 게 사실입니다. 1970년대에 미국에서는 쪽방과 비슷한 주거자원인 SRO(single room occupancy)가 대거 철거되자 홈리스 인구가 크게 증가했어요." (김선미 서울 성북주거복지센터장)`,
    `이혜미, 『착취도시, 서울』, 글항아리(2020), p. 63.`,
  ],
  '29': [
    `"국가가 돈 없는 사람들에게 모든 혜택을 줄 수는 없다. 민주주의 국가는 능력대로 사는 것이다. 돈 없는 사람들은 없는 대로 그 수준에 맞는 곳으로 가면 되는 것이다. 그래서 민주주의가 좋은 게 아니겠느냐" (당시 서울시장, 염보현)`,
    `김학규, 2021.6.21, 오마이뉴스`,
  ],
  '30': [
    `"세입자 대책 없이는 재개발을 하지 않겠다고 약속한 선거공약을 준수하라." -1985.10.`,
    `김학규, 2021.6.21, 오마이뉴스`,
  ],
  '31': [
    `이 모든 맥락은 지금의 집이, 현재의 나를 품어주는 곳이 아닌 미래의 어떤 지향을 이루기 전 잠시 거쳐가는 경과적 주거로 기능함을 의미한다. 혼자 맥주 한잔 마실 때만 위안이 된다는 공간에, 그는 자신의 수입 가운데 5분의 1을 월세로 낸다.`,
    `이혜미, 『착취도시, 서울』, 글항아리(2020), p. 319.`,
  ],
};

const navImages = Array.from(document.querySelectorAll('.lyric-img'))
  .filter(img => img.getAttribute('src'))
  .map(img => ({
    img,
    src: img.src,
    lyricText: img.closest('.lyric-item')?.querySelector('.lyric-text')?.textContent || '',
  }));

function openLightbox(index) {
  if (index < 0 || index >= navImages.length) return;
  if (lbIndex === index) return;
  const isNavigating = lbIndex >= 0;
  lbIndex = index;
  const { img, src } = navImages[index];

  // 이전 이미지 즉시 제거 후 새 이미지 로드
  lightboxImg.removeAttribute('src');
  lightboxImg.src = src;

  const item = img.closest('.lyric-item');
  const itemIndex = items.indexOf(item);
  if (itemIndex >= 0) {
    window.scrollTo({ top: snapPos[itemIndex] ?? 0, behavior: 'instant' });
    activeIndex = itemIndex;
    targetIndex = itemIndex;
    // 라이트박스 내 이미지 전환 시 텍스트 트랜지션 없이 즉시 교체
    if (isNavigating) items.forEach(el => (el.style.transition = 'none'));
    items.forEach((el, i) => el.classList.toggle('active', i === itemIndex));
    if (isNavigating) requestAnimationFrame(() => items.forEach(el => (el.style.transition = '')));
    centerLine.style.top = getLineY() + 'px';
  }

  const ly = getLineY();
  lightboxImgWrap.style.top = ly + 'px';

  if (item) {
    const itemRect = item.getBoundingClientRect();
    if (ly >= winH() * 0.5) {
      // 스캔선이 중앙 이하 → 캡션을 아이템 위로
      lightboxCaption.style.top    = 'auto';
      lightboxCaption.style.bottom = (winH() - itemRect.top + 6) + 'px';
    } else {
      // 스캔선이 중앙 위 → 캡션을 아이템 아래로
      lightboxCaption.style.top    = (itemRect.bottom + 6) + 'px';
      lightboxCaption.style.bottom = 'auto';
    }
  } else {
    lightboxCaption.style.top    = (ly + 44) + 'px';
    lightboxCaption.style.bottom = 'auto';
  }

  const num = src.match(/\/(\d+)\.jpg/)?.[1];
  const cap = captions[num];
  if (cap) {
    lightboxCaption.innerHTML =
      `<span class="caption-quote">${cap[0]}</span>` +
      `<span class="caption-attr">${cap[1]}</span>`;
    lightboxCaption.hidden = false;
  } else {
    lightboxCaption.hidden = true;
  }

  lightbox.classList.add('open');
  lightbox.removeAttribute('aria-hidden');
  document.body.classList.add('lb-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
  document.body.style.overflow = '';
  lbIndex = -1;
}

function lightboxPrev() { openLightbox(lbIndex - 1); }
function lightboxNext() { openLightbox(lbIndex + 1); }

navImages.forEach(({ img }, i) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(i); });
  img.addEventListener('touchend', (e) => {
    if (touchMoved) return;
    e.preventDefault();
    e.stopPropagation();
    openLightbox(i);
  }, { passive: false });
  img.addEventListener('dblclick', e => e.stopPropagation());
});

document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); lightboxPrev(); });
document.getElementById('lightboxPrev').addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); lightboxPrev(); }, { passive: false });
document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); lightboxNext(); });
document.getElementById('lightboxNext').addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); lightboxNext(); }, { passive: false });

lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
lightbox.addEventListener('touchend', (e) => { if (e.target === lightbox) { e.preventDefault(); closeLightbox(); } }, { passive: false });

// ── 스캔선 드래그 → 위치에서 스냅 ──────────────────────────────────
let isDragging      = false;
let dragStartY      = 0;
let dragStartScroll = 0;

centerLine.addEventListener('mousedown', e => {
  if (lbIndex >= 0) return;
  isDragging      = true;
  dragStartY      = e.clientY;
  dragStartScroll = window.scrollY;
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const ms        = maxScroll();
  if (ms <= 0) return;
  const h         = winH();
  const lineRange = (LINE_END - LINE_START) * h;
  const delta     = (e.clientY - dragStartY) / lineRange * ms;
  window.scrollTo({ top: Math.max(0, Math.min(ms, dragStartScroll + delta)), behavior: 'instant' });
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  document.body.style.userSelect = '';
  // 가장 가까운 가사 항목으로 스냅
  const best = snapPos.reduce((bi, pos, i) =>
    Math.abs(pos - window.scrollY) < Math.abs(snapPos[bi] - window.scrollY) ? i : bi, 0);
  goTo(best);
});
