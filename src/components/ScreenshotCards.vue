<script setup lang="ts">
import { computed } from 'vue'
import { t, lang } from '../i18n'

// 여섯 컷 모두 표시 박스와 같은 비율(720x500 = 1.44:1)이라, 데스크톱 3열에서는 object-fit: cover가
// 아무것도 자르지 않는다. 좁아져 비율이 어긋나는 모바일에서만 잘리는데, 컷마다 요점이 가운데에
// 몰려 있어 center면 어느 쪽이 잘려도 요점이 남는다.
//
// 언어별 이미지: 영문판은 영문 UI 캡처(scp-en-*). 단 5번(팔레트 모양)은 UI 글자가 없어 언어무관이라
// 한/영 공용(spc-05). 캡처가 없는 언어는 한글판으로 떨어진다.
const KO = ['spc-01', 'spc-02', 'spc-03', 'spc-04', 'spc-05', 'spc-06']
const EN = ['scp-en-01', 'scp-en-02', 'scp-en-03', 'scp-en-04', 'spc-05', 'scp-en-06']
const shots = computed(() =>
  (lang.value === 'en' ? EN : KO).map((name) => ({ src: `${name}.png`, pos: 'center' })),
)
</script>

<template>
  <section id="screenshots">
    <div class="container">
      <div class="section-heading">
        <h2>{{ t.screenshots.title }}</h2>
      </div>

      <div class="grid">
        <figure v-for="(item, i) in t.screenshots.items" :key="item.title" class="card">
          <div class="shot">
            <img :src="`/screenshots/${shots[i].src}`" :alt="item.title" loading="lazy"
                 :style="{ objectPosition: shots[i].pos }" />
          </div>
          <figcaption>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.card {
  margin: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.shot {
  background: var(--bg-alt);
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.shot img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top left;
}

figcaption {
  padding: 20px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

figcaption p {
  font-size: 16px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
