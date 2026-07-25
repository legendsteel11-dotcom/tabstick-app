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
      gifNote: '미리보기 GIF라 실제보다 끊겨 보일 수 있습니다',
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
          desc: '기본형, 가로형, 세로형, 그리고 크기를 취향대로 선택하세요. 팔레트 분실 시 트레이 메뉴에서 언제든지 다시 찾을 수 있습니다.',
        },
        {
          title: '편리한 앱 메뉴-',
          desc: '스티커 관리에서는 메모의 내용을 한번에 파악하고 지우거나 내보낼 수 있고, 잘 모르는 것은 언제든지 도움말을 참고할 수 있습니다.',
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
        { title: '메모 찾기', desc: '팔레트에서 떠난 스티커를 추적하고 회수할 수 있습니다.' },
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
          desc: '편집에 신경 쓰지 말고 빠르게 적으세요. 한 글자만 입력해도 자동 저장되고, 링크나 경로는 Ctrl+클릭으로 바로 열립니다.',
        },
        {
          title: '메모지 자리와 크기 맞추기',
          desc: '스티커 우클릭 메뉴에서 메모지를 창의 좌/우, 안/밖으로 보낼 수 있습니다(모든 스티커 공통). 가장자리나 모서리를 끌어 크기를 바꾸고, 더블클릭하면 내용에 맞게 자동으로 맞춰집니다.',
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
    trust: {
      title: '드리는 말씀',
      items: [
        {
          title: '편법을 쓰지 않았습니다',
          desc: '창에 붙는 동작은 윈도우가 허용하는 기술만으로 만들었습니다. 다른 창의 PID 추적, 각종 훅, 메모리 추적, 레지스트리 조작 같은 방법은 쓰지 않았습니다. 그런 편법을 썼다면 앱을 껐다 켜도 스티커를 자동으로 다시 붙여 드릴 수 있었겠지만, 그렇게 하지 않았습니다(실험은 했고, 코드에서 지웠습니다).',
        },
        {
          title: '밖으로 나가는 것이 없습니다',
          desc: '작성한 메모는 오직 사용자 PC에만 저장됩니다. 계정도, 서버 전송도, 수집도 없는 평범한 메모장입니다. 딱 하나 있다면, 새 버전이 나왔는지만 GitHub에서 확인해 앱 메뉴 위쪽에 작은 알림 점으로 알려드립니다 — 그때도 메모나 개인정보는 나가지 않습니다.',
        },
        {
          title: '메모리 이야기',
          desc: '.NET 8 데스크톱 런타임이 이미 있으면 보통 30~50MB를 씁니다. 없어서 독립 실행형을 쓰면 그보다 크게 잡힐 수 있는데, 앱이 무거워서가 아니라 실행에 필요한 기반 파일을 함께 들고 있기 때문입니다(예전에 게임 하려고 DirectX를 깔던 것과 비슷합니다). 메모를 쓰는 것 외에 메모리가 계속 늘거나 CPU를 물고 있는 일은 없습니다.',
        },
        {
          title: '이런 앱은 아닙니다',
          desc: '새 메모를 무한정 추가하는 기능, 편집창을 화려하게 꾸미고 폰트를 바꾸는 기능, 스티커의 배경색을 마음대로 바꾸는 기능이 없음은 너그러이 양해 바랍니다.',
        },
        {
          title: '더 좋은 메모앱은 많습니다',
          desc: '보다 더 좋고 기능이 많은 메모앱은 셀 수 없이 많이 있습니다. 사용중인 메모앱도 계속 사용하면서 탭스틱도 한 번쯤 사용해 보세요.',
        },
        {
          title: '흔한 그 부착형 메모지에 가깝습니다',
          desc: '잃어버려도 괜찮은, 잠깐 참고하고 넘길 것을 모니터 옆에 붙여 두는 컨셉입니다. 가벼운 용도로 사용하길 권해 드립니다.',
        },
        {
          title: '앞으로',
          desc: '기능을 늘리기보다 최적화와 안정성에 힘을 쏟겠습니다. 많은 피드백은 제품의 품질을 향상시키는 데 큰 도움이 됩니다.',
        },
      ],
    },
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
      memoryQ: '메모리 사용량이 커 보이나요?',
      memoryA:
        "대부분은 윈도우가 필요할 때 곧바로 돌려받는 '빌려둔' 메모리라, 실제 사용량이 아닙니다. .NET 앱에선 흔한 정상 동작이에요. 낮은 수치를 원하면 위의 경량 버전을 받으세요(.NET 필요).",
      soon: '다운로드 링크는 공개 준비 중입니다.',
      requirement: 'Windows 10 / 11 · 64비트',
      bothApps:
        '이 개발자의 다른 앱 Edgetree도 함께 쓰실 계획이라면, .NET 8을 한 번 설치해 두시길 권합니다. 두 앱 모두 경량 버전으로 가볍게 돌아갑니다.',
      smartscreenNote:
        '처음 실행할 때 윈도우 SmartScreen이 경고를 띄울 수 있습니다. 1인 개발자가 서명 없이 낸 앱에서 흔한 일이며, 추가 정보 → 실행으로 넘어가면 됩니다. 훅이나 추적 없이 허용된 Windows 기능만 쓰고, 메모는 오직 내 PC에만 저장됩니다. 배포 전 VirusTotal로도 확인합니다.',
    },
    footer: {
      contact: '요청·버그 신고',
      otherTool: '같은 개발자의 다른 도구',
      otherToolName: 'Edgetree',
      copyright: '© 2026 TabStick. 개인 프로젝트.',
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
      gifNote: 'Preview GIF — smoother in the actual app',
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
          desc: 'Pick default, row, or column — and a size to taste. Lost the palette? Find it again anytime from the tray menu.',
        },
        {
          title: 'The app menu',
          desc: 'The Stickers tab shows every note at a glance to delete or export, and help is there whenever something is unclear.',
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
        { title: 'Find a memo', desc: 'Track down and reclaim a sticker that has left the palette.' },
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
          desc: 'Do not fuss over formatting — just write. A single character saves automatically, and links or paths open with Ctrl+click.',
        },
        {
          title: 'Place and size the paper',
          desc: 'From the sticker right-click menu, send the paper to the left or right of the window, inside or outside (applies to all stickers). Drag an edge or corner to resize, or double-click to fit the content.',
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
    trust: {
      title: 'A word to you',
      items: [
        {
          title: 'No tricks',
          desc: 'Sticking to a window is done only with what Windows permits. No tracking other processes by PID, no hooks, no memory scanning, no registry meddling. With those tricks the stickers could have re-attached themselves after a restart — I tried it, and removed it from the code.',
        },
        {
          title: 'Nothing leaves your PC',
          desc: 'Notes are stored only on your machine. No account, no server, no collection — it is an ordinary notepad. The one exception: it checks GitHub for a newer version and shows a small dot at the top of the app menu — even then, no notes or personal data leave your PC.',
        },
        {
          title: 'About memory',
          desc: 'With the .NET 8 Desktop Runtime already installed it usually sits around 30–50 MB. The standalone build can look larger, not because the app is heavy but because it carries the runtime it needs with it. Beyond writing notes, it does not keep growing or hold on to the CPU.',
        },
        {
          title: 'What it is not',
          desc: 'No endlessly adding new notes, no dressing up the editor or switching fonts, no freely recoloring a sticker’s background — we hope you’ll bear with what it leaves out.',
        },
        {
          title: 'Better note apps exist',
          desc: 'There are countless note apps that are better and do far more. Keep using the one you have — and give TabStick a try too.',
        },
        {
          title: 'Closer to a plain stick-on note',
          desc: 'Something you can afford to lose, that you glance at and move on — parked at the side of your monitor. Best kept for light, casual use.',
        },
        {
          title: 'Going forward',
          desc: 'Effort goes into stability and optimization rather than more features. Plenty of feedback goes a long way toward improving the product.',
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
      memoryQ: 'Does it look like a lot of memory?',
      memoryA:
        "Most of it is 'borrowed' — Windows takes it back the moment it's needed — not real usage. This is normal for .NET apps. Want the low number? Grab the Light build above (needs .NET).",
      soon: 'Download links are being prepared.',
      requirement: 'Windows 10 / 11 · 64-bit',
      bothApps:
        "Planning to use Edgetree, this developer's other app, too? Install .NET 8 once and run the Light build of both — lighter on memory and disk.",
      smartscreenNote:
        'The first run may show a Windows SmartScreen prompt — common for an unsigned app from a solo developer; choose More info → Run. It uses only permitted Windows features, with no hooks or tracking, and your notes stay on your PC. Builds are checked on VirusTotal before release.',
    },
    footer: {
      contact: 'Requests & bug reports',
      otherTool: 'Another tool by the same maker',
      otherToolName: 'Edgetree',
      copyright: '© 2026 TabStick. A personal project.',
    },
  },
} as const

export const t = computed(() => dict[lang.value])
