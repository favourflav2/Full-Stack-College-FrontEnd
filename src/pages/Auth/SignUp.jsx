import { Box,Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { setError, signUp } from '../../redux/features/authSlice';

export default function SignUp() {

  const [formData,setFormData] = React.useState({
    email:'',
    userName:'',
    password:'',
    confirmPassword:''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {error} = useSelector(state => state.auth)
  

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

    if(formData.password !== formData.confirmPassword){
      return toast.error("Passwords do not match")
    }

    if(formData.email && formData.userName && formData.password && formData.confirmPassword){
      dispatch(signUp({formData,navigate,toast}))
    }else{
      toast.error("Please Fill Out Fields")
    }

  }


  return (
    <Box className="w-screen h-screen home ">
      {/* Box Container */}
        <Box className='pt-[100px] flex justify-center '>
          {/* Outer Box */}
            <Box className='w-[90%] lg:w-[50%]  flex justify-center border border-gray-300 rounded-lg'>
              {/* Inner Box */}
                  <Box className='w-[90%]  lg:w-[80%]  flex flex-col'>
                      <form className='flex flex-col w-full mt-8 ' onSubmit={(e)=>handleSubmit(e)}>

                        <Typography className='flex justify-center text-3xl text-gray-300 font-extrabold'>Sign Up</Typography>

                      <Box className="flex flex-col">
                            <label htmlFor="email" className='text-gray-300 text-lg font-semibold mb-1'>E-mail :</label>
                            <input type="text" 
                              name='email'
                              value={formData.email}
                              onChange={(e)=>handleChange(e)}
                              id="email"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-gray-300 text-sm md:text-lg'
                              placeholder='E-mail...'
                            />
                          </Box>

                          <Box className="flex flex-col">
                            <label htmlFor="userName" className='text-gray-300 text-lg font-semibold mb-1'>Username :</label>
                            <input type="text" 
                              name='userName'
                              value={formData.userName}
                              onChange={(e)=>handleChange(e)}
                              id="userName"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-gray-300 text-sm md:text-lg'
                              placeholder='Username...'
                            />
                          </Box>

                          <Box className="flex flex-col">
                            <label htmlFor="password" className='text-gray-300 text-lg font-semibold mb-1'>Password :</label>
                            <input type="password" 
                              name='password'
                              value={formData.password}
                              onChange={(e)=>handleChange(e)}
                              id="password"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-gray-300 text-sm md:text-lg'
                              placeholder='Password..'
                            />
                          </Box>

                          <Box className="flex flex-col">
                            <label htmlFor="confirmPassword" className='text-gray-300 text-lg font-semibold mb-1'>Confirm Password :</label>
                            <input type="password" 
                              name='confirmPassword'
                              value={formData.confirmPassword}
                              onChange={(e)=>handleChange(e)}
                              id="Confirm Password"
                              className='h-[39px] rounded-xl indent-3 bg-transparent border-2 border-gray-300 mb-3 text-gray-300 text-sm md:text-lg'
                              placeholder='Confirm Password...'
                            />
                          </Box>

                          {/* Buttons */}
                      <Box className='flex flex-col justify-center mt-8 mb-5'>
                          <button className='w-full bg-gray-300 hover:bg-white text-black rounded-lg text-xl font-bold' >Sign Up</button>

                          <Box className='flex justify-center mb-2 mt-3'>
                          <Typography className='text-gray-300'>Already have an account? <Link to='/login'><span className='text-blue-400 border-b border-blue-400 hover:text-[18px] hover:text-blue-600 hover:border-blue-600'>Login</span></Link></Typography>
                          </Box>
                      </Box>

                      </form>

                      
                  </Box>
            </Box>
        </Box>
    </Box>
  )
}
