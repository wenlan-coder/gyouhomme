/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-19 18:27:04
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-19 18:27:11
 */
import { useState, useEffect } from 'react'

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scrollX, scrollY]
}

export default useScrollPosition
