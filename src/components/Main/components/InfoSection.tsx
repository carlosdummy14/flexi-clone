import { Info } from './components'
import { information } from './components/utils'

function InfoSection() {
  return (
    <section className='mt-20 flex flex-col items-center '>
      <div className='container flex justify-between max-w-7xl'>
        {information.map(info => (
          <Info {...info} />
        ))}
      </div>
    </section>
  )
}
export default InfoSection
