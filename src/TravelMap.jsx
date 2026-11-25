import { useState } from 'react'
import { travel } from './data/resume.js'
import { STATES, VIEWBOX, DUBLIN_NH } from './data/usMap.js'
import Pixel, { SPRITES } from './PixelArt.jsx'
import { Section } from './App.jsx'

const PALETTE = { K: '#2b2d42', R: '#ff6b6b', W: '#ffffff', B: '#5ec8f2', N: '#8b5a2b' }

// The home marker, drawn as pixel art inside the map's own coordinates.
function HomePin({ x, y, scale = 3 }) {
  const rows = SPRITES.house
  const w = rows[0].length * scale
  const h = rows.length * scale
  return (
    <g transform={`translate(${x - w / 2} ${y - h - 4})`} className="home-pin" aria-hidden="true">
      {rows.flatMap((row, j) =>
        [...row].map((ch, i) =>
          PALETTE[ch] ? (
            <rect key={`${i}-${j}`} x={i * scale} y={j * scale} width={scale + 0.1} height={scale + 0.1} fill={PALETTE[ch]} />
          ) : null,
        ),
      )}
      <rect x={w / 2 - 1.5} y={h} width="3" height="4" fill="#2b2d42" />
    </g>
  )
}

export default function TravelMap() {
  const visited = new Set(travel.visited)
  const [focus, setFocus] = useState(null)
  const total = STATES.filter((s) => s.abbr !== 'DC').length
  const count = STATES.filter((s) => s.abbr !== 'DC' && visited.has(s.abbr)).length
  const shown = focus && STATES.find((s) => s.abbr === focus)
  const visitedStates = STATES.filter((s) => visited.has(s.abbr))

  return (
    <Section id="map" title="Explored" icon="map" color="mint" className="no-print">
      <div className="map-head">
        <p className="prose">
          Home is <strong>{travel.home.place}</strong>. Every state I explore lights up here.
        </p>
        <div className="map-score" aria-label={`${count} of ${total} states explored`}>
          <span className="map-count">{count}</span>
          <span className="muted"> / {total} states</span>
          <div className="map-bar" aria-hidden="true">
            <span style={{ width: `${(100 * count) / total}%` }} />
          </div>
        </div>
      </div>

      <div className="map-wrap">
        <svg viewBox={VIEWBOX} className="us-map" role="img" aria-label={`US map: explored ${visitedStates.map((s) => s.name).join(', ')}`}>
          {STATES.map((s) => (
            <path
              key={s.abbr}
              d={s.d}
              className={`state ${visited.has(s.abbr) ? 'visited' : ''} ${s.abbr === travel.home.abbr ? 'home' : ''} ${focus === s.abbr ? 'focus' : ''}`}
              onMouseEnter={() => setFocus(s.abbr)}
              onMouseLeave={() => setFocus(null)}
              onClick={() => setFocus(s.abbr)}
            >
              <title>{`${s.name}${visited.has(s.abbr) ? ' · explored' : ''}`}</title>
            </path>
          ))}
          <HomePin x={DUBLIN_NH[0]} y={DUBLIN_NH[1]} />
          <g className="home-label" aria-hidden="true">
            <rect x={DUBLIN_NH[0] - 150} y={DUBLIN_NH[1] - 68} width="96" height="26" rx="2" />
            <text x={DUBLIN_NH[0] - 102} y={DUBLIN_NH[1] - 50} textAnchor="middle">HOME</text>
            <path d={`M${DUBLIN_NH[0] - 54} ${DUBLIN_NH[1] - 55} L${DUBLIN_NH[0] - 16} ${DUBLIN_NH[1] - 30}`} />
          </g>
        </svg>
        <p className="map-info" aria-live="polite">
          {shown ? (
            <>
              <strong>{shown.name}</strong>{' '}
              {shown.abbr === travel.home.abbr ? '· home 🏠' : visited.has(shown.abbr) ? '· explored ✓' : '· not yet, someday!'}
            </>
          ) : (
            <span className="muted">Hover or tap a state.</span>
          )}
        </p>
      </div>

      <ul className="tags map-list">
        {visitedStates.map((s) => (
          <li key={s.abbr}>
            {s.abbr === travel.home.abbr && <Pixel name="house" size={2} />} {s.name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
