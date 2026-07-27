<script setup lang="ts">
import { t } from '../i18n'

const EMAIL = 'pjh85336@gmail.com'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="brand">
          <img src="/icon.png" alt="" width="20" height="20" />
          <span>TabStick</span>
          <!-- 링크로 걸지 않는다 - 지금 그 주소에 서 있는 사람에게 자기 자신으로 가는
               링크는 눌러도 아무 일이 없다. 여기서는 읽고 기억할 글자다. -->
          <span class="domain">tabstick.com</span>
        </div>
        <a class="contact" :href="`mailto:${EMAIL}`">{{ t.footer.contact }}: {{ EMAIL }}</a>
      </div>

      <!-- 상호 링크는 푸터에(랜딩 계획). EdgeIndex→Edgetree는 약한 방향이라 여기 한 줄로만. -->
      <p class="other">
        {{ t.footer.otherTool }} ·
        <a href="https://edgetree.vercel.app/" target="_blank" rel="noopener">{{ t.footer.otherToolName }}</a>
      </p>

      <p class="copyright">{{ t.footer.copyright }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--text-strong);
  font-size: 14px;
}

/* 이름 뒤에 가운뎃점으로 잇는다. 굵기·크기를 낮춰 이름과 경쟁하지 않게. */
.domain::before {
  content: '·';
  margin-right: 8px;
  opacity: 0.45;
}

.domain {
  font-weight: 500;
  font-size: 13px;
  opacity: 0.6;
}

.contact {
  color: var(--text);
  text-decoration: none;
  font-size: 16px;
}

.contact:hover {
  color: var(--accent-strong);
}

/* 다른 도구(Edgetree) 안내를 살짝 강조 - 옅은 파랑 틴트 알약으로 감싸 다른 푸터 줄과
   구분하고, 링크는 볼드로 올린다(2026-07-24 요청). 내용 폭만큼만 감싸게 inline-block. */
.other {
  display: inline-block;
  font-size: 15px;
  margin-bottom: 12px;
  padding: 8px 20px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--accent-bg);
}

.other a {
  color: var(--accent-strong);
  font-weight: 700;
  text-decoration: none;
}

.other a:hover {
  text-decoration: underline;
}

.copyright {
  font-size: 14px;
  opacity: 0.6;
}
</style>
