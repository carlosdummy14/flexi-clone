import { Boxes, Hero, InfoSection, WowSection } from './components'

function Main() {
  return (
    <main className='w-full flex flex-col'>
      <Hero />
      <Boxes />
      <WowSection />
      <InfoSection />
    </main>
  )
}

export default Main
