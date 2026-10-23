import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChefHat, Menu, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { cn } from '../../lib/cn'
import { useCart } from '../../context/cartStore'
import Button from '../../components/ui/Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const { count, openCart } = useCart()

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      setScrolled(window.scrollY > 24)

      const marker = window.scrollY + 170
      let current = 'home'

      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (section && section.offsetTop <= marker) {
          current = link.id
        }
      }

      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4

      if (atPageEnd) current = 'contact'

      setActive(current)
    }

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const handleCartOpen = () => {
    setMenuOpen(false)
    openCart()
  }

  const handleMobileNavigate = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)

    window.setTimeout(() => {
      const section = document.getElementById(id)
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      section?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }, 80)
  }

  const solid = scrolled || menuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-white/10 bg-ink/95 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5 rounded-full"
          aria-label="FlavorHub home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:border-gold/60 group-hover:bg-gold/15">
            <ChefHat
              className="h-[21px] w-[21px] text-gold transition-transform duration-300 group-hover:-rotate-6"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </span>
          <span className="font-serif text-[26px] font-bold leading-none tracking-tight text-white">
            FlavorHub
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'page' : undefined}
              className={cn(
                'relative py-2 text-[13px] font-medium tracking-[0.02em] transition-colors duration-200',
                active === link.id
                  ? 'text-gold'
                  : 'text-white/70 hover:text-white',
              )}
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gold transition-all duration-300',
                  active === link.id ? 'opacity-100' : 'opacity-0',
                )}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleCartOpen}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-gold/50 hover:bg-white/5 hover:text-gold"
            aria-label={`Open cart${count > 0 ? `, ${count} item${count === 1 ? '' : 's'}` : ''}`}
          >
            <ShoppingBag className="h-[19px] w-[19px]" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </button>

          <Button
            href="#reservation"
            size="sm"
            className="hidden h-10 px-5 sm:inline-flex"
          >
            Reserve a Table
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold/50 hover:bg-white/5 hover:text-gold lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleMobileNavigate(event, link.id)}
                  aria-current={active === link.id ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b border-white/8 py-3.5 text-[15px] font-medium transition-colors',
                    index === navLinks.length - 1 && 'border-b-0',
                    active === link.id
                      ? 'text-gold'
                      : 'text-white/75 hover:text-white',
                  )}
                >
                  {link.label}
                  {active === link.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  )}
                </a>
              ))}

              <Button
                href="#reservation"
                onClick={(event) => handleMobileNavigate(event, 'reservation')}
                size="lg"
                className="mt-5 w-full"
              >
                Reserve a Table
              </Button>

              <p className="mt-4 pb-2 text-center text-[11px] tracking-wide text-white/35">
                Open daily · 11:00 AM – 11:00 PM
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
