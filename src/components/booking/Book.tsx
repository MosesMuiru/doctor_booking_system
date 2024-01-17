'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import React from 'react'
import Student from './student/Student'
import Resident from './resident/Resident'

type Props = {}

function Book({params}: any) {
    const path_name = usePathname()
    console.log(params)
  return (
    <div className=' mx-auto flex items-start justify-center text-center w-1/2 flex-col gap-10'>
        <div>
            <h1 className='text-[4rem] font-bold text-main_green block '> Hey ! Welcome</h1>
            {/* <h3 className='text-[1.2rem] text-main_green'>Click on in the buttons below</h3> */}
        </div>

        <div className='flex flex-col items-start w-full gap-5'>
            {/* <Link href={`booking/student`} className={`border  border-main_green text-main_green  px-[3rem] py-[1.1rem] rounded-md w-full hover:bg-main_green hover:text-white transition-all duration-200 ease-linear`} >Am a Student</Link> */}
            <Student/>
            {/* <Link href={'booking/outsider'} className={`border border-main_green text-main_green  px-[3rem] py-[1.1rem] rounded-md w-full hover:bg-main_green hover:text-white transition-all duration-200 ease-linear `}>Am An Outside Resident</Link> */}
            <Resident/>
        </div>

        <div>
            <button className='border-b border-black text-main_green py-2 px-3 hover:text-black hover:font-[400] transition-all ease-linear 200ms '>
                Go Home
            </button>

            <button>
                
            </button>
        </div>
    </div>
  )
}

export default Book