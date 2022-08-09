import Banner from './Banner'
import SkillCard from './SkillCard'
import data from '../Content/data.json'

const Content = () => {
  const { skills } = data
  return (
    <div className='container px-4 tablet:px-[39px] max-w-[1100px] mx-auto flex flex-col gap-y-10 tablet:gap-y-14 tablet:gap-x-3 desktop:gap-x-[30px] desktop:gap-y-20 tablet:flex-row tablet:flex-wrap tablet:justify-between pb-20 tablet:pb-[86px] desktop:pb-[140px]'>
      <Banner />
      {skills.map((skill) => (
        <SkillCard key={skill.id} type={skill.title}>
          {skill.content}
        </SkillCard>
      ))}
    </div>
  )
}

export default Content

/**
 * Add padding bottom 80 tablet:86 desktop: 140
 */
