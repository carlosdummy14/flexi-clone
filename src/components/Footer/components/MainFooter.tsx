import flexiLogo from '../../../assets/FLEXI-LOGO.webp'

import secure1Icom from '../../../assets/segure-img1.webp'
import secure2Icom from '../../../assets/segure-img2.webp'
import secure3Icom from '../../../assets/segure-img3.webp'

import facebookIcon from '../../../assets/red-face.webp'
import youtubeIcon from '../../../assets/red-ytbe.webp'
import instagramIcon from '../../../assets/red-insta.webp'
import pinterestIcon from '../../../assets/red-pint.webp'
import twitterIcon from '../../../assets/red-twi.webp'

function MainFooter() {
  return (
    <div className='border-b border-t border-gray-400 flex flex-col gap-3 md:flex-row md:gap-0 justify-between px-8 py-10'>
      <div className='flex items-center'>
        <img className='w-28' src={flexiLogo} alt='flexi' />
      </div>
      <div>
        <h3 className='uppercase font-bold'>nosotros</h3>
        <ul>
          <li>Historia, Misión y Válores</li>
          <li>Diferencia Flexi</li>
          <li>Aseguramiento de Calidad</li>
          <li>Atributos</li>
          <li>Construcciones</li>
          <li>Bolsa de Trabajo</li>
        </ul>
      </div>
      <div>
        <h3 className='uppercase font-bold'>ayuda</h3>
        <ul>
          <li>Contacto</li>
          <li>Preguntas Frecuentes</li>
          <li>¿Comó comprar en flexi.com.mx?</li>
          <li>¿Comó hacer una devolución?</li>
          <li>¿Comó solicitar una factura?</li>
          <li>Verifica tu pago</li>
          <li>Guía de Tallas</li>
          <li>Términos de Promociones</li>
          <li>Términos y Condiciones</li>
        </ul>
      </div>
      <div>
        <h3 className='uppercase font-bold'>clientes</h3>
        <ul>
          <li>Ventas Medio Mayorie</li>
          <li>Facturación Zapaterias Flexi</li>
          <li>International Sales</li>
          <li>Accesorios Flexi</li>
        </ul>
      </div>
      <div>
        <div>
          <h3 className='uppercase font-bold'>compra seguro</h3>
          <div className='grid grid-cols-2 gap-5 py-3'>
            <img src={secure1Icom} alt='compra seguro' />
            <img src={secure2Icom} alt='compra seguro' />
            <img src={secure3Icom} alt='compra seguro' />
          </div>
        </div>
        <div>
          <h3 className='uppercase font-bold'>síguenos</h3>
          <div className='flex gap-3 py-3'>
            <img src={facebookIcon} alt='facebook' />
            <img src={youtubeIcon} alt='youtube' />
            <img src={instagramIcon} alt='instragram' />
            <img src={pinterestIcon} alt='pinteres' />
            <img src={twitterIcon} alt='twitter' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainFooter
