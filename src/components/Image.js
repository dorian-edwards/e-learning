import { useState, useEffect } from 'react'
import mobileImage from '../assets/image-hero-mobile.webp'
import tabletImage from '../assets/image-hero-tablet.webp'
import desktopImage from '../assets/image-hero-desktop.webp'

const Image = () => {
  const images = {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: desktopImage,
  }

  const [screenSize, setScreenSize] = useState(
    window.innerWidth < 1440
      ? window.innerWidth < 768
        ? 'mobile'
        : 'tablet'
      : 'desktop'
  )

  useEffect(() => {
    window.addEventListener('resize', () => {
      return setScreenSize(
        window.innerWidth < 1440
          ? window.innerWidth < 768
            ? 'mobile'
            : 'tablet'
          : 'desktop'
      )
    })
  }, [])

  return (
    <div className='img-wrapper flex-[0_0_40%] relative'>
      <img
        src={images[screenSize]}
        alt='woman blowing a cup of coffee in front of a laptop'
        className='z-0 tablet:absolute tablet:top-[-300px] tablet:right-[-200px] desktop:top-[-410px] desktop:right-[-490px] max-w-none'
      />
    </div>
  )
}

export default Image
