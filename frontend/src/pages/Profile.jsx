import React from 'react'
import girlImg from '../assets/girl.png'
import camImg from '../assets/camera.png'

const Profile = () => {
  return (
    <div className='bg-[#F7F8F9] flex items-start h-[100vh]'>
      <section className=''>
        <h1 className='bg-white w-[100vw] p-[1.5rem] text-[#1D2226]'>Account Settings</h1>
        <div className='flex gap-3 p-[1.5rem]'>
            <div className='w-[76px] h-[76px] relative'>
                <img className='w-full h-full' src={girlImg} alt="" />
                <img className='w-[21px] h-auto absolute bottom-0 right-0' src={camImg} alt="" />
            </div>
            <div>
                <h3 className='font-semibold text-[16px] text-[#1D2226]'>Marry Doe</h3>
                <p className='text-xs text-[#1D2226]'>Marry@Gmail.Com</p>
            </div>
        </div>
        <p className='p-[1.5rem] text-[#1D2226]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus iste unde modi!</p>
      </section>
    </div>
  )
}

export default Profile
