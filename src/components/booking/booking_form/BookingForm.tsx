import PickDate from '@/components/date_picker/DatePicker'
import React from 'react'

type Props = {}

function BookingForm({}: Props) {
  return (
    <div className='w-3/4'>
      <div className='flex flex-col items-start justify-center w-full gap-10' >
        <h1 className='text-2xl font-bold text-main_green'>Fill the details correctly</h1>
        <form action="" className='flex flex-col items-start w-full justify-center gap-5'>
          <label htmlFor="Enter first">Enter First Name</label>
          
          <input type="text" className='border outline-none  py-1 text-[1.2rem] border-main_green w-full'/>

          <label htmlFor="">Enter last Name</label>
          <input type="text" className='border outline-none  py-1 text-[1.2rem] border-main_green w-full'/>
          <label htmlFor="">Enter Reg number/ id number</label>
          <input type="text" className='border outline-none  py-1 text-[1.2rem] border-main_green w-full'/>

          <input type="submit" className='bg-main_green rounded-md text-[1.1rem] text-white py-2 px-4 text-bold' value={"Book Appointment"} />

          <PickDate/>
        </form>
      </div>
    </div>
  )
}

export default BookingForm