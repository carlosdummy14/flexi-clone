import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Main />
      <h3 className='text-3xl font-bold underline'>Flexi clone</h3>
    </div>
  )
}

export default App
