import React from "react";
import Slider from "../../components/Slider/Slider";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  CircularProgress,
  Pagination
} from "@mui/material";
import Words from "./Words";

import { useDispatch, useSelector } from "react-redux";
import {
  searchData,
  setError,
  setSearchDataNull,
} from "../../redux/features/collegeSlice";
import SearchCard from "../../components/Card/SearchCard";

export default function Home() {
  const dispatch = useDispatch();
  const {
    searchData: values,
    loading,
    error,
  } = useSelector((state) => state.college);
  const [errorLength, setErrorLength] = React.useState("");
  const [search, setSearch] = React.useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
 

  const total =  Math.ceil(values?.length / 5)
  const [currentPage, setCurrent] = React.useState(1)
  const postPerPage = 5;
  const lastPostIndex = currentPage * postPerPage;
  const firstsPostIndex = lastPostIndex - postPerPage;
  let newValues = values?.slice(firstsPostIndex,lastPostIndex)

  function handleClick() {
    setErrorLength("");
    dispatch(searchData( search ));
  }

  React.useEffect(() => {
    if (values) {
      if (values.length === 0) {
        setErrorLength("No Schools By That Name");
      }
    }
  }, [values]);

  React.useEffect(() => {
    dispatch(setSearchDataNull());
    dispatch(setError());
    setCurrent(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, value) => {
    setCurrent(value);
    //window.scrollTo({ top: 90 });
  };

  
  
  
  if (loading) {
    return (
      <Stack
        className="home3 h-screen w-full flex items-center"
      >
        <CircularProgress color="secondary" className="mt-[40px]" />
      </Stack>
    );
  }

  return (
    <Box className="flex flex-col min-h-screen w-screen ">
      <Slider />

      <Box className="w-full flex flex-col items-center">
        {/* All Content */}
        <Box className=" w-[90%] justify-center">
          {/* About College App */}

          <Box
            className={
              isNonMobile
                ? "flex justify-center  p-[50px] flex-col items-center"
                : "flex justify-center  p-[10px] mt-10 flex-col items-center"
            }
          >
            <Box className=" w-[90%] flex flex-col">
              <Box className={isNonMobile?"w-full flex justify-center":"w-full flex flex-col justify-center items-center"}>
                <input
                  type="text"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search For School/Univeristy"
                  className="w-full
            md:w-[75%] lg:w-[65%] h-[50px] placeholder-black text-sm md:text-base rounded-3xl
            indent-3 outline-none border-2 border-black bg-transparent"
                />
                <button
                  disabled={loading}
                  className={
                    isNonMobile
                      ? "border border-black w-[80px] ml-4 rounded-lg hover:bg-gray-300"
                      : "border border-black w-[80px] ml-4 rounded-lg mt-5 hover:bg-gray-300"
                  }
                  onClick={handleClick}
                >
                  SEARCH
                </button>
              </Box>

              <Box className="flex flex-col justify-center items-center mt-7">
            {newValues?.map((item, index) => (
              <SearchCard item={item} key={index} />
            ))}
          </Box>

          {total !== "NaN" && total > 1 && (
            <Stack
              className=" flex justify-center items-center mb-10 mt-5"
              spacing={2}
            >
              <Typography>Page: {currentPage}</Typography>
              <Pagination
                count={total}
                page={currentPage}
                onChange={handleChange}
                sx={{ button: { color: "black" } }}
                variant="outlined"
                color="primary"
              />
            </Stack>
          )}

              <Box className="flex flex-col pt-10 mt-4 justify-center items-center">
                <Typography className={isNonMobile?"text-3xl font-semibold":"text-2xl font-semibold"}>
                  About College App
                </Typography>
                <Typography className="flex my-2">
                  What is Lorem Ipsum
                </Typography>
                <Typography>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </Typography>
              </Box>
            </Box>
          </Box>

         

          {error && (
            <Box className="flex justify-center text-red-500">
              <Typography className="text-2xl">{error}</Typography>
            </Box>
          )}
          {errorLength && (
            <Box className="flex justify-center text-red-500">
              <Typography className="text-2xl">{errorLength}</Typography>
            </Box>
          )}
         
        </Box>
        <Box className="mt-[144px] pb-[120px] bg-gray-100 w-full flex justify-center">
            <Words />
          </Box>
      </Box>
      {/* List Contianer */}
      <Box className="w-full flex justify-center p-5 my-10">
        {/* COntent container */}
        <Box className={isNonMobile?"w-[70%]":"w-full"}>

          {/* Number 1 */}
          <Box className="flex flex-col lg:flex-row my-4 border-2 border-gray-400">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt=""
              className={isNonMobile?"h-[267px]":"h-[200px]"}
            />

            <Box className="p-10 flex flex-col">
              <Typography className="text-xl font-semibold flex justify-center mb-1">
                How to make the most of your study group
              </Typography>
              <Typography >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Box>
          </Box>

            {/* Number 2 */}
          <Box className="flex flex-col lg:flex-row my-4 border-2 border-gray-400">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt=""
              className={isNonMobile?"h-[300px]":"h-[200px]"}
            />

            <Box className="p-10 flex flex-col">
              <Typography className="text-xl font-semibold flex justify-center mb-1">
                Why you should stop cramming for exams
              </Typography>
              <Typography >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Box>
          </Box>

            {/* Number 3 */}
          <Box className="flex flex-col lg:flex-row my-4 border-2 border-gray-400">
            <img
              src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt=""
              className={isNonMobile?"h-[300px]":"h-[200px]"}
            />

            <Box className="p-10 flex flex-col">
              <Typography className="text-xl font-semibold flex justify-center mb-1">
                Library hacks: 10 tips to make the most out of your study time
              </Typography>
              <Typography >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    
    </Box>
  );
}

//  <Box className="flex flex-col min-h-screen w-screen ">
//       <Slider />

//       {/* Content Container */}
    //   <Box className="w-full flex flex-col items-center">
    //     {/* All Content */}
    //     <Box className=" w-[90%] justify-center">
    //       {/* About College App */}

    //       <Box
    //         className={
    //           isNonMobile
    //             ? "flex justify-center  p-[50px] flex-col items-center"
    //             : "flex justify-center  p-[50px] flex-col items-center"
    //         }
    //       >
    //         <Box className=" w-[90%] flex flex-col">
    //           <Box className="w-full flex justify-center">
    //             <input
    //               type="text"
    //               name="search"
    //               onChange={(e) => setSearch(e.target.value)}
    //               placeholder="Search For School/Univeristy"
    //               className="w-full
    //         md:w-[75%] lg:w-[65%] h-[50px] placeholder-black text-sm md:text-base rounded-3xl
    //         indent-3 outline-none border-2 border-black bg-transparent"
    //             />
    //             <button
    //               disabled={loading}
    //               className={
    //                 isNonMobile
    //                   ? "border border-black w-[80px] ml-4 rounded-lg hover:bg-gray-300"
    //                   : "border border-black w-[80px] ml-4 rounded-lg mt-5 hover:bg-gray-300"
    //               }
    //               onClick={handleClick}
    //             >
    //               SEARCH
    //             </button>
    //           </Box>

    //           <Box className="flex flex-col pt-10 mt-4 justify-center items-center">
    //             <Typography className="text-3xl font-semibold">
    //               About College App
    //             </Typography>
    //             <Typography className="flex my-2">
    //               What is Lorem Ipsum
    //             </Typography>
    //             <Typography>
    //               Contrary to popular belief, Lorem Ipsum is not simply random
    //               text. It has roots in a piece of classical Latin literature
    //               from 45 BC, making it over 2000 years old. Richard McClintock,
    //               a Latin professor at Hampden-Sydney College in Virginia,
    //               looked up one of the more obscure Latin words, consectetur,
    //               from a Lorem Ipsum passage, and going through the cites of the
    //               word in classical literature, discovered the undoubtable
    //               source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
    //               "de Finibus Bonorum et Malorum" (The Extremes of Good and
    //               Evil) by Cicero, written in 45 BC. This book is a treatise on
    //               the theory of ethics, very popular during the Renaissance. The
    //               first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
    //               comes from a line in section 1.10.32.
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>

    //       <Box className="flex flex-col justify-center items-center">
    //         {values?.map((item, index) => (
    //           <SearchCard item={item} key={index} />
    //         ))}
    //       </Box>

    //       {error && (
    //         <Box className="flex justify-center text-red-500">
    //           <Typography className="text-2xl">{error}</Typography>
    //         </Box>
    //       )}
    //       {errorLength && (
    //         <Box className="flex justify-center text-red-500">
    //           <Typography className="text-2xl">{errorLength}</Typography>
    //         </Box>
    //       )}
    //       <Box className="mt-[144px] pb-[120px] bg-gray-100">
    //         <Words />
    //       </Box>
    //     </Box>
    //   </Box>
    //   {/* List Contianer */}
    //   <Box className="w-full flex justify-center p-5 my-10">
    //     {/* COntent container */}
    //     <Box className="w-[70%]">

    //       {/* Number 1 */}
    //       <Box className="flex my-4 border-2 border-gray-400">
    //         <img
    //           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
    //           alt=""
    //           className="h-[300px]"
    //         />

    //         <Box className="p-10 flex flex-col">
    //           <Typography className="text-xl font-semibold flex justify-center">
    //             How to make the most of your study group
    //           </Typography>
    //           <Typography >
    //             There are many variations of passages of Lorem Ipsum available,
    //             but the majority have suffered alteration in some form, by
    //             injected humour, or randomised words which don't look even
    //             slightly believable. If you are going to use a passage of Lorem
    //             Ipsum, you need to be sure there isn't anything embarrassing
    //             hidden in the middle of text.
    //           </Typography>
    //         </Box>
    //       </Box>

    //         {/* Number 2 */}
    //       <Box className="flex my-4 border-2 border-gray-400">
    //         <img
    //           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
    //           alt=""
    //           className="h-[300px]"
    //         />

    //         <Box className="p-10 flex flex-col">
    //           <Typography className="text-xl font-semibold flex justify-center">
    //             Why you should stop cramming for exams
    //           </Typography>
    //           <Typography >
    //             There are many variations of passages of Lorem Ipsum available,
    //             but the majority have suffered alteration in some form, by
    //             injected humour, or randomised words which don't look even
    //             slightly believable. If you are going to use a passage of Lorem
    //             Ipsum, you need to be sure there isn't anything embarrassing
    //             hidden in the middle of text.
    //           </Typography>
    //         </Box>
    //       </Box>

    //         {/* Number 3 */}
    //       <Box className="flex my-4 border-2 border-gray-400">
    //         <img
    //           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
    //           alt=""
    //           className="h-[300px]"
    //         />

    //         <Box className="p-10 flex flex-col">
    //           <Typography className="text-xl font-semibold flex justify-center">
    //             Library hacks: 10 tips to make the most out of your study time
    //           </Typography>
    //           <Typography >
    //             There are many variations of passages of Lorem Ipsum available,
    //             but the majority have suffered alteration in some form, by
    //             injected humour, or randomised words which don't look even
    //             slightly believable. If you are going to use a passage of Lorem
    //             Ipsum, you need to be sure there isn't anything embarrassing
    //             hidden in the middle of text.
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box> 
