import Image from 'next/image'
import React from 'react'
// eslint-disable-next-line @next/next/no-img-element

type Props = {}

function BookRight({}: Props) {
  return (
    <div className='bg-red-300 w-full h-full'>
      
        <img src={"/nurse.png"} className='w-full h-screen' alt='welcome'/>
    </div>
  )
}

export default BookRight