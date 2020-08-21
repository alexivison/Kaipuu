import { useState } from 'react'

import useEventListener from './useEventListener'

import { detectMobile } from '../../helpers/detectMobile'

const useDetectMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(detectMobile())

  useEventListener('resize', () => setIsMobile(detectMobile()))

  return isMobile
}

export default useDetectMobile
