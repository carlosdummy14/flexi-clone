interface BoxProps {
  img: string
  title: string
  link: string
}
function Box({ img, title, link }: BoxProps) {
  return (
    <div className='rounded-3xl overflow-hidden border-4 border-transparent hover:border-red-500'>
      <a href={link}>
        <img src={img} alt={title} />
      </a>
    </div>
  )
}

export default Box
