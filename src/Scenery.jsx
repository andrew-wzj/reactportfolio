// Hero backdrop: pixel mountains + trees, and a starry night layer.
// Everything sits on a 1-unit pixel grid and is colored by CSS classes,
// so the day/night theme switch is pure CSS (and animates).
import Pixel from './PixelArt.jsx'

// Small seeded RNG so the scene is identical on every render/build.
function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const W = 480 // grid width (units); the SVG is cropped to the viewport, centered
const H = 48 // grid height

// Far range: snowy peaks. [center x, height, left slope, right slope]
const PEAKS = [
  [18, 30, 0.9, 1.1], [62, 38, 1.0, 0.8], [96, 28, 0.9, 1.2], [140, 41, 0.85, 0.95],
  [178, 31, 1.1, 0.9], [214, 36, 0.9, 1.0], [252, 27, 1.2, 1.0], [288, 40, 0.8, 0.9],
  [330, 33, 1.0, 1.1], [366, 43, 0.85, 0.8], [404, 30, 1.0, 1.2], [440, 37, 0.9, 1.0],
  [474, 29, 1.0, 1.0],
]

function farHeights() {
  const r = rng(7)
  // blocky ridge noise: one value per 3 columns
  const noise = Array.from({ length: Math.ceil(W / 3) + 1 }, () => Math.floor(r() * 3) - 1)
  return Array.from({ length: W }, (_, x) => {
    let h = 0
    let lit = false
    for (const [px, ph, sl, sr] of PEAKS) {
      const d = x - px
      const ph2 = ph - (d < 0 ? -d * sl : d * sr)
      if (ph2 > h) {
        h = ph2
        lit = d > 0 // right-hand face catches the light
      }
    }
    return { h: Math.max(0, Math.round(h + noise[Math.floor(x / 3)] * 0.8)), lit }
  })
}

const hillCurve = (x) => 11 + 4 * Math.sin(x / 23 + 1) + 3 * Math.sin(x / 9.5 + 2) + 2 * Math.sin(x / 41)

function hillHeights() {
  return Array.from({ length: W }, (_, x) => ({
    h: Math.round(hillCurve(x)),
    lit: hillCurve(x + 1) < hillCurve(x) - 0.15,
  }))
}

// Trees: rows of letters. a = shade (left), b = lit (right), n = trunk.
const TREES = {
  pine: [
    '...b...',
    '..abb..',
    '..abb..',
    '.aabbb.',
    '..abb..',
    '.aabbb.',
    'aaabbbb',
    '..abb..',
    '.aabbb.',
    'aaabbbb',
    '...n...',
    '...n...',
  ],
  tall: [
    '....b....',
    '...abb...',
    '...abb...',
    '..aabbb..',
    '...abb...',
    '..aabbb..',
    '.aaabbbb.',
    '...abb...',
    '..aabbb..',
    '.aaabbbb.',
    'aaaabbbbb',
    '..aabbb..',
    '.aaabbbb.',
    'aaaabbbbb',
    '....n....',
    '....n....',
  ],
  round: [
    '..aab..',
    '.aaabb.',
    'aaaabbb',
    'aaabbbb',
    'aaabbbb',
    '.aabbb.',
    '..abb..',
    '...n...',
    '...n...',
  ],
  bush: ['.aabb.', 'aaabbb', 'aaabbb'],
}

// [x, kind] – clustered at the edges, sparse in the middle
const TREE_SPOTS = [
  [4, 'tall'], [13, 'pine'], [21, 'round'], [30, 'pine'], [44, 'bush'], [58, 'pine'],
  [66, 'tall'], [92, 'round'], [118, 'bush'], [130, 'pine'], [138, 'pine'], [170, 'bush'],
  [196, 'round'], [232, 'pine'], [262, 'bush'], [300, 'pine'], [309, 'tall'],
  [318, 'round'], [346, 'bush'], [372, 'pine'], [398, 'round'], [410, 'tall'],
  [420, 'pine'], [436, 'bush'], [452, 'pine'], [462, 'tall'], [471, 'round'],
]

// Collect unit rects per CSS class, then emit one <path> per class.
function buildScene() {
  const layers = {}
  const add = (cls, x, y, w = 1, h = 1) => {
    ;(layers[cls] ||= []).push(`M${x} ${y}h${w}v${h}h${-w}z`)
  }

  // Far mountains: lit/shaded faces + snow in bands, so seasons can move the snow line:
  //   mt-snow  = peak caps (all year)
  //   mt-snow2 = rest of the usual cap (melts in summer)
  //   mt-ws    = extra winter snow further down the slopes
  const far = farHeights()
  const r = rng(42)
  const snowJitter = Array.from({ length: Math.ceil(W / 2) + 1 }, () => Math.floor(r() * 3) - 1)
  far.forEach(({ h, lit }, x) => {
    if (h <= 0) return
    const L = lit ? '-lit' : ''
    const top = H - h
    const j = snowJitter[Math.floor(x / 2)]
    const snowLine = 31 + j
    const snow = h > snowLine ? h - snowLine + 1 : 0
    const cap = Math.min(snow, h > 37 ? 3 : 2)
    const winterLine = 19 + j // height above ground where winter snow stops
    const ws = Math.max(0, h - snow - winterLine)
    let y = top
    if (cap) add('mt-snow' + L, x, y, 1, cap), (y += cap)
    if (snow - cap > 0) add('mt-snow2' + L, x, y, 1, snow - cap), (y += snow - cap)
    if (ws) add('mt-ws' + L, x, y, 1, ws), (y += ws)
    add('mt-far' + L, x, y, 1, H - y)
  })

  // Rolling hills in front
  const hills = hillHeights()
  hills.forEach(({ h, lit }, x) => {
    add(lit ? 'mt-hill-lit' : 'mt-hill', x, H - h, 1, h)
    // a lighter grass edge on the ridge line
    add('mt-hill-edge', x, H - h, 1, 1)
  })

  // Trees standing on the hills. Pines stay evergreen; round trees and bushes
  // are deciduous and cycle through 3 color groups (autumn gets a mix).
  let deciduous = 0
  for (const [tx, kind] of TREE_SPOTS) {
    const rows = TREES[kind]
    const w = rows[0].length
    const baseX = tx - Math.floor(w / 2)
    const ground = H - hills[Math.min(W - 1, Math.max(0, tx))].h + 1
    const top = ground - rows.length
    const evergreen = kind === 'pine' || kind === 'tall'
    const prefix = evergreen ? 'tr' : `dc${deciduous++ % 3}`
    const filled = (x, y) => y >= 0 && /[ab]/.test(rows[y]?.[x] || '')
    rows.forEach((row, y) => {
      ;[...row].forEach((ch, x) => {
        const cls = ch === 'a' ? `${prefix}-shade` : ch === 'b' ? `${prefix}-lit` : ch === 'n' ? 'tr-trunk' : null
        if (!cls) return
        add(cls, baseX + x, top + y)
        // snow settles on every leafy pixel with open air above it
        if (ch !== 'n' && !filled(x, y - 1)) add('tr-snow', baseX + x, top + y)
      })
    })
  }

  // Draw order matters: far → hills → trees → snow on trees.
  // Night is a multiply layer painted right after each depth band, over exactly
  // that band's pixels (never the sky); snowy ground gets a lighter one so
  // moonlit snow stays bright in winter.
  const d = (...classes) => classes.flatMap((c) => layers[c] || []).join('')
  const paint = (...classes) => classes.filter((c) => layers[c]).map((c) => [c, d(c)])
  return [
    ...paint('mt-far', 'mt-far-lit', 'mt-ws', 'mt-ws-lit', 'mt-snow2', 'mt-snow2-lit', 'mt-snow', 'mt-snow-lit'),
    ['night-shade', d('mt-far', 'mt-far-lit')],
    ['night-shade snowy', d('mt-ws', 'mt-ws-lit', 'mt-snow2', 'mt-snow2-lit', 'mt-snow', 'mt-snow-lit')],
    ...paint('mt-hill', 'mt-hill-lit', 'mt-hill-edge'),
    ['night-shade snowy', d('mt-hill', 'mt-hill-lit')],
    ...paint('tr-shade', 'tr-lit', 'dc0-shade', 'dc0-lit', 'dc1-shade', 'dc1-lit', 'dc2-shade', 'dc2-lit', 'tr-trunk', 'tr-snow'),
    ['night-shade', d('tr-shade', 'tr-lit', 'dc0-shade', 'dc0-lit', 'dc1-shade', 'dc1-lit', 'dc2-shade', 'dc2-lit', 'tr-trunk')],
  ]
}

const SCENE = buildScene()

export function Landscape() {
  return (
    <svg
      className="landscape"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {SCENE.map(([cls, d], i) => (
        <path key={i} className={cls} d={d} />
      ))}
    </svg>
  )
}

// Night sky: lots of tiny pixel stars + a few big sparkles + a shooting star.
const STARS = (() => {
  const r = rng(2024)
  return Array.from({ length: 90 }, () => {
    const roll = r()
    return {
      left: (r() * 100).toFixed(2) + '%',
      top: (r() * 72).toFixed(2) + '%',
      size: roll > 0.85 ? 4 : roll > 0.45 ? 3 : 2,
      delay: (-r() * 4).toFixed(2) + 's',
      dur: (2.2 + r() * 2.6).toFixed(2) + 's',
    }
  })
})()

const SPARKLES = [
  ['12%', '14%', 3, '-0.4s'], ['31%', '38%', 2, '-1.9s'], ['48%', '9%', 3, '-2.7s'],
  ['63%', '30%', 2, '-1.1s'], ['79%', '52%', 2, '-3.3s'], ['90%', '62%', 3, '-0.9s'],
  ['6%', '50%', 2, '-2.2s'], ['40%', '58%', 2, '-3.8s'],
]

export function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star-dot"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        />
      ))}
      {SPARKLES.map(([left, top, size, delay], i) => (
        <Pixel
          key={i}
          name="sparkle"
          size={size}
          className="sparkle"
          style={{ left, top, animationDelay: delay }}
        />
      ))}
      <span className="shooting-star" />
    </div>
  )
}
