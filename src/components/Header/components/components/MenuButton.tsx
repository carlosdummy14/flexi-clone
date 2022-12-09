import { useState } from 'react'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(prev => !prev)

  return (
    <button
      className={`md:hidden ml-4 ${isOpen ? 'relative w-8 h-8' : 'flex flex-col justify-around'}`}
      onClick={handleClick}
    >
      <div
        className={`w-8 h-1.5 bg-red-500 transition duration-200 ${isOpen && 'rotate-45 absolute'}`}
      ></div>
      <div
        className={`w-8 h-1.5 bg-red-500 transition duration-200 ${
          isOpen && '-rotate-45 absolute'
        }`}
      ></div>
      <div className={`w-8 h-1.5 bg-red-500 ${isOpen && 'hidden'}`}></div>
    </button>
  )
}
export default MenuButton
