import { useEffect } from "react"

export const useClickOutsideElement = (refs, callback) => {
  useEffect(() => {
    const eventHandler = e => {
      if (refs.some(ref => ref.current.contains(e.target))) {
        return
      } else {
        callback()
      }
    }

    document.addEventListener("mousedown", eventHandler)

    return () => {
      document.removeEventListener("mousedown", eventHandler)
    }
  }, [refs, callback])
}
