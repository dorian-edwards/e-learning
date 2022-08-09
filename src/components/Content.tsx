import Banner from './Banner'
import SkillCard from './SkillCard'
import data from '../Content/data.json'

const Content = () => {
  const { skills } = data
  return (
    <div className='container px-4 max-w-[1200px] mx-auto flex flex-col gap-y-10 tablet:gap-y-14 tablet:gap-x-3 desktop:gap-x-[30px] desktop:gap-y-20 tablet:flex-row tablet:flex-wrap tablet:justify-between'>
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
