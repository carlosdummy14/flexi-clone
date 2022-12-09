import { BlackHeader, Navbar } from './components'
import DamaImage from '../../assets/20220825-DAMA-NAV.webp'

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center'>
      <BlackHeader />
      <Navbar />

      {/* menu zone */}
      <nav className='w-full flex justify-center mb-6'>
        <ul className='w-full max-w-7xl uppercase font-bold flex justify-around px-4'>
          <li className='w-1/5'>
            <a href='#'>dama</a>
            <div className=' flex w-500px p-4 bg-white shadow-md shadow-gray-400 '>
              <ul className='flex flex-col gap-1'>
                <li className='hover:bg-gray-300'>
                  <a href='#'>botas</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>botines</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>sneakers</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>falts</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>mocasines</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>sandalias</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>casual</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>confort</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>flexi country</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>plataformas</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>de vestir</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>servicio / clinico</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>escolar</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>universitario</a>
                </li>
                <li className='hover:bg-gray-300'>
                  <a href='#'>trendy</a>
                </li>
              </ul>
              <div>
                <img src={DamaImage} alt='dama' />
              </div>
            </div>
          </li>
          <li className='w-1/5'>
            <a href='#'>caballero</a>
          </li>
          <li className='w-1/5'>
            <a href='#'>niños</a>
          </li>
          <li className='w-1/5'>
            <a href='#'>fexli country</a>
          </li>
          <li className='w-1/5 text-red-500'>
            <a href='#'>rebajas</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
