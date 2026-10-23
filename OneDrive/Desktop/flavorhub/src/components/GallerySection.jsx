import { ArrowUpRight } from 'lucide-react'
import { galleryImages } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 overflow-hidden bg-[#0d0d0d] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="GALLERY"
          title="A Glimpse Of Our Restaurant"
          highlight="Restaurant"
          subtitle="Warm light, thoughtful details and spaces made for lingering over good food."
          tone="dark"
        />

        <div className="no-scrollbar mt-11 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:mt-14 lg:grid lg:grid-cols-5 lg:gap-3.5 lg:overflow-visible lg:pb-0">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.06}
              y={22}
              className="min-w-[76%] snap-start sm:min-w-[42%] md:min-w-[31%] lg:min-w-0"
            >
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-1 items-center justify-between gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
                    {image.caption}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                  />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
