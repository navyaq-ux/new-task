import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'
import { useCart } from '../context/cartStore'
import Button from './ui/Button'

const formatPrice = (value) => `₹${value.toLocaleString('en-IN')}`

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    count,
    subtotal,
  } = useCart()
  const [notice, setNotice] = useState('')
  const closeButtonRef = useRef(null)

  const handleClose = useCallback(() => {
    setNotice('')
    closeCart()
  }, [closeCart])

  const handleClear = () => {
    setNotice('')
    clearCart()
  }

  const handleExploreMenu = (event) => {
    event.preventDefault()
    handleClose()

    window.setTimeout(() => {
      const menuSection = document.getElementById('menu')
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      menuSection?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }, 80)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-[#14120f] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  Your Order
                </p>
                <h2 id="cart-title" className="mt-1 font-serif text-2xl font-semibold text-white">
                  {count > 0 ? `${count} item${count === 1 ? '' : 's'}` : 'Your cart'}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close cart"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-gold/40 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <ShoppingBag className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                    Your cart is empty
                  </h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-6 text-white/50">
                    Browse our popular dishes and add something delicious to your order.
                  </p>
                  <Button
                    href="#menu"
                    variant="outline"
                    size="sm"
                    className="mt-6"
                    onClick={handleExploreMenu}
                  >
                    Explore Menu
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] p-3"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-20 w-20 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-[16px] font-semibold leading-snug text-white">
                            {item.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="rounded-full p-1 text-white/35 transition hover:bg-white/10 hover:text-red-300"
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-sm font-semibold text-gold">
                          {formatPrice(item.price)}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between gap-2">
                          <div className="flex items-center rounded-full border border-white/12 bg-black/20">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center rounded-full text-white/60 transition hover:text-gold"
                            >
                              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                            <span
                              className="min-w-6 text-center text-xs font-semibold text-white"
                              aria-label={`Quantity: ${item.quantity}`}
                            >
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center rounded-full text-white/60 transition hover:text-gold"
                            >
                              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-white/80">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/10 bg-black/20 px-5 py-5 sm:px-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">Subtotal</span>
                  <span className="text-lg font-semibold text-white">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-white/35">
                  Taxes calculated at checkout.
                </p>

                <Button
                  type="button"
                  size="lg"
                  className="mt-4 w-full"
                  onClick={() =>
                    setNotice(
                      'This is a frontend demo — no payment was taken and no order has been placed.',
                    )
                  }
                >
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                {notice && (
                  <p
                    role="status"
                    className="mt-3 flex items-start gap-2 rounded-xl border border-gold/20 bg-gold/10 px-3 py-2.5 text-xs leading-5 text-gold"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {notice}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs font-medium text-white/40 transition hover:text-white"
                  >
                    Clear cart
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-xs font-medium text-white/40 transition hover:text-white"
                  >
                    Continue browsing
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
