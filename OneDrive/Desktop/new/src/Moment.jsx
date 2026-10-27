import ChromaGrid from './components/ChromaGrid.jsx'
import coffeeImage from './assets/coffee1.avif'
import interiorImageOne from './assets/interior1.avif'
import interiorImageTwo from './assets/interior2.avif'
import interiorImageThree from './assets/interior3.avif'

const cafeMoments = [
  {
    image: coffeeImage,
    title: 'A good cup',
    subtitle: 'Made with care',
    accent: '#d7a078',
  },
  {
    image: interiorImageOne,
    title: 'Settle in',
    subtitle: 'Your favorite corner',
    accent: '#e0b48b',
  },
  {
    image: interiorImageTwo,
    title: 'Slow mornings',
    subtitle: 'Take your time',
    accent: '#c78b68',
  },
  {
    image: interiorImageThree,
    title: 'Stay awhile',
    subtitle: 'Feel right at home',
    accent: '#b87a59',
  },
]

function Moment() {
  return (
    <section className="menu2" id="collection" aria-labelledby="moment-title">
      <div className="menu2__intro" id="moments">
        <p className="menu__eyebrow">The little things</p>
        <h2 id="moment-title">Made for moments that linger.</h2>
        <p className="menu__description">
          Follow the color and take a closer look at the coffee, spaces, and
          small details that make this place feel like home.
        </p>
      </div>
      <div className="menu2__grid">
        <ChromaGrid
          items={cafeMoments}
          columns={4}
          minCardWidth={210}
          gap={20}
          radius={280}
          softness={0.68}
          damping={0.42}
          fadeOut={0.5}
          grayscale={0.88}
          dim={0.1}
          glow={0.42}
          borderGlow={0.8}
          aspectRatio="4 / 3"
          cardRadius={18}
          frame
          theme="dark"
          className="coffee-chroma"
        />
      </div>
    </section>
  )
}

export default Moment