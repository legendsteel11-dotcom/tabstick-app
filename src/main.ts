import { createApp, nextTick } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

/**
 * 주소에 #이 달려 들어온 사람을 그 자리로 내려 준다.
 *
 * **이 페이지는 SPA라 첫 HTML에 섹션이 하나도 없다.** 브라우저는 문서를 받은 그 순간에 딱 한 번
 * 대상을 찾는데, 그때는 Vue가 아직 아무것도 그리지 않았으므로 찾지 못하고 맨 위에 그대로 선다.
 * 그린 뒤에 다시 시도해 주지도 않는다. 그래서 우리가 옮긴다(2026-07-29 - 앱의 업데이트 닷이
 * #download로 열도록 바뀌면서 필요해졌다).
 *
 * **두 번 잡는다.** 히어로 GIF에 크기가 박혀 있지 않아, 그림이 늦게 오면 아래 내용이 그만큼
 * 밀린다. 그리자마자 한 번(빨리 보이라고), 그림까지 다 온 뒤 한 번(정확하라고).
 * 다만 그 사이 사용자가 스스로 움직였으면 두 번째는 건너뛴다 - 보고 있던 자리를 빼앗지 않는다.
 */
function jumpToHash() {
  if (!location.hash) return

  // 이상한 선택자(예: '#')로 들어오면 querySelector가 던진다. 그건 주소가 이상한 것뿐이라
  // 맨 위에 그대로 두면 된다.
  try {
    document.querySelector(location.hash)?.scrollIntoView()
  } catch {
    /* 무시 */
  }
}

if (location.hash) {
  let moved = false
  const stop = () => (moved = true)

  // 휠·손가락·키 어느 쪽이든 사용자가 스스로 움직였다는 뜻이다.
  addEventListener('wheel', stop, { once: true, passive: true })
  addEventListener('touchstart', stop, { once: true, passive: true })
  addEventListener('keydown', stop, { once: true })

  nextTick(jumpToHash)

  addEventListener('load', () => {
    if (!moved) jumpToHash()
  })
}
