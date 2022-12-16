import { BlackHeader, MenuBar, Navbar } from './components'

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center'>
      <BlackHeader />
      <Navbar />
      <MenuBar />
    </header>
  )
}
export default Header
