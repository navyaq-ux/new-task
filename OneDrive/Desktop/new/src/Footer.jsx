const address = 'Vrindavan Sector 10, near LPS, Lucknow'
const email = 'abc@gmail.com'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <a className="site-footer__brand" href="#home" aria-label="Coffee and Home, back to top">
          <span className="hero__brand-mark" aria-hidden="true" />
          <span>Coffee <span aria-hidden="true">&amp;</span> Home</span>
        </a>
        <p className="site-footer__tagline">
          Good coffee, good company, and a place to feel at home.
        </p>
        <div className="site-footer__details">
          <div className="site-footer__item">
            <h2>Visit us</h2>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </div>
          <div className="site-footer__item">
            <h2>Say hello</h2>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="site-footer__item">
            <h2>Follow along</h2>
            <a
              href="https://www.instagram.com/yupp/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Coffee &amp; Home</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer