// Tiny pixel-art sprites drawn as crisp SVG rects.
// Each sprite is a list of rows; each character maps to a palette color ('.' = empty).

const PALETTE = {
  K: '#2b2d42', // ink
  W: '#ffffff',
  R: '#ff6b6b', // coral
  P: '#ff9ecd', // pink
  O: '#ff9f43', // orange
  Y: '#ffd23f', // sunny yellow
  G: '#4cc38a', // mint green
  D: '#2f9e6b', // dark green
  B: '#5ec8f2', // sky blue
  N: '#8b5a2b', // brown
  L: '#e9ecf5', // light gray
  V: '#9b8cff', // lavender
  C: '#3dd6d0', // cyan
}

export const SPRITES = {
  house: [
    '....KK....',
    '...KRRK...',
    '..KRRRRK..',
    '.KRRRRRRK.',
    'KRRRRRRRRK',
    '.KWWWWWWK.',
    '.KWBWWNWK.',
    '.KWWWWNWK.',
    '.KKKKKKKK.',
  ],
  map: [
    'KKKKKKKKKKKK',
    'KGGGKYYYKBBK',
    'KGDGKYYYKBBK',
    'KGGGKYRYKBBK',
    'KGGDKYYYKBBK',
    'KGGGKYYYKBBK',
    'KKKKKKKKKKKK',
  ],
  gavel: [
    '..KKKKKKKK..',
    '.KNNNNNNNNK.',
    '.KOOOOOOOOK.',
    '.KNNNNNNNNK.',
    '..KKKKKKKK..',
    '.....KNK....',
    '.....KNK....',
    '.....KNK....',
    '.KKKKKKKKKK.',
    'KYYYYYYYYYYK',
    'KKKKKKKKKKKK',
  ],
  apple: [
    '......N.....',
    '.....NDD....',
    '..RRRNRRR...',
    '.RRRRRRRRR..',
    'RRWWRRRRRRR.',
    'RWWRRRRRRRR.',
    'RRWRRRRRRRR.',
    'RRRRRRRRRRR.',
    '.RRRRRRRRR..',
    '.RRRRRRRRR..',
    '..RRRRRRR...',
    '...RR.RR....',
  ],
  robot: [
    '.....Y.....',
    '.....K.....',
    '..KKKKKKK..',
    '..KLLLLLK..',
    'KKKLCLCLKKK',
    '..KLLLLLK..',
    '..KLKKKLK..',
    '..KKKKKKK..',
    '.KKVVVVVKK.',
    '.K.VVYVV.K.',
    '...VVVVV...',
    '...KK.KK...',
  ],
  die: [
    'KKKKKKKKKK',
    'KWWWWWWWWK',
    'KWRRWWWWWK',
    'KWRRWWWWWK',
    'KWWWRRWWWK',
    'KWWWRRWWWK',
    'KWWWWWRRWK',
    'KWWWWWRRWK',
    'KWWWWWWWWK',
    'KKKKKKKKKK',
  ],
  laptop: [
    '..KKKKKKKKKK..',
    '..KBBBBBBBBK..',
    '..KBGGBBBBBK..',
    '..KBBBYYYBBK..',
    '..KBGGGGBBBK..',
    '..KBBBBPBBBK..',
    '..KKKKKKKKKK..',
    '.KLLLLLLLLLLK.',
    'KLLLLLLLLLLLLK',
    'KKKKKKKKKKKKKK',
  ],
  star: [
    '....Y....',
    '....Y....',
    '...YYY...',
    'YYYYYYYYY',
    '.YYYWYYY.',
    '..YYYYY..',
    '..YY.YY..',
    '.YY...YY.',
    '.Y.....Y.',
  ],
  heart: [
    '.RR...RR.',
    'RRRR.RRRR',
    'RWRRRRRRR',
    'RRRRRRRRR',
    '.RRRRRRR.',
    '..RRRRR..',
    '...RRR...',
    '....R....',
  ],
  cloud: [
    '.....WWWW.......',
    '...WWWWWWWW.....',
    '..WWWWWWWWWWWW..',
    '.WWWWWWWWWWWWWW.',
    'WWWWWWWWWWWWWWWW',
    '.WWWWWWWWWWWWWW.',
  ],
  cap: [
    '.....KK.....',
    '...KKKKKK...',
    '.KKKKKKKKKK.',
    'KKKKKKKKKKKY',
    '..KKKKKKK..Y',
    '..KVVVVVK..Y',
    '...KKKKK..YY',
  ],
  sun: [
    '.....Y.....',
    '..Y.....Y..',
    '....OOO....',
    '...OYYYO...',
    'Y.OYYYYYO.Y',
    '..OYYYYYO..',
    '...OYYYO...',
    '....OOO....',
    '..Y.....Y..',
    '.....Y.....',
  ],
  pencil: [
    '..........PP',
    '.........PPK',
    '........YYK.',
    '.......YYK..',
    '......YYK...',
    '.....YYK....',
    '....YYK.....',
    '...YYK......',
    '..NNK.......',
    '.NNK........',
    'KK..........',
  ],
}

export default function Pixel({ name, size = 4, className = '', title }) {
  const rows = SPRITES[name]
  if (!rows) return null
  const w = Math.max(...rows.map((r) => r.length))
  const h = rows.length
  const rects = []
  rows.forEach((row, y) => {
    ;[...row].forEach((ch, x) => {
      const fill = PALETTE[ch]
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={fill} />)
    })
  })
  return (
    <svg
      className={`pixel ${className}`}
      viewBox={`0 0 ${w} ${h}`}
      width={w * size}
      height={h * size}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {rects}
    </svg>
  )
}
