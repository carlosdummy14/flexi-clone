interface CardProps {
  img: string
  title: string
  price: number
}

function Card({ img, title, price }: CardProps) {
  return (
    <div className='w-44 md:w-80'>
      <div className='flex flex-col '>
        <div className='flex justify-center p-5'>
          <img className='w-full' src={img} alt={title} />
        </div>
        <div className='pl-1 pr-1 pb-2'>
          <p className='font-bold uppercase overflow-hidden whitespace-nowrap overflow-ellipsis'>
            {title}
          </p>
          <p className='text-lg'>${price.toLocaleString()} MXP</p>
        </div>
      </div>
    </div>
  )
}

export default Card
