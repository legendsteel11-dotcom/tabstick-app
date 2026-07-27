import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 포트를 5173에 못박는다. 기본값은 자리가 차 있으면 조용히 5174, 5175로 옮겨 가는데,
  // 그러면 습관대로 5173을 연 사람은 예전에 띄워 둔 서버(=옛 화면)를 보게 된다.
  // strictPort는 자리가 차 있으면 옮기지 않고 실패해서, 좀비 서버가 남아 있다는 것을
  // 그 자리에서 알려 준다.
  server: {
    port: 5173,
    strictPort: true,
  },
})
