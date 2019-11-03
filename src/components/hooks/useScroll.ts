import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

const getScrollPosition = (): ScrollPosition => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
})

export const useScrollPosition = (): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>(getScrollPosition())

  const handleScroll = () => {
    return window.requestAnimationFrame(() => setPosition(getScrollPosition()))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}

export const useScrollXPosition = (): number => {
  const { x } = useScrollPosition()
  return x
}

export const useScrollYPosition = (): number => {
  const { y } = useScrollPosition()
  return y
}
