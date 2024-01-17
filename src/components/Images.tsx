import Image from 'next/image'
import React from 'react'

type Props = {}

function Images({}: Props) {
  return (
    <div className='h-3/4 bg-red-300 w-full'>
        <div className='relative'>

       <Image src={'/nurse.png'}  alt={''} width={500} height={500}></Image>

       <Image src={'/second.png'} className='absolute bottom-[-53px] left-[-100px]' alt={''} width={400} height={600}></Image>
        </div>
  
    
       
    </div>
  )
}

export default Images