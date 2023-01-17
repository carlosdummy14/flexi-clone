interface InfoProps {
  image: string
  title: string
  text: string
}

function Info(props: InfoProps) {
  const { image, title, text } = props
  return (
    <div className='flex h-16 w-60'>
      <img src={image} alt={title} />
      <div className='flex flex-col'>
        <span className='uppercase font-bold'>{title}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Info
