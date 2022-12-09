import Logo from '../../../assets/FLEXI-LOGO.webp'
import AccountIcon from '../../../assets/mi-cuenta.webp'
import FavIcon from '../../../assets/lista-de-deseos.webp'
import CartIcon from '../../../assets/carrito.webp'
import { MenuButton, SearchSM, SearchXL } from './components'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex pb-2 max-w-7xl px-3 items-center md:py-8 md:pb-2'>
        <div className='flex gap-4 flex-1'>
          <MenuButton />
          <div className='w-14 md:w-28'>
            <img src={Logo} alt='flexi' />
          </div>
          <SearchXL />
        </div>
        <nav className='uppercase font-bold flex gap-9 py-2 md:py-auto'>
          <a href='#' className='flex items-center gap-1 flex-row-reverse md:flex-row'>
            <img src={AccountIcon} alt='Mi cuenta' className='w-10' />
            <span className='hidden md:block'>mi cuenta</span>
          </a>
          <a href='#' className='hidden md:flex items-center gap-1'>
            <img src={FavIcon} alt='Favoritos' className='w-10' />
            favoritos
          </a>
          <a href='#' className='flex items-center gap-1 relative'>
            <img src={CartIcon} alt='Carrito' className='w-10' />
            <span className='hidden md:block'>mi carrito</span>
            <span className='absolute left-6 top-6 bg-red-500 p-1 rounded-full w-6 h-6 text-white text-xs font-normal flex justify-center items-center'>
              99+
            </span>
          </a>
        </nav>
      </div>
      <SearchSM />
    </>
  )
}
export default Navbar
