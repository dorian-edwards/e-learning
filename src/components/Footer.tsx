import Button from './Button'

const Footer = () => (
  <footer className='bg-space-cadet'>
    <div className='container flex justify-between items-center max-w-[1100px] py-9 mx-auto px-4 tablet:px-10 desktop:px-0'>
      <h2 className='font-sans font-extra-bold text-white text-[28px] desktop:text-[36px] leading-[35.28px] desktop:leading-[45.36px]'>
        skilled
      </h2>
      <Button styling='btn-footer' />
    </div>
  </footer>
)
export default Footer
