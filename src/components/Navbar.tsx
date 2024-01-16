import React from 'react'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className=' flex  items-center justify-between px-[3rem] text-main_green my-[1.2rem]'>
        {/* logo */}
        <h2 className=' font-extrabold text-3xl text-main_green '>YoDoki</h2>

        {/* links */}
        <div>
           <Link href={''} className='font-bold '>About Us</Link>
        </div>
        {/* bottun */}

        <div>
            <button>Find Your Doctor.</button>
        </div>


    </div>
  )
}

export default Navbar