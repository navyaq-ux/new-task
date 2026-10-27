import TiltedCard, { TiltedCardLayer } from './components/TiltedCard.jsx'

const reviews = [
  {
    name: 'Aanya Sharma',
    category: 'Coffee & atmosphere',
    rating: 4.9,
    quote: 'Lovely coffee and such a cozy place. It is easy to lose track of time here.',
  },
  {
    name: 'Rohan Mehta',
    category: 'From the kitchen',
    rating: 4.8,
    quote: 'The pasta was full of flavor, and the team made us feel right at home.',
  },
  {
    name: 'Mira Kapoor',
    category: 'Slow mornings',
    rating: 4.7,
    quote: 'A lovely spot for a slow morning. The coffee was smooth and beautifully made.',
  },
  {
    name: 'Arjun Rao',
    category: 'A quick favorite',
    rating: 4.5,
    quote: 'Fresh sandwich, good coffee, and a relaxed atmosphere. Would happily visit again.',
  },
  {
    name: 'Nisha Verma',
    category: 'The cafe feeling',
    rating: 4.9,
    quote: 'A warm, welcoming place with thoughtful details. A lovely little escape.',
  },
]

function StarRating({ rating }) {
  return (
    <span className="review-stars" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, rating - index)) * 100
        return (
          <span
            className="review-stars__star"
            key={index}
            style={{ '--star-fill': `${fill}%` }}
            aria-hidden="true"
          >
            ★
          </span>
        )
      })}
    </span>
  )
}

function ReviewCard({ review, index }) {
  return (
    <TiltedCard
      className="review-card"
      captionText={review.category}
      containerWidth="300px"
      containerHeight="280px"
      imageWidth="300px"
      imageHeight="280px"
      rotateAmplitude={6}
      scaleOnHover={1.025}
      glare={0.12}
      shadow={0.35}
      radius={16}
      introDelay={index * 80}
      showTooltip={false}
    >
      <TiltedCardLayer depth={22} className="review-card__content">
        <div className="review-card__header">
          <span className="review-card__avatar" aria-hidden="true">
            {review.name.split(' ').map((part) => part[0]).join('')}
          </span>
          <span className="review-card__identity">
            <strong>{review.name}</strong>
            <small>Sample guest review</small>
          </span>
          <span className="review-card__menu" aria-hidden="true">···</span>
        </div>
        <div className="review-card__rating">
          <StarRating rating={review.rating} />
          <span className="review-card__score">{review.rating.toFixed(1)}</span>
        </div>
        <p className="review-card__quote">“{review.quote}”</p>
        <div className="review-card__footer">
          <span>{review.category}</span>
          <span aria-hidden="true">Cafe &amp; Home</span>
        </div>
      </TiltedCardLayer>
    </TiltedCard>
  )
}

function Testimonials() {
  return (
    <section
      className="testimonials"
      id="reviews"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials__intro">
        <p className="menu__eyebrow">Good moments stay with you</p>
        <h2 id="testimonials-title">A little love from the cafe.</h2>
        <p className="menu__description">
          A few kind words about the coffee, food, and time spent here.
        </p>
        <div className="reviews-summary" aria-label="Illustrative review rating">
          <span className="reviews-summary__score">4.8</span>
          <StarRating rating={4.8} />
          <span className="reviews-summary__count">out of 5 · sample rating</span>
        </div>
      </div>
      <p className="reviews-disclaimer">
        Example reviews and ratings — replace with feedback from your guests.
      </p>
      <div
        className="reviews-marquee"
        role="region"
        aria-label="Scrolling sample cafe reviews"
      >
        <div className="reviews-marquee__track">
          {[false, true].map((duplicate) => (
            <div
              className="reviews-marquee__group"
              key={duplicate ? 'duplicate' : 'original'}
              aria-hidden={duplicate || undefined}
            >
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`${duplicate ? 'duplicate-' : ''}${review.category}`}
                  review={review}
                  index={index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials