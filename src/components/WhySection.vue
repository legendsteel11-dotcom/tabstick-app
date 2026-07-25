<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section id="why">
    <div class="container">
      <div class="section-heading">
        <!-- 제목과 캐릭터(GIF)를 한 줄에 나란히, 가로 가운데 정렬 + 세로 가운데 맞춤. -->
        <div class="heading-row">
          <h2>{{ t.why.title }}</h2>
          <!-- 제자리에서 천천히 도는 캐릭터(8방향 스프라이트로 만든 GIF). 제목 오른쪽(? 뒤)에 작게. -->
          <img class="mascot" src="/screenshots/character-rotate.gif"
               alt="제자리에서 도는 캐릭터" width="100" height="100" />
        </div>
      </div>

      <ul class="questions">
        <li v-for="q in t.why.items" :key="q">{{ q }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.heading-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.mascot {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  /* 픽셀 아트라 축소해도 흐려지지 않게. */
  image-rendering: pixelated;
}

.questions {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 780px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.questions li {
  position: relative;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 22px 20px 46px;
  font-size: 17px;
  line-height: 1.65;
  /* 대화체(혼잣말)라 본문과 구분되게 이탤릭 + 파란 톤(2026-07-24 요청). Pretendard엔 진짜
     이탤릭이 없고 전역 font-synthesis:none이라 기울임이 안 그려진다 → 여기서만 style 합성 허용. */
  font-style: italic;
  font-synthesis: style;
  color: var(--accent-strong);
}

/* 개발 취지가 전부 자문(自問)이라, 따옴표를 붙여 혼잣말처럼 읽히게 한다. */
.questions li::before {
  content: '“';
  position: absolute;
  left: 18px;
  top: 14px;
  font-size: 30px;
  line-height: 1;
  color: var(--accent);
  opacity: 0.5;
}

@media (max-width: 720px) {
  .questions {
    grid-template-columns: 1fr;
  }
}
</style>
