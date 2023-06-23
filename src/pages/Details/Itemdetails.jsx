import React from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  IconButton,
  Typography,
  Stack,
  CircularProgress,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { likeCollegeName, searchDegree } from "../../redux/features/collegeSlice";
import DetailsCard from "../../components/Card/DetailsCard";
import axios from "axios";
import { toast } from "react-toastify";

export default function Itemdetails() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { savedCollegeName,degreeById,loading} = useSelector((state) => state.college);
  const [currentPage, setCurrent] = React.useState(1);
  const postPerPage = 35;
  const lastPostIndex = currentPage * postPerPage;
  const firstsPostIndex = lastPostIndex - postPerPage;

  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const schoolName = dataById && dataById[0]["school.name"];

  const [loading2, setLoading2] = React.useState(true);
  
  const [error, setError] = React.useState("");
  const [dataById, setDataById] = React.useState([]);
  
  const schoolName = dataById.length && dataById[0]["school.name"];

  const filterSavedSchools =
    schoolName && savedCollegeName?.filter((item) => item.name === schoolName);

  async function getDetails() {
    try {
      setError("");
      const res = await axios.get(
        `https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=SrCD3GFN1cFsIKbp5pgPByN577afOgr62tKJ7BU0&id=${id}&fields=id,school.name,school.alias,school.state,school.school_url,2020.cost.tuition,2020.student.size,2020.cost.roomboard,2020.student.demographics.men,2020.student.demographics.women,student.demographics.married,school.city,school.zip`
      );
      //console.log(res.data.results);
      setDataById(res.data.results);
      setLoading2(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  



  React.useEffect(() => {
  getDetails();
  
  }, []); // eslint-disable-line

React.useEffect(()=>{
  //console.log(degreeData)
  dispatch(searchDegree({id,currentPage}))
},[])
  // React.useEffect(()=>{
    
  //   const savee = degreeData?.data.map(item => console.log(item["latest.programs.cip_4_digit"]))
  // },[degreeData])

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (event, value) => {
    setCurrent(value);
    window.scrollTo({ top: 90 });
  };

  return (
    <>
      {loading || loading2 ? (
        <Stack
          sx={{ color: "grey.500" }}
          className="home h-screen w-full flex items-center justify-center"
        >
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        <Box className="home2 h-auto w-auto flex justify-center ">
          {/* Container Box */}
          <Box className="w-[90%] flex justify-center mt-[60px]">
            {/* Content Box */}
            <Box className="w-[90%]  flex flex-col">
              {/* Title */}
              <Box className="flex flex-col justify-center mt-3 mb-10 items-center">
                <Typography className="text-3xl font-bold border-b-2 ">
                  {dataById?.map((item, index) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        item["school.school_url"].includes("https://")
                          ? `${item["school.school_url"]}`
                          : `https://${item["school.school_url"]}`
                      }
                      key={index}
                    >
                      <span className=" hover:text-blue-400">
                        {item["school.name"]}{" "}
                      </span>

                      <IconButton className=" hover:text-blue-300">
                        <ArrowForwardIcon />
                      </IconButton>
                    </a>
                  ))}
                </Typography>

                {user?.user?._id &&
                  dataById?.map((item, index) => (
                    <Box key={index}>
                      {filterSavedSchools?.length > 0 ? (
                        <Typography
                          className="  font-bold mt-3 bg-red-900 text-lg hover:bg-red-600 cursor-pointer p-1 rounded-lg"
                          onClick={() =>
                            dispatch(
                              likeCollegeName({
                                name: item["school.name"],
                                id: item.id,
                                city: item["school.city"],
                                state: item["school.state"],
                                zip: item["school.zip"],
                              })
                            )
                          }
                        >
                          Unsave School
                        </Typography>
                      ) : (
                        <Typography
                          className="  font-bold mt-3 bg-green-900 text-lg hover:bg-green-600 cursor-pointer p-1 rounded-lg"
                          onClick={() =>
                            dispatch(
                              likeCollegeName({
                                name: item["school.name"],
                                id: item.id,
                                city: item["school.city"],
                                state: item["school.state"],
                                zip: item["school.zip"],
                              })
                            )
                          }
                        >
                          Save School
                        </Typography>
                      )}
                    </Box>
                  ))}
              </Box>

              {/* Location */}
              <Box className="mt-[20px] flex flex-col mb-10">
                <Typography className=" text-[25px] font-bold">
                  Location:
                </Typography>
                <Box className="flex  mt-2">
                  <Typography className="text-xl">
                    {dataById && dataById[0]["school.city"]},&nbsp;{" "}
                    {dataById && dataById[0]["school.state"]}, &nbsp;
                    {dataById && dataById[0]["school.zip"]}
                  </Typography>
                </Box>
              </Box>

              {/* Cost/About */}
              <Box className="mt-[20px] flex flex-col mb-10">
                <Typography className=" text-[25px] font-bold">
                  Information:
                </Typography>

                {/* Inofrmation Content */}
                <Box className="flex mt-6 flex-col ">
                  {/* Attendence */}
                  <Box className="flex flex-col ml-5">
                    <Typography className="text-black text-[19px] font-bold mb-4">
                      Attendence
                    </Typography>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          Women Attendence:{" "}
                        </span>{" "}
                        &nbsp;
                        {dataById &&
                        dataById[0]["2020.student.demographics.women"]
                          ? `${Number(
                              dataById[0]["2020.student.demographics.women"] *
                                100
                            ).toFixed(2)}%`
                          : "N/A"}
                      </Typography>
                    </Box>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">Men Attendence: </span>{" "}
                        &nbsp;
                        {dataById &&
                        dataById[0]["2020.student.demographics.men"]
                          ? `${Number(
                              dataById[0]["2020.student.demographics.men"] * 100
                            ).toFixed(2)}%`
                          : "N/A"}
                      </Typography>
                    </Box>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          total Attendence:{" "}
                        </span>{" "}
                        &nbsp;{dataById && dataById[0]["2020.student.size"]}{" "}
                        students
                      </Typography>
                    </Box>
                  </Box>

                  {/* Costs */}
                  <Box className="flex flex-col ml-5 mt-5">
                    <Typography className="text-black text-[19px] font-bold mb-4">
                      Costs
                    </Typography>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          In State Tuition:{" "}
                        </span>{" "}
                        &nbsp;
                        {dataById && dataById[0]["2020.cost.tuition.in_state"]
                          ? `$${dataById[0][
                              "2020.cost.tuition.in_state"
                            ].toLocaleString("en-US")}`
                          : "N/A"}
                      </Typography>
                    </Box>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          Out Of State Tuition:{" "}
                        </span>{" "}
                        &nbsp;
                        {dataById &&
                        dataById[0]["2020.cost.tuition.out_of_state"]
                          ? `$${dataById[0][
                              "2020.cost.tuition.out_of_state"
                            ].toLocaleString("en-US")}`
                          : "N/A"}
                      </Typography>
                    </Box>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          room and board on campus:{" "}
                        </span>{" "}
                        &nbsp;
                        {dataById && dataById[0]["2020.cost.roomboard.oncampus"]
                          ? `$${dataById[0][
                              "2020.cost.roomboard.oncampus"
                            ].toLocaleString("en-US")}`
                          : "N/A"}
                      </Typography>
                    </Box>
                    <Box className="flex my-1">
                      <Typography>
                        <span className=" font-semibold">
                          room and board off campus:{" "}
                        </span>{" "}
                        &nbsp;
                        {dataById &&
                        dataById[0]["2020.cost.roomboard.offcampus"]
                          ? `$${dataById[0][
                              "2020.cost.roomboard.offcampus"
                            ].toLocaleString("en-US")}`
                          : "N/A"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-col items-center justify-center  mt-5">
                <Typography
                  className={
                    isNonMobile ? "text-3xl font-bold" : "text-base font-bold"
                  }
                >
                  Degree/Programs
                </Typography>
                <Typography className="text-gray-400 text-sm">
                  Degrees are sorted A-Z
                </Typography>
              </Box>
              <Box
                className={
                  isNonMobile
                    ? "w-full h-full grid grid-cols-2 gap-3 mt-[80px] mb-10"
                    : "flex flex-col mt-[50px] gap-6 mb-10"
                }
              >
                {degreeById &&
                  degreeById?.data?.slice(firstsPostIndex, lastPostIndex).map((item, index) => (
                      <DetailsCard key={index} item={item} id={id} />
                    ))}
              </Box>

              {degreeById && degreeById?.numberOfPages > 1 && (
                <Stack
                  className=" flex justify-center items-center mb-10 mt-5"
                  spacing={2}
                >
                  <Typography>Page: {currentPage}</Typography>
                  <Pagination
                    count={degreeById?.numberOfPages}
                    page={currentPage}
                    onChange={handleChange}
                    sx={{ button: { color: "black" } }}
                    variant="outlined"
                    color="primary"
                  />
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
