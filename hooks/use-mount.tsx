import { useEffect, useState } from 'react'

export const useMount = (opened: boolean, duration: number) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true)
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, duration)
    }
  }, [opened])

  return mounted
}
