import cafeImage from './src/assets/cafe1.avif'
import cafeBrunchImage from './src/assets/cafe-brunch.webp'
import cappuccinoImage from './src/assets/cappuchino.avif'
import coldCoffeeImage from './src/assets/cold coffee.avif'
import friesImage from './src/assets/fries.avif'
import garlicBreadImage from './src/assets/garlicbread.avif'
import interiorImageTwo from './src/assets/interior2.avif'
import pastaImage from './src/assets/pasta.avif'
import sandwichImage from './src/assets/sandwich.avif'
import TiltedCard, { TiltedCardLayer } from './src/components/TiltedCard.jsx'

const menuCards = [
  {
    name: 'Pasta',
    note: 'Comforting, freshly prepared, and full of flavor.',
    image: pastaImage,
    price: 249,
  },
  {
    name: 'Sandwich',
    note: 'A satisfying favorite, made fresh to order.',
    image: sandwichImage,
    price: 179,
  },
  {
    name: 'Garlic bread',
    note: 'Golden, savory, and perfect for sharing.',
    image: garlicBreadImage,
    price: 129,
  },
  {
    name: 'Cafe favorites',
    note: 'A little taste of the cozy cafe experience.',
    image: cafeImage,
    price: 199,
  },
  {
    name: 'Fries',
    note: 'Crispy golden fries, a perfect side for any cafe favorite.',
    image: friesImage,
    price: 119,
  },
  {
    name: 'Cappuccino',
    note: 'A bold espresso softened with silky steamed milk.',
    image: cappuccinoImage,
    price: 159,
  },
  {
    name: 'Cold coffee',
    note: 'Chilled, smooth, and just right for a sunny afternoon.',
    image: coldCoffeeImage,
    price: 169,
  },
  {
    name: 'Cafe brunch',
    note: 'A relaxed table and something lovely to start the day.',
    image: cafeBrunchImage,
    price: 229,
  },
  {
    name: 'Slow morning',
    note: 'Your favorite warm drink in a calm, cozy space.',
    image: interiorImageTwo,
    price: 149,
  },
]

function Menu() {
  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="menu__intro">
        <p className="menu__eyebrow">Fresh from the kitchen</p>
        <h2 id="menu-title">Good things, made with care.</h2>
        <p className="menu__description">
          Find a cafe favorite to pair with your coffee. Tap any card to turn it
          over and see what makes it special.
        </p>
      </div>
      <div className="menu__content">
        {menuCards.map((item, index) => (
          <TiltedCard
            key={item.name}
            imageSrc={item.image}
            altText={item.name}
            captionText={item.name}
            containerWidth="100%"
            containerHeight="320px"
            imageWidth="100%"
            imageHeight="100%"
            rotateAmplitude={8}
            scaleOnHover={1.04}
            glare={0.35}
            shadow={0.5}
            radius={18}
            introDelay={index * 100}
            backContent={
              <div className="menu__card-back">
                <p className="menu__eyebrow">From our kitchen</p>
                <h3>{item.name}</h3>
                <p className="menu__card-price">₹{item.price}</p>
                <p>{item.note}</p>
                <span>Tap again to see the photo</span>
              </div>
            }
          >
            <div className="menu__card-shade" aria-hidden="true" />
            <TiltedCardLayer depth={28} className="menu__card-caption">
              <span>Freshly made</span>
              <h3>{item.name}</h3>
              <p className="menu__card-price">₹{item.price}</p>
            </TiltedCardLayer>
          </TiltedCard>
        ))}
      </div>
      <div className="menu__index" aria-hidden="true">
        <span>Fresh from our kitchen</span>
        <span>01 — 09</span>
      </div>
    </section>
  )
}

export default Menu