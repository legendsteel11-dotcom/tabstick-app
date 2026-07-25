<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section id="features" class="alt">
    <div class="container">
      <div class="section-heading">
        <h2>{{ t.features.title }}</h2>
      </div>

      <div class="grid">
        <div v-for="item in t.features.items" :key="item.title" class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
}

/* 섹션 배경보다 살짝 눌러 칸을 구분한다. 왼쪽 강조선은 그대로 두고
   오른쪽만 둥글려, 선이 카드에 물린 모양을 유지한다. */
.item {
  background: var(--bg-sunken);
  border-left: 2px solid var(--accent);
  border-radius: 0 10px 10px 0;
  padding: 18px 20px;
}

.item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text-strong);
}

.item p {
  font-size: 16px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
