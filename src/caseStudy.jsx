import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { marked } from 'marked'
import { useTheme } from './App.jsx'
import Pixel from './PixelArt.jsx'
import source from './content/housing-lottery.md?raw'
import './styles.css'

// The article is our own Markdown, bundled at build time (no user input).
const IMG_BASE = `${import.meta.env.BASE_URL}case-studies/housing-lottery/img/`
const html = marked
  .parse(source.replaceAll('](img/', `](${IMG_BASE}`))
  .replaceAll('<table>', '<div class="table-wrap"><table>')
  .replaceAll('</table>', '</table></div>')
  .replaceAll('<a href="http', '<a target="_blank" rel="noreferrer" href="http')

function CaseStudy() {
  const toggleTheme = useTheme()
  useEffect(() => {
    for (const img of document.querySelectorAll('.case-prose img')) {
      img.loading = 'lazy'
      img.decoding = 'async'
    }
  }, [])
  return (
    <>
      <header className="topbar">
        <a href={import.meta.env.BASE_URL} className="brand"><Pixel name="star" size={2} /> ZW</a>
        <nav aria-label="Page">
          <a href={`${import.meta.env.BASE_URL}#projects`}>← Back to portfolio</a>
        </nav>
        <div className="actions">
          <button type="button" onClick={toggleTheme} className="ghost" aria-label="Toggle dark mode">
            ◐
          </button>
        </div>
      </header>
      <main>
        <div className="case-badge">
          <Pixel name="heart" size={3} /> <span>Case study</span>
        </div>
        <article className="case-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer className="footer">
        <div className="footer-sprites" aria-hidden="true">
          <Pixel name="cap" size={3} />
          <Pixel name="die" size={3} />
          <Pixel name="laptop" size={3} />
        </div>
        <p>
          Code and full results:{' '}
          <a href="https://github.com/andrew-wzj/housing-lottery-sim" target="_blank" rel="noreferrer">
            github.com/andrew-wzj/housing-lottery-sim
          </a>
        </p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaseStudy />
  </StrictMode>,
)
