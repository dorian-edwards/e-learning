const SkillCard = ({ type, children }: { type: string; children: string }) => {
  const image = `icon-${type}`

  return (
    <div className='skill-card relative bg-white rounded-[15px] pt-[56px] px-7 tablet:px-[30px] tablet:flex-[1_1_40%] desktop:flex-[1_1_30%] grid justify-items-start'>
      <span
        className={`skill-icon w-[56px] h-[56px] rounded-full inline-block absolute left-8 top-[-24px] ${image}`}
      ></span>
      <h3 className='capitalize text-space-cadet font-sans font-extra-bold text-[20px] leading-[25px] mb-4 desktop:text-[24px] desktop:leading-[30px] desktop:mb-6'>
        {type}
      </h3>
      <p className='font-sans font-medium text-[16px] leading-[26px] text-roman-silver mb-6 desktop:text-lg'>
        {children}
      </p>
      <button className='font-sans font-bold text-lg text-french-rose mb-8 hover:opacity-50 transition-opacity desktop:text-lg desktop:mb-10'>
        Get Started
      </button>
    </div>
  )
}

export default SkillCard
