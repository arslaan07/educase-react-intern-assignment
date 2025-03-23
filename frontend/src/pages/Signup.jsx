import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Button as Btn } from "@/components/ui/button";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [value, setValue] = useState('no');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='bg-[#F7F8F9] flex justify-center items-start h-[100vh] px-[1.5rem] py-[1.5rem]'>
            <section>
                <h1 className='text-[28px] font-semibold tracking-tight mb-3'>Create your PopX account</h1>
                <p className='text-[15px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat dolorem neque.</p>
                <form className='flex flex-col gap-5'>
                    <TextField 
                        label="Full Name"
                        fullWidth
                        variant='outlined'
                        placeholder='Enter name'
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            "& .MuiFormLabel-asterisk": { color: "red" },
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
                        label="Phone number"
                        fullWidth
                        variant='outlined'
                        placeholder='Enter mobile'
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            "& .MuiFormLabel-asterisk": { color: "red" },
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
                        label="Email address"
                        fullWidth
                        variant='outlined'
                        placeholder='Enter email'
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            "& .MuiFormLabel-asterisk": { color: "red" },
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
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            "& .MuiFormLabel-asterisk": { color: "red" },
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
                        label="Company name"
                        fullWidth
                        variant='outlined'
                        placeholder='Enter company'
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
                    <FormControl component="fieldset">
                        <FormLabel required component="legend" sx={{ color: 'black !important', "& .MuiFormLabel-asterisk": { color: "red" },}}>
                            Are you an agency?
                        </FormLabel>
                        <RadioGroup
                            row 
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        >
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Btn asChild className='mt-[3rem] bg-[#6C25FF] max-w-[335px] h-[46px] hover:bg-[#5818e2]'>
                        <Link to="/profile">Create Account</Link>
                    </Btn>
                </form>
            </section>
        </div>
    );
};

export default Signin;
