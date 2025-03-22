import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Button as Btn } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='bg-[#F7F8F9] flex justify-center items-start h-[100vh] px-[1.5rem] py-[1.5rem]'>
      <section>
        <h1 className='text-[28px] font-semibold tracking-tight mb-3'>Sign in to your PopX account</h1>
        <p className='text-[15px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repellat dolorem neque.</p>
        <form className='flex flex-col gap-5'>
            <TextField 
            label="Email Address"
            fullWidth
            variant='outlined'
            placeholder='Enter email address'
            className='mb-3'
            InputLabelProps={{ shrink: true }}
            sx={{
                "& .MuiInputLabel-root": { color: "#6C25FF" },
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "gray" },
                  "&.Mui-focused fieldset": { borderColor: "gray" },
                },
            }}
            />
            <TextField 
            label="Password"
            fullWidth
            variant='outlined'
            placeholder='Enter password'
            InputLabelProps={{ shrink: true }}
            sx={{
                "& .MuiInputLabel-root": { color: "#6C25FF" },
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "gray" },
                  "&.Mui-focused fieldset": { borderColor: "gray" },
                },
              }}
            />
            <Btn asChild className='bg-[#6C25FF] w-[335px] h-[46px] hover:bg-[#5818e2]'><Link to="/profile">Login</Link></Btn>
        </form>
      </section>
    </div>
  )
}

export default Signin
