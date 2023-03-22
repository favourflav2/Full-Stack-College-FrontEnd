import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoadingRedirect() {
    const [count, setCount] = React.useState(2)
    const navigate = useNavigate()

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        }, 1000)

        count === 0 && navigate('/')
        return ()=> clearInterval(interval)
    },[count,navigate])
  return (
    <Box className="flex justify-center home w-screen h-screen">
        <Typography className='text-white flex justify-center items-center'>Redirecting You in {count} seconds</Typography>
    </Box>
  )
}
