import { useState, useEffect } from "react"
import { BREAKPOINT_WIDTH } from "../constants/utils"

export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (
      initialValue !== null &&
      initialValue !== "" &&
      initialValue !== undefined
    )
      setValue(initialValue)
  }, [initialValue])

  return { value, onChange: handleChange }
}

export const useWidth = () => {
  const [width, setWidth] = useState(window?.innerWidth ?? 1000)
  useEffect(() => {
    const handleResize = () => setWidth(window?.innerWidth)
    window?.addEventListener("resize", handleResize)
    return () => window?.removeEventListener("resize", handleResize)
  }, [width])
  const isLargeScreen = width > BREAKPOINT_WIDTH
  return { width, isLargeScreen }
}
