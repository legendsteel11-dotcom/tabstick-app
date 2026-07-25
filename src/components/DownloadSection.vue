<script setup lang="ts">
import { t } from '../i18n'

// 릴리즈 공개 전이라 링크는 비워 둔다(버튼은 '준비 중'으로 비활성). 공개 때 ready=true로 바꾸고
// 각 href를 채우면 끝 - 레이아웃·문구는 그대로다.
const ready = true

// 표시용 버전(배지 "v1.0.1")과 릴리즈 태그(v1.0.1)는 여기. channel이 비면 (Beta) 알약이 사라진다 -
// 2026-07-26에 뗐다(개인 프로그램의 베타 표기가 "덜 만든 것"으로 읽힌다는 지적).
const version = '1.0.1'
const channel = ''

// 자산명 규칙: TabStick-<fileVer>-win-x64-<...>. 베타 땐 파일명에만 b를 붙였고(1.0.0b),
// 정식부터는 version과 같다.
const fileVer = version
const base = `TabStick-${fileVer}-win-x64`

// GitHub 릴리즈 자산으로 직접 링크. 태그는 v<version>, 파일명은 base.
const relBase = `https://github.com/legendsteel11-dotcom/tabstick-app/releases/download/v${version}`
const dl = {
  setup: { size: '49 MB', file: `${base}-setup.exe`, href: `${relBase}/${base}-setup.exe` },
  portable: { size: '64 MB', file: `${base}-portable.zip`, href: `${relBase}/${base}-portable.zip` },
  light: { size: '5 MB', file: `${base}.exe`, href: `${relBase}/${base}.exe` },
}
// t는 computed(ComputedRef)라 <script setup> 최상단에서 t.download를 만지면 undefined다.
// 라벨은 템플릿에서 t를 참조한다(템플릿은 ref를 자동 언랩한다).
</script>

<template>
  <section id="download">
    <div class="container">
      <div class="section-heading">
        <!-- 다운로드 제목과 초록 메모 든 고양이를 한 줄에, 세로 가운데 정렬. -->
        <div class="title-row">
          <h2>{{ t.download.title }}</h2>
          <img class="memo-cat" src="/screenshots/cat-memo.png" alt="" aria-hidden="true"
               width="22" height="16" />
        </div>
      </div>

      <!-- 히어로: 설치 버전. 대부분 여기로 오므로 시선을 독점한다(채운 강조색 + 디스크 아이콘). -->
      <a class="hero" :class="{ 'is-disabled': !ready }" :href="ready ? dl.setup.href : undefined"
         :aria-disabled="!ready">
        <span class="hero-main">
          <span class="hero-icon" aria-hidden="true">
            <!-- 디스크(저장) 아이콘 -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M8 3v5h6V3" />
              <rect x="8" y="13" width="8" height="8" rx="1" />
            </svg>
          </span>
          <span class="hero-body">
            <span class="hero-title">
              {{ t.download.setupTitle }}
              <span class="badge">{{ t.download.recommend }}</span>
            </span>
            <span class="hero-desc">{{ t.download.setupDesc }}</span>
          </span>
          <span class="hero-cta">
            <span class="cta-label">{{ ready ? t.download.cta : t.download.pending }}</span>
            <span class="size">{{ dl.setup.size }}</span>
          </span>
        </span>

        <!-- 설치본 파일명 + 버전. 카드 안 하단, 구분선과 함께. 규칙: TabStick-<ver>-win-x64-setup.exe + (Beta). -->
        <span class="hero-meta">
          <code>{{ dl.setup.file }}</code>
          <span class="ver">v{{ version }}<span v-if="channel" class="beta">{{ channel }}</span></span>
        </span>
      </a>

      <!-- 보조 둘: 무설치 / 경량. 한 단 작고 옅게. -->
      <div class="alt-grid">
        <a class="alt" :class="{ 'is-disabled': !ready }" :href="ready ? dl.portable.href : undefined"
           :aria-disabled="!ready">
          <span class="alt-icon" aria-hidden="true">
            <!-- 상자(포터블) 아이콘 -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2 3 7v10l9 5 9-5V7z" />
              <path d="M3 7l9 5 9-5" />
              <path d="M12 12v10" />
            </svg>
          </span>
          <span class="alt-title">{{ t.download.portableTitle }}</span>
          <span class="alt-desc">{{ t.download.portableDesc }}</span>
          <span class="alt-cta">{{ ready ? t.download.cta : t.download.pending }} · {{ dl.portable.size }}</span>
        </a>

        <a class="alt" :class="{ 'is-disabled': !ready }" :href="ready ? dl.light.href : undefined"
           :aria-disabled="!ready">
          <span class="alt-icon" aria-hidden="true">
            <!-- 번개(경량) 아이콘 -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
            </svg>
          </span>
          <span class="alt-title">{{ t.download.lightTitle }}</span>
          <span class="alt-desc">{{ t.download.lightDesc }}</span>
          <span class="alt-cta">{{ ready ? t.download.cta : t.download.pending }} · {{ dl.light.size }}</span>
        </a>
      </div>

      <!-- 접이식 "메모리 사용량이 커 보이나요?"는 2026-07-26에 뺐다 - 접어 뒀어도 다운로드
           버튼 바로 아래에서 먼저 변명을 꺼내는 꼴이었다. 설명이 필요하면 FAQ로. -->

      <!-- 두 앱을 함께 쓰는 사람을 위한 팁: .NET 8 한 번 설치 → 양쪽 경량 버전. Edtree 앱엔 반대로 TabStick을 가리키게. -->
      <p class="cross-tip">{{ t.download.bothApps }}</p>

      <p v-if="!ready" class="soon">{{ t.download.soon }}</p>
      <p class="requirement">{{ t.download.requirement }}</p>

      <div class="disclaimers">
        <p>{{ t.download.smartscreenNote }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 다운로드 위 가는 수평선. 원래는 바로 위 '드리는 말씀' 섹션의 배경·테두리가 경계를 만들어
   줬는데, 그 섹션을 빼면서 사용방법과 다운로드가 그냥 이어져 버렸다(2026-07-26). 화면 폭을
   가로지르는 한 줄이라 섹션이 갈리는 것만 알려 주고, 색은 본문 경계선 그대로라 눈에 띄지 않는다. */
#download {
  border-top: 1px solid var(--border);
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.memo-cat {
  display: block;
  flex-shrink: 0;
}

/* ---------- 히어로(설치) ---------- */
.hero {
  display: flex;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
  padding: 24px 28px;
  background: var(--accent);
  color: #fff;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0 10px 26px var(--accent-bg);
}

.hero-main {
  display: flex;
  align-items: center;
  gap: 22px;
}

.hero-icon svg {
  width: 40px;
  height: 40px;
  display: block;
}

.hero-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.hero-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
}

.badge {
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.22);
  padding: 2px 9px;
  border-radius: 999px;
}

.hero-desc {
  font-size: 15px;
  opacity: 0.92;
  line-height: 1.5;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 10px 20px;
  background: #fff;
  color: var(--accent-strong);
  border-radius: 10px;
  white-space: nowrap;
}

.hero-cta .cta-label {
  font-size: 15px;
  font-weight: 700;
}

.hero-cta .size {
  font-size: 12px;
  opacity: 0.65;
}

/* 설치본 파일명 + 버전(Beta). 파일명은 모노스페이스 칩, 버전은 강조색, Beta는 앱 캡션처럼 흐린 알약. */
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 13px;
}

.hero-meta code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12.5px;
  padding: 2px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  word-break: break-all;
}

.hero-meta .ver {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #fff;
}

.hero-meta .beta {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.9;
  border: 1px solid rgba(255, 255, 255, 0.45);
  padding: 1px 6px;
  border-radius: 999px;
}

/* ---------- 보조(무설치 / 경량) ---------- */
.alt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 620px;
  margin: 16px auto 0;
}

.alt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 20px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.alt-icon svg {
  width: 26px;
  height: 26px;
  display: block;
  color: var(--accent-strong);
  opacity: 0.85;
}

.alt-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-strong);
}

.alt-desc {
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.7;
}

.alt-cta {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-strong);
}

/* 링크가 아직 없을 때: 클릭 여지를 지우되 히어로는 여전히 눈에 들어오게 둔다. */
.is-disabled {
  cursor: default;
}

.hero.is-disabled .hero-cta,
.alt.is-disabled .alt-cta {
  opacity: 0.8;
}

/* ---------- 메모리 설명(접이식) ---------- */
/* 두 앱 함께 쓰는 사람용 팁. 경고(스마트스크린)와 달리 도움 제안이라 옅은 강조색 상자로 둔다.
   접이식 메모리 설명이 있던 자리라, 버튼 묶음과의 간격은 그쪽이 쓰던 24를 물려받는다. */
.cross-tip {
  max-width: 560px;
  margin: 24px auto 0;
  padding: 10px 16px;
  background: var(--accent-bg);
  border-radius: 10px;
  text-align: center;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--accent-strong);
}

/* ---------- 아래 안내 ---------- */
.soon {
  text-align: center;
  margin-top: 22px;
  font-size: 15px;
  color: var(--accent-strong);
  font-weight: 600;
}

.requirement {
  text-align: center;
  margin-top: 6px;
  font-size: 14px;
  opacity: 0.7;
}

.disclaimers {
  max-width: 560px;
  margin: 12px auto 0;
  text-align: center;
}

.disclaimers p {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .hero-main {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .hero-body {
    text-align: center;
    align-items: center;
  }

  .hero-cta {
    width: 100%;
  }

  .hero-meta {
    justify-content: center;
  }

  .alt-grid {
    grid-template-columns: 1fr;
  }
}
</style>
