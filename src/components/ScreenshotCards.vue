<script setup lang="ts">
import { computed } from 'vue'
import { t, lang } from '../i18n'

// 여섯 컷 모두 표시 박스와 같은 비율(720x500 = 1.44:1)이라, 데스크톱 3열에서는 object-fit: cover가
// 아무것도 자르지 않는다. 좁아져 비율이 어긋나는 모바일에서만 잘리는데, 컷마다 요점이 가운데에
// 몰려 있어 center면 어느 쪽이 잘려도 요점이 남는다.
//
// 언어별 이미지: 영문판은 영문 UI 캡처(scp-en-*). 단 **앱 글자가 안 나오는 컷은 한/영 공용**이다 -
// 팔레트 모양(spc-05)과 맨 앞 창 전환 GIF(spc-07)가 그렇다. 후자는 메모를 접은 채로 찍어 스티커가
// 색 사각형으로만 보이므로, 언어를 바꿔 다시 찍을 이유가 없다.
//
// 확장자는 배열에 함께 적는다. 첫 칸이 움직이는 GIF라 png로 고정할 수 없다.
const KO = ['spc-07.gif', 'spc-01.png', 'spc-02.png', 'spc-03.png', 'spc-04.png', 'spc-05.png']
const EN = ['spc-07.gif', 'scp-en-01.png', 'scp-en-02.png', 'scp-en-03.png', 'scp-en-04.png', 'spc-05.png']
const shots = computed(() =>
  (lang.value === 'en' ? EN : KO).map((src) => ({ src, pos: 'center' })),
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
/* 섹션 배경은 위아래와 번갈아 간다(2026-07-28). 전체 차례는
   히어로·제작동기(--bg) → 특징(--bg-alt) → 기타기능(--bg) → 사용방법(--bg-alt) →
   다운로드(--bg) → FAQ(--bg-alt). 예전에는 규칙 없이 어떤 섹션끼리는 붙고 어떤 것은
   갈려서, 어디가 한 덩이인지 읽히지 않았다. 히어로와 제작동기만 일부러 한 덩이로 둔다. */
/* 가로선 규칙: **히어로 아래 모든 섹션이 자기 위에 선을 하나 갖는다.** 경계마다 한 줄뿐이라
   겹쳐서 굵어지는 데가 없다. 두 배경 톤 차이가 워낙 작아 선이 실제로 경계를 만든다.
   예외는 제작동기 하나 - 히어로와 한 덩이로 두기로 했으므로 그 사이에는 톤 변화도 선도 없다. */
section {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
}

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
