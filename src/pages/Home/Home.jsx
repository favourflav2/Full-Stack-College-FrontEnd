import React from "react";
import Slider from "../../components/Slider/Slider";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  CircularProgress,
 
 
} from "@mui/material";
import Words from "./Words";


import { useDispatch, useSelector } from "react-redux";
import {  searchData, setError, setSearchDataNull } from "../../redux/features/collegeSlice";
import SearchCard from "../../components/Card/SearchCard";

export default function Home() {
  const dispatch = useDispatch();
  const {searchData:values,loading,error} = useSelector(state => state.college)
  const [errorLength,setErrorLength] = React.useState('')
  const [search, setSearch] = React.useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  function handleClick() {
    setErrorLength('')
    dispatch(searchData({search}))
  
  }

  React.useEffect(()=>{
    if(values){
      if(values.length === 0){
        setErrorLength('No Schools By That Name')
      }
    }
  },[values])

  React.useEffect(()=>{
     
    dispatch(setSearchDataNull())
    dispatch(setError())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // if(loading){
  //   return (
      
  //       <Stack sx={{color: 'grey.500' }} className='home h-screen w-full flex items-center'>
  //          <CircularProgress color="inherit" className="mt-[40px]"/>
  //       </Stack>
      
  //   )
  // }

  

  return (
    <Box className="flex flex-col min-h-screen w-screen home">
      <Slider />

      {/* Content Container */}
      <Box className="w-full flex flex-col items-center">
        {/* All Content */}
        <Box className="w-[90%] justify-center ">
          <Box
            className={
              isNonMobile
                ? "flex justify-center text-gray-300 p-[50px]"
                : "flex justify-center text-gray-300 p-[50px] flex-col items-center"
            }
          >
            <input
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search For School/Univeristy"
              className="w-full
            md:w-[75%] lg:w-[65%] h-[50px] text-sm md:text-base rounded-3xl
            indent-3 outline-none border-2 border-gray-300 bg-transparent"
            />
            <button
               disabled={loading}
              className={
                isNonMobile
                  ? "border border-gray-300 w-[80px] ml-4 rounded-lg"
                  : "border border-gray-300 w-[80px] ml-4 rounded-lg mt-5"
              }
              onClick={handleClick}
            >
              SEARCH
            </button>
          </Box>

          <Box className="flex flex-col justify-center items-center">
            {values?.map((item, index) => (
              <SearchCard item={item} key={index} />
            ))}
          </Box>

          {error && (
            <Box className='flex justify-center text-red-500'>
              <Typography className="text-2xl">{error}</Typography>
            </Box>
          )}
          {errorLength && (
            <Box className='flex justify-center text-red-500'>
              <Typography className="text-2xl">{errorLength}</Typography>
            </Box>
          )}
          <Box className="mt-[144px] pb-[120px]">
            <Words />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

