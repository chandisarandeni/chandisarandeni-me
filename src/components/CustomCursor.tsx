import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"]'

function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const interactiveRef = useRef(false)
  const activeRef = useRef(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (!isCoarse) {
      setEnabled(true)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-active')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }

    const animate = () => {
      current.x += (target.x - current.x) * 0.2
      current.y += (target.y - current.y) * 0.2

      const ring = ringRef.current
      const dot = dotRef.current

      const ringScale = (interactiveRef.current ? 1.18 : 1) * (activeRef.current ? 0.9 : 1)

      if (ring) {
        ring.style.transform = `translate3d(${current.x - 14}px, ${current.y - 14}px, 0) scale(${ringScale})`
      }

      if (dot) {
        const dotScale = activeRef.current ? 0.7 : 1
        dot.style.transform = `translate3d(${target.x - 4}px, ${target.y - 4}px, 0) scale(${dotScale})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    const updateVisibility = (nextVisible: boolean) => {
      if (visibleRef.current !== nextVisible) {
        visibleRef.current = nextVisible
        setIsVisible(nextVisible)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      updateVisibility(true)

      const isInteractiveElement = Boolean(
        (event.target as HTMLElement | null)?.closest(INTERACTIVE_SELECTOR),
      )

      if (interactiveRef.current !== isInteractiveElement) {
        interactiveRef.current = isInteractiveElement
        setIsInteractive(isInteractiveElement)
      }
    }

    const handlePointerDown = () => {
      activeRef.current = true
      setIsActive(true)
    }

    const handlePointerUp = () => {
      activeRef.current = false
      setIsActive(false)
    }

    const handlePointerLeave = () => updateVisibility(false)
    const handlePointerEnter = () => updateVisibility(true)

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerenter', handlePointerEnter)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerenter', handlePointerEnter)

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`custom-cursor ${isVisible ? 'is-visible' : ''} ${isActive ? 'is-active' : ''} ${
        isInteractive ? 'is-interactive' : ''
      }`}
    >
      <div ref={ringRef} className="custom-cursor__ring" aria-hidden />
      <div ref={dotRef} className="custom-cursor__dot" aria-hidden />
    </div>
  )
}

export default CustomCursor
