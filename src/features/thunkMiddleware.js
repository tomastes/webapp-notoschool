import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../axios'
export const  getPlansFromStripe = createAsyncThunk(
    'plans/getPlans',
    async()=>{
        const {data} =   await axios({
            method:"get",
            url:`${process.env.REACT_APP_AXIOS_BASE_URL}/get-prices`,
          
        })
        return  data;
    }
)