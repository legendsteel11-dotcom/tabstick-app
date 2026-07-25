<script setup lang="ts">
import { computed } from 'vue'
import { t, lang } from '../i18n'

// 언어별 히어로 GIF. 영문 UI 캡처는 영문판에만 쓰고, 캡처가 없는 언어는 한글판으로 떨어진다.
const heroSrc = computed(() => (lang.value === 'en' ? '/screenshots/hero-en.gif' : '/screenshots/hero.gif'))
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <div class="copy">
        <img src="/icon.png" alt="" width="56" height="56" class="icon" />
        <p class="eyebrow">{{ t.hero.eyebrow }}</p>
        <!-- 제목 오른쪽 위에 ™처럼 걸려 있던 Beta 표시는 2026-07-26에 뗐다. -->
        <h1 class="title">{{ t.hero.title }}</h1>
        <p class="tagline">{{ t.hero.tagline }}</p>
      </div>
      <div class="shot">
        <img :src="heroSrc" alt="TabStick index notes attached to browser windows, with the color palette" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 56px;
  background:
    radial-gradient(ellipse 900px 460px at 50% 0%, var(--accent-bg), transparent 62%),
    var(--bg);
}

.copy {
  text-align: center;
  max-width: 760px;
  /* 설명 문단을 뺀 뒤 태그라인과 이미지가 붙지 않게 아래 여백을 준다. */
  margin: 0 auto 52px;
}

.icon {
  margin: 0 auto 20px;
  border-radius: 12px;
}

.eyebrow {
  color: var(--accent-strong);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}

h1 {
  font-size: 48px;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  /* 제목 상자를 글자 폭에 딱 맞춰(inline-block) .copy의 가운데 정렬로 중앙에 세운다. */
  display: inline-block;
  position: relative;
}

.tagline {
  font-size: 23px;
  color: var(--text-strong);
  line-height: 1.5;
  margin-bottom: 16px;
  font-weight: 500;
}

.shot {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.shot img {
  width: 100%;
  display: block;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 30px 70px -28px rgba(27, 33, 41, 0.35);
}

/* 히어로 이미지 하단에 겹쳐 있던 "미리보기 GIF" 안내는 2026-07-26에 뺐다 - 첫 화면에서
   먼저 단서를 다는 글이었다. .shot의 position:relative는 남겨 둔다(다른 겹침에 쓸 자리). */

@media (max-width: 720px) {
  h1 {
    font-size: 38px;
  }

  .tagline {
    font-size: 20px;
  }
}
</style>
