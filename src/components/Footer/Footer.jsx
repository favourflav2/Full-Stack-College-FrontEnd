import { Box, Typography,useMediaQuery } from '@mui/material'
import React from 'react'

export default function Footer() {

    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box className='  p-[100px]  home'>
        <Box className={isNonMobile? 'flex md:justify-around ': 'flex flex-col items-center'}>
            
            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-gray-300'>About</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Aim</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Vison</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Goals</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-gray-300'>Services</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>FAFSA</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Loans</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Pell Grants</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-gray-300'>Contact</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Email</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Phone Number</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Fax</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-gray-300'>Social Media</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Facebook</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Youtube</Typography>
                <Typography className='text-gray-300 text-sm hover:text-white cursor-pointer'>Instagram</Typography>
            </Box>
        </Box>
    </Box>
  )
}
