import { dishes } from '../data/content'
import DishCard from './DishCard'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-ivory py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="OUR MENU"
          title="Our Popular Dishes"
          highlight="Popular Dishes"
          subtitle="Taste our most loved dishes, made with fresh ingredients and authentic flavors."
          tone="light"
        />

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {dishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.07} y={22} className="h-full">
              <DishCard dish={dish} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
