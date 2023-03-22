import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteCollege } from '../../redux/features/collegeSlice';
import { toast } from 'react-toastify';

export default function DashbaordCard({item}) {
    const dispatch = useDispatch()
  return (
    <Box className="w-[90%] bg-transparent border-2 border-gray-300 flex flex-col my-4 rounded-lg text-gray-300 hover:bg-gray-400 hover:text-black">
        <Box className='flex flex-col'>
            <Box className="flex justify-between items-center">
            <Typography className=' font-semibold border-b border-text-white ml-2 text-[17px] hover:cursor-pointer' ><Link to={`/school/${item?.id}`}>{item.name}</Link></Typography>
           <Box className='flex'>
           <IconButton>
                <Link to={`/school/${item?.id}`}><ArrowForwardIcon  className='text-2xl text-gray-300 hover:text-black'/></Link>
            </IconButton>

            <IconButton onClick={()=>dispatch(deleteCollege({id:item?.id,toast}))}>
                <DeleteIcon className='text-2xl text-gray-300 hover:text-black ml-1 mr-1'/>
            </IconButton>
           </Box>
            </Box>
            <Typography className='text-sm mb-3 ml-2'>{item.city}, {item.state} {item.zip}</Typography>
        </Box>
    </Box>
  )
}
