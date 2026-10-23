import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChefHat, Mail, MapPin, Phone } from 'lucide-react'
import { menuCategories, navLinks } from '../../data/content'
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from '../../components/ui/SocialIcons'
import PolicyModal from '../../components/PolicyModal'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: YouTubeIcon },
]

export default function Footer() {
  const [policy, setPolicy] = useState(null)
  const closePolicy = useCallback(() => setPolicy(null), [])

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-18 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.3fr] lg:gap-12">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 rounded-full"
              aria-label="FlavorHub home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/10">
                <ChefHat
                  className="h-5 w-5 text-gold"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                FlavorHub
              </span>
            </a>

            <p className="mt-5 max-w-[300px] text-[13.5px] leading-6 text-white/48">
              Good food, great ambiance and memorable moments. Visit us and
              experience the difference.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`FlavorHub on ${label} (opens in a new tab)`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:border-gold/40 hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-block text-[13.5px] text-white/50 transition hover:translate-x-0.5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Menu
            </h2>
            <ul className="mt-5 space-y-3">
              {menuCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#menu"
                    className="inline-block text-[13.5px] text-white/50 transition hover:translate-x-0.5 hover:text-gold"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Contact Info
            </h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=123+Food+Street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[13.5px] leading-6 text-white/50 transition hover:text-white"
                >
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold/80"
                    aria-hidden="true"
                  />
                  123 Food Street, Your City
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-[13.5px] text-white/50 transition hover:text-white"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-gold/80"
                    aria-hidden="true"
                  />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yourwebsite.com"
                  className="flex items-center gap-3 text-[13.5px] text-white/50 transition hover:text-white"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-gold/80"
                    aria-hidden="true"
                  />
                  info@yourwebsite.com
                </a>
              </li>
            </ul>

            <p className="mt-6 text-[11px] uppercase tracking-[0.15em] text-white/30">
              Open daily · 11 AM – 11 PM
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © 2026 FlavorHub. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <button
              type="button"
              onClick={() => setPolicy('privacy')}
              className="transition hover:text-gold"
            >
              Privacy Policy
            </button>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setPolicy('terms')}
              className="transition hover:text-gold"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {policy && <PolicyModal type={policy} onClose={closePolicy} />}
      </AnimatePresence>
    </footer>
  )
}
