import { ref, computed } from 'vue'

export type Lang = 'ko' | 'en'

export const lang = ref<Lang>('ko')

export function toggleLang() {
  lang.value = lang.value === 'ko' ? 'en' : 'ko'
}

const dict = {
  ko: {
    nav: {
      why: '제작동기',
      screenshots: '특징',
      features: '기타기능',
      howto: '사용방법',
      download: '다운로드',
    },
    hero: {
      eyebrow: 'Windows 인덱스 스티커 메모',
      title: 'TabStick',
      tagline: '메모를 바탕화면이 아니라, 그 메모가 필요한 “창” 옆에 붙입니다.',
    },
    why: {
      title: '왜 만들게 되었나요?',
      items: [
        '모니터 옆에 붙여놓은 스티커메모가 자주 떨어져 불편했습니다.',
        'AI와 대화할 때, 대화 작성 중에 잘못 엔터를 눌러 토큰 낭비하는 게 싫었습니다.',
        '레시피 하나 보려고 재료와 조리법 사이를 스크롤 하는 것이 귀찮았습니다.',
        '보다 끊긴 유튜브를 기록 검색창에서 찾는 것이 번거로웠습니다.',
      ],
    },
    screenshots: {
      title: '특징',
      items: [
        {
          title: '모든 스티커는 창과 함께-',
          desc: '창과 같이 움직이고, 창과 함께 최소화 되고, 창이 종료되면 팔레트로 돌아옵니다.',
        },
        {
          title: '단 9개의 스티커로 관리-',
          desc: '스티커메모는 9개로 관리하세요. 색으로 기억하고, 쓰고 지우며 다시 쓰다가 중요한 것만 별도로 저장하면 됩니다.',
        },
        {
          title: '원하는 방향, 원하는 위치-',
          desc: '원하는 창에 최대 3개를 붙이고, 각각 메모를 펼쳐 사용할 수 있습니다. 붙이고 나면 창의 좌, 우, 안, 밖으로 옮길 수 있습니다. 물론 위아래로 움직일 수 있습니다.',
        },
        {
          title: '보고 있는 창에서 바로 메모로-',
          desc: '유튜브 주소, 텍스트를 바로 메모로 옮겨 놓으세요. 링크는 Ctrl+클릭으로 바로 이동할 수 있습니다.',
        },
        {
          title: '세가지 팔레트 모양과 크기-',
          desc: '기본형, 가로형, 세로형, 그리고 크기를 취향대로 선택하세요. 팔레트는 트레이 메뉴에서 언제든지 다시 불러올 수 있습니다.',
        },
        {
          title: '편리한 앱 메뉴-',
          desc: '스티커 관리에서는 메모의 내용을 한번에 파악하고 지우거나 내보낼 수 있고, 궁금한 것은 언제든지 도움말에서 바로 확인할 수 있습니다.',
        },
      ],
    },
    features: {
      title: '기타기능',
      items: [
        { title: '메모 잠금', desc: '중요한 메모는 잠시 잠가둘 수 있습니다.' },
        { title: '자동 저장', desc: '메모에서 글자를 입력하거나 변경할 때 자동으로 저장됩니다.' },
        { title: '자동 백업', desc: '앱의 종료, 내용 삭제 시에 자동으로 백업됩니다.' },
        { title: '편집 기능', desc: '메모에서 우클릭으로 자주 쓰는 기호나 구분선을 바로 입력할 수 있습니다.' },
        { title: '스티커 찾기', desc: '팔레트에서 떠난 스티커를 추적하고 회수할 수 있습니다.' },
        { title: '설정 기억', desc: '사용자가 설정한 기능은 앱이 종료돼도 유지됩니다.' },
      ],
    },
    howto: {
      title: '사용방법',
      steps: [
        {
          title: '스티커를 집어 창에 붙이기',
          desc: '팔레트에서 색 하나를 클릭하면 스티커가 커서에 붙습니다. 그대로 원하는 프로그램 창 아무 곳이나 클릭하면 부착됩니다. 옮기는 중에는 우클릭·바탕화면 클릭·ESC로 언제든 취소할 수 있습니다.',
        },
        {
          title: '가볍게 적기',
          desc: '떠오르는 대로 빠르게 적으세요. 한 글자만 입력해도 자동 저장되고, 링크나 경로는 Ctrl+클릭으로 바로 열립니다.',
        },
        {
          title: '메모지 자리와 크기 맞추기',
          desc: '스티커 우클릭 메뉴에서 메모지를 창의 좌/우, 안/밖으로 보낼 수 있습니다(모든 스티커 공통). 가장자리나 모서리를 끌어 크기를 바꾸고, 더블클릭하면 내용에 맞게 자동으로 맞춰집니다. 크기를 바꿀 때 Shift를 누른 채 끌면 20px 격자에 맞아, 여러 메모지를 같은 크기로 맞추기 쉽습니다.',
        },
        {
          title: '떼고, 다시 붙이기',
          desc: '앱을 종료하면 스티커는 팔레트로 돌아옵니다. 붙어 있는 스티커의 메뉴에서 팔레트로 보내거나, 팔레트 빈자리를 우클릭해 회수할 수도 있습니다. 회수한 스티커는 다른 창에 다시 붙이면 됩니다.',
        },
        {
          title: '스티커 관리와 설정',
          desc: '팔레트의 ••• 버튼을 누르면 스티커 관리가 열립니다. 아홉 메모의 내용을 한자리에서 보고, 파일로 내보내거나 삭제할 수 있습니다. 설정에서는 팔레트 모양, 앱·스티커 크기, 글자 크기, 다크/라이트, 언어를 바꿉니다.',
        },
      ],
    },
    // '드리는 말씀'(trust) 섹션은 2026-07-26에 통째로 뺐다 - 다운로드 버튼 바로 위에서 단점·해명을
    // 먼저 꺼내는 자리였다. 문구 원문은 git 이력에 있고, 필요하면 FAQ로 되살린다.
    download: {
      title: '다운로드',
      recommend: '추천',
      cta: '다운로드',
      pending: '준비 중',
      setupTitle: '설치 버전',
      setupDesc: '받아서 클릭 몇 번. 시작 메뉴에 등록되고, 제거도 깔끔합니다.',
      portableTitle: '무설치',
      portableDesc: '압축을 풀고 바로 실행합니다.',
      lightTitle: '경량',
      lightDesc: '.NET 8 데스크톱 런타임이 필요합니다.',
      // 업데이트 내역. 앱이 업데이트 뒤 첫 실행에 띄우는 창과 같은 글이다(EdgeIndex/WhatsNew.cs).
      // 새로 생긴 것만 적는다 - 고친 자리는 받는 사람에게 "그동안 고장나 있었다"로 읽힌다.
      // **DownloadSection의 notesVersion·version과 함께 올린다.** 내역만 앞서 나가면 새 기능을
      // 광고하면서 링크는 옛 파일을 가리킨다.
      notesTitle: '업데이트 내역',
      notes: [
        '스티커 우클릭 → 제목 입력 → 메모에 제목이 나타남(바로 편집 가능)',
        '글꼴/메모 배경색 → 메모 우클릭으로 이동',
        '스티커 우클릭 → 다시 집기 추가',
        '윈도우 시작 시 자동실행 옵션 추가',
        '모든 우클릭 메뉴 크기 조절 옵션 추가',
      ],
      // 줄바꿈은 마크업이 아니라 글의 일부다(.handoff p가 white-space: pre-line).
      mobileNote: 'Windows에서 쓰는 앱입니다.\n주소를 복사해 두었다가 PC에서 열어보세요.',
      copyLink: '주소 복사',
      copied: '복사했습니다',
      soon: '다운로드 링크는 공개 준비 중입니다.',
      requirement: 'Windows 10 / 11 · 64비트',
      bothApps:
        '이 개발자의 다른 앱 Edgetree도 함께 쓰실 계획이라면, .NET 8을 한 번 설치해 두시길 권합니다. 두 앱 모두 경량 버전으로 가볍게 돌아갑니다.',
      smartscreenNote:
        '처음 실행할 때 윈도우 SmartScreen 창이 뜨면 추가 정보 → 실행을 누르면 됩니다. 메모는 오직 사용자의 PC에만 저장됩니다.',
    },
    footer: {
      contact: '문의',
      otherTool: '같은 개발자의 다른 도구',
      otherToolName: 'Edgetree',
      copyright: '© 2026 TabStick.',
    },
  },
  en: {
    nav: {
      why: 'Why',
      screenshots: 'Features',
      features: 'More',
      howto: 'How it works',
      download: 'Download',
    },
    hero: {
      eyebrow: 'Windows index-sticker notes',
      title: 'TabStick',
      tagline: 'Stick a note beside the window it belongs to — not on your desktop.',
    },
    why: {
      title: 'Why I made it',
      items: [
        'The sticky notes beside my monitor kept falling off.',
        'Talking to an AI, I hated wasting tokens on a stray Enter mid-message.',
        'Following one recipe, I was tired of scrolling between the ingredients and the steps.',
        'Digging a half-watched video out of my history was a chore.',
      ],
    },
    screenshots: {
      title: 'Features',
      items: [
        {
          title: 'Every sticky note stays with its window',
          desc: 'It moves with the window, minimizes with it, and returns to the palette when the window closes.',
        },
        {
          title: 'Manage with just nine stickers',
          desc: 'Keep to nine sticky notes. Remember each by its color, reuse them as you write and wipe, and save only the important ones separately.',
        },
        {
          title: 'Any direction, any spot',
          desc: 'Attach up to three notes to a window and open each one. Once attached, move a note to the window’s left, right, inside, or outside — and up or down, of course.',
        },
        {
          title: 'From the window you’re on, straight into a note',
          desc: 'Drop a YouTube link or some text straight into a note. Ctrl+click a link to jump right to it.',
        },
        {
          title: 'Three palette shapes and sizes',
          desc: 'Pick default, row, or column — and a size to taste. The palette is always a tray-menu click away.',
        },
        {
          title: 'The app menu',
          desc: 'The Stickers tab shows every note at a glance to delete or export, and help is a click away whenever you want it.',
        },
      ],
    },
    features: {
      title: 'More',
      items: [
        { title: 'Lock a note', desc: 'Lock an important note for a while.' },
        { title: 'Auto-save', desc: 'Saves automatically as you type or edit a note.' },
        { title: 'Automatic backup', desc: 'Backs up automatically when the app closes or content is deleted.' },
        { title: 'Editing tools', desc: 'Right-click in a note to drop in common symbols or a divider.' },
        { title: 'Find a sticker', desc: 'Track down and reclaim a sticker that has left the palette.' },
        { title: 'Remembers your settings', desc: 'Whatever you set stays put even after the app closes.' },
      ],
    },
    howto: {
      title: 'How it works',
      steps: [
        {
          title: 'Pick a sticker, click a window',
          desc: 'Click a color in the palette and the sticker rides your cursor. Click anywhere on the window you want and it sticks. While carrying it, right-click, a desktop click, or ESC cancels.',
        },
        {
          title: 'Write it down, lightly',
          desc: 'Write as it comes to you. A single character saves automatically, and links or paths open with Ctrl+click.',
        },
        {
          title: 'Place and size the paper',
          desc: 'From the sticker right-click menu, send the paper to the left or right of the window, inside or outside (applies to all stickers). Drag an edge or corner to resize, or double-click to fit the content. Hold Shift while resizing to snap to a 20px grid — handy for making several notes the same size.',
        },
        {
          title: 'Take it off, put it back',
          desc: 'Close the app and stickers return to the palette. You can also send one back from its menu, or right-click an empty palette slot to reclaim it — then stick it on a different window.',
        },
        {
          title: 'Stickers and settings',
          desc: 'The ••• button on the palette opens the Stickers tab: read all nine notes in one place, export them to a file, or delete them. Settings cover the palette shape, app and sticker size, text size, dark/light, and language.',
        },
      ],
    },
    download: {
      title: 'Download',
      recommend: 'Recommended',
      cta: 'Download',
      pending: 'Coming soon',
      setupTitle: 'Installer',
      setupDesc: 'Download, click through, done — it lands in your Start menu and uninstalls cleanly.',
      portableTitle: 'Portable',
      portableDesc: 'Unzip and run. No installation.',
      lightTitle: 'Light',
      lightDesc: 'Needs the .NET 8 Desktop Runtime.',
      notesTitle: 'Update notes',
      notes: [
        'Sticker right-click → Title → the title appears on the memo (edit it there)',
        "Font / memo background colour → moved to the memo's right-click menu",
        'Sticker right-click → Pick up again, added',
        'Option to start with Windows, added',
        'Size option for every right-click menu, added',
      ],
      mobileNote: 'TabStick runs on Windows.\nCopy the link and open it on your PC.',
      copyLink: 'Copy link',
      copied: 'Copied',
      soon: 'Download links are being prepared.',
      requirement: 'Windows 10 / 11 · 64-bit',
      bothApps:
        "Planning to use Edgetree, this developer's other app, too? Install .NET 8 once and run the Light build of both — lighter on memory and disk.",
      smartscreenNote:
        'If Windows SmartScreen appears on the first run, choose More info → Run. Your notes are stored only on your PC.',
    },
    footer: {
      contact: 'Requests',
      otherTool: 'Another tool by the same maker',
      otherToolName: 'Edgetree',
      copyright: '© 2026 TabStick.',
    },
  },
} as const

export const t = computed(() => dict[lang.value])
