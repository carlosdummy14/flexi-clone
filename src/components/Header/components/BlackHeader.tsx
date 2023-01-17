import MexFlag from '../../../assets/bandera_mexico.webp'

const Space = () => <span className='w-0.5 bg-white ml-4'></span>

const BlacHeader = () => {
  return (
    <div className='w-full bg-black text-white font-bold flex-col items-center justify-center py-1 px-3 hidden md:flex'>
      <div className='w-full max-w-7xl uppercase text-[11px] flex justify-between '>
        <span>envíos gratis todas las compras</span>
        <nav className='flex'>
          <a href='#'>ayuda</a>
          <Space />
          <a href='#' className='ml-4'>
            encuentra tu tienda
          </a>
          <Space />
          <div className='ml-4'>
            idioma
            <a href='#'>
              <img
                src={MexFlag}
                alt='idioma español'
                className='w-4 h-4 hover:bg-white ml-5 inline-block'
              />
            </a>
          </div>
          <div className='ml-20'>
            <a href='#'>iniciar sesión </a> / <a href='#'>registrarse</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BlacHeader
