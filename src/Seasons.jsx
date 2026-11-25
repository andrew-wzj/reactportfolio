// Live season + weather for the hero scene.
// Season comes from today's date where Zhijie is; weather comes from Open-Meteo
// (free, no API key, CORS-enabled — works on a static GitHub Pages site).
import { useEffect, useState } from 'react'
import Pixel from './PixelArt.jsx'

export const PLACE = {
  name: 'Dublin, NH',
  lat: 42.9076,
  lon: -72.0626,
  timeZone: 'America/New_York',
}

export const SEASONS = [
  ['spring', 'Spring', 'blossom'],
  ['summer', 'Summer', 'sun'],
  ['autumn', 'Autumn', 'leaf'],
  ['winter', 'Winter', 'snowflake'],
]

export function seasonNow(date = new Date()) {
  const month = Number(
    new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: PLACE.timeZone }).format(date),
  )
  if (month >= 3 && month <= 5) return 'spring'
  if (month >= 6 && month <= 8) return 'summer'
  if (month >= 9 && month <= 11) return 'autumn'
  return 'winter'
}

// WMO weather code → [kind, intensity 1–3, label, icon]
function describe(code) {
  if (code <= 1) return ['clear', 0, code === 0 ? 'Clear' : 'Mostly clear', '☀']
  if (code === 2) return ['partly', 0, 'Partly cloudy', '⛅']
  if (code === 3) return ['cloudy', 0, 'Overcast', '☁']
  if (code === 45 || code === 48) return ['fog', 0, 'Foggy', '🌫']
  if (code >= 51 && code <= 57) return ['rain', 1, 'Drizzle', '🌦']
  if (code >= 61 && code <= 67) return ['rain', code >= 65 ? 3 : code >= 63 ? 2 : 1, code >= 65 ? 'Heavy rain' : 'Rain', '🌧']
  if (code >= 80 && code <= 82) return ['rain', code - 79, 'Showers', '🌦']
  if ((code >= 71 && code <= 77) || code === 85 || code === 86)
    return ['snow', code >= 75 || code === 86 ? 3 : code >= 73 ? 2 : 1, code >= 75 ? 'Heavy snow' : code <= 71 ? 'Light snow' : 'Snow', '🌨']
  if (code >= 95) return ['storm', 3, 'Thunderstorm', '⛈']
  return ['clear', 0, 'Clear', '☀']
}

const CACHE_KEY = 'hero-weather-v1'
const CACHE_MS = 20 * 60 * 1000

export function useLiveWeather() {
  const [weather, setWeather] = useState(() => {
    try {
      const c = JSON.parse(sessionStorage.getItem(CACHE_KEY))
      if (c && Date.now() - c.at < CACHE_MS) return c.data
    } catch {
      /* ignore */
    }
    return null
  })

  useEffect(() => {
    if (weather) return
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 8000)
    const url =
      'https://api.open-meteo.com/v1/forecast' +
      `?latitude=${PLACE.lat}&longitude=${PLACE.lon}` +
      '&current=temperature_2m,weather_code&temperature_unit=fahrenheit' +
      `&timezone=${encodeURIComponent(PLACE.timeZone)}`
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((j) => {
        const [kind, intensity, label, icon] = describe(j.current.weather_code)
        const f = Math.round(j.current.temperature_2m)
        const data = { kind, intensity, label, icon, f, c: Math.round(((f - 32) * 5) / 9) }
        setWeather(data)
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        /* offline or API down: the scene just follows the calendar */
      })
      .finally(() => clearTimeout(timer))
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [weather])

  return weather
}

// Little pixel switcher that sits on the grass.
export function SeasonSwitcher({ live, value, onChange }) {
  return (
    <div className="season-switch" role="group" aria-label="Preview the scene in another season">
      <button
        type="button"
        className={`season-btn live${value === null ? ' on' : ''}`}
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        title={`Live: what it looks like in ${PLACE.name} right now`}
      >
        <span className="live-dot" /> LIVE
      </button>
      {SEASONS.map(([id, label, icon]) => (
        <button
          key={id}
          type="button"
          className={`season-btn${value === id ? ' on' : ''}${value === null && live === id ? ' current' : ''}`}
          onClick={() => onChange(value === id ? null : id)}
          aria-pressed={value === id}
          title={label}
          aria-label={label}
        >
          <Pixel name={icon} size={2} />
        </button>
      ))}
    </div>
  )
}

// Falling / floating particles: petals, leaves, snow, rain, fireflies.
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

function makeParticles(kind, count, seed) {
  const r = rng(seed)
  return Array.from({ length: count }, (_, i) => ({
    key: `${kind}-${i}`,
    kind,
    variant: i % 3,
    left: (r() * 100).toFixed(1) + '%',
    top: (r() * 60).toFixed(1) + '%',
    delay: (-r() * 12).toFixed(2) + 's',
    dur: r(),
    sway: Math.round(10 + r() * 30) * (r() > 0.5 ? 1 : -1) + 'px',
  }))
}

export function Particles({ season, weather }) {
  const list = []
  // the season's own touch
  if (season === 'spring') list.push(...makeParticles('petal', 18, 1))
  if (season === 'summer') list.push(...makeParticles('firefly', 16, 2))
  if (season === 'autumn') list.push(...makeParticles('leaf', 16, 3))
  // live weather on top (only in live mode — previews show the season itself)
  const w = weather?.kind
  const n = weather?.intensity || 0
  if (w === 'snow' || (season === 'winter' && w !== 'rain' && w !== 'storm'))
    list.push(...makeParticles('snow', w === 'snow' ? 20 + n * 15 : 22, 4))
  if (w === 'rain' || w === 'storm') list.push(...makeParticles('rain', w === 'storm' ? 60 : 15 + n * 15, 5))

  return (
    <div className="particles" aria-hidden="true">
      {list.map((p) => (
        <span
          key={p.key}
          className={`pt pt-${p.kind} v${p.variant}`}
          style={{
            left: p.left,
            top: p.kind === 'firefly' ? `calc(58% + ${p.top} * 0.6)` : undefined,
            animationDelay: p.delay,
            '--dur': p.dur,
            '--sway': p.sway,
          }}
        />
      ))}
      {w === 'storm' && <span className="lightning" />}
    </div>
  )
}
