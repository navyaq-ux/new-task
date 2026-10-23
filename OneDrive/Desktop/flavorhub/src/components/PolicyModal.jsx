import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FileText, X } from 'lucide-react'
import Button from './ui/Button'

const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'FlavorHub respects your privacy. This demonstration website uses placeholder content and does not collect or store reservation data.',
    points: [
      'Details entered in the reservation form are handled only in your browser and are not transmitted anywhere.',
      'No cookies, analytics or advertising trackers are used on this demo homepage.',
      'For a real booking, please call or visit the restaurant directly.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro:
      'Welcome to the FlavorHub demo website. By browsing this page you agree to the following placeholder terms.',
    points: [
      'Menu items, prices and availability shown here are illustrative examples.',
      'The reservation form is a frontend demonstration and does not create a confirmed booking.',
      'Online ordering is a demo interaction; no payment is processed and no food is dispatched.',
    ],
  },
}

export default function PolicyModal({ type, onClose }) {
  const closeButtonRef = useRef(null)
  const policy = POLICIES[type]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-title"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/12 bg-[#161411] p-6 shadow-2xl shadow-black/60 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2
              id="policy-title"
              className="font-serif text-2xl font-semibold text-white"
            >
              {policy.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${policy.title}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-gold/40 hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-6 text-white/60">{policy.intro}</p>

        <ul className="mt-4 space-y-3">
          {policy.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-white/55">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>

        <Button type="button" size="sm" className="mt-6" onClick={onClose}>
          Close
        </Button>
      </motion.div>
    </div>
  )
}
