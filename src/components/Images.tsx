import Image from 'next/image'
import React from 'react'

type Props = {}

function Images({}: Props) {
  return (
    <div className=''>
        <div className='relative'>

       <Image src={'/nurse.png'}  alt={''} width={500} height={400}></Image>

       <Image src={'/second.png'} className='absolute bottom-[-53px] left-[-100px]' alt={''} width={400} height={700}></Image>
        </div>
  
    
       
    </div>
  )
}

export default Images