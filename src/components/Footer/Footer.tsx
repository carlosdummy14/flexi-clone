import { Advise, MainFooter, PayMethods } from './components'

function Footer() {
  return (
    <div className='container max-w-7xl mt-9'>
      <MainFooter />
      <PayMethods />
      <Advise />
    </div>
  )
}
export default Footer
