import { Box,  Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logIn, setError } from '../../redux/features/authSlice'
import { toast } from 'react-toastify';

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error} = useSelector(state => state.auth)
  const [formData,setFormData] = React.useState({
    email:'',
    password:'',

  })

  function handleChange(e){
    setFormData(item =>{
      return {
        ...item,
        [e.target.name]:e.target.value
      }
    })
  }

  React.useEffect(()=>{
    if(error){
      toast.error(error)
    }
    dispatch(setError())
   },[error,dispatch])

  function handleSubmit(e){
    e.preventDefault()

    if(formData.email && formData.password){
      dispatch(logIn({formData,navigate,toast}))
    }
  }
  return (
    <Box className="w-screen h-screen home3 ">
      {/* Box Container */}
        <Box className='pt-[100px] flex justify-center '>
          {/* Outer Box */}
            <Box className='w-[90%] lg:w-[50%]  flex justify-center border-2 border-gray-500 rounded-lg bg-white'>
              {/* Inner Box */}
                  <Box className='w-[90%] lg:w-[80%]  flex flex-col'>
                      <form className='flex flex-col w-full mt-8 ' onSubmit={(e)=>handleSubmit(e)}>

                        <Typography className='flex justify-center text-3xl text-black font-extrabold'>Log In</Typography>

                      <Box className="flex flex-col">
                            <label htmlFor="email" className='text-black text-lg font-semibold mb-1'>E-mail :</label>
                            <input type="text" 
                              name='email'
                              value={formData.email}
                              onChange={(e)=>handleChange(e)}
                              id="email"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-black text-sm md:text-lg'
                              placeholder='E-mail...'
                            />
                          </Box>

                          
                          <Box className="flex flex-col">
                            <label htmlFor="password" className='text-black text-lg font-semibold mb-1'>Password :</label>
                            <input type="password" 
                              name='password'
                              autoComplete=''
                              value={formData.password}
                              onChange={(e)=>handleChange(e)}
                              id="password"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-black text-sm md:text-lg'
                              placeholder='Password..'
                            />
                          </Box>

                          {/* Buttons */}
                      <Box className='flex flex-col justify-center mt-8 mb-5'>
                          <button className='w-full bg-gray-300 hover:bg-blue-400 text-black rounded-lg text-xl font-bold'>Log In</button>

                          <Box className='flex justify-center mb-2 mt-3'>
                          <Typography className='text-black'>Dont already have an account? <Link to='/signup'><span className='text-blue-600 border-b border-blue-600 hover:text-[18px] hover:text-blue-800 hover:border-blue-800'>Sign Up</span></Link></Typography>
                          </Box>
                      </Box>

                          
                      </form>

                      
                  </Box>
            </Box>
        </Box>
    </Box>
  )
}
