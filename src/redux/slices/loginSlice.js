import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import Cookies from "cookies";
export const loginApi = createAsyncThunk("login/post", async (data, navigate) => {
  const response = await axios.post("/api/admin/login", data);
  // const cookies = new Cookies(req, res);
  // cookies.set("jwt", response.data.token);
  // console.log(cookies);
  if(response.status === 200){
    console.log("success",);
    navigate.replace('/dashboard')
  }
  return response.data;
});

const initialState = {
  data: "",
  error: "",
  isLoading: false,
  isLoggedIn: true
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          data: action.payload,
          error: "",
        };
      })
      .addCase(loginApi.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      });
  },
});

export default loginSlice.reducer;
