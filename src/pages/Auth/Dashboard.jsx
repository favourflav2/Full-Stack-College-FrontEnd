import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashbaordCard from "../../components/Card/DashbaordCard";
import { getSavedSchool } from "../../redux/features/collegeSlice";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const {savedCollegeName} = useSelector(state => state.college)
  const userName = user?.user?.userName;
  const dispatch = useDispatch()

  React.useEffect(()=>{
    if(user?.user?._id){
      dispatch(getSavedSchool())
    }
  },[user?.user?._id,dispatch])
  return (
    <Box className="home2 h-screen flex justify-center">
      <Box className=" w-[90%] flex flex-col mt-12">
        <Box className="mb-5 flex justify-center">
          <Typography className="text-2xl ">Dashbaord</Typography>
        </Box>

        <Box className="flex flex-col mt-5">

          <Box className="mb-10">
            <Typography className=" text-xl">Welcome: <span className=" font-bold text-black">{userName}</span></Typography>
          </Box>

          <Typography className="flex justify-center my-7 text-2xl font-bold ">Your Saved Colleges</Typography>

          <Box>
            {savedCollegeName?.map((item,index)=>(
                <DashbaordCard item={item} key={index}/>
            ))}
          </Box>

          <Box>
            {savedCollegeName?.length === 0 && (
              <Box className="flex justify-center mt-4">
                <Typography className="text-red-400">You currently dont have any schools saved!</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
