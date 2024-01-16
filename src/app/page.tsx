import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Images from '@/components/Images'

export default function Home() {
  return (
   <div className=''>

    {/*  the upper part*/}
    <h2 className='bg-main_green text-white text-center py-3'> Visit a doctor for free </h2>

    {/* nav bar */}
    <div className=''>
      <Navbar/>
    </div>

    <hr />
    

{/*  */}
    <div  className=' flex items-center justify-between  px-[3rem] '>
    <div className='w-1/2 flex flex-col gap-4'>
    <h2 className='text-[6rem] font-bold text-main_green block '>
      HealthCare When All Else Fails 
    <img src={'/Flower.svg'} alt={''} width={30} height={40}></img>
    </h2>
    <h1 className=' text-main_green text-2xl'>First-Class, women-centric care for hormone issues & autoimmunity. Get fully-integrative care from a holistic doctor
    
    
     </h1>
    <div className='my-5 flex items-center justify-start gap-5 '>
      <button className='bg-main_green text-white py-[1.1rem] px-[1.2rem] rounded-full'>Book Your Doctor</button>
      <Link href={""} className='border border-main_green text-main_green  px-[3rem] py-[1.1rem] rounded-full' > Learn More</Link>
    </div>
    </div>


    {/* the the home page */}

    <div className=''>
      <Images />
    </div>
    </div>

   </div> 
  )
}
