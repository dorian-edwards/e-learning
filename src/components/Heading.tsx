import Button from './Button'

const Heading = () => (
  <div className='heading-card w-[95%] max-w-[600px] mx-auto mb-[46px] flex flex-col items-center tablet:w-[45%] tablet:max-w-none tablet:mx-0 tablet:pt-[163px] pt-[102px]'>
    <h2 className='font-extra-bold font-sans text-space-cadet text-[40px] leading-[50.4px] desktop:text-[56px] desktop:leading-[70.56px] mb-[25px] tablet:mb-[29px]'>
      Maximize skill, minimize budget
    </h2>

    <p className='font-medium font-sans text-roman-silver text-[16px] leading-[26px] tablet:text-lg mb-[24px] tablet:mb-[40px]'>
      Our modern courses across a range of in-demand skills will give you the
      knowledge you need to live the life you want.
    </p>
    <Button styling='btn-main' />
  </div>
)

export default Heading
