import { useEffect, useState } from 'react'
import desktopImage from '../assets/image-hero-desktop.webp'
import tabletImage from '../assets/image-hero-tablet.webp'
import mobileImage from '../assets/image-hero-mobile.webp'

const ImageLead = () => {
  const [display, setDisplay] = useState(
    window.innerWidth < 1440
      ? window.innerWidth < 768
        ? 'mobile'
        : 'tablet'
      : 'desktop'
  )

  const image: { [key: string]: string } = {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: desktopImage,
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      console.log(width)
      if (width < 768) return setDisplay('mobile')
      if (width > 767 && width < 1440) return setDisplay('tablet')
      if (width > 1439) return setDisplay('desktop')
    })
  }, [])
  return <img src={image[display]} alt='lady here' />
}

export default ImageLead
