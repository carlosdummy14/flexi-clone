import { MenuOption } from './components'
import { keysSubMenus, redTags } from './components/utils/utils'

function MenuBar() {
  return (
    <nav className='w-full flex justify-center mb-6'>
      <ul className='w-full max-w-7xl uppercase font-bold flex justify-around px-4'>
        {keysSubMenus.map(option => {
          return <MenuOption key={option} title={option} red={redTags.includes(option)} />
        })}
      </ul>
    </nav>
  )
}

export default MenuBar
