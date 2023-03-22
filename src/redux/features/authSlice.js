import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { log_In, sign_Up } from "../api";

export const signUp = createAsyncThunk(
  "signup",
  async ({ formData,navigate,toast }, { rejectWithValue }) => {
    try {
      const res = await sign_Up(formData);
      toast.success("You have successfully signed up")
      navigate('/')
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.msg);
    }
  }
);

export const logIn = createAsyncThunk(
    "login",
    async ({ formData,navigate,toast }, { rejectWithValue }) => {
      try {
        const res = await log_In(formData);
        toast.success("You have successfully logged in")
        navigate('/')
        return res.data;
      } catch (e) {
        return rejectWithValue(e.response.data.msg);
      }
    }
  );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers:{
    setLogOut:(state)=>{
      state.user = null
      localStorage.clear()
    },
    setUser: (state,action)=>{
        state.user = action.payload
    },
    setError:(state)=>{
        state.error = ""
    }
    
  },
  extraReducers: (builder) =>{
    builder
    
    .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        localStorage.setItem('profile',JSON.stringify({...action.payload}))
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        localStorage.setItem('profile',JSON.stringify({...action.payload}))
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        //console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export default authSlice.reducer

export const {setUser,setLogOut,setError} = authSlice.actions
