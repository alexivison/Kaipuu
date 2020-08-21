import { useRef, useEffect } from 'react'

const useEventListener = (eventName: string, handler: (event: Event) => void, element = window): void => {

  const savedHandler = useRef(handler)
  
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
      const isSupported = element && element.addEventListener
      if (!isSupported) return
      
      const eventListener = (event: Event): void => savedHandler.current(event)
      
      element.addEventListener(eventName, eventListener)
      
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    }, [eventName, element]
  )
}

export default useEventListener
