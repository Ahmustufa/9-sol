import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPackages = createAsyncThunk('packages/fetch', async (data,{rejectedWithValue})=> {
    try {
        const response = await axios.get('/api/packages')
        if(response.status === 200){
            // console.log("responsePackage", response.data);
            return response.data
        }
    } catch (error) {
        return rejectedWithValue(error.message)
    }
})

let initialState = {
    isLoading: false,
    data: "",
    error: ""
}

const packageSlice = createSlice({
name: "package",
initialState,
reducers: {},
extraReducers: (builder)=> {
    builder.addCase(getPackages.pending, (state)=> {
        return {
            ...state,
            isLoading: true,
          };
        })
        .addCase(getPackages.fulfilled, (state, action) => {
          return {
            ...state,
            isLoading: false,
            data: action.payload,
          };
        })
        .addCase(getPackages.rejected, (state, action) => {
          return {
            ...state,
            isLoading: false,
            error: action.payload,
            data: "",
          };
        });
}
})

export default packageSlice.reducer;
