import { Box,  Typography,useMediaQuery } from "@mui/material";
import React from "react";



export default function DetailsCard({item}) {

  
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const firstLetter = item?.title.split('')[0]
  
  //console.log(firstLetter)
  const other = item?.title.split('').slice(1)
  
  //console.log(savedCollegeName)

  return (
     <Box className="flex flex-col border border-black">
       <Box className="flex flex-col">
         <Box className='flex justify-between items-center ml-1 mb-1'>
           <Typography className={isNonMobile? "text-base font-semibold ":"text-sm font-bold  break-words  w-[70%]"}>
             <span className="text-red-600 text-xl">{firstLetter}</span>{other}
           </Typography>
           <Box className="flex items-center">
           
           </Box>
         </Box>
         <Typography className="ml-2  text-sm">
           {" "}
           -{item?.credential?.title}
         </Typography>
       </Box>
     </Box>
  );
}