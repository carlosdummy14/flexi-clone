import React, { useEffect, useState } from 'react'

const SearchSM = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [inputText, setInputText] = useState('')

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setInputText(ev.currentTarget.value)
  }

  useEffect(() => {
    inputText.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [inputText])

  return (
    <div className='block min-w-full px-3 md:hidden'>
      <div className='flex items-center flex-1'>
        <input
          type='text'
          className='border-solid border border-gray-400 p-1.5 w-full text-2xl'
          value={inputText}
          onChange={handleChange}
        />
        <button
          className={`bg-red-500 text-white p-1.5 border border-solid border-red-500  ${
            buttonDisabled && 'text-gray-300'
          }`}
          disabled={buttonDisabled}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2.5'
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default SearchSM
