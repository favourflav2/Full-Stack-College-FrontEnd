import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function SearchCard({item}) {
  return (
    <Box className="w-[90%]  border-2 border-black flex flex-col my-2 rounded-lg text-black hover:bg-gray-300 hover:text-black">
        <Box className='flex flex-col'>
            <Box className="flex justify-between items-center">
            <Typography className=' font-semibold border-b border-black ml-2 text-[17px] hover:cursor-pointer' ><Link to={`/school/${item?.id}`}>{item['school.name']}</Link></Typography>
            <IconButton>
                <Link to={`/school/${item?.id}`}><ArrowForwardIcon  className='text-2xl text-black hover:text-black'/></Link>
            </IconButton>
            </Box>
            <Typography className='text-sm mb-3 ml-2'>{item['school.city']}, {item['school.state']} {item['school.zip']}</Typography>
        </Box>
    </Box>
  )
}
