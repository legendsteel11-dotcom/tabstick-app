<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section id="trust" class="alt">
    <div class="container">
      <div class="section-heading">
        <h2>{{ t.trust.title }}</h2>
      </div>

      <div class="list">
        <div v-for="item in t.trust.items" :key="item.title" class="item">
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

.list {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* 섹션 배경보다 살짝 눌러 카드 경계만 잡는다(테두리 없이 톤 차이로만). */
.item {
  background: var(--bg-sunken);
  border-radius: 12px;
  padding: 24px 26px;
}

.item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.item p {
  font-size: 16px;
  line-height: 1.7;
}
</style>
