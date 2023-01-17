import DamaImage from '../../../../../assets/20220825-DAMA-NAV.webp'
import CaballeroImage from '../../../../../assets/20220825-CABALLERO-NAV.webp'
import ChildsImage from '../../../../../assets/20220825-NIN-OS-NAV.webp'
import CountryImage from '../../../../../assets/20220825-FLEXI-COUNTRY-NAV.webp'
import RebajasImage from '../../../../../assets/20220825-REBAJAS-NAV.jpg'

interface sumMenuInterface {
  [menu: string]: {
    img: string
    options: {
      name: string
      link: string
    }[]
  }
}

export const subMenus: sumMenuInterface = {
  dama: {
    img: DamaImage,
    options: [
      { name: 'botas', link: '#' },
      { name: 'botines', link: '#' },
      { name: 'sneakers', link: '#' },
      { name: 'falts', link: '#' },
      { name: 'mocasines', link: '#' },
      { name: 'sandalias', link: '#' },
      { name: 'casual', link: '#' },
      { name: 'confort', link: '#' },
      { name: 'flexi country', link: '#' },
      { name: 'plataformas', link: '#' },
      { name: 'de vestir', link: '#' },
      { name: 'servicio / clinico', link: '#' },
      { name: 'escolar', link: '#' },
      { name: 'universitario', link: '#' },
      { name: 'trendy', link: '#' },
    ],
  },
  caballero: {
    img: CaballeroImage,
    options: [
      { name: 'Botas y Botines', link: '#' },
      { name: 'Sneakers', link: '#' },
      { name: 'Mocasines', link: '#' },
      { name: 'Sandalias', link: '#' },
      { name: 'Casual', link: '#' },
      { name: 'Flexi Country', link: '#' },
      { name: 'De Vestir', link: '#' },
      { name: 'Servicio / Clínico', link: '#' },
      { name: 'Escolar', link: '#' },
      { name: 'Universitario', link: '#' },
      { name: 'Trendy', link: '#' },
      { name: 'Quirelli', link: '#' },
    ],
  },
  niños: {
    img: ChildsImage,
    options: [
      { name: 'niño', link: '#' },
      { name: 'niña', link: '#' },
    ],
  },
  country: {
    img: CountryImage,
    options: [
      { name: 'caballero', link: '#' },
      { name: 'dama', link: '#' },
    ],
  },
  rebajas: {
    img: RebajasImage,
    options: [
      { name: 'ofertas para caballero', link: '#' },
      { name: 'ofertas para dama', link: '#' },
    ],
  },
}

export const redTags = ['rebajas']

export const keysSubMenus = Object.keys(subMenus)
