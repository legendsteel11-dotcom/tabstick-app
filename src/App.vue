<script setup lang="ts">
import { inject, track } from '@vercel/analytics'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WhySection from './components/WhySection.vue'
import ScreenshotCards from './components/ScreenshotCards.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import HowToUseSection from './components/HowToUseSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FaqSection from './components/FaqSection.vue'
import AppFooter from './components/AppFooter.vue'

// Initialize Vercel Analytics
inject()

// 앱의 업데이트 알림으로 들어온 방문을 표시로 받아 **이벤트로 옮기고 주소창은 지운다.**
//
// 왜 세고 싶은가: 이 길로 오는 사람은 이미 쓰고 있는 사용자다. 그 수가 곧 "새 판이 기존
// 사용자에게 실제로 닿았나"인데, 지금은 신규 유입에 섞여 구분되지 않는다 - 2026-07-30에
// 방문이 100 늘고 다운로드 클릭이 48 늘어 전환율이 비정상으로 높게 보인 것이 그 때문이었다.
//
// **왜 쿼리를 남기지 않는가:** 표시가 주소창에 남으면 그것을 복사해 남에게 옮길 수 있고,
// 그러면 그 사람도 "앱 업데이트로 왔다"로 잡힌다. 랜딩에서 주소를 복사할 때 utm을 빼는 것과
// 같은 이유다(AppFooter·DownloadSection의 SITE 주석). 그래서 읽는 즉시 지운다.
//
// **왜 페이지뷰가 아니라 이벤트인가:** 페이지뷰는 스크립트가 로드된 뒤 비동기로 나가므로,
// 주소를 바로 지우면 표시가 기록되기 전에 사라질 수 있다. track()은 그 자리에서 큐에 들어가
// 주소 변경과 무관하고, download·copy_link와 같은 표에서 나란히 보인다.
if (new URLSearchParams(location.search).get('from') === 'app') {
  track('app_update')

  // hash(#download)는 남긴다 - 그것이 이 링크의 목적지다.
  history.replaceState(null, '', location.pathname + location.hash)
}
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <WhySection />
    <ScreenshotCards />
    <FeatureGrid />
    <HowToUseSection />
    <DownloadSection />
    <FaqSection />
  </main>
  <AppFooter />
</template>
