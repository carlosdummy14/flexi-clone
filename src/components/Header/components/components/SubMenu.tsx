import { subMenus } from './utils'

interface SubMenuProps {
  menu: string
  visible: boolean
}

function SubMenu({ menu, visible }: SubMenuProps) {
  return (
    <div
      className={`absolute -left-1/3 ${
        visible ? 'flex' : 'hidden'
      } p-4 gap-3 bg-white shadow-md shadow-gray-400 text-black`}
    >
      <ul className='flex flex-col gap-1'>
        {subMenus[menu].options.map(option => {
          return (
            <li className='hover:bg-gray-300' key={option.name}>
              <a href={option.link}>{option.name}</a>
            </li>
          )
        })}
      </ul>
      <div className=''>
        <img className='max-w-xs' src={subMenus[menu].img} alt={menu} />
      </div>
    </div>
  )
}

export default SubMenu
