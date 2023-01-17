import { payMethods } from './utils'

function PayMethods() {
  return (
    <div className=' flex justify-center border-b border-gray-400'>
      <div className='flex justify-around gap-8 py-5 '>
        {payMethods.map(method => (
          <img className='h-6' src={method.image} alt={method.title} title={method.title} />
        ))}
      </div>
    </div>
  )
}
export default PayMethods
