import { useState, useEffect } from 'react'
import ImageLead from './ImageLead'
import Heading from './Heading'

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) return setMobile(true)
      return setMobile(false)
    })
  }, [])

  return (
    <header className='px-6 pb-[200px] tablet:bg-hero-tablet bg-[top_-100px_right_-15em] desktop:bg-hero-desktop desktop:bg-[top_-150px_right_-300px] desktop:pt-[100px] bg-no-repeat'>
      <Heading />
      {mobile && <ImageLead />}
    </header>
  )
}

export default Header
