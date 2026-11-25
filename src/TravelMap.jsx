import { useState } from 'react'
import { travel } from './data/resume.js'
import { STATES, VIEWBOX, DUBLIN_NH, WENHAM_MA } from './data/usMap.js'
import Pixel, { SPRITES, PALETTE } from './PixelArt.jsx'
import { Section } from './App.jsx'

// A dot on the real location, a leader line, and a label box with a pixel sprite.
function Callout({ at, box, width, sprite, text }) {
  const rows = SPRITES[sprite]
  const scale = 2.4
  const sw = rows[0].length * scale
  const sh = rows.length * scale
  const h = 30
  const [bx, by] = box
  const anchor = [Math.max(bx, Math.min(bx + width, at[0])), at[1] < by ? by : by + h]
  return (
    <g className="callout" aria-hidden="true">
      <path d={`M${anchor[0]} ${anchor[1]} L${at[0]} ${at[1]}`} />
      <rect className="callout-box" x={bx} y={by} width={width} height={h} />
      <g transform={`translate(${bx + 6} ${by + (h - sh) / 2})`}>
        {rows.flatMap((row, j) =>
          [...row].map((ch, i) =>
            PALETTE[ch] ? <rect key={`${i}-${j}`} x={i * scale} y={j * scale} width={scale + 0.1} height={scale + 0.1} fill={PALETTE[ch]} /> : null,
          ),
        )}
      </g>
      <text x={bx + 12 + sw} y={by + h / 2 + 7}>{text}</text>
      <circle className="callout-dot" cx={at[0]} cy={at[1]} r="4" />
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
          I teach at <strong>{travel.home.place}</strong> and graduated in Massachusetts. Every state I explore lights up here.
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
          <Callout at={DUBLIN_NH} box={[742, 92]} width={104} sprite={travel.home.sprite} text={travel.home.label} />
          <Callout at={WENHAM_MA} box={[742, 40]} width={116} sprite="cap" text={travel.college.label} />
          <Callout at={STATES.find((s) => s.abbr === travel.firstStop.abbr).c} box={[420, 26]} width={152} sprite="plane" text={travel.firstStop.label} />
        </svg>
        <p className="map-info" aria-live="polite">
          {shown ? (
            <>
              <strong>{shown.name}</strong>{' '}
              {shown.abbr === travel.home.abbr
                ? `· explored ✓ · where I teach now 🍎 (${travel.home.place})`
                : shown.abbr === travel.college.abbr
                  ? `· explored ✓ · graduated from ${travel.college.place} 🎓`
                  : shown.abbr === travel.firstStop.abbr
                    ? '· explored ✓ · my first stop in the US ✈️'
                    : visited.has(shown.abbr)
                    ? '· explored ✓'
                    : '· not yet, someday!'}
            </>
          ) : (
            <span className="muted">Hover or tap a state.</span>
          )}
        </p>
      </div>

      <ul className="tags map-list">
        {visitedStates.map((s) => (
          <li key={s.abbr}>
            {s.abbr === travel.home.abbr && <Pixel name={travel.home.sprite} size={2} />}
            {s.abbr === travel.college.abbr && <Pixel name="cap" size={2} />}
            {s.abbr === travel.firstStop.abbr && <Pixel name="plane" size={2} />} {s.name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
