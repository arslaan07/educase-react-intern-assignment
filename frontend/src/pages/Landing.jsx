import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='bg-[#F7F8F9] flex justify-center items-end min-h-[100vh] px-[1.5rem] pb-[3rem]'>
      <section className='flex flex-col gap-3'>
        <h1 className='font-semibold text-[28px]'>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repellat dolorem neque.</p>
            <Button asChild className='bg-[#6C25FF] max-w-[335px] h-[46px] hover:bg-[#5818e2]'><Link to="/signup">Create Account</Link></Button>
            <Button asChild className='bg-[#6C25FF4B] max-w-[335px] h-[46px] text-[#1D2226] hover:bg-[#eee] mb-[0.5rem]'><Link to="/signin">Already Registered? Login</Link></Button>
      </section>
    </div>
  )
}

export default Landing
