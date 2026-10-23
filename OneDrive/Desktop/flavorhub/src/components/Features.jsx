import { features } from '../data/content'
import FeatureItem from './FeatureItem'

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-y border-white/10 bg-[#131210]"
    >
      <h2 id="features-heading" className="sr-only">
        Why guests love FlavorHub
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-1 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/10 lg:px-4">
        {features.map((feature) => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}
