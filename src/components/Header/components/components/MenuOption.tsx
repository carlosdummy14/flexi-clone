import { useState } from 'react'
import SubMenu from './SubMenu'

interface MenuOptionProps {
  title: string
  red: boolean
}

function MenuOption({ title, red }: MenuOptionProps) {
  const [visibleSubMenu, setVisibleSubMenu] = useState(false)

  const handleEnter = () => {
    setVisibleSubMenu(true)
  }
  const handleOut = () => {
    setVisibleSubMenu(false)
  }

  return (
    <li
      className={`w-1/5 relative ${red && 'text-red-500'}`}
      onMouseOver={handleEnter}
      onMouseOut={handleOut}
    >
      <a href='#'>{title}</a>
      <SubMenu menu={title} visible={visibleSubMenu} />
    </li>
  )
}

export default MenuOption
