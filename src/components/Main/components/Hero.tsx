import DamaSliderImgage from '../../../assets/20221122-DAMA-SLIDER-.webp'
import CaballeroSliderImgage from '../../../assets/20221122-CAB-SLIDER.jpg'
import { useEffect, useState } from 'react'
import { Arrow } from './components'

function Hero() {
  const [moveSlice, setMoveSlice] = useState(true)

  useEffect(() => {
    const timerMove = setInterval(() => {
      setMoveSlice(prev => !prev)
    }, 7000)

    return () => {
      clearInterval(timerMove)
    }
  }, [moveSlice])

  const handleArrow = () => {
    setMoveSlice(prev => !prev)
  }

  return (
    <div className='relative overflow-hidden max-w-7xl mx-auto'>
      <div
        className={`flex transition-transform duration-1000 ${
          moveSlice ? '-translate-x-full' : ''
        }`}
      >
        <img src={DamaSliderImgage} alt='Dama' />
        <img src={CaballeroSliderImgage} alt='Caballero' />
      </div>
      <span
        className='absolute top-1/2 left-3 text-5xl md:text-6xl -translate-y-7 text-gray-300 font-bold select-none cursor-pointer'
        onClick={handleArrow}
      >
        <Arrow />
      </span>
      <span
        className='absolute top-1/2 right-3 text-5xl md:text-6xl rotate-180 -translate-y-7 text-gray-300 font-bold select-none cursor-pointer'
        onClick={handleArrow}
      >
        <Arrow />
      </span>
      <div className='absolute bottom-3 left-1/2 -translate-x-6 flex gap-3'>
        <div
          className={`border-2 border-solid border-gray-300 rounded-full w-3 h-3 md:w-6 md:h-6 ${
            !moveSlice ? 'bg-gray-300' : ''
          }`}
        ></div>
        <div
          className={`border-2 border-solid border-gray-300 rounded-full w-3 h-3 md:w-6 md:h-6 ${
            moveSlice ? 'bg-gray-300' : ''
          }`}
        ></div>
      </div>
    </div>
  )
}

export default Hero
