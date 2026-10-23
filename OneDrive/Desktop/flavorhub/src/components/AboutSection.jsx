import { aboutBenefits } from '../data/content'
import Reveal from './ui/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-ink">
      <div className="grid lg:grid-cols-2">
        <Reveal
          y={0}
          className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[690px]"
        >
          <img
            src="/images/about-interior.jpg"
            alt="Warm, elegantly lit interior of the FlavorHub restaurant with wooden tables and pendant lights"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                Made for lingering
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex items-center bg-[#141311] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <Reveal y={24} className="mx-auto w-full max-w-[540px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              ABOUT US
            </p>
            <h2 className="mt-4 text-balance font-serif text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              A Place Where Food Brings{' '}
              <span className="text-gold">People Together</span>
            </h2>
            <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-white/58">
              We are passionate about serving delicious food made from fresh
              ingredients. Our restaurant is a perfect place to enjoy great food
              with family and friends in a warm and cozy atmosphere.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-5">
              {aboutBenefits.map(({ icon: Icon, title, subtitle }) => (
                <div key={title}>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-gold/10">
                    <Icon
                      className="h-5 w-5 text-gold"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-3.5 text-[13.5px] font-semibold leading-snug text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/42">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
