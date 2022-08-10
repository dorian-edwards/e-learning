import Image from './Image'
import Heading from './Heading'

const Header = () => {
  return (
    <header className='flex flex-col tablet:flex-row max-w-[1100px] mx-auto justify-center items-center tablet:pb-[210px] desktop:pb-[250px]'>
      <Heading />
      <Image />
    </header>
  )
}

export default Header
