import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function Words() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
    
      className={
        isNonMobile
          ? "flex justify-center flex-col lg:flex-row"
          : "flex justify-center items-center flex-col sm:flex-row"
      }
    >
      <Box className="  w-[300px] mx-4 flex flex-col">
        <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className="mb-5 h-[200px]"/>
        <Typography className="text-sm ">
          "Higher education isn’t just a personal investment. It’s a public good
          that pays off in a more competitive workforce and better-informed and
          engaged citizens. Every year, we spend nearly $100 billion on
          corporate welfare, and more than $500 billion on defense spending.
          Surely ensuring the next generation can compete in the global economy
          is at least as important as subsidies for big business and military
          adventures around the globe. In fact, I think we can and must go
          further — not just making public higher education tuition-free, but
          reinventing education in America as we know it. " ~ <span className=" font-extrabold">Robert Reich</span>
        </Typography>
      </Box>
      <br />

      <Box className="  w-[300px] mx-4 flex flex-col">
      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="mb-5 h-[200px]"/>
        <Typography className="text-sm">
          "Every person in this country who has the desire and ability should be
          able to get all the education they need regardless of the income of
          their family. This is not a radical idea. In Germany, Scandinavia and
          many other countries, higher education is either free or very
          inexpensive. We must do the same." ~ <span className=" font-extrabold">Sen. Bernie Sanders</span> 
        </Typography>
      </Box>

      <br />

      <Box className="  w-[300px] mx-4">
      <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="mb-5 h-[200px]"/>
        <Typography className="text-sm">
        How can the United States be competitive globally if higher education is unaffordable? Germany, Austria, Denmark, Finland, Norway, Scotland and Sweden have no tuition for college. Other countries have low tuition. We need the best educated workforce in the world. Instead of spending endless amounts on the military, we need to invest in our young people. ~ <span className=" font-extrabold">Sen. Bernie Sanders</span> 

        </Typography>
      </Box>
    </Box>
  );
}
