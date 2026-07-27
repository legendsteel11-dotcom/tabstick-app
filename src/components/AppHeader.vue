<script setup lang="ts">
import { t, lang, toggleLang } from '../i18n'
</script>

<template>
  <header class="header">
    <div class="container bar">
      <a href="#top" class="brand">
        <img src="/icon.png" alt="TabStick" width="28" height="28" />
        <span>TabStick</span>
        <!-- 주소를 이름 옆에 붙여 스크롤 내내 눈에 남긴다(sticky 헤더).
             자리가 빠듯해지는 좁은 화면에서는 숨긴다 - 아래 미디어쿼리. -->
        <span class="domain">tabstick.com</span>
      </a>

      <nav class="nav">
        <a href="#why">{{ t.nav.why }}</a>
        <a href="#screenshots">{{ t.nav.screenshots }}</a>
        <a href="#features">{{ t.nav.features }}</a>
        <a href="#howto">{{ t.nav.howto }}</a>
        <a href="#download">{{ t.nav.download }}</a>
        <a href="#faq">{{ t.nav.faq }}</a>
      </nav>

      <button
        class="lang-toggle"
        type="button"
        @click="toggleLang"
        :aria-label="lang === 'ko' ? 'Switch to English' : '한국어로 전환'"
      >
        <span :class="{ active: lang === 'ko' }">한</span>
        <span class="sep">/</span>
        <span :class="{ active: lang === 'en' }">EN</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.bar {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  color: var(--text-strong);
  text-decoration: none;
  flex-shrink: 0;
}

.domain {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  opacity: 0.5;
  padding-left: 10px;
  border-left: 1px solid var(--border);
  margin-left: 2px;
}

.nav {
  display: flex;
  gap: 24px;
  margin-left: 8px;
  flex-grow: 1;
}

.nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 17px;
}

.nav a:hover {
  color: var(--text-strong);
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 12px;
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
}

.lang-toggle .sep {
  opacity: 0.4;
}

.lang-toggle .active {
  color: var(--accent-strong);
}

/* 메뉴가 아직 살아 있는 폭에서 먼저 주소를 접는다. 로고·메뉴·언어 단추가 서로
   밀기 시작하는 것이 이 언저리라, 셋 중 가장 덜 급한 것을 먼저 내린다. */
@media (max-width: 900px) {
  .domain {
    display: none;
  }
}

@media (max-width: 720px) {
  .nav {
    display: none;
  }

  /* 좁은 화면에선 메뉴가 사라져 언어 단추가 로고 옆에 붙어 버린다. 남는 자리를 왼쪽에 몰아
     오른쪽 끝으로 보낸다 - 넓은 화면에선 .nav의 flex-grow가 이미 같은 일을 한다. */
  .lang-toggle {
    margin-left: auto;
  }
}
</style>
