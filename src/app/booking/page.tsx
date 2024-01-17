import React from 'react'
import Book from '@/components/booking/Book'
import BookRight from '@/components/booking/BookRight'
// Import BookRight
type Props = {}

function page({}: Props) {
  return (
    <div className='  flex  items-center justify-between  w-screen mx-auto '>
        {/* the left side */}
        <div className='w-3/5 '>

        <Book/>
        </div>

        <div>
            {/* the right side */}
            <BookRight/>
        </div>
    </div>
  )
}

export default page