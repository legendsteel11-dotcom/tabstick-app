<script setup lang="ts">
import { inject } from '@vercel/analytics'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WhySection from './components/WhySection.vue'
import ScreenshotCards from './components/ScreenshotCards.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import HowToUseSection from './components/HowToUseSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import AppFooter from './components/AppFooter.vue'

// Initialize Vercel Analytics
inject()
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
  </main>
  <AppFooter />
</template>
