import { useEffect, useState } from 'react'
import { profile, about, experience, projects, skills, education } from './data/resume.js'
import Pixel from './PixelArt.jsx'

const SECTIONS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || null
    } catch {
      return null
    }
  })
  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
    try {
      if (theme) localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])
  const toggle = () => {
    const current =
      theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }
  return toggle
}

function Header() {
  const toggleTheme = useTheme()
  return (
    <header className="topbar">
      <a href="#top" className="brand"><Pixel name="star" size={2} /> ZW</a>
      <nav aria-label="Sections">
        {SECTIONS.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
      <div className="actions">
        <button type="button" onClick={() => window.print()} className="ghost" title="Save as PDF">
          Print / PDF
        </button>
        <button type="button" onClick={toggleTheme} className="ghost" aria-label="Toggle dark mode">
          ◐
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="sky" aria-hidden="true">
        <Pixel name="sun" size={7} className="sun" />
        <Pixel name="cloud" size={5} className="cloud c1" />
        <Pixel name="cloud" size={4} className="cloud c2" />
        <Pixel name="cloud" size={3} className="cloud c3" />
      </div>
      <p className="eyebrow">{profile.role}</p>
      <h1>
        {profile.name} <span className="zh">{profile.nameZh}</span>
      </h1>
      <p className="tagline">{profile.tagline}</p>
      <ul className="links">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span className="link-label">{l.label}</span>
              <span className="link-text">{l.text}</span>
            </a>
          </li>
        ))}
        <li className="loc">📍 {profile.location}</li>
      </ul>
      <div className="buddies" aria-hidden="true">
        <Pixel name="apple" size={5} className="float f1" />
        <Pixel name="robot" size={5} className="float f2" />
        <Pixel name="die" size={5} className="float f3" />
        <Pixel name="laptop" size={5} className="float f4" />
      </div>
      <div className="grass" aria-hidden="true" />
    </section>
  )
}

function Section({ id, title, icon, color = 'mint', children }) {
  return (
    <section id={id} className={`section tone-${color}`}>
      <h2>
        {icon && <Pixel name={icon} size={4} className="h-icon" />}
        <span className="h-text">{title}</span>
      </h2>
      {children}
    </section>
  )
}

function Experience() {
  const [tab, setTab] = useState('All')
  const groups = ['All', ...experience.map((g) => g.group)]
  const shown = tab === 'All' ? experience : experience.filter((g) => g.group === tab)
  return (
    <Section id="experience" title="Experience" icon="apple" color="coral">
      <div className="tabs" role="tablist">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={tab === g}
            className={tab === g ? 'tab active' : 'tab'}
            onClick={() => setTab(g)}
          >
            {g}
          </button>
        ))}
      </div>
      {shown.map((g) => (
        <div key={g.group} className="exp-group">
          <h3 className="group-title">
            <Pixel name={g.group === 'Teaching' ? 'pencil' : 'laptop'} size={2} /> {g.group}
          </h3>
          <ol className="timeline">
            {g.items.map((item) => (
              <li key={item.title + item.dates} className={item.current ? 'current' : ''}>
                <div className="exp-head">
                  <div>
                    <h4>{item.title}</h4>
                    <p className="org">
                      {item.org}
                      <span className="muted"> · {item.place}</span>
                    </p>
                  </div>
                  <span className="dates">
                    {item.current && <span className="badge">Now</span>}
                    {item.dates}
                  </span>
                </div>
                <ul className="bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects" icon="laptop" color="sky">
      <div className="cards">
        {projects.map((p, i) => {
          const Tag = p.href ? 'a' : 'div'
          return (
            <Tag
              key={p.name}
              className={`card card-${i % 4}`}
              {...(p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {})}
            >
              <div className="card-head">
                <h4>
                  <Pixel name={p.icon || 'star'} size={3} /> {p.name}
                </h4>
                {p.href && <span className="arrow" aria-hidden="true">↗</span>}
              </div>
              <p className="dates small">{p.dates}</p>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Tag>
          )
        })}
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About" icon="heart" color="pink">
          {about.map((p) => (
            <p key={p.slice(0, 24)} className="prose">{p}</p>
          ))}
        </Section>
        <Experience />
        <Projects />
        <Section id="skills" title="Skills" icon="star" color="sun">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul className="tags">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>
        <Section id="education" title="Education" icon="cap" color="lavender">
          {education.map((e) => (
            <div key={e.school} className="exp-head edu">
              <div>
                <h4>{e.school}</h4>
                <p className="org">
                  {e.degree}
                  <span className="muted"> · {e.place}</span>
                </p>
              </div>
              <span className="dates">{e.dates}</span>
            </div>
          ))}
        </Section>
      </main>
      <footer className="footer">
        <div className="footer-sprites" aria-hidden="true">
          <Pixel name="heart" size={3} />
          <Pixel name="apple" size={3} />
          <Pixel name="robot" size={3} />
          <Pixel name="die" size={3} />
          <Pixel name="star" size={3} />
        </div>
        Made with curiosity · © {new Date().getFullYear()} {profile.name} ·{' '}
        <a href="https://github.com/andrew-wzj/reactportfolio" target="_blank" rel="noreferrer">
          Source
        </a>
      </footer>
    </>
  )
}
