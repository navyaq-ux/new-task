import PixelSwap from './components/PixelSwap.jsx'
import ParallaxLayer from './components/ParallaxLayer.jsx'
import interiorImageOne from './assets/interior1.avif'
import interiorImageTwo from './assets/interior2.avif'
import interiorImageThree from './assets/interior3.avif'

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <ParallaxLayer className="hero__visual" speed={0.12}>
        <div
          className="hero__visual-content"
          role="group"
          aria-label="Cafe interior images. Hover or focus to change the view."
        >
          <div className="hero__image-stack">
            <PixelSwap
              firstContent={
                <img
                  src={interiorImageOne}
                  alt="Warm cafe interior with cozy seating"
                  style={imageStyle}
                />
              }
              secondContent={
                <img
                  src={interiorImageTwo}
                  alt="Sunlit cafe interior with relaxed seating"
                  style={imageStyle}
                />
              }
              pattern="pointer"
              pixelSize={48}
              pixelRadius={8}
              duration={520}
              pixelDuration={380}
              randomness={0.16}
              bounce={0.25}
              trigger="hover"
              className="hero__pixel-swap"
              style={{ borderRadius: 12 }}
            />

            <img
              src={interiorImageThree}
              alt="Quiet cafe corner with warm ambiance"
              className="hero__mini hero__mini--top"
            />
            <img
              src={interiorImageTwo}
              alt="Another cozy cafe seating area"
              className="hero__mini hero__mini--bottom"
            />
          </div>
        </div>
      </ParallaxLayer>
      <div className="hero__shade" />
      <div className="hero__flowers" aria-hidden="true">
        <svg className="hero__flower hero__flower--top" viewBox="0 0 420 320" fill="none">
          <g className="hero__flower-stems">
            <path d="M78 88c17 75 53 137 132 204M211 66c-10 77-7 151-1 226m132-187c-31 64-67 123-131 187" />
            <path d="M156 197c-31-34-56-35-77-28 17 31 42 45 83 44m73-33c29-37 56-44 78-39-12 34-39 51-84 57m-2 22c-27-25-49-26-66-19 12 27 35 37 71 35m37-26c23-25 44-30 61-26-9 26-29 39-63 44" />
          </g>
          <defs>
            <g id="hero-rose">
              <path
                className="hero__rose-outer"
                d="M50 6c9-2 17 5 19 14 11-5 23 2 22 13 11 4 13 17 4 24 6 11 0 22-12 23-1 12-12 18-22 11-8 9-21 7-26-4-12 3-22-6-18-18-10-7-10-21 1-27-3-12 7-21 19-17C39 14 43 8 50 6Z"
              />
              <path
                className="hero__rose-fold"
                d="M49 19c10-5 20 2 18 12 11-2 17 8 10 16 8 8 1 19-9 17-3 11-15 13-20 4-9 7-19 1-16-9-11-4-10-16 1-19-2-10 6-17 16-13Z"
              />
              <path
                className="hero__rose-center"
                d="M49 34c8-5 16 1 12 8 8 5 4 14-4 14-3 8-13 7-15-1-8-1-10-10-3-14-1-7 5-11 10-7Z"
              />
              <path className="hero__rose-detail" d="M50 19c-8 7-6 14 1 17m16-3c-7-2-12 2-12 8m6 18c-2-7-8-9-14-6m-13-9c7 2 11-1 13-7" />
            </g>
          </defs>
          <use href="#hero-rose" transform="translate(38 48) scale(.82)" />
          <use href="#hero-rose" transform="translate(165 20) scale(1)" />
          <use href="#hero-rose" transform="translate(300 62) scale(.76)" />
        </svg>
      </div>

      <main className="hero__content" id="home">
        <p className="hero__eyebrow">Coffee &amp; Home</p>
        <h1 id="hero-title">"More than coffee.<br /> A feeling called home"</h1>
        <p className="hero__description">
          "Your favorite place to slow down, sip something special, and simply be."
        </p>
      </main>
    </section>
  )
}

export default Hero