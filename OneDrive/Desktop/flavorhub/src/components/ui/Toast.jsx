import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useCart } from '../../context/cartStore'

export default function Toast() {
  const { toast, dismissToast, openCart } = useCart()

  useEffect(() => {
    if (!toast) return undefined

    const timer = window.setTimeout(dismissToast, 4000)
    return () => window.clearTimeout(timer)
  }, [toast, dismissToast])

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-4 bottom-5 z-[85] flex justify-center sm:bottom-7"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-gold/25 bg-[#1b1813] px-4 py-3.5 shadow-2xl shadow-black/50"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="min-w-0 flex-1 text-sm text-white/85">{toast.message}</p>
            <button
              type="button"
              onClick={() => {
                dismissToast()
                openCart()
              }}
              className="shrink-0 rounded-full px-2 py-1 text-xs font-semibold text-gold transition hover:text-white"
            >
              View cart
            </button>
            <button
              type="button"
              onClick={dismissToast}
              aria-label="Dismiss notification"
              className="shrink-0 rounded-full p-1 text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
