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
        <!-- Beta는 절대배치라 제목 폭에 안 끼고 오른쪽 위에만 걸린다 → "TabStick"은 화면
             중앙 그대로 유지된다(™ 표시처럼). -->
        <h1 class="title">{{ t.hero.title }}<span class="beta">Beta</span></h1>
        <p class="tagline">{{ t.hero.tagline }}</p>
      </div>
      <div class="shot">
        <img :src="heroSrc" alt="TabStick index notes attached to browser windows, with the color palette" />
        <!-- GIF는 프레임을 줄여 실제보다 끊겨 보일 수 있다는 안내. 이미지 하단 중앙에 작고 연하게. -->
        <p class="gif-note">{{ t.hero.gifNote }}</p>
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
  /* 제목 상자를 글자 폭에 딱 맞춰(inline-block) .copy의 가운데 정렬로 중앙에 세운다.
     Beta(absolute)는 이 상자 밖 오른쪽 위에 얹혀 폭에 끼지 않는다. */
  display: inline-block;
  position: relative;
}

/* 타이틀 오른쪽 위에 ™처럼 작고 흐린 Beta. 절대배치라 "TabStick"의 중앙 정렬을 건드리지
   않고, 단어 오른쪽 끝에 바짝 걸린다. 크기·흐림·위치는 아래 값으로 조절. */
.beta {
  position: absolute;
  left: 100%;
  top: 0.08em;
  margin-left: 0.1em;
  font-size: 0.3em;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--text);
  opacity: 0.55;
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

/* 이미지 하단 중앙에 겹치는 GIF 안내. 작고 연한 이탤릭. 배경 픽셀과 겹쳐도 읽히도록
   옅은 흰 알약 배경을 살짝 깐다(순수 텍스트만이면 gif 내용에 따라 묻힌다). */
.gif-note {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--text);
  font-size: 12px;
  font-style: italic;
  opacity: 0.85;
  white-space: nowrap;
  pointer-events: none;
}

@media (max-width: 720px) {
  h1 {
    font-size: 38px;
  }

  .tagline {
    font-size: 20px;
  }
}
</style>
