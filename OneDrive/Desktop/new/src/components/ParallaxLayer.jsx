import { useEffect, useRef } from 'react'

function ParallaxLayer({ children, className = '', speed = 0.1, style }) {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return undefined

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    let frame = 0

    const update = () => {
      frame = 0
      if (reducedMotion.matches) {
        layer.style.transform = ''
        return
      }
      const rect = layer.getBoundingClientRect()
      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2)
      const offset = Math.max(-72, Math.min(72, distance * speed))
      layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    reducedMotion.addEventListener?.('change', scheduleUpdate)
    scheduleUpdate()

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      reducedMotion.removeEventListener?.('change', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={layerRef} className={className} style={style}>
      {children}
    </div>
  )
}

export default ParallaxLayer
