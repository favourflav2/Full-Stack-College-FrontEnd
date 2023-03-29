import { Box, Typography,useMediaQuery } from '@mui/material'
import React from 'react'

export default function Footer() {

    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box className='  p-[100px] bg-gray-100 '>
        <Box className={isNonMobile? 'flex md:justify-around ': 'flex flex-col items-center'}>
            
            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black'>About</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Aim</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Vison</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Goals</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black'>Services</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>FAFSA</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Loans</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Pell Grants</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black'>Contact</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Email</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Phone Number</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Fax</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black'>Social Media</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Facebook</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Youtube</Typography>
                <Typography className='text-black text-sm hover:text-blue-400 cursor-pointer'>Instagram</Typography>
            </Box>
        </Box>
    </Box>
  )
}
