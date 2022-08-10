import Button from './Button'

const Nav = () => {
  return (
    <nav className='absolute w-full p-4 tablet:py-6 tablet:px-6'>
      <div className='nav-wrapper flex justify-between items-center max-w-[1100px] mx-auto bg-transparent'>
        <h1 className='font-sans font-extra-bold text-space-cadet text-[28px] desktop:text-[36px] leading-[35.28px] desktop:leading-[45.36px]'>
          skilled
        </h1>
        <Button styling='btn-nav' />
      </div>
    </nav>
  )
}

export default Nav
