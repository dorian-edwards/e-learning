import Button from './Button'

const Heading = () => (
  <div className='heading-card container:pl-0 mx-auto flex flex-col tablet:items-start items-center tablet:mx-0 tablet:pt-[163px] tablet:pr-[100px] desktop:pr-[150px] pt-[102px] flex-[1_1_60%] px-6'>
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
