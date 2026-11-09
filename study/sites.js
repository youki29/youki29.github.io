// 勉強サイトの一覧。
// サイトを追加するときは、下の SITES に { ... } を1件足すだけでOK（並び順＝表示順）。
//   subject : 教科（SUBJECTS のどれか。新しい教科なら SUBJECTS にも足す）
//   title   : サイト名
//   desc    : ひとこと説明
//   kinds   : 種類のタグ（まとめ / クイズ / 暗記シート / 練習問題 など自由）
//   url     : リンク先（同じサイト内なら "../bio-matome.html" のように書く）
//   added   : 公開日（YYYY-MM-DD）。新しい順に「新着」が付きます

const SUBJECTS = [
  { id: 'kokugo', name: '国語', color: '#c8553d' },
  { id: 'eigo',   name: '英語', color: '#2b6fd6' },
  { id: 'chiri',  name: '地理', color: '#2c8a5a' },
  { id: 'rika',   name: '理科', color: '#8a4fc8' },
  { id: 'joho',   name: '情報', color: '#d08a12' },
];

const SITES = [
  {
    subject: 'eigo',
    title: '英文法まとめノート',
    desc: '5文型・品詞から分詞・関係代名詞まで、英文法の基礎を1ページに整理。SVOCの色分けと訳かくし付き。',
    kinds: ['まとめ'],
    url: 'https://youki29.github.io/eibunpou-matome/',
    added: '2026-11-09',
  },
  {
    subject: 'kokugo',
    title: '国語語彙ドリル',
    desc: '漢字の読み書き・入試語彙・実用語彙をくり返し練習。間違えた問題は「苦手」として復習できます。',
    kinds: ['クイズ'],
    url: 'https://youki29.github.io/kokugo-goi-drill/',
    added: '2026-10-21',
  },
  {
    subject: 'kokugo',
    title: '古文 助動詞まとめ',
    desc: '助動詞の一覧表、意味の見分け方、「ぬ」「ね」の識別、覚え方まで。',
    kinds: ['まとめ'],
    url: '../jodoushi_matome.html',
    added: '2026-10-21',
  },
  {
    subject: 'kokugo',
    title: '土佐日記 門出・帰郷 品詞の学習',
    desc: '土佐日記の本文を使って、品詞の見分け方を確認します。',
    kinds: ['練習問題'],
    url: '../tosanikki.html',
    added: '2026-10-20',
  },
  {
    subject: 'chiri',
    title: '白地図ワーク 暗記シート',
    desc: '白地図の地名をタップで隠したり表示したりして覚える暗記シート。',
    kinds: ['暗記シート'],
    url: 'https://youki29.github.io/hakuchizu-quiz/',
    added: '2026-10-21',
  },
  {
    subject: 'rika',
    title: '化学基礎 物質量ドリル',
    desc: '原子量・物質量・濃度・化学反応式の量的関係を、暗記シートと4択クイズで。',
    kinds: ['暗記シート', 'クイズ'],
    url: 'https://youki29.github.io/kagaku-mol-drill/',
    added: '2026-10-21',
  },
  {
    subject: 'rika',
    title: '生物基礎 まとめ（3-1〜3-5）',
    desc: '恒常性と神経系・内分泌系、血糖濃度の調節、腎臓、血液と体温の調節を穴埋めで確認。',
    kinds: ['まとめ', '穴埋め'],
    url: '../bio-matome.html',
    added: '2026-10-19',
  },
  {
    subject: 'rika',
    title: '生物基礎 練習問題（3-1〜3-5）',
    desc: 'まとめと同じ範囲の練習問題。',
    kinds: ['練習問題'],
    url: '../bio-quiz.html',
    added: '2026-10-19',
  },
  {
    subject: 'joho',
    title: '情報Ⅰ まとめ',
    desc: '誤り検出符号、音・画像のデジタル化、データの圧縮、コンピュータの仕組み、プログラミングを穴埋めで。',
    kinds: ['まとめ', '穴埋め'],
    url: '../joho-matome.html',
    added: '2026-10-19',
  },
  {
    subject: 'joho',
    title: '情報Ⅰ 練習問題',
    desc: 'まとめと同じ範囲の練習問題。',
    kinds: ['練習問題'],
    url: '../joho-quiz.html',
    added: '2026-10-19',
  },
];
