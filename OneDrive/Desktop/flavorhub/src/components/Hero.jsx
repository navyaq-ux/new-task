import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Button from './ui/Button'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduceMotion ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 2.2, ease: 'easeOut' }}
      >
        <img
          src="/images/hero-pasta.jpg"
          alt=""
          className="h-full w-full object-cover object-[55%_center] lg:w-[122%] lg:max-w-none lg:object-center"
          fetchPriority="high"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a0908]/95 via-[#0a0908]/80 to-[#0a0908]/45 lg:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,#0a0908_0%,rgba(10,9,8,0.94)_26%,rgba(10,9,8,0.7)_45%,rgba(10,9,8,0.28)_63%,rgba(10,9,8,0.05)_82%,transparent_100%)] lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/55 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          variants={reduceMotion ? undefined : container}
          className="max-w-[610px]"
        >
          <motion.div variants={reduceMotion ? undefined : item}>
            <p className="font-script text-[42px] leading-none text-gold sm:text-5xl lg:text-[54px]">
              Good Food
            </p>
            <span
              className="mt-4 block h-px w-16 bg-gold/60"
              aria-hidden="true"
            />
          </motion.div>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="mt-5 max-w-[560px] text-balance font-serif text-[52px] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:text-[68px] lg:text-[84px]"
          >
            Great Moments
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-6 max-w-[430px] text-[15px] leading-7 text-white/68 sm:text-base sm:leading-8"
          >
            Delicious food, cozy ambiance and unforgettable experiences for you
            and your loved ones.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <Button href="#menu" size="lg">
              Explore Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href="#reservation"
              variant="outline"
              size="lg"
              className="backdrop-blur-[2px]"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book a Table
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
