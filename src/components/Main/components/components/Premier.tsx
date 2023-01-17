import Box from './Box'
import { boxesCaballero, boxesDama } from './utils'

interface PremierInterface {
  isTop: boolean
}

function Premier({ isTop }: PremierInterface) {
  const boxesToRender = isTop ? boxesDama : boxesCaballero

  return (
    <div className='w-full max-w-7xl flex gap-5 mt-10 flex-col md:flex-row'>
      {boxesToRender.map(box => (
        <Box key={box.title} img={box.img} title={box.title} link={box.link} />
      ))}
    </div>
  )
}

export default Premier
