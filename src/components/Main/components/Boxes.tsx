import BannerImage from '../../../assets/20221122-FULLBANNER.jpg'
import { Premier } from './components'

function Boxes() {
  return (
    <section className='mt-10 flex flex-col items-center'>
      <Premier isTop={true} />
      <div className='mt-20'>
        <img src={BannerImage} alt='Banner' />
      </div>
      <Premier isTop={false} />
    </section>
  )
}
export default Boxes
