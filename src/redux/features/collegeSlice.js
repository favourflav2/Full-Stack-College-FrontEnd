import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { delete_College, get_Saved_School, like_College_Name, search_Data, search_Data_By_Id, search_Degree } from "../api";

export const searchData = createAsyncThunk(
  "searchData",
  async (search, { rejectWithValue }) => {
    try {
      const res = await search_Data(search);
      //console.log(res.data)
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);

export const searchDegree = createAsyncThunk(
  "searchDegree",
  async ({id,currentPage}, { rejectWithValue }) => {
    try {
      const res = await search_Degree(id,currentPage);
      //console.log(res.data)
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);

export const searchDataById = createAsyncThunk(
  "searchDataById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await search_Data_By_Id(id);
      //console.log(res.data)
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);

export const likeCollegeName = createAsyncThunk(
  "like",
  async ({id,name,code,degreeName,zip,city,state}, { rejectWithValue }) => {
    try {
      const res = await like_College_Name(id,{name,code,degreeName,state,city,zip});
      //console.log(res.data)
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);


export const deleteCollege = createAsyncThunk(
  "delete",
  async ({id,toast}, { rejectWithValue }) => {
    try {
      const res = await delete_College({id:id});
      toast.success("College Deleted")
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);

export const getSavedSchool = createAsyncThunk(
  "getSavedData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get_Saved_School();
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);


const collegeSlice = createSlice({
  name: "college",
  initialState: {
    loading: false,
    error: "",
    data: "",
    searchData: null,
    dataById:null,
    degreeById:null,
    numberOfPages:null,
    savedCollegeName:[],

  },
  reducers:{
    setError:(state)=>{
      state.error = ""
    },
    setSearchById:(state)=>{
      state.dataById = null
    },
  setSearchDataNull:(state) =>{
    state.searchData = null
  },
  clearSavedCollegeName:(state) =>{
    state.savedCollegeName = []
  }
  

  },

  extraReducers: (builder) => {
    builder
      .addCase(searchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchData.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.searchData = action.payload;
      })
      .addCase(searchData.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(searchDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchDataById.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.dataById = action.payload;
      })
      .addCase(searchDataById.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(searchDegree.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchDegree.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.degreeById = action.payload.data;
        state.numberOfPages = action.payload.numberOfPages
        state.currentPage = action.payload.currentPage
      })
      .addCase(searchDegree.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(likeCollegeName.pending, (state) => {
        state.loading = true;
      })
      .addCase(likeCollegeName.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.savedCollegeName = action.payload
      })
      .addCase(likeCollegeName.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteCollege.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCollege.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.savedCollegeName = action.payload
      })
      .addCase(deleteCollege.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getSavedSchool.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSavedSchool.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.savedCollegeName = action.payload
      })
      .addCase(getSavedSchool.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default collegeSlice.reducer;

export const {setError,setSearchById,setSearchDataNull,clearSavedCollegeName} = collegeSlice.actions
