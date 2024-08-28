import ReactLenis, { useLenis } from '@studio-freight/react-lenis/types'
import React, { useEffect } from 'react'

export default function SmoothScroll() {
    useEffect(() => {
        function update(time)  {
            lenisRef.current?.lenis?.raf(time * 1000);
        }
        
        gsap.ticker.add(update)
        
        return () => {
            gsap.ticker.remove(update)
        }
    })
    const lenis = useLenis(({scroll}) => {});
  return (
    <ReactLenis root>{children}</ReactLenis>
  )
}
