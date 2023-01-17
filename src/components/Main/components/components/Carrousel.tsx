import { wowCards } from './utils'
import Card from './Card'
import Arrow from './Arrow'
import { useEffect, useState } from 'react'

function Carrousel() {
  const [boxPosition, setBoxPosition] = useState(0)
  const [boxesSize, setBoxesSize] = useState(0)

  const handleLeftArrow = () =>
    boxPosition + 2 < boxesSize ? setBoxPosition(prev => prev + 1) : setBoxPosition(0)

  const handleRigthArrow = () =>
    boxPosition > 0 ? setBoxPosition(prev => prev - 1) : setBoxPosition(boxesSize - 2)

  useEffect(() => {
    setBoxesSize(wowCards.length - 1)
  }, [])

  return (
    <div className='w-full max-w-7xl mt-10 relative'>
      <div className='flex overflow-hidden w-full pl-5 pr-5'>
        <div
          className='flex gap-2 transition-all'
          style={{ translate: `-${20.5 * boxPosition}rem` }}
        >
          {wowCards.map(card => (
            <Card key={card.title} img={card.img} title={card.title} price={card.price} />
          ))}
        </div>
      </div>
      <span
        className='absolute left-3 top-1/2 -translate-y-7 text-3xl font-bold cursor-pointer select-none hover:text-gray-400'
        onClick={handleRigthArrow}
      >
        <Arrow />
      </span>
      <span
        className='absolute right-3 top-1/2 -translate-y-7 rotate-180 text-3xl font-bold cursor-pointer select-none hover:text-gray-400'
        onClick={handleLeftArrow}
      >
        <Arrow />
      </span>
    </div>
  )
}

export default Carrousel
