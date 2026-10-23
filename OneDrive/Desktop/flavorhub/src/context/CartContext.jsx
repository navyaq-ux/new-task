import {
  useCallback,
  useMemo,
  useState,
} from 'react'
import { CartContext } from './cartStore'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const addItem = useCallback((dish) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === dish.id)

      if (existing) {
        return current.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...current, { ...dish, quantity: 1 }]
    })

    setToast({
      id: Date.now() + Math.random(),
      message: `${dish.name} added to your order`,
    })
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== id)
      }

      return current.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      )
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const dismissToast = useCallback(() => setToast(null), [])

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () =>
      items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      toast,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      dismissToast,
    }),
    [
      items,
      isOpen,
      toast,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      dismissToast,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
