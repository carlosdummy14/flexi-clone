import { Info } from './components'
import { information } from './components/utils'

function InfoSection() {
  return (
    <section className='mt-8 flex justify-center'>
      <div className='container flex flex-wrap gap-5 pl-5 md:flex-nowrap md:gap-0 md:justify-between max-w-7xl'>
        {information.map(info => (
          <Info key={info.text} {...info} />
        ))}
      </div>
    </section>
  )
}
export default InfoSection
